'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Campaign {
  id: string
  name: string
  status: 'active' | 'completed' | 'paused'
  targetLinks: number
  linksAcquired: number
  budget: number
  spent: number
  createdAt: string
}

interface Order {
  id: string
  website: string
  type: 'guest_post' | 'link_insertion'
  price: number
  status: 'pending' | 'in_progress' | 'completed' | 'rejected'
  createdAt: string
}

export default function BuyerDashboard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('campaigns')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const [campaignsRes, ordersRes] = await Promise.all([
        fetch('/api/campaigns'),
        fetch('/api/orders'),
      ])

      const campaignsData = await campaignsRes.json()
      const ordersData = await ordersRes.json()

      if (campaignsData.success) setCampaigns(campaignsData.data)
      if (ordersData.success) setOrders(ordersData.data)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const stats = {
    activeCampaigns: campaigns.filter((c) => c.status === 'active').length,
    totalSpent: campaigns.reduce((acc, c) => acc + c.spent, 0),
    linksAcquired: campaigns.reduce((acc, c) => acc + c.linksAcquired, 0),
    pendingOrders: orders.filter((o) => o.status === 'pending').length,
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
                onClick={() => setActiveTab('campaigns')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'campaigns'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                My Campaigns
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'orders'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'billing'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Billing & Payments
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'settings'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Account Settings
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Active Campaigns</p>
              <p className="text-3xl font-bold text-black">{stats.activeCampaigns}</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Total Spent</p>
              <p className="text-3xl font-bold text-primary">${stats.totalSpent}</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Links Acquired</p>
              <p className="text-3xl font-bold text-black">{stats.linksAcquired}</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">Pending Orders</p>
              <p className="text-3xl font-bold text-black">{stats.pendingOrders}</p>
            </div>
          </div>

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-black">My Campaigns</h1>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  New Campaign
                </button>
              </div>

              {loading ? (
                <p className="text-gray-600">Loading campaigns...</p>
              ) : campaigns.length === 0 ? (
                <div className="bg-white border border-border rounded-lg p-12 text-center">
                  <p className="text-gray-600 mb-4">No campaigns yet</p>
                  <button className="text-primary hover:underline font-semibold">
                    Create your first campaign
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-black text-lg">{campaign.name}</h3>
                          <p className="text-gray-600 text-sm">
                            Created {new Date(campaign.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            campaign.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : campaign.status === 'completed'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-gray-600 text-sm mb-1">Links Progress</p>
                          <p className="font-semibold text-black">
                            {campaign.linksAcquired}/{campaign.targetLinks}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm mb-1">Budget Used</p>
                          <p className="font-semibold text-black">
                            ${campaign.spent}/${campaign.budget}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm mb-1">Progress %</p>
                          <p className="font-semibold text-black">
                            {Math.round(
                              (campaign.linksAcquired / campaign.targetLinks) * 100
                            )}%
                          </p>
                        </div>
                        <div className="text-right">
                          <button className="text-primary hover:underline font-semibold text-sm">
                            View Details
                          </button>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition"
                          style={{
                            width: `${
                              campaign.linksAcquired > 0
                                ? (campaign.linksAcquired / campaign.targetLinks) * 100
                                : 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Orders</h1>

              {loading ? (
                <p className="text-gray-600">Loading orders...</p>
              ) : orders.length === 0 ? (
                <div className="bg-white border border-border rounded-lg p-12 text-center">
                  <p className="text-gray-600 mb-4">No orders yet</p>
                  <Link href="/marketplace" className="text-primary hover:underline font-semibold">
                    Browse marketplace
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Website
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Type
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Price
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Status
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b border-border hover:bg-gray-50">
                          <td className="py-4 px-6 text-black">{order.website}</td>
                          <td className="py-4 px-6 text-gray-600">
                            {order.type === 'guest_post'
                              ? 'Guest Post'
                              : 'Link Insertion'}
                          </td>
                          <td className="py-4 px-6 font-semibold text-black">
                            ${order.price}
                          </td>
                          <td className="py-4 px-6">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                order.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : order.status === 'in_progress'
                                    ? 'bg-blue-100 text-blue-800'
                                    : order.status === 'completed'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {order.status.replace('_', ' ').toUpperCase()}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-gray-600">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Billing & Payments</h1>
              <div className="bg-white border border-border rounded-lg p-8">
                <h2 className="font-bold text-black text-lg mb-4">Payment Methods</h2>
                <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-600">
                  <p>No payment methods added yet</p>
                  <button className="text-primary hover:underline font-semibold mt-2">
                    Add Payment Method
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Account Settings</h1>
              <div className="bg-white border border-border rounded-lg p-8">
                <h2 className="font-bold text-black text-lg mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full max-w-md px-4 py-2 border border-border rounded-lg text-black"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full max-w-md px-4 py-2 border border-border rounded-lg text-black"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
