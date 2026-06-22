'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Settings, Cog, Shield, Database, Users } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const settingsTabs = [
  { id: 'global', name: 'Global Settings', icon: Settings },
  { id: 'branding', name: 'Branding', icon: Cog },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'backup', name: 'Backup & Export', icon: Database },
  { id: 'admins', name: 'Admin Users', icon: Users },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('global')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400">Manage all admin panel and website settings</p>
          </div>

          {/* Tabs Navigation */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${
                      isActive
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            {activeTab === 'global' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Global Website Settings</h2>
                <Link href="/admin/settings/global" className="text-purple-400 hover:text-purple-300 font-medium">
                  Manage Global Settings →
                </Link>
              </div>
            )}

            {activeTab === 'branding' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Branding Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Logo</label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition">
                      <p className="text-gray-400">Click to upload logo</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Favicon</label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition">
                      <p className="text-gray-400">Click to upload favicon</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-2">Two-Factor Authentication</h3>
                    <p className="text-gray-400 text-sm mb-3">Enable 2FA for all admin accounts</p>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
                      Enable 2FA
                    </button>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-2">Session Timeout</h3>
                    <p className="text-gray-400 text-sm mb-3">Automatically log out inactive admins after (minutes)</p>
                    <input type="number" defaultValue="30" className="w-24 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'backup' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Backup & Export</h2>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-2">Export Database</h3>
                    <p className="text-gray-400 text-sm mb-3">Download full database backup</p>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
                      Download Backup
                    </button>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-2">Last Backup</h3>
                    <p className="text-gray-400 text-sm">June 22, 2024 at 14:30 UTC</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'admins' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Admin Users</h2>
                <div className="space-y-4">
                  {[
                    { name: 'John Admin', email: 'john@jameelbiz.com', role: 'Super Admin' },
                    { name: 'Jane Manager', email: 'jane@jameelbiz.com', role: 'Manager' },
                  ].map((admin) => (
                    <div key={admin.email} className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white">{admin.name}</h3>
                        <p className="text-sm text-gray-400">{admin.email}</p>
                        <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded mt-1 inline-block">{admin.role}</span>
                      </div>
                      <button className="text-red-400 hover:text-red-300 font-medium text-sm">Remove</button>
                    </div>
                  ))}
                  <button className="w-full px-4 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600/10 transition font-medium">
                    Add New Admin
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
