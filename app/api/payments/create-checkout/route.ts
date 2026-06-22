import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    if (!db) {
      return NextResponse.json(
        { success: false, error: 'Database not initialized' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { listingId, type, buyerId } = body

    // Validate inputs
    if (!listingId || !type || !buyerId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Fetch listing details
    const listing = await db.website.findUnique({
      where: { id: listingId },
      include: { seller: true },
    })

    if (!listing) {
      return NextResponse.json(
        { success: false, error: 'Listing not found' },
        { status: 404 }
      )
    }

    // Calculate price based on type
    const pricing = listing.pricing as any
    let amount = 0

    if (type === 'guest_post') {
      amount = pricing?.guestPostPrice || 500
    } else if (type === 'link_insertion') {
      amount = pricing?.linkInsertionPrice || 200
    }

    // Create order in database
    const order = await db.order.create({
      data: {
        buyerId,
        sellerId: listing.sellerId,
        websiteId: listingId,
        type: type as any,
        amount,
        status: 'pending',
        paymentIntentId: 'test_' + Date.now(),
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        orderId: order.id,
        amount,
        listing: {
          domain: listing.domain,
          type,
        },
      },
    })
  } catch (error) {
    console.error('Error creating checkout:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create checkout' },
      { status: 500 }
    )
  }
}
