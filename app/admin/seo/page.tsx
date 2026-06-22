'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Search, Edit2, Save } from 'lucide-react'
import { useState } from 'react'

const seoPages = [
  { slug: '/', title: 'Home', metaTitle: 'Home - Jameel Biz', metaDesc: 'Premium SEO services for agencies and brands' },
  { slug: '/services', title: 'Services', metaTitle: 'Our Services - Jameel Biz', metaDesc: 'Explore our comprehensive SEO and link building services' },
  { slug: '/pricing', title: 'Pricing', metaTitle: 'Pricing Plans - Jameel Biz', metaDesc: 'Transparent and affordable pricing for all SEO services' },
  { slug: '/blog', title: 'Blog', metaTitle: 'Blog - Jameel Biz', metaDesc: 'Latest SEO tips, strategies and best practices' },
]

export default function SEOManager() {
  const [pages, setPages] = useState(seoPages)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState({
    metaTitle: '',
    metaDesc: '',
    keywords: '',
    canonicalUrl: '',
    ogTitle: '',
    ogDesc: '',
  })

  const startEdit = (page: typeof seoPages[0]) => {
    setEditingId(page.slug)
    setEditData({
      metaTitle: page.metaTitle,
      metaDesc: page.metaDesc,
      keywords: '',
      canonicalUrl: '',
      ogTitle: '',
      ogDesc: '',
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">SEO Manager</h1>
            <p className="text-gray-400">Manage meta tags, keywords, and SEO settings for all pages</p>
          </div>

          {/* SEO Settings */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { label: 'Google Analytics', value: 'UA-XXXXXXXXX-X', icon: '📊' },
              { label: 'Google Search Console', value: 'Not verified', icon: '🔍' },
              { label: 'Sitemap.xml', value: '/sitemap.xml', icon: '🗺️' },
              { label: 'Robots.txt', value: 'Configured', icon: '🤖' },
            ].map((setting) => (
              <div key={setting.label} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-white">{setting.label}</h3>
                  <span className="text-2xl">{setting.icon}</span>
                </div>
                <p className="text-gray-400 mb-4">{setting.value}</p>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">Edit</button>
              </div>
            ))}
          </div>

          {/* Pages SEO Table */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Page</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Meta Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Meta Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page) => (
                    <tr key={page.slug} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Search className="w-5 h-5 text-purple-400" />
                          <div>
                            <p className="font-medium text-white">{page.title}</p>
                            <p className="text-xs text-gray-400">{page.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-300 line-clamp-1">{page.metaTitle}</p>
                        <p className="text-xs text-gray-500">{page.metaTitle.length}/60 chars</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-300 line-clamp-1">{page.metaDesc}</p>
                        <p className="text-xs text-gray-500">{page.metaDesc.length}/160 chars</p>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => startEdit(page)}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edit Modal */}
          {editingId && (
            <div className="mt-8 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Edit SEO Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Meta Title</label>
                  <input
                    type="text"
                    value={editData.metaTitle}
                    onChange={(e) => setEditData({ ...editData, metaTitle: e.target.value })}
                    maxLength={60}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Meta title (max 60 chars)"
                  />
                  <p className="text-xs text-gray-400 mt-1">{editData.metaTitle.length}/60</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Meta Description</label>
                  <textarea
                    value={editData.metaDesc}
                    onChange={(e) => setEditData({ ...editData, metaDesc: e.target.value })}
                    maxLength={160}
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Meta description (max 160 chars)"
                  />
                  <p className="text-xs text-gray-400 mt-1">{editData.metaDesc.length}/160</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Keywords</label>
                  <input
                    type="text"
                    value={editData.keywords}
                    onChange={(e) => setEditData({ ...editData, keywords: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Comma-separated keywords"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 font-medium">
                    <Save className="w-5 h-5" />
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-900 transition font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
