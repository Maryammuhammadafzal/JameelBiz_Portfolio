'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import Link from 'next/link'
import { DollarSign, Plus, Edit2, Trash2, Star } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  { id: 1, name: 'Guest Posting', priceUsd: 299, pricePkr: 74750, type: 'monthly', featured: false, active: true },
  { id: 2, name: 'Link Building', priceUsd: 399, pricePkr: 99750, type: 'monthly', featured: true, active: true },
  { id: 3, name: 'Digital PR', priceUsd: 599, pricePkr: 149750, type: 'monthly', featured: false, active: true },
  { id: 4, name: 'Enterprise', priceUsd: 0, pricePkr: 0, type: 'custom', featured: false, active: true },
]

export default function PricingManagement() {
  const [plans, setPlans] = useState(pricingPlans)
  const [filter, setFilter] = useState('all')

  const toggleFeatured = (id: number) => {
    setPlans(plans.map(p => p.id === id ? { ...p, featured: !p.featured } : { ...p, featured: false }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Pricing Plans</h1>
              <p className="text-gray-400">Manage pricing packages and rates</p>
            </div>
            <Link href="/admin/pricing/create" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Plan
            </Link>
          </div>

          {/* Filters */}
          <div className="flex gap-3 mb-6">
            {['all', 'monthly', 'custom'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === f
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.filter(p => filter === 'all' || p.type === filter).map((plan) => (
              <div key={plan.id} className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-purple-500 transition overflow-hidden">
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  
                  {plan.priceUsd > 0 ? (
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-white">${plan.priceUsd}</div>
                      <div className="text-sm text-gray-400">₨ {plan.pricePkr.toLocaleString()}/month</div>
                    </div>
                  ) : (
                    <div className="text-lg font-bold text-purple-400 mb-4">Custom Pricing</div>
                  )}
                  
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    plan.active
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {plan.active ? 'Active' : 'Inactive'}
                  </span>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleFeatured(plan.id)}
                      className={`flex-1 px-3 py-2 rounded transition text-sm font-medium ${
                        plan.featured
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <Star className="w-4 h-4 inline mr-1" />
                      Featured
                    </button>
                    <Link href={`/admin/pricing/${plan.id}`} className="px-3 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition">
                      <Edit2 className="w-4 h-4" />
                    </Link>
                    <button className="px-3 py-2 bg-red-500/10 text-red-400 rounded hover:bg-red-500/20 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
