'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { servicesData } from '@/lib/services-data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      {/* Black contact header */}
      <div className="bg-black text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-8">
            <a href="tel:+1234567890" className="hover:text-primary transition">📞 +1 (234) 567-8900</a>
            <a href="mailto:info@jameelbiz.com" className="hover:text-primary transition">✉️ info@jameelbiz.com</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition">Facebook</a>
            <a href="#" className="hover:text-primary transition">Twitter</a>
            <a href="#" className="hover:text-primary transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            {/* Logo */}
          <Link href="/" className="font-bold text-2xl" style={{ color: '#313131' }}>
            Jameel Biz
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="font-medium text-gray-900 hover:text-purple-600 transition">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-gray-900 hover:text-purple-600 transition">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {/* Core Services */}
                <div className="px-4 pb-4 border-b border-gray-200">
                  <p className="text-xs font-bold text-gray-600 uppercase mb-3">Core Services</p>
                  <div className="space-y-2">
                    {servicesData.coreServices.map(service => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-3 py-2 rounded hover:bg-purple-50 hover:text-purple-600 transition"
                      >
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-gray-600">{service.shortDesc}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Search Services */}
                <div className="px-4 py-4 border-b border-gray-200">
                  <p className="text-xs font-bold text-gray-600 uppercase mb-3">Search Services</p>
                  <div className="grid grid-cols-2 gap-2">
                    {servicesData.searchServices.map(service => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="px-3 py-2 rounded hover:bg-purple-50 hover:text-purple-600 transition"
                      >
                        <div className="font-medium text-sm">{service.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Additional Services */}
                <div className="px-4 pt-4">
                  <p className="text-xs font-bold text-gray-600 uppercase mb-3">Additional Services</p>
                  <div className="grid grid-cols-2 gap-2">
                    {servicesData.additionalServices.map(service => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="px-3 py-2 rounded hover:bg-purple-50 hover:text-purple-600 transition"
                      >
                        <div className="font-medium text-sm">{service.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/courses" className="font-medium hover:text-purple-600 transition">
              Academy
            </Link>

            <Link href="/marketplace" className="font-medium hover:text-purple-600 transition">
              Marketplace
            </Link>

            <Link href="/pricing" className="font-medium hover:text-purple-600 transition">
              Pricing
            </Link>

            <Link href="/blog" className="font-medium hover:text-purple-600 transition">
              Blog
            </Link>

            <Link href="/contact" className="font-medium hover:text-purple-600 transition">
              Contact Us
            </Link>

            <div className="flex gap-3">
              <Link
                href="/sign-in"
                className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition"
              >
                Login
              </Link>
              <Link
                href="/dashboard/buyer"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              <Link href="/" className="block font-medium hover:text-purple-600 transition">
                Home
              </Link>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left font-medium flex items-center justify-between hover:text-purple-600 transition"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="pl-4 space-y-3 border-l-2 border-purple-600">
                  {[...servicesData.coreServices, ...servicesData.searchServices, ...servicesData.additionalServices].map(service => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block text-sm hover:text-purple-600 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/courses" className="block font-medium hover:text-purple-600 transition">
                Academy
              </Link>

              <Link href="/marketplace" className="block font-medium hover:text-purple-600 transition">
                Marketplace
              </Link>

              <Link href="/pricing" className="block font-medium hover:text-purple-600 transition">
                Pricing
              </Link>

              <Link href="/blog" className="block font-medium hover:text-purple-600 transition">
                Blog
              </Link>

              <Link href="/contact" className="block font-medium hover:text-purple-600 transition">
                Contact Us
              </Link>

              <div className="flex gap-2 pt-2">
                <Link
                  href="/sign-in"
                  className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg font-medium text-center hover:bg-blue-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/dashboard/buyer"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium text-center hover:bg-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
