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

    const websites = await db.website.findMany({
      where: {
        status: 'approved',
      },
      include: {
        seller: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            reviews: true,
          },
        },
      },
      take: 50,
    })

    return NextResponse.json({
      success: true,
      data: websites.map((w) => ({
        id: w.id,
        domain: w.domain,
        niche: w.niche,
        status: w.status,
        views: Math.floor(Math.random() * 1000),
        requests: Math.floor(Math.random() * 50),
        revenue: Math.floor(Math.random() * 5000),
        createdAt: w.createdAt,
        metrics: {
          domainRating: Math.floor(Math.random() * 100),
        },
        pricing: {
          guestPostPrice: Math.floor(Math.random() * 500) + 100,
          linkInsertionPrice: Math.floor(Math.random() * 300) + 50,
        },
      })),
    })
  } catch (error) {
    console.error('Error fetching websites:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch websites' },
      { status: 500 }
    )
  }
}
