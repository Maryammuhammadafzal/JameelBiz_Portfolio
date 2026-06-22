'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import Link from 'next/link'
import { Zap, Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const services = [
  { id: 1, name: 'Guest Posting', slug: 'guest-posting', category: 'Link Building', priceUsd: 299, views: 1240, active: true },
  { id: 2, name: 'Link Insertions', slug: 'link-insertions', category: 'Link Building', priceUsd: 199, views: 892, active: true },
  { id: 3, name: 'Technical SEO', slug: 'technical-seo', category: 'SEO', priceUsd: 399, views: 2150, active: true },
  { id: 4, name: 'Local SEO', slug: 'local-seo', category: 'SEO', priceUsd: 349, views: 1560, active: false },
]

export default function ServicesManagement() {
  const [serviceList, setServiceList] = useState(services)

  const toggleActive = (id: number) => {
    setServiceList(serviceList.map(s => s.id === id ? { ...s, active: !s.active } : s))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Services Management</h1>
              <p className="text-gray-400">Manage all SEO services</p>
            </div>
            <Link href="/admin/services/create" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add Service
            </Link>
          </div>

          {/* Services Table */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Service Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Price (USD)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Views</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceList.map((service) => (
                    <tr key={service.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-purple-400" />
                          <div>
                            <p className="font-medium text-white">{service.name}</p>
                            <p className="text-xs text-gray-400">/{service.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{service.category}</td>
                      <td className="px-6 py-4 text-white font-medium">${service.priceUsd}</td>
                      <td className="px-6 py-4 text-gray-300">{service.views.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleActive(service.id)}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition ${
                            service.active
                              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                              : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                          }`}
                        >
                          {service.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          {service.active ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Link href={`/admin/services/${service.id}`} className="p-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white">
                            <Edit2 className="w-4 h-4" />
                          </Link>
                          <button className="p-2 hover:bg-red-500/10 rounded transition text-gray-300 hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
