import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/services-data'

export const dynamic = 'force-dynamic'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return {}

  return {
    title: `${service.name} | Jameel Biz - Premium SEO Services`,
    description: service.fullDesc,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const hasProcess = 'process' in service && service.process
  const hasResults = 'results' in service && service.results
  const hasBenefits = 'benefits' in service && service.benefits
  const hasPricing = 'pricing' in service && service.pricing

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{service.icon}</span>
            <span className="text-sm font-bold text-primary uppercase">Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {service.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            {service.fullDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/marketplace"
              className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition text-center"
            >
              Browse {service.name} Offers
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition text-center"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {hasResults && (
        <section className="py-16 px-6 bg-black text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-purple-500 mb-2">{service.results.backlinks}</p>
                <p className="text-gray-300">{service.results.traffic}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-500 mb-2">{service.results.value}</p>
                <p className="text-gray-300">Quality Metrics</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-500 mb-2">{service.pricing}</p>
                <p className="text-gray-300">Flexible Pricing</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {hasBenefits && (
        <section className="py-20 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              Key Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-100 text-purple-600 font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{benefit.split(' ')[0]}</h3>
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {hasProcess && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              How It Works
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {service.process.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-purple-600 hover:shadow-lg transition">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-4 text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why This Service Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
            Why {service.name}?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Targeted Results',
                desc: 'We focus on placements that matter most to your business and audience.'
              },
              {
                icon: '✅',
                title: 'Verified Quality',
                desc: 'Every publisher and placement is thoroughly verified for authenticity.'
              },
              {
                icon: '📈',
                title: 'Measurable Impact',
                desc: 'Track real results with detailed analytics and ROI reporting.'
              },
              {
                icon: '💼',
                title: 'Professional Service',
                desc: 'Dedicated account managers ensure your campaign runs smoothly.'
              },
              {
                icon: '🛡️',
                title: 'White-Hat Methods',
                desc: 'All strategies follow Google guidelines for sustainable growth.'
              },
              {
                icon: '⏱️',
                title: 'Quick Turnaround',
                desc: 'Get results in days, not weeks, with our streamlined process.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-purple-600 transition">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: `How long does it take to see results from ${service.name}?`,
                a: 'Most implementations go live within 48 hours to 2 weeks depending on the specific service. You&apos;ll see benefits over 4-8 weeks as search engines process and reflect changes.'
              },
              {
                q: `What makes your ${service.name} service different?`,
                a: 'We have direct relationships with industry experts and publishers, ensuring authentic implementations with quality results. No automated systems - everything is done with expertise and care.'
              },
              {
                q: 'Are all methods white-hat and ethical?',
                a: 'Yes, 100%. All our strategies follow best practices and guidelines. We focus on ethical methods only, using natural approaches and proven techniques.'
              },
              {
                q: 'Do you offer custom packages?',
                a: 'Yes! We offer flexible packages for different budgets and needs. Contact our team for a custom quote tailored to your goals.'
              },
              {
                q: 'What if I&apos;m not satisfied with results?',
                a: 'We stand behind our work and monitor all deliverables. If you&apos;re not satisfied, we&apos;ll work with you to improve results or adjust strategy.'
              },
              {
                q: 'Can I customize the service for my needs?',
                a: 'Absolutely. Our services are flexible and can be customized based on your specific goals, budget, and timeline. Contact our team to discuss options.'
              }
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:border-purple-600 transition group">
                <summary className="font-bold text-lg text-black group-hover:text-purple-600 transition flex justify-between items-center">
                  {item.q}
                  <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with {service.name} today and see results within weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Get Started Now
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Questions About {service.name}?</h2>
            <p className="text-lg text-gray-600">Our team is ready to help you get the best results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-black mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="text-lg font-semibold text-black">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-lg font-semibold text-black">hello@jameelbiz.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Response Time</p>
                  <p className="text-lg font-semibold text-black">Within 2 hours</p>
                </div>
              </div>
            </div>

            <form className="bg-gray-50 rounded-xl p-8 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
              />
              <textarea
                placeholder={`Questions about ${service.name}?`}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
              />
              <button className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Jameel Biz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
