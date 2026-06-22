'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface ListingDetail {
  id: string
  domain: string
  niche: string
  country: string
  rating: number
  description: string
  _count: { reviews: number }
  metrics?: {
    domainRating: number
    domainAuthority: number
    organicTraffic: number
  }
  pricing?: {
    guestPostPrice: number
    linkInsertionPrice: number
  }
  seller: {
    id: string
    name: string
    avatar?: string
  }
}

export default function ListingDetailPage() {
  const params = useParams()
  const [listing, setListing] = useState<ListingDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    fetchListing()
  }, [params.id])

  async function fetchListing() {
    try {
      const res = await fetch(`/api/listings/${params.id}`)
      const data = await res.json()
      if (data.success) {
        setListing(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch listing:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <nav className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Jameel Biz
            </Link>
            <Link
              href="/sign-in"
              className="rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Sign In
            </Link>
          </div>
        </nav>
        <div className="text-center py-12">
          <p className="text-gray-600">Loading listing...</p>
        </div>
      </main>
    )
  }

  if (!listing) {
    return (
      <main className="min-h-screen bg-white">
        <nav className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Jameel Biz
            </Link>
            <Link
              href="/sign-in"
              className="rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Sign In
            </Link>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-600 mb-4">Listing not found</p>
          <Link href="/marketplace" className="text-primary hover:underline">
            Back to Marketplace
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Jameel Biz
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/marketplace" className="text-sm text-gray-600 hover:text-primary transition">
              Marketplace
            </Link>
            <Link
              href="/sign-in"
              className="rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/marketplace" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← Back to Marketplace
          </Link>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">{listing.domain}</h1>
              <p className="text-gray-600 text-lg">{listing.niche}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary text-xl">★</span>
                <span className="text-2xl font-bold text-black">{listing.rating.toFixed(1)}</span>
                <span className="text-gray-600">({listing._count.reviews} reviews)</span>
              </div>
              <p className="text-gray-600">{listing.country}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2">
            {/* Key Metrics */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="font-bold text-black text-lg mb-4">Key Metrics</h2>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Domain Rating</p>
                  <p className="text-3xl font-bold text-primary">
                    {listing.metrics?.domainRating || 0}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Domain Authority</p>
                  <p className="text-3xl font-bold text-primary">
                    {listing.metrics?.domainAuthority || 0}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Monthly Traffic</p>
                  <p className="text-3xl font-bold text-primary">
                    {listing.metrics?.organicTraffic || 0}
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-border mb-6">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 font-semibold transition ${
                    activeTab === 'overview'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`pb-4 font-semibold transition ${
                    activeTab === 'pricing'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Pricing
                </button>
                <button
                  onClick={() => setActiveTab('requirements')}
                  className={`pb-4 font-semibold transition ${
                    activeTab === 'requirements'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Requirements
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div>
                <h3 className="font-bold text-black text-lg mb-4">About This Site</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {listing.description || 'A great platform for link building and guest posting opportunities.'}
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    Ready to collaborate? Contact the publisher to discuss your content and link building needs.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div>
                <h3 className="font-bold text-black text-lg mb-4">Pricing Structure</h3>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">Guest Post</h4>
                    <p className="text-gray-600 mb-3">Full article publication with backlink</p>
                    <p className="text-3xl font-bold text-primary">
                      ${listing.pricing?.guestPostPrice || 0}
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">Link Insertion</h4>
                    <p className="text-gray-600 mb-3">Add link to existing article</p>
                    <p className="text-3xl font-bold text-primary">
                      ${listing.pricing?.linkInsertionPrice || 0}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div>
                <h3 className="font-bold text-black text-lg mb-4">Content Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Original, high-quality content</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>No aggressive promotional language</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Relevant to website niche</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Well-researched with proper sources</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            {/* Publisher Card */}
            <div className="border border-border rounded-lg p-6 mb-6 sticky top-24">
              <h3 className="font-bold text-black text-lg mb-4">Publisher</h3>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {listing.seller.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-black">{listing.seller.name}</p>
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition mb-3">
                Contact Publisher
              </button>
              <button className="w-full border border-border text-black py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                View All Sites
              </button>
            </div>

            {/* Quick Stats */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-black text-lg mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Turnaround Time</p>
                  <p className="font-semibold text-black">5-7 business days</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Content Type</p>
                  <p className="font-semibold text-black">Guest Posts, Links</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Languages</p>
                  <p className="font-semibold text-black">English</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Accept Expired Domains</p>
                  <p className="font-semibold text-black">Yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
