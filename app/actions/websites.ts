'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { websites, orders, reviews, wallets, transactions } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { nanoid } from 'nanoid'

async function getUserId() {
  const session = await auth()
  if (!session?.user?.id) throw new Error('Unauthorized')
  return session.user.id
}

export async function getMyWebsites() {
  const userId = await getUserId()
  return db
    .select()
    .from(websites)
    .where(eq(websites.userId, userId))
    .orderBy(desc(websites.createdAt))
}

export async function getWebsites(category?: string) {
  const query = db.select().from(websites).where(eq(websites.status, 'active'))
  if (category) {
    return query.where(eq(websites.category, category)).orderBy(desc(websites.rating))
  }
  return query.orderBy(desc(websites.views))
}

export async function getWebsiteById(id: string) {
  return db.select().from(websites).where(eq(websites.id, id)).then(r => r[0])
}

export async function createWebsite(data: {
  title: string
  description: string
  category: string
  price: string
  currency: string
  features?: string[]
}) {
  const userId = await getUserId()
  const id = nanoid()
  
  await db.insert(websites).values({
    id,
    userId,
    title: data.title,
    description: data.description,
    category: data.category,
    price: data.price,
    currency: data.currency,
    features: data.features || [],
  })
  
  revalidatePath('/')
  return id
}

export async function updateWebsite(id: string, data: Partial<typeof websites.$inferInsert>) {
  const userId = await getUserId()
  
  await db
    .update(websites)
    .set(data)
    .where(and(eq(websites.id, id), eq(websites.userId, userId)))
  
  revalidatePath('/')
}

export async function deleteWebsite(id: string) {
  const userId = await getUserId()
  
  await db
    .delete(websites)
    .where(and(eq(websites.id, id), eq(websites.userId, userId)))
  
  revalidatePath('/')
}

export async function createOrder(websiteId: string, paymentMethod: string) {
  const userId = await getUserId()
  const website = await getWebsiteById(websiteId)
  
  if (!website) throw new Error('Website not found')
  if (website.userId === userId) throw new Error('Cannot order your own website')
  
  const id = nanoid()
  
  await db.insert(orders).values({
    id,
    buyerId: userId,
    websiteId,
    amount: website.price,
    currency: website.currency,
    paymentMethod,
    status: 'pending',
  })
  
  revalidatePath('/')
  return id
}

export async function getMyOrders() {
  const userId = await getUserId()
  return db
    .select()
    .from(orders)
    .where(eq(orders.buyerId, userId))
    .orderBy(desc(orders.createdAt))
}

export async function getOrdersForWebsites() {
  const userId = await getUserId()
  return db
    .select()
    .from(orders)
    .where(eq(websites.userId, userId))
    .orderBy(desc(orders.createdAt))
}

export async function createReview(websiteId: string, rating: number, comment: string) {
  const userId = await getUserId()
  const id = nanoid()
  
  await db.insert(reviews).values({
    id,
    websiteId,
    buyerId: userId,
    rating,
    comment,
  })
  
  revalidatePath('/')
}

export async function getWebsiteReviews(websiteId: string) {
  return db
    .select()
    .from(reviews)
    .where(eq(reviews.websiteId, websiteId))
    .orderBy(desc(reviews.createdAt))
}
