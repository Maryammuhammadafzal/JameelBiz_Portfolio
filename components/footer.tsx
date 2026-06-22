'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="px-6 py-16 border-t border-gray-800">
        <div className="mx-auto max-w-7xl grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-purple-400 mb-4 block">
              Jameel Biz
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Building the trusted marketplace for digital services and solutions across the globe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition">
                GitHub
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition">
                Twitter
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/technical-seo" className="text-gray-400 hover:text-purple-400 transition">
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="text-gray-400 hover:text-purple-400 transition">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link href="/services/link-building" className="text-gray-400 hover:text-purple-400 transition">
                  Link Building
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="text-gray-400 hover:text-purple-400 transition">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-purple-400 transition">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-purple-400 transition">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-purple-400 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-purple-400 transition">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/dashboard/buyer" className="text-gray-400 hover:text-purple-400 transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-purple-400 transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+12345678900" className="text-gray-400 hover:text-purple-400 transition">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:info@jameelbiz.com" className="text-gray-400 hover:text-purple-400 transition">
                    info@jameelbiz.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-400 text-sm">
                    123 Business Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="px-6 py-12 border-t border-gray-800 bg-gradient-to-r from-purple-900/20 to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest updates and insights delivered to your inbox.</p>
            </div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-6 py-8 border-t border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Jameel Biz. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed and developed with ❤️ by Jameel Biz Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
