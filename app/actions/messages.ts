'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { messages, conversations } from '@/lib/db/schema'
import { and, eq, or } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { nanoid } from 'nanoid'

async function getUserId() {
  const session = await auth()
  if (!session?.user?.id) throw new Error('Unauthorized')
  return session.user.id
}

export async function getOrCreateConversation(otherUserId: string) {
  const userId = await getUserId()
  
  if (userId === otherUserId) {
    throw new Error('Cannot create conversation with yourself')
  }
  
  // Find existing conversation
  const existing = await db
    .select()
    .from(conversations)
    .where(
      or(
        and(
          eq(conversations.participant1Id, userId),
          eq(conversations.participant2Id, otherUserId),
        ),
        and(
          eq(conversations.participant1Id, otherUserId),
          eq(conversations.participant2Id, userId),
        ),
      ),
    )
  
  if (existing.length > 0) {
    return existing[0]
  }
  
  // Create new conversation
  const id = nanoid()
  await db.insert(conversations).values({
    id,
    participant1Id: userId,
    participant2Id: otherUserId,
  })
  
  revalidatePath('/dashboard/messages')
  return { id, participant1Id: userId, participant2Id: otherUserId }
}

export async function sendMessage(
  conversationId: string,
  recipientId: string,
  content: string,
) {
  const userId = await getUserId()
  
  if (!content.trim()) {
    throw new Error('Message cannot be empty')
  }
  
  // Verify conversation exists
  const conversation = await db
    .select()
    .from(conversations)
    .where(eq(conversations.id, conversationId))
  
  if (conversation.length === 0) {
    throw new Error('Conversation not found')
  }
  
  const messageId = nanoid()
  
  await db.insert(messages).values({
    id: messageId,
    senderId: userId,
    recipientId,
    content: content.trim(),
    conversationId,
    isRead: false,
  })
  
  // Update conversation
  await db
    .update(conversations)
    .set({
      lastMessage: content.trim(),
      lastMessageTime: new Date(),
    })
    .where(eq(conversations.id, conversationId))
  
  revalidatePath('/dashboard/messages')
  return messageId
}

export async function getConversations() {
  const userId = await getUserId()
  
  return db
    .select()
    .from(conversations)
    .where(
      or(
        eq(conversations.participant1Id, userId),
        eq(conversations.participant2Id, userId),
      ),
    )
}

export async function getConversationMessages(conversationId: string) {
  const userId = await getUserId()
  
  // Verify user has access to this conversation
  const conversation = await db
    .select()
    .from(conversations)
    .where(eq(conversations.id, conversationId))
  
  if (
    conversation.length === 0 ||
    (conversation[0].participant1Id !== userId && conversation[0].participant2Id !== userId)
  ) {
    throw new Error('Unauthorized')
  }
  
  const msgs = await db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, conversationId))
  
  // Mark as read
  await db
    .update(messages)
    .set({ isRead: true })
    .where(
      and(
        eq(messages.conversationId, conversationId),
        eq(messages.recipientId, userId),
      ),
    )
  
  revalidatePath('/dashboard/messages')
  return msgs
}

export async function getUnreadCount() {
  const userId = await getUserId()
  
  const unread = await db
    .select()
    .from(messages)
    .where(
      and(
        eq(messages.recipientId, userId),
        eq(messages.isRead, false),
      ),
    )
  
  return unread.length
}

export async function deleteConversation(conversationId: string) {
  const userId = await getUserId()
  
  const conversation = await db
    .select()
    .from(conversations)
    .where(eq(conversations.id, conversationId))
  
  if (
    conversation.length === 0 ||
    (conversation[0].participant1Id !== userId && conversation[0].participant2Id !== userId)
  ) {
    throw new Error('Unauthorized')
  }
  
  // Delete all messages in conversation
  await db
    .delete(messages)
    .where(eq(messages.conversationId, conversationId))
  
  // Delete conversation
  await db
    .delete(conversations)
    .where(eq(conversations.id, conversationId))
  
  revalidatePath('/dashboard/messages')
}
