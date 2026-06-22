'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Listing {
  id: string
  domain: string
  niche: string
  country: string
  rating: number
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
  }
}

const NICHES = ['All', 'Technology', 'Finance', 'Health', 'Business', 'Marketing', 'Education', 'E-Commerce', 'SaaS']
const COUNTRIES = ['All', 'United States', 'United Kingdom', 'Canada', 'Australia', 'India', 'Global']

export default function Marketplace() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [selectedNiche, setSelectedNiche] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [minDR, setMinDR] = useState(0)
  const [maxDR, setMaxDR] = useState(100)
  const [sortBy, setSortBy] = useState('newest')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchListings()
  }, [page, selectedNiche, selectedCountry, minDR, maxDR, sortBy])

  async function fetchListings() {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '12',
        ...(selectedNiche !== 'All' && { niche: selectedNiche }),
        ...(selectedCountry !== 'All' && { country: selectedCountry }),
        minDR: minDR.toString(),
        maxDR: maxDR.toString(),
        sortBy,
      })

      const res = await fetch(`/api/listings?${params}`)
      const data = await res.json()

      if (data.success) {
        setListings(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch listings:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredBySearch = listings.filter(site =>
    searchQuery === '' || site.domain.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-white py-12 px-6 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-3">Publisher Marketplace</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse and connect with 500+ vetted, high-authority publishers for your link building campaigns.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Search by domain name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 border border-border rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="font-bold text-primary text-lg">500+</p>
              <p className="text-gray-600">Publishers</p>
            </div>
            <div>
              <p className="font-bold text-primary text-lg">20-90</p>
              <p className="text-gray-600">Avg DR</p>
            </div>
            <div>
              <p className="font-bold text-primary text-lg">$50-$5K</p>
              <p className="text-gray-600">Price Range</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex">
        {/* Sidebar Filters */}
        <div className="w-72 border-r border-border bg-gray-50 p-6 min-h-screen sticky top-20 overflow-y-auto">
          <h2 className="font-bold text-black mb-6 text-lg">Filters</h2>

          {/* Niche Filter */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-black mb-3">Niche</label>
            <select
              value={selectedNiche}
              onChange={(e) => {
                setSelectedNiche(e.target.value)
                setPage(1)
              }}
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {NICHES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Country Filter */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-black mb-3">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value)
                setPage(1)
              }}
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* DR Range Filter */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-black mb-3">
              Domain Rating: {minDR}-{maxDR}
            </label>
            <div className="space-y-3">
              <div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={minDR}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    if (val <= maxDR) setMinDR(val)
                    setPage(1)
                  }}
                  className="w-full"
                />
                <p className="text-xs text-gray-600 mt-1">Min: {minDR}</p>
              </div>
              <div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={maxDR}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    if (val >= minDR) setMaxDR(val)
                    setPage(1)
                  }}
                  className="w-full"
                />
                <p className="text-xs text-gray-600 mt-1">Max: {maxDR}</p>
              </div>
            </div>
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-black mb-3">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value)
                setPage(1)
              }}
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Lowest Price</option>
              <option value="price-high">Highest Price</option>
              <option value="dr">Domain Rating</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSelectedNiche('All')
              setSelectedCountry('All')
              setMinDR(0)
              setMaxDR(100)
              setSortBy('newest')
              setSearchQuery('')
              setPage(1)
            }}
            className="w-full border border-border text-black py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
          >
            Clear All Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">Loading publishers...</p>
            </div>
          ) : filteredBySearch.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No publishers found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedNiche('All')
                  setSelectedCountry('All')
                  setMinDR(0)
                  setMaxDR(100)
                  setSearchQuery('')
                }}
                className="mt-4 text-primary hover:underline font-semibold"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">Showing {filteredBySearch.length} publishers</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredBySearch.map((listing) => (
                  <Link
                    key={listing.id}
                    href={`/marketplace/${listing.id}`}
                    className="border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition bg-white group"
                  >
                    <div className="h-32 bg-gradient-to-br from-primary/10 to-blue-100 relative">
                      <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                        DR {listing.metrics?.domainRating || 0}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-black mb-1 truncate group-hover:text-primary transition">
                        {listing.domain}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{listing.niche}</p>

                      <div className="space-y-2 mb-4 text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between">
                          <span>Traffic:</span>
                          <strong>{listing.metrics?.organicTraffic || 0}/mo</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <strong>{listing.country || 'Global'}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Authority:</span>
                          <strong>DA {listing.metrics?.domainAuthority || 0}</strong>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <span className="text-primary font-bold">★</span>
                          <span className="text-sm font-semibold text-black">
                            {listing.rating.toFixed(1)}
                          </span>
                          <span className="text-xs text-gray-600">
                            ({listing._count.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">Guest Post:</span>
                          <span className="font-bold text-black">
                            ${listing.pricing?.guestPostPrice || 0}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">Link Insert:</span>
                          <span className="font-bold text-black">
                            ${listing.pricing?.linkInsertionPrice || 0}
                          </span>
                        </div>
                      </div>

                      <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 transition text-sm">
                        View Details
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-border rounded-lg text-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold"
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => {
                    const p = Math.max(1, page - 2) + i
                    return (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-2 rounded-lg font-semibold transition ${
                          page === p
                            ? 'bg-primary text-white'
                            : 'border border-border text-black hover:bg-gray-50'
                        }`}
                      >
                        {p}
                      </button>
                    )
                  })}
                </div>
                <button
                  onClick={() => setPage((p) => p + 1)}
                  className="px-4 py-2 border border-border rounded-lg text-black hover:bg-gray-50 transition font-semibold"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
