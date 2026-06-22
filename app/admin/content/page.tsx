'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import Link from 'next/link'
import { FileText, Plus, Edit2, Trash2 } from 'lucide-react'

const pages = [
  { id: 'home', name: 'Home Page', slug: 'home', sections: 5, lastEdited: '2 hours ago' },
  { id: 'about', name: 'About Us', slug: 'about', sections: 3, lastEdited: '1 day ago' },
  { id: 'contact', name: 'Contact Page', slug: 'contact', sections: 2, lastEdited: '3 days ago' },
  { id: 'faq', name: 'FAQ Page', slug: 'faq', sections: 8, lastEdited: '1 week ago' },
]

export default function ContentManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Website Content</h1>
              <p className="text-gray-400">Manage website pages and content</p>
            </div>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Page
            </button>
          </div>

          {/* Pages Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {pages.map((page) => (
              <div key={page.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 p-6 hover:border-purple-500 transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{page.name}</h3>
                      <p className="text-sm text-gray-400">/{page.slug}</p>
                    </div>
                  </div>
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {page.sections} sections
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">Last edited {page.lastEdited}</p>
                
                <div className="flex gap-3">
                  <Link
                    href={`/admin/content/${page.id}`}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 font-medium"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                  <button className="px-4 py-2 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
