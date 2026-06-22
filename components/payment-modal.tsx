'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export interface PaymentModalProps {
  websiteId: string
  websiteTitle: string
  price: number
  onClose: () => void
}

export function PaymentModal({ websiteId, websiteTitle, price, onClose }: PaymentModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/payments/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          websiteId,
          price,
          title: websiteTitle,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-slate-800 p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">{websiteTitle}</h2>
            <p className="mt-2 text-3xl font-bold text-blue-400">${price.toLocaleString()}</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-900/30 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="mb-6 space-y-3 rounded-lg border border-slate-700 bg-slate-700/50 p-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Website Price</span>
            <span className="text-white">${price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between border-t border-slate-600 pt-3 text-sm">
            <span className="font-semibold text-white">Total</span>
            <span className="font-semibold text-blue-400">${price.toLocaleString()}</span>
          </div>
        </div>

        <div className="mb-6 text-xs text-slate-400">
          <p>✓ Secure payment with Stripe</p>
          <p>✓ Instant website access after purchase</p>
          <p>✓ 30-day money-back guarantee</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-700"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    </div>
  )
}
