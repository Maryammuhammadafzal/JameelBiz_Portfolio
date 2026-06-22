'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import Link from 'next/link'
import { PenSquare, Plus, Edit2, Trash2, Eye, EyeOff, Calendar } from 'lucide-react'
import { useState } from 'react'

const blogPosts = [
  { id: 1, title: 'Ultimate Guide to Guest Posting', slug: 'ultimate-guide-guest-posting', category: 'Link Building', published: true, views: 3420, date: '2024-06-15' },
  { id: 2, title: 'Technical SEO Checklist 2024', slug: 'technical-seo-checklist-2024', category: 'SEO', published: true, views: 2150, date: '2024-06-10' },
  { id: 3, title: 'Local SEO Best Practices', slug: 'local-seo-best-practices', category: 'SEO', published: false, views: 0, date: '2024-06-05' },
  { id: 4, title: 'Digital PR Strategy Guide', slug: 'digital-pr-strategy', category: 'Digital PR', published: true, views: 1890, date: '2024-06-01' },
]

export default function BlogManagement() {
  const [posts, setPosts] = useState(blogPosts)
  const [sortBy, setSortBy] = useState('date')

  const togglePublish = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, published: !p.published } : p))
  }

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'views') return b.views - a.views
    if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime()
    return 0
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Blog Posts</h1>
              <p className="text-gray-400">Manage blog content and publications</p>
            </div>
            <Link href="/admin/blog/create" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Post
            </Link>
          </div>

          {/* Sort */}
          <div className="mb-6 flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-purple-500 focus:outline-none focus:border-purple-600"
            >
              <option value="date">Sort by Date</option>
              <option value="views">Sort by Views</option>
            </select>
          </div>

          {/* Posts Table */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Views</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPosts.map((post) => (
                    <tr key={post.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <PenSquare className="w-5 h-5 text-purple-400" />
                          <div>
                            <p className="font-medium text-white">{post.title}</p>
                            <p className="text-xs text-gray-400">/{post.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{post.category}</td>
                      <td className="px-6 py-4 text-gray-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        {new Date(post.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-white font-medium">{post.views.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => togglePublish(post.id)}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition ${
                            post.published
                              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                              : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                          }`}
                        >
                          {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          {post.published ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Link href={`/admin/blog/${post.id}`} className="p-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white">
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
