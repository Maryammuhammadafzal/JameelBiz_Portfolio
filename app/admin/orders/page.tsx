'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { motion } from 'framer-motion'

export default function SectionPage() {
  const pageNames: Record<string, string> = {
    users: 'User Management',
    buyers: 'Buyer Management',
    sellers: 'Seller Management',
    websites: 'Website Management',
    orders: 'Orders',
    courses: 'Course Management',
    payments: 'Payment Management',
    seo: 'SEO Manager',
    support: 'Support Tickets',
    settings: 'Settings',
  }

  const section = (typeof window !== 'undefined' ? window.location.pathname.split('/')[2] : 'admin') as keyof typeof pageNames
  const pageTitle = pageNames[section] || 'Admin'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <AdminSidebar />

      <div className="md:ml-64 p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{pageTitle}</h1>
            <p className="text-gray-400">Manage and monitor {section} on your platform.</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 min-h-96 flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-10 h-10 bg-blue-500/40 rounded-full" />
              </div>
              <p className="text-gray-400 text-lg">
                {pageTitle} content loading...
              </p>
              <p className="text-gray-500 text-sm">
                This section is being developed. Check back soon!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-6"
              >
                <div className="space-y-3">
                  <div className="h-4 bg-slate-700/50 rounded w-2/3" />
                  <div className="h-8 bg-slate-700/30 rounded w-full" />
                  <div className="h-4 bg-slate-700/50 rounded w-1/2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
