import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Mock data - replace with database call
const mockOrders = [
  {
    id: '1',
    website: 'techblog.com',
    type: 'guest_post' as const,
    price: 500,
    status: 'completed' as const,
    createdAt: '2025-01-10',
  },
  {
    id: '2',
    website: 'marketingpro.com',
    type: 'link_insertion' as const,
    price: 300,
    status: 'in_progress' as const,
    createdAt: '2025-01-12',
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: mockOrders,
    })
  } catch (error) {
    console.error('Orders API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}
