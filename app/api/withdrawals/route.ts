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

    const userId = request.headers.get('user-id')

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const withdrawals = await db.withdrawal.findMany({
      where: { sellerId: userId },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({
      success: true,
      data: withdrawals,
    })
  } catch (error) {
    console.error('Error fetching withdrawals:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch withdrawals' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sellerId, amount, bankDetails } = body

    // Validate inputs
    if (!sellerId || !amount || amount < 100) {
      return NextResponse.json(
        { success: false, error: 'Invalid withdrawal request' },
        { status: 400 }
      )
    }

    // Calculate seller balance from completed orders
    const completedOrders = await db.order.aggregate({
      where: {
        sellerId,
        status: 'completed',
      },
      _sum: {
        amount: true,
      },
    })

    const balance = (completedOrders._sum.amount || 0) * 0.9 // 10% commission

    if (amount > balance) {
      return NextResponse.json(
        { success: false, error: 'Insufficient balance' },
        { status: 400 }
      )
    }

    // Create withdrawal request
    const withdrawal = await db.withdrawal.create({
      data: {
        sellerId,
        amount,
        status: 'pending',
        bankDetails,
      },
    })

    return NextResponse.json({
      success: true,
      data: withdrawal,
      message: 'Withdrawal request created successfully',
    })
  } catch (error) {
    console.error('Error creating withdrawal:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create withdrawal' },
      { status: 500 }
    )
  }
}
