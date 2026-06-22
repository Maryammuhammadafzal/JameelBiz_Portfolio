'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getOrderDetails } from '@/app/actions/orders'
import { getOrCreateConversation } from '@/app/actions/messages'

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadOrder() {
      try {
        const data = await getOrderDetails(params.id)
        setOrder(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load order')
      } finally {
        setLoading(false)
      }
    }

    loadOrder()
  }, [params.id])

  const handleContactSeller = async () => {
    try {
      if (!order) return
      const conversation = await getOrCreateConversation(order.website?.userId)
      // Redirect to messages with this conversation
      window.location.href = `/dashboard/messages?conversation=${conversation.id}`
    } catch (err) {
      setError('Failed to open conversation')
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              Jameel Biz
            </Link>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-white">Loading order details...</p>
        </div>
      </main>
    )
  }

  if (error || !order) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              Jameel Biz
            </Link>
          </div>
        </nav>
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="rounded-lg border border-red-700 bg-red-900/20 p-6">
            <p className="text-red-400">{error || 'Order not found'}</p>
            <Link
              href="/dashboard/buyer"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Back to Orders
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Jameel Biz
          </Link>
          <div className="flex gap-4">
            <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">
              Dashboard
            </Link>
            <Link href="/dashboard/buyer" className="text-sm text-slate-300 hover:text-white">
              My Orders
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard/buyer" className="text-blue-400 hover:text-blue-300">
            ← Back to Orders
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white">Order #{order.id.slice(0, 8)}</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Order Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Order Info */}
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Order Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Order ID</span>
                  <span className="font-medium text-white">{order.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status</span>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      order.status === 'completed'
                        ? 'bg-green-900/30 text-green-400'
                        : order.status === 'pending'
                          ? 'bg-yellow-900/30 text-yellow-400'
                          : 'bg-red-900/30 text-red-400'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Created</span>
                  <span className="text-white">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-slate-700">
                  <span className="text-slate-400">Payment Method</span>
                  <span className="text-white">{order.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Website Details */}
            {order.website && (
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <h2 className="mb-4 text-lg font-semibold text-white">Website Details</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-400 text-sm">Title</p>
                    <p className="mt-1 text-lg font-semibold text-white">{order.website.title}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Category</p>
                    <p className="mt-1 text-white">{order.website.category}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Description</p>
                    <p className="mt-1 text-white">{order.website.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-6">
            {/* Price Summary */}
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Price Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Price</span>
                  <span className="font-medium text-white">
                    {order.currency.toUpperCase()} {parseFloat(order.amount).toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-slate-700 pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">Total</span>
                    <span className="text-lg font-bold text-blue-400">
                      {order.currency.toUpperCase()} {parseFloat(order.amount).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleContactSeller}
                className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                Contact Seller
              </button>

              {order.status === 'completed' && (
                <button className="w-full rounded-lg border border-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-700">
                  Download Files
                </button>
              )}

              {order.status === 'pending' && (
                <button className="w-full rounded-lg border border-red-600 px-4 py-2 font-medium text-red-400 hover:bg-red-900/20">
                  Cancel Order
                </button>
              )}
            </div>

            {/* Support */}
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
              <p className="text-xs text-slate-400">Need help?</p>
              <Link href="/contact" className="mt-2 inline-block text-blue-400 hover:text-blue-300 text-sm">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
