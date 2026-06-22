import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    if (!db) {
      return NextResponse.json(
        { success: false, error: 'Database not initialized' },
        { status: 503 }
      )
    }

    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const niche = searchParams.get('niche')
    const minDR = parseInt(searchParams.get('minDR') || '0')
    const maxDR = parseInt(searchParams.get('maxDR') || '100')
    const country = searchParams.get('country')
    const sortBy = searchParams.get('sortBy') || 'newest'

    const skip = (page - 1) * limit

    // Build where clause
    let where: any = {
      status: 'APPROVED',
    }

    if (niche) where.niche = { contains: niche, mode: 'insensitive' }
    if (country) where.country = country

    // Fetch listings with metrics
    const listings = await db.website.findMany({
      where,
      include: {
        metrics: true,
        pricing: true,
        seller: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        _count: {
          select: { reviews: true },
        },
      },
      skip,
      take: limit,
      orderBy:
        sortBy === 'rating'
          ? { rating: 'desc' }
          : sortBy === 'price'
            ? { 'pricing.guestPostPrice': 'asc' }
            : { createdAt: 'desc' },
    })

    // Filter by DR
    const filtered = listings.filter(
      (l) => l.metrics?.domainRating >= minDR && l.metrics?.domainRating <= maxDR
    )

    const total = await db.website.count({ where })

    return NextResponse.json({
      success: true,
      data: filtered,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Listings API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch listings' },
      { status: 500 }
    )
  }
}
