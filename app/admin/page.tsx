'use client'

import { motion } from 'framer-motion'
import { AdminSidebar } from '@/components/admin-sidebar'
import { Users, ShoppingCart, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      label: 'Total Users',
      value: '2,547',
      change: '+12.5%',
      icon: Users,
      color: 'from-purple-600 to-purple-400',
      positive: true,
    },
    {
      label: 'Active Orders',
      value: '1,234',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'from-purple-500 to-purple-400',
      positive: true,
    },
    {
      label: 'Revenue',
      value: '$45,231',
      change: '+15.3%',
      icon: DollarSign,
      color: 'from-purple-600 to-purple-500',
      positive: true,
    },
    {
      label: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      icon: TrendingUp,
      color: 'from-purple-700 to-purple-600',
      positive: false,
    },
  ]

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', amount: '$1,200', status: 'Completed', date: '2 hours ago' },
    { id: '#12344', customer: 'Jane Smith', amount: '$850', status: 'Pending', date: '4 hours ago' },
    { id: '#12343', customer: 'Bob Johnson', amount: '$2,100', status: 'Processing', date: '6 hours ago' },
    { id: '#12342', customer: 'Alice Brown', amount: '$650', status: 'Completed', date: '1 day ago' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />

      {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-400">Welcome back! Here's your performance overview.</p>
            </div>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
              Download Report
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${stat.color} p-0.5 rounded-xl`}
                >
                  <div className="bg-slate-900 rounded-xl p-6 h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-semibold ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        {stat.change}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Charts Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Revenue Trend</h2>
              <div className="h-64 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Chart visualization area</p>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-gray-900/50 backdrop-blur border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Top Services</h2>
              <div className="space-y-4">
                {['Guest Posting', 'Link Building', 'Technical SEO', 'Content Marketing'].map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <p className="text-gray-300">{service}</p>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(idx + 1) * 25}%` }}
                        transition={{ delay: idx * 0.1, duration: 1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Orders */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Order ID</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Customer</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Amount</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-b border-gray-700/50 hover:bg-gray-800/50 transition"
                    >
                      <td className="py-4 px-4 text-white font-medium">{order.id}</td>
                      <td className="py-4 px-4 text-gray-300">{order.customer}</td>
                      <td className="py-4 px-4 text-white font-semibold">{order.amount}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                          order.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-400">{order.date}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
