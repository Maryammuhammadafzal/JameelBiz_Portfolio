'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  TrendingUp,
  Settings,
  BarChart3,
  Globe,
  BookOpen,
  MessageSquare,
  DollarSign,
  Menu,
  X,
  FileText,
  Layers,
  Zap,
  Edit,
  Store,
  Trophy,
  Search,
  Share,
} from 'lucide-react'
import { useState } from 'react'

interface MenuItem {
  href?: string
  label: string
  icon: any
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  
  // Website Management
  {
    label: 'Website Management',
    icon: Globe,
    submenu: [
      { href: '/admin/content/home', label: 'Home Page', icon: FileText },
      { href: '/admin/content/about', label: 'About Us', icon: FileText },
      { href: '/admin/content/contact', label: 'Contact', icon: FileText },
      { href: '/admin/content/faq', label: 'FAQ', icon: FileText },
      { href: '/admin/content/menu', label: 'Manage Menu', icon: Layers },
      { href: '/admin/content/banners', label: 'Banners & CTA', icon: Edit },
    ],
  },

  // Services Management
  {
    label: 'Services Management',
    icon: Zap,
    submenu: [
      { href: '/admin/services', label: 'All Services', icon: FileText },
      { href: '/admin/services/create', label: 'Add New Service', icon: FileText },
      { href: '/admin/services/categories', label: 'Categories', icon: Layers },
    ],
  },

  // Pricing Management
  {
    label: 'Pricing Management',
    icon: DollarSign,
    submenu: [
      { href: '/admin/pricing', label: 'All Plans', icon: FileText },
      { href: '/admin/pricing/create', label: 'Add New Plan', icon: FileText },
      { href: '/admin/pricing/currencies', label: 'Currencies', icon: DollarSign },
    ],
  },

  // Blog Management
  {
    label: 'Blog Management',
    icon: Edit,
    submenu: [
      { href: '/admin/blog', label: 'All Posts', icon: FileText },
      { href: '/admin/blog/create', label: 'Create Post', icon: FileText },
      { href: '/admin/blog/categories', label: 'Categories', icon: Layers },
      { href: '/admin/blog/comments', label: 'Comments', icon: MessageSquare },
    ],
  },

  // Academy Management
  {
    label: 'Academy Management',
    icon: BookOpen,
    submenu: [
      { href: '/admin/academy/courses', label: 'Courses', icon: BookOpen },
      { href: '/admin/academy/lessons', label: 'Lessons', icon: FileText },
      { href: '/admin/academy/enrollments', label: 'Enrollments', icon: Users },
      { href: '/admin/academy/certificates', label: 'Certificates', icon: Trophy },
    ],
  },

  // Marketplace Management
  {
    label: 'Marketplace Management',
    icon: Store,
    submenu: [
      { href: '/admin/marketplace/websites', label: 'Websites', icon: Globe },
      { href: '/admin/marketplace/categories', label: 'Categories', icon: Layers },
      { href: '/admin/marketplace/niches', label: 'Niches', icon: FileText },
      { href: '/admin/marketplace/reviews', label: 'Reviews', icon: MessageSquare },
    ],
  },

  // User Management
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/orders', label: 'Orders', icon: BarChart3 },
  
  // SEO & Global
  {
    label: 'SEO & Global',
    icon: Search,
    submenu: [
      { href: '/admin/seo', label: 'SEO Manager', icon: Search },
      { href: '/admin/redirects', label: 'Redirects', icon: Share },
      { href: '/admin/settings', label: 'Global Settings', icon: Settings },
    ],
  },
]

// Icon placeholder for items not yet available (using existing imports)

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const toggleSubmenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const Icon = item.icon
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isExpanded = expandedMenus.includes(item.label)
    const isActive = item.href && pathname === item.href

    if (hasSubmenu) {
      return (
        <div key={item.label}>
          <button
            onClick={() => toggleSubmenu(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isExpanded
                ? 'bg-gray-800/50 text-purple-400'
                : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium flex-1 text-left">{item.label}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Layers className="w-4 h-4" />
            </motion.div>
          </button>

          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="pl-4 space-y-1"
            >
              {item.submenu?.map((subitem) => renderMenuItem(subitem, depth + 1))}
            </motion.div>
          )}
        </div>
      )
    }

    return (
      <motion.div key={item.href} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={item.href || '#'}
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            isActive
              ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg'
              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
          } ${depth > 0 ? 'text-sm' : ''}`}
        >
          <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
          <span className="font-medium">{item.label}</span>
          {isActive && (
            <motion.div
              layoutId="activeBorder"
              className="ml-auto w-1 h-6 bg-white rounded-r-full"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </Link>
      </motion.div>
    )
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-40 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 z-30 w-64 h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black border-r border-gray-700/50 overflow-y-auto md:translate-x-0"
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700/50">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Jameel Biz</p>
              <p className="text-xs text-gray-400">Admin CMS</p>
            </div>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50 bg-gradient-to-t from-slate-900 to-transparent">
          <p className="text-xs text-gray-400 text-center">
            Jameel Biz Admin v1.0
          </p>
        </div>
      </motion.aside>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-20 bg-black/50"
        />
      )}
    </>
  )
}
