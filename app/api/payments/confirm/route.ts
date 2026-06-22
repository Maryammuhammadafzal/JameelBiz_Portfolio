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
    const { orderId } = body

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: 'Order ID required' },
        { status: 400 }
      )
    }

    // Update order status
    const order = await db.order.update({
      where: { id: orderId },
      data: { status: 'completed' },
      include: {
        website: true,
        seller: true,
        buyer: true,
      },
    })

    // Create transaction record
    await db.transaction.create({
      data: {
        orderId: order.id,
        buyerId: order.buyerId,
        sellerId: order.sellerId,
        amount: order.amount,
        type: 'payment',
        status: 'completed',
      },
    })

    return NextResponse.json({
      success: true,
      data: order,
      message: 'Payment confirmed successfully',
    })
  } catch (error) {
    console.error('Error confirming payment:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to confirm payment' },
      { status: 500 }
    )
  }
}
