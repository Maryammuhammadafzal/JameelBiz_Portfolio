'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Save, ArrowLeft, Upload } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CreateService() {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    category: 'SEO',
    priceUsd: '',
    pricePkr: '',
    seoTitle: '',
    seoDescription: '',
    content: '',
    features: [''],
  })

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData({ ...formData, features: newFeatures })
  }

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Link href="/admin/services" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Create New Service</h1>

          {/* Form */}
          <div className="space-y-8">
            {/* Basic Information */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Basic Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="e.g., Guest Posting"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="e.g., guest-posting"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  >
                    <option>SEO</option>
                    <option>Link Building</option>
                    <option>Content Marketing</option>
                    <option>Digital PR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Service description"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Pricing</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price (USD)</label>
                  <input
                    type="number"
                    value={formData.priceUsd}
                    onChange={(e) => setFormData({ ...formData, priceUsd: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="299"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price (PKR)</label>
                  <input
                    type="number"
                    value={formData.pricePkr}
                    onChange={(e) => setFormData({ ...formData, pricePkr: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="74750"
                  />
                </div>
              </div>
            </div>

            {/* Service Features */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
              
              <div className="space-y-3 mb-4">
                {formData.features.map((feature, index) => (
                  <input
                    key={index}
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder={`Feature ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={addFeature}
                className="px-4 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600/10 transition font-medium"
              >
                + Add Feature
              </button>
            </div>

            {/* SEO */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">SEO Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">SEO Title</label>
                  <input
                    type="text"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    maxLength={60}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">{formData.seoTitle.length}/60</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">SEO Description</label>
                  <textarea
                    value={formData.seoDescription}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    maxLength={160}
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">{formData.seoDescription.length}/160</p>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Service Image</h2>
              
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-3">
              <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 font-medium">
                <Save className="w-5 h-5" />
                Create Service
              </button>
              <Link href="/admin/services" className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-900 transition font-medium">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
