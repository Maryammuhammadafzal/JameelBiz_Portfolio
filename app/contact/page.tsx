'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or need support? We&apos;re here to help. Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-600 p-8 text-center transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Call us directly during business hours</p>
              <a href="tel:+12345678900" className="text-purple-600 font-bold text-lg hover:text-purple-700">
                +1 (234) 567-8900
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-600 p-8 text-center transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Email</h3>
              <p className="text-gray-600 mb-4">We respond to all emails within 24 hours</p>
              <a href="mailto:info@jameelbiz.com" className="text-purple-600 font-bold text-lg hover:text-purple-700">
                info@jameelbiz.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-600 p-8 text-center transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Office</h3>
              <p className="text-gray-600">
                123 Business Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Send us a Message</h2>
          
          {submitted && (
            <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is your response time?',
                a: 'We typically respond to all inquiries within 24 hours during business days (Monday-Friday).'
              },
              {
                q: 'Do you offer phone support?',
                a: 'Yes, we offer phone support during business hours: 9 AM - 6 PM EST. Call +1 (234) 567-8900.'
              },
              {
                q: 'Can I schedule a demo?',
                a: 'Absolutely! Fill out the contact form and mention that you&apos;d like to schedule a demo. Our team will reach out to arrange a time.'
              },
              {
                q: 'What countries do you serve?',
                a: 'We serve customers globally, with primary focus on South Asia, North America, and Europe.'
              },
              {
                q: 'Do you have a support documentation?',
                a: 'Yes, visit our help center or Academy section for comprehensive guides and tutorials.'
              }
            ].map((item, i) => (
              <details key={i} className="bg-gray-50 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg text-black group-hover:text-purple-600 transition">
                  {item.q}
                </summary>
                <p className="text-gray-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and transform your business today.
          </p>
          <Link
            href="/dashboard/buyer"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  )
}
