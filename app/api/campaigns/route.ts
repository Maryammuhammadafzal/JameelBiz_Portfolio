import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Mock data - replace with database call
const mockCampaigns = [
  {
    id: '1',
    name: 'Q1 Link Building',
    status: 'active' as const,
    targetLinks: 20,
    linksAcquired: 12,
    budget: 5000,
    spent: 3200,
    createdAt: '2025-01-15',
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: mockCampaigns,
    })
  } catch (error) {
    console.error('Campaigns API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch campaigns' },
      { status: 500 }
    )
  }
}
