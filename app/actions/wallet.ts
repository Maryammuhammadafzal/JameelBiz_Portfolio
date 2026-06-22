'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { wallets, transactions } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { nanoid } from 'nanoid'

async function getUserId() {
  const session = await auth()
  if (!session?.user?.id) throw new Error('Unauthorized')
  return session.user.id
}

export async function initializeWallet() {
  const userId = await getUserId()
  
  // Check if wallet already exists
  const existingWallet = await db
    .select()
    .from(wallets)
    .where(eq(wallets.userId, userId))
  
  if (existingWallet.length > 0) {
    return existingWallet[0]
  }
  
  // Create new wallet
  const id = nanoid()
  await db.insert(wallets).values({
    id,
    userId,
    balanceUsd: '0',
    balancePkr: '0',
  })
  
  revalidatePath('/dashboard/wallet')
  return { id, userId, balanceUsd: '0', balancePkr: '0' }
}

export async function getWallet() {
  const userId = await getUserId()
  
  const wallet = await db
    .select()
    .from(wallets)
    .where(eq(wallets.userId, userId))
  
  if (wallet.length === 0) {
    return initializeWallet()
  }
  
  return wallet[0]
}

export async function addTransaction(
  type: 'credit' | 'debit',
  amount: string,
  currency: string,
  description: string,
  relatedId?: string,
) {
  const userId = await getUserId()
  const wallet = await getWallet()
  
  const transactionId = nanoid()
  
  await db.insert(transactions).values({
    id: transactionId,
    userId,
    walletId: wallet.id,
    type,
    amount,
    currency,
    description,
    status: 'completed',
    relatedId,
  })
  
  // Update wallet balance
  const numAmount = parseFloat(amount)
  
  if (currency === 'USD') {
    const newBalance = type === 'credit' 
      ? (parseFloat(wallet.balanceUsd || '0') + numAmount).toString()
      : (parseFloat(wallet.balanceUsd || '0') - numAmount).toString()
    
    await db
      .update(wallets)
      .set({ balanceUsd: newBalance })
      .where(eq(wallets.id, wallet.id))
  } else if (currency === 'PKR') {
    const newBalance = type === 'credit'
      ? (parseFloat(wallet.balancePkr || '0') + numAmount).toString()
      : (parseFloat(wallet.balancePkr || '0') - numAmount).toString()
    
    await db
      .update(wallets)
      .set({ balancePkr: newBalance })
      .where(eq(wallets.id, wallet.id))
  }
  
  revalidatePath('/dashboard/wallet')
  return transactionId
}

export async function getTransactions() {
  const userId = await getUserId()
  
  return db
    .select()
    .from(transactions)
    .where(eq(transactions.userId, userId))
    .orderBy(transactions.createdAt)
}

export async function convertCurrency(amountUsd: number, rate: number = 165): Promise<number> {
  // Simple conversion from USD to PKR
  return Math.round(amountUsd * rate * 100) / 100
}

export async function withdrawFunds(
  amount: string,
  currency: 'USD' | 'PKR',
  bankDetails: {
    bankName: string
    accountNumber: string
    accountHolder: string
  },
) {
  const userId = await getUserId()
  const wallet = await getWallet()
  
  const numAmount = parseFloat(amount)
  const currentBalance = currency === 'USD' 
    ? parseFloat(wallet.balanceUsd || '0')
    : parseFloat(wallet.balancePkr || '0')
  
  if (currentBalance < numAmount) {
    throw new Error('Insufficient balance')
  }
  
  // Create withdrawal transaction
  const transactionId = await addTransaction(
    'debit',
    amount,
    currency,
    `Withdrawal to ${bankDetails.bankName}`,
  )
  
  // In a real implementation, you would:
  // 1. Create a payout request to Stripe
  // 2. Update withdrawal status in database
  // 3. Send confirmation email
  
  revalidatePath('/dashboard/wallet')
  return transactionId
}

export async function requestFunds(
  paymentMethod: 'card' | 'bank',
  amount: string,
  currency: 'USD' | 'PKR',
) {
  const userId = await getUserId()
  
  // In a real implementation, this would:
  // 1. Create a payment intent or checkout session
  // 2. Redirect to payment processor
  // 3. Update balance on payment success via webhook
  
  return {
    success: true,
    message: `Requested ${currency} ${amount} via ${paymentMethod}`,
  }
}
