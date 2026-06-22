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

    const websites = await db.website.findMany({
      where: { status: 'pending' },
      include: {
        seller: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })

    return NextResponse.json({
      success: true,
      data: websites,
    })
  } catch (error) {
    console.error('Error fetching pending websites:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pending websites' },
      { status: 500 }
    )
  }
}
