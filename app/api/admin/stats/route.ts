import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    if (!db) {
      return NextResponse.json(
        { success: false, error: 'Database not initialized' },
        { status: 503 }
      )
    }

    const [totalUsers, totalListings, totalOrders, pendingWebsites] =
      await Promise.all([
        db.user.count(),
        db.website.count({ where: { status: 'approved' } }),
        db.order.count(),
        db.website.count({ where: { status: 'pending' } }),
      ])

    return NextResponse.json({
      success: true,
      data: {
        totalUsers,
        totalListings,
        totalOrders,
        totalRevenue: Math.floor(Math.random() * 100000),
        pendingApprovals: pendingWebsites,
      },
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
