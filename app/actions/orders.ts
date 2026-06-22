'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { orders, websites } from '@/lib/db/schema'
import { and, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { nanoid } from 'nanoid'

async function getUserId() {
  const session = await auth()
  if (!session?.user?.id) throw new Error('Unauthorized')
  return session.user.id
}

export async function createOrder(
  websiteId: string,
  paymentMethod: string,
  amount?: string,
) {
  const userId = await getUserId()
  
  // Get website details
  const website = await db
    .select()
    .from(websites)
    .where(eq(websites.id, websiteId))
  
  if (website.length === 0) {
    throw new Error('Website not found')
  }
  
  const siteData = website[0]
  
  // Prevent self-purchase
  if (siteData.userId === userId) {
    throw new Error('Cannot purchase your own website')
  }
  
  const id = nanoid()
  
  await db.insert(orders).values({
    id,
    buyerId: userId,
    websiteId,
    amount: amount || siteData.price,
    currency: siteData.currency,
    paymentMethod,
    status: 'pending',
  })
  
  revalidatePath('/')
  return id
}

export async function updateOrderStatus(
  orderId: string,
  status: 'pending' | 'completed' | 'failed' | 'cancelled',
  transactionId?: string,
) {
  const userId = await getUserId()
  
  // Verify user owns this order
  const order = await db
    .select()
    .from(orders)
    .where(eq(orders.id, orderId))
  
  if (order.length === 0) {
    throw new Error('Order not found')
  }
  
  if (order[0].buyerId !== userId) {
    throw new Error('Unauthorized')
  }
  
  await db
    .update(orders)
    .set({
      status,
      ...(transactionId && { transactionId }),
    })
    .where(eq(orders.id, orderId))
  
  revalidatePath('/dashboard/buyer')
}

export async function getBuyerOrders() {
  const userId = await getUserId()
  
  return db
    .select()
    .from(orders)
    .where(eq(orders.buyerId, userId))
}

export async function getSellerOrders() {
  const userId = await getUserId()
  
  // Get all websites owned by this user
  const userWebsites = await db
    .select()
    .from(websites)
    .where(eq(websites.userId, userId))
  
  const websiteIds = userWebsites.map(w => w.id)
  
  if (websiteIds.length === 0) {
    return []
  }
  
  // Get orders for these websites
  return db
    .select()
    .from(orders)
    .where(eq(orders.websiteId, websiteIds[0]))
}

export async function getOrderDetails(orderId: string) {
  const userId = await getUserId()
  
  const order = await db
    .select()
    .from(orders)
    .where(eq(orders.id, orderId))
  
  if (order.length === 0) {
    throw new Error('Order not found')
  }
  
  const orderData = order[0]
  
  // Verify user has access
  if (orderData.buyerId !== userId) {
    // Check if user is the seller
    const site = await db
      .select()
      .from(websites)
      .where(eq(websites.id, orderData.websiteId))
    
    if (site.length === 0 || site[0].userId !== userId) {
      throw new Error('Unauthorized')
    }
  }
  
  // Get website details
  const website = await db
    .select()
    .from(websites)
    .where(eq(websites.id, orderData.websiteId))
  
  return {
    ...orderData,
    website: website[0] || null,
  }
}

export async function cancelOrder(orderId: string) {
  const userId = await getUserId()
  
  const order = await db
    .select()
    .from(orders)
    .where(eq(orders.id, orderId))
  
  if (order.length === 0) {
    throw new Error('Order not found')
  }
  
  if (order[0].buyerId !== userId) {
    throw new Error('Unauthorized')
  }
  
  if (order[0].status === 'completed') {
    throw new Error('Cannot cancel completed orders')
  }
  
  await db
    .update(orders)
    .set({ status: 'cancelled' })
    .where(eq(orders.id, orderId))
  
  revalidatePath('/dashboard/buyer')
}

export async function searchOrders(query: string) {
  const userId = await getUserId()
  
  // Search user's orders
  const userOrders = await db
    .select()
    .from(orders)
    .where(eq(orders.buyerId, userId))
  
  // Filter by website title or ID
  return userOrders.filter(
    o =>
      o.id.toLowerCase().includes(query.toLowerCase()) ||
      o.websiteId.toLowerCase().includes(query.toLowerCase()),
  )
}
