'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const listingId = searchParams.get('listing')
  const type = searchParams.get('type')

  const [loading, setLoading] = useState(false)
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [step, setStep] = useState('review') // review, payment, confirmation

  async function handleCheckout() {
    if (!listingId || !type) return

    setLoading(true)
    try {
      const res = await fetch('/api/payments/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          listingId,
          type,
          buyerId: 'current-user-id', // Replace with actual user ID
        }),
      })

      const data = await res.json()

      if (data.success) {
        setOrderDetails(data.data)
        setStep('payment')
      }
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setLoading(false)
    }
  }

  async function confirmPayment() {
    if (!orderDetails) return

    setLoading(true)
    try {
      const res = await fetch('/api/payments/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: orderDetails.orderId }),
      })

      const data = await res.json()

      if (data.success) {
        setStep('confirmation')
      }
    } catch (error) {
      console.error('Payment confirmation error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Step Indicator */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-2 ${
                step === 'review' || step === 'payment' || step === 'confirmation'
                  ? 'bg-primary'
                  : 'bg-gray-300'
              }`}
            >
              1
            </div>
            <p className="text-sm font-semibold text-black">Review</p>
          </div>

          <div className="flex-1 h-1 bg-gray-200 mx-4"></div>

          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-2 ${
                step === 'payment' || step === 'confirmation'
                  ? 'bg-primary'
                  : 'bg-gray-300'
              }`}
            >
              2
            </div>
            <p className="text-sm font-semibold text-black">Payment</p>
          </div>

          <div className="flex-1 h-1 bg-gray-200 mx-4"></div>

          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-2 ${
                step === 'confirmation' ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              3
            </div>
            <p className="text-sm font-semibold text-black">Confirmation</p>
          </div>
        </div>

        {/* Review Step */}
        {step === 'review' && (
          <div className="bg-white border border-border rounded-lg p-8">
            <h1 className="text-3xl font-bold text-black mb-6">Review Your Order</h1>

            <div className="mb-6 p-4 border border-border rounded-lg">
              <h2 className="font-bold text-black mb-4">Service Details</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Domain:</span> example.com
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Service Type:</span>{' '}
                  {type === 'guest_post' ? 'Guest Post' : 'Link Insertion'}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Domain Rating:</span> 45
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Monthly Traffic:</span>{' '}
                  15,000
                </p>
              </div>
            </div>

            <div className="mb-6 border-t border-border pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-semibold">Service Price:</span>
                <span className="text-2xl font-bold text-primary">$500</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-semibold">Platform Fee (2%):</span>
                <span className="text-gray-600">$10</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="text-black font-bold">Total:</span>
                <span className="text-3xl font-bold text-primary">$510</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              By proceeding, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        )}

        {/* Payment Step */}
        {step === 'payment' && (
          <div className="bg-white border border-border rounded-lg p-8">
            <h1 className="text-3xl font-bold text-black mb-6">Payment Information</h1>

            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900 text-sm">
                💳 Test Mode: Use card number <code>4242 4242 4242 4242</code> with any
                future expiry date
              </p>
            </div>

            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className="w-full px-4 py-2 border border-border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-2">
                    Expiry
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-2">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-2 border border-border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-600 text-sm mb-2">Order Summary:</p>
              <div className="flex justify-between items-center font-bold text-black">
                <span>Total Amount:</span>
                <span className="text-primary text-lg">$510</span>
              </div>
            </div>

            <button
              onClick={confirmPayment}
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? 'Processing Payment...' : 'Complete Payment'}
            </button>

            <button
              onClick={() => setStep('review')}
              className="w-full text-primary py-2 mt-4 font-semibold hover:underline transition"
            >
              Back to Review
            </button>
          </div>
        )}

        {/* Confirmation Step */}
        {step === 'confirmation' && (
          <div className="bg-white border border-border rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-4xl">✓</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-black mb-2">
              Payment Successful!
            </h1>

            <p className="text-gray-600 mb-6">
              Your order has been confirmed. The publisher will be notified and will
              start working on your request soon.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
              <h2 className="font-bold text-black mb-4">Order Details</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="text-black font-semibold">
                    {orderDetails?.orderId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="text-black font-semibold">
                    ${orderDetails?.amount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domain:</span>
                  <span className="text-black font-semibold">
                    {orderDetails?.listing?.domain}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/dashboard/buyer"
                className="block w-full bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition text-center"
              >
                View My Orders
              </Link>
              <Link
                href="/marketplace"
                className="block w-full border border-border text-primary py-3 rounded-lg font-bold hover:bg-gray-50 transition text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
