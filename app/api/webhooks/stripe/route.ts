import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  if (!db) {
    return NextResponse.json(
      { error: 'Database not initialized' },
      { status: 503 }
    )
  }

  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: 'Missing signature or webhook secret' },
      { status: 400 },
    )
  }

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 },
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object)
        break

      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object)
        break

      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 },
    )
  }
}

async function handleCheckoutSessionCompleted(session: any) {
  const { metadata, payment_intent } = session

  if (!metadata?.buyerId || !metadata?.websiteId) {
    console.error('Missing metadata in checkout session')
    return
  }

  const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent)

  // Update order status
  const order = await db.order.findFirst({
    where: { buyerId: metadata.buyerId },
  })

  if (order) {
    await db.order.update({
      where: { id: order.id },
      data: {
        status: 'completed',
        transactionId: payment_intent,
      },
    })
  }

  // Create transaction record
  const amount = paymentIntent.amount / 100
  await db.transaction.create({
    data: {
      orderId: order?.id || '',
      amount,
      type: 'PAYMENT',
      status: 'completed',
    },
  })
}

async function handlePaymentIntentSucceeded(paymentIntent: any) {
  console.log('Payment succeeded:', paymentIntent.id)
  // Additional logic for successful payments
}

async function handlePaymentIntentFailed(paymentIntent: any) {
  console.log('Payment failed:', paymentIntent.id)
  // Update order status to failed
}
