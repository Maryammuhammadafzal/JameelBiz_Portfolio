'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Website {
  id: string
  domain: string
  niche: string
  status: 'active' | 'pending' | 'rejected'
  views: number
  requests: number
  revenue: number
  createdAt: string
  metrics?: {
    domainRating: number
  }
  pricing?: {
    guestPostPrice: number
    linkInsertionPrice: number
  }
}

export default function SellerDashboard() {
  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('websites')

  useEffect(() => {
    fetchWebsites()
  }, [])

  async function fetchWebsites() {
    try {
      const res = await fetch('/api/seller/websites')
      const data = await res.json()
      if (data.success) {
        setWebsites(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch websites:', error)
    } finally {
      setLoading(false)
    }
  }

  const stats = {
    activeListings: websites.filter((w) => w.status === 'active').length,
    totalViews: websites.reduce((acc, w) => acc + w.views, 0),
    totalRequests: websites.reduce((acc, w) => acc + w.requests, 0),
    totalRevenue: websites.reduce((acc, w) => acc + w.revenue, 0),
  }

  return (
    <main className="min-h-screen bg-gray-50">
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
            <button className="text-sm text-gray-600 hover:text-primary transition">
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-border bg-white p-6 min-h-screen">
          <div className="mb-8">
            <h3 className="font-bold text-black mb-4">Menu</h3>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('websites')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'websites'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                My Websites
              </button>
              <button
                onClick={() => setActiveTab('requests')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'requests'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Requests
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'analytics'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('withdrawal')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'withdrawal'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Withdrawal
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Active Listings</p>
              <p className="text-3xl font-bold text-black">{stats.activeListings}</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Total Views</p>
              <p className="text-3xl font-bold text-primary">{stats.totalViews}</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Requests</p>
              <p className="text-3xl font-bold text-black">{stats.totalRequests}</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Revenue</p>
              <p className="text-3xl font-bold text-primary">${stats.totalRevenue}</p>
            </div>
          </div>

          {/* Websites Tab */}
          {activeTab === 'websites' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-black">My Websites</h1>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  List New Website
                </button>
              </div>

              {loading ? (
                <p className="text-gray-600">Loading websites...</p>
              ) : websites.length === 0 ? (
                <div className="bg-white border border-border rounded-lg p-12 text-center">
                  <p className="text-gray-600 mb-4">No websites listed yet</p>
                  <button className="text-primary hover:underline font-semibold">
                    List your first website
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto bg-white border border-border rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Domain
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Niche
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          DR
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Guest Post
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Views
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Status
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {websites.map((website) => (
                        <tr key={website.id} className="border-b border-border hover:bg-gray-50">
                          <td className="py-4 px-6 font-semibold text-black">
                            {website.domain}
                          </td>
                          <td className="py-4 px-6 text-gray-600">{website.niche}</td>
                          <td className="py-4 px-6 text-black">
                            {website.metrics?.domainRating || 0}
                          </td>
                          <td className="py-4 px-6 text-black">
                            ${website.pricing?.guestPostPrice || 0}
                          </td>
                          <td className="py-4 px-6 text-gray-600">{website.views}</td>
                          <td className="py-4 px-6">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                website.status === 'active'
                                  ? 'bg-green-100 text-green-800'
                                  : website.status === 'pending'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {website.status.charAt(0).toUpperCase() +
                                website.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <button className="text-primary hover:underline text-sm mr-4">
                              Edit
                            </button>
                            <button className="text-red-600 hover:underline text-sm">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Requests Tab */}
          {activeTab === 'requests' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Guest Post Requests</h1>
              <div className="bg-white border border-border rounded-lg p-12 text-center">
                <p className="text-gray-600">No pending requests</p>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Analytics</h1>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-border rounded-lg p-6">
                  <h2 className="font-bold text-black text-lg mb-4">View Trends</h2>
                  <p className="text-gray-600">Chart visualization coming soon</p>
                </div>
                <div className="bg-white border border-border rounded-lg p-6">
                  <h2 className="font-bold text-black text-lg mb-4">Revenue Trends</h2>
                  <p className="text-gray-600">Chart visualization coming soon</p>
                </div>
              </div>
            </div>
          )}

          {/* Withdrawal Tab */}
          {activeTab === 'withdrawal' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Withdrawals</h1>
              <div className="bg-white border border-border rounded-lg p-8">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-2">Available Balance</p>
                  <p className="text-4xl font-bold text-primary">${stats.totalRevenue}</p>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Request Withdrawal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
