'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Save, ArrowLeft, Upload } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CreateCourse() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    instructor: '',
    priceUsd: '',
    pricePkr: '',
    published: false,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Link href="/admin/academy/courses" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Create New Course</h1>

          {/* Form */}
          <div className="space-y-8">
            {/* Basic Information */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Course Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Course Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="e.g., Complete Link Building Masterclass"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="e.g., link-building-masterclass"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Instructor</label>
                  <input
                    type="text"
                    value={formData.instructor}
                    onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Instructor name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Course description"
                  />
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Course Image</h2>
              
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
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
                    placeholder="199"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price (PKR)</label>
                  <input
                    type="number"
                    value={formData.pricePkr}
                    onChange={(e) => setFormData({ ...formData, pricePkr: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="49750"
                  />
                </div>
              </div>
            </div>

            {/* Publish */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4 rounded cursor-pointer"
                />
                <label htmlFor="published" className="text-white font-medium cursor-pointer">
                  Publish course immediately
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-3">
              <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 font-medium">
                <Save className="w-5 h-5" />
                Create Course
              </button>
              <Link href="/admin/academy/courses" className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-900 transition font-medium">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
