'use client'

import Link from 'next/link'
import { useState } from 'react'

interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  customPrice?: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'custom'>('monthly')

  const plans: PricingPlan[] = [
    {
      id: 'guest-posting',
      name: 'Guest Posting',
      description: 'Premium content placement on high-authority websites',
      monthlyPrice: 299,
      features: [
        '1 article per month',
        'DA 40+ publishers',
        'SEO-optimized content',
        'Instant indexing',
        'Performance tracking',
        'Email support',
      ],
      cta: 'Get Started',
    },
    {
      id: 'link-insertion',
      name: 'Link Insertions',
      description: 'Strategic link placement in existing content',
      monthlyPrice: 199,
      customPrice: 'Custom packages available',
      features: [
        '2-5 links per month',
        'DA 40-65 pages',
        'Contextual placement',
        '48-hour turnaround',
        'Full reporting',
        'Dedicated manager',
      ],
      cta: 'Get Started',
    },
    {
      id: 'link-building',
      name: 'Link Building Package',
      description: 'Comprehensive white-hat link building',
      monthlyPrice: 399,
      features: [
        '5-20 quality links/month',
        'Premium publishers',
        'Content creation included',
        'Competitor analysis',
        'Monthly reports',
        'Priority support',
      ],
      highlighted: true,
      cta: 'Get Started',
    },
    {
      id: 'digital-pr',
      name: 'Digital PR',
      description: 'Media coverage and brand authority building',
      monthlyPrice: 599,
      features: [
        'Press release distribution',
        'Media placements',
        'High-authority backlinks',
        'Brand mentions',
        'Coverage tracking',
        'Crisis support',
      ],
      cta: 'Book a Call',
    },
    {
      id: 'monthly-seo',
      name: 'Monthly SEO Package',
      description: 'Complete monthly SEO management',
      monthlyPrice: 799,
      customPrice: 'Enterprise pricing available',
      features: [
        'Technical SEO audit',
        'Content optimization',
        'Link building (10+ links)',
        'Local SEO optimization',
        'Weekly reports',
        'Dedicated account manager',
      ],
      cta: 'Get Started',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Custom',
      description: 'Fully customized SEO strategy',
      monthlyPrice: 0,
      customPrice: 'Custom pricing',
      features: [
        'Complete custom strategy',
        'Unlimited services',
        'Dedicated team',
        'Real-time reporting',
        'Weekly strategy calls',
        'Guaranteed results bonus',
      ],
      cta: 'Schedule Consultation',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-black">
            Transparent SEO Pricing That Scales
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose the perfect SEO package for your business. Monthly or custom pricing available.
          </p>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                billingCycle === 'monthly'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Monthly Plans
            </button>
            <button
              onClick={() => setBillingCycle('custom')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                billingCycle === 'custom'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Custom Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl border-2 p-8 transition hover:shadow-xl ${
                  plan.highlighted
                    ? 'border-purple-600 bg-purple-50 relative'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
                
                <div className="mb-6">
                  {billingCycle === 'monthly' ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-black">${plan.monthlyPrice}</span>
                        <span className="text-gray-600">/month</span>
                      </div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-black mb-2">
                      {plan.customPrice || 'Custom Pricing'}
                    </div>
                  )}
                </div>
                
                <Link
                  href={plan.cta === 'Schedule Consultation' ? '/contact' : '/checkout'}
                  className={`block w-full py-3 px-4 rounded-lg font-bold text-center transition mb-6 ${
                    plan.highlighted
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {plan.cta}
                </Link>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-4">What's Included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'Can I customize these packages?',
                a: 'Absolutely. We create custom packages tailored to your specific goals, budget, and timeline. Contact us for a consultation.',
              },
              {
                q: 'What if I&apos;m not satisfied with results?',
                a: 'We stand behind our work. If you are not satisfied, we will work with you to improve results or adjust the strategy.',
              },
              {
                q: 'Is there a contract?',
                a: 'No long-term contracts required. You can start, pause, or cancel any service with no penalties.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers. Monthly billing and custom arrangements available.',
              },
              {
                q: 'How quickly will I see results?',
                a: 'Most clients see initial results within 2-4 weeks. SEO is a long-term investment; significant rankings typically take 3-6 months.',
              },
              {
                q: 'Do you offer a free consultation?',
                a: 'Yes! Schedule a free 30-minute strategy call to discuss your goals and find the right package for your business.',
              },
            ].map((item, i) => (
              <details key={i} className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-purple-300 transition">
                <summary className="font-bold text-black text-lg">
                  {item.q}
                </summary>
                <p className="text-gray-700 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-purple-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your SEO?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Get started today with no long-term contracts. Choose your plan or schedule a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/checkout"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-purple-700 transition"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
