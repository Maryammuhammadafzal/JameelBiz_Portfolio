'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface AdminStats {
  totalUsers: number
  totalListings: number
  totalOrders: number
  totalRevenue: number
  pendingApprovals: number
}

interface PendingWebsite {
  id: string
  domain: string
  niche: string
  seller: {
    name: string
    email: string
  }
  createdAt: string
}

interface User {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
  status: 'active' | 'suspended'
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [pendingWebsites, setPendingWebsites] = useState<PendingWebsite[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    fetchAdminData()
  }, [])

  async function fetchAdminData() {
    try {
      const [statsRes, websitesRes, usersRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/pending-websites'),
        fetch('/api/admin/users'),
      ])

      const statsData = await statsRes.json()
      const websitesData = await websitesRes.json()
      const usersData = await usersRes.json()

      if (statsData.success) setStats(statsData.data)
      if (websitesData.success) setPendingWebsites(websitesData.data)
      if (usersData.success) setUsers(usersData.data)
    } catch (error) {
      console.error('Failed to fetch admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Jameel Biz Admin
          </Link>
          <button className="text-sm text-gray-600 hover:text-primary transition">
            Sign Out
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-border bg-white p-6 min-h-screen">
          <div className="mb-8">
            <h3 className="font-bold text-black mb-4">Admin Menu</h3>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'overview'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('approvals')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'approvals'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Approvals ({stats?.pendingApprovals || 0})
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'users'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setActiveTab('transactions')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'transactions'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Transactions
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'settings'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Settings
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-8">Dashboard Overview</h1>

              {loading ? (
                <p className="text-gray-600">Loading statistics...</p>
              ) : stats ? (
                <>
                  {/* Stats Grid */}
                  <div className="grid grid-cols-5 gap-6 mb-8">
                    <div className="bg-white border border-border rounded-lg p-6">
                      <p className="text-gray-600 text-sm mb-2">Total Users</p>
                      <p className="text-3xl font-bold text-black">
                        {stats.totalUsers}
                      </p>
                    </div>
                    <div className="bg-white border border-border rounded-lg p-6">
                      <p className="text-gray-600 text-sm mb-2">Active Listings</p>
                      <p className="text-3xl font-bold text-primary">
                        {stats.totalListings}
                      </p>
                    </div>
                    <div className="bg-white border border-border rounded-lg p-6">
                      <p className="text-gray-600 text-sm mb-2">Total Orders</p>
                      <p className="text-3xl font-bold text-black">
                        {stats.totalOrders}
                      </p>
                    </div>
                    <div className="bg-white border border-border rounded-lg p-6">
                      <p className="text-gray-600 text-sm mb-2">Platform Revenue</p>
                      <p className="text-3xl font-bold text-primary">
                        ${stats.totalRevenue}
                      </p>
                    </div>
                    <div className="bg-white border border-border rounded-lg p-6 border-yellow-200 bg-yellow-50">
                      <p className="text-gray-600 text-sm mb-2">Pending Approvals</p>
                      <p className="text-3xl font-bold text-yellow-700">
                        {stats.pendingApprovals}
                      </p>
                    </div>
                  </div>

                  {/* Recent Activity Section */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Recent Orders */}
                    <div className="bg-white border border-border rounded-lg p-6">
                      <h2 className="font-bold text-black text-lg mb-4">
                        Recent Orders
                      </h2>
                      <div className="space-y-3">
                        <p className="text-gray-600 text-sm">
                          No recent orders yet
                        </p>
                      </div>
                    </div>

                    {/* System Health */}
                    <div className="bg-white border border-border rounded-lg p-6">
                      <h2 className="font-bold text-black text-lg mb-4">
                        System Health
                      </h2>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">API Status</span>
                          <span className="text-green-600 font-semibold">
                            Operational
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Database</span>
                          <span className="text-green-600 font-semibold">
                            Connected
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Cache</span>
                          <span className="text-green-600 font-semibold">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}

          {/* Approvals Tab */}
          {activeTab === 'approvals' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">
                Pending Approvals
              </h1>

              {loading ? (
                <p className="text-gray-600">Loading pending approvals...</p>
              ) : pendingWebsites.length === 0 ? (
                <div className="bg-white border border-border rounded-lg p-12 text-center">
                  <p className="text-gray-600">No pending approvals</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingWebsites.map((website) => (
                    <div
                      key={website.id}
                      className="bg-white border border-border rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-black text-lg">
                            {website.domain}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Niche: {website.niche}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-black">
                            {website.seller.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {website.seller.email}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">
                        Submitted{' '}
                        {new Date(website.createdAt).toLocaleDateString()}
                      </p>

                      <div className="flex gap-3">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                          Approve
                        </button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                          Reject
                        </button>
                        <button className="border border-border text-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition">
                          Request Info
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">User Management</h1>

              {loading ? (
                <p className="text-gray-600">Loading users...</p>
              ) : users.length === 0 ? (
                <div className="bg-white border border-border rounded-lg p-12 text-center">
                  <p className="text-gray-600">No users found</p>
                </div>
              ) : (
                <div className="overflow-x-auto bg-white border border-border rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Name
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Email
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Role
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Status
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Joined
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-black">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-border hover:bg-gray-50">
                          <td className="py-4 px-6 font-semibold text-black">
                            {user.name}
                          </td>
                          <td className="py-4 px-6 text-gray-600">{user.email}</td>
                          <td className="py-4 px-6 text-gray-600">
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                          </td>
                          <td className="py-4 px-6">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                user.status === 'active'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {user.status.charAt(0).toUpperCase() +
                                user.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-gray-600">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6">
                            <button className="text-primary hover:underline text-sm mr-4">
                              Edit
                            </button>
                            <button className="text-red-600 hover:underline text-sm">
                              Suspend
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

          {/* Transactions Tab */}
          {activeTab === 'transactions' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Transactions</h1>
              <div className="bg-white border border-border rounded-lg p-12 text-center">
                <p className="text-gray-600">Transaction history coming soon</p>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h1 className="text-3xl font-bold text-black mb-6">Settings</h1>
              <div className="bg-white border border-border rounded-lg p-8">
                <h2 className="font-bold text-black text-lg mb-6">
                  Platform Settings
                </h2>
                <div className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">
                      Commission Rate (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      defaultValue="10"
                      className="w-full px-4 py-2 border border-border rounded-lg text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">
                      Minimum Withdrawal
                    </label>
                    <input
                      type="number"
                      min="0"
                      defaultValue="100"
                      className="w-full px-4 py-2 border border-border rounded-lg text-black"
                    />
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
