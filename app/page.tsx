import Link from 'next/link'
import { auth } from '@/lib/auth'
import BlogSection from '@/components/sections/blog-section'
import TeamSection from '@/components/sections/team-section'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const session = await auth()

  const courses = [
    { id: 1, title: 'Link Building Fundamentals', lessons: 12, duration: '4 weeks', students: 2840, rating: 4.9, price: '$99' },
    { id: 2, title: 'Guest Posting Mastery', lessons: 15, duration: '5 weeks', students: 2104, rating: 4.8, price: '$129' },
    { id: 3, title: 'Technical SEO Bootcamp', lessons: 18, duration: '6 weeks', students: 1956, rating: 4.9, price: '$149' },
  ]

  const testimonials = [
    { name: 'Sarah Johnson', role: 'SEO Manager', company: 'TechStart Inc.', text: 'Jameel Biz transformed our link building strategy. Amazing results in just 3 months!', avatar: '👩‍💼' },
    { name: 'Michael Chen', role: 'Digital Director', company: 'Growth Labs', text: 'The best SEO platform we\'ve used. Quality publishers and seamless integration.', avatar: '👨‍💼' },
    { name: 'Emma Davis', role: 'Marketing Lead', company: 'Digital Ventures', text: 'Professional service, transparent pricing, and exceptional support team.', avatar: '👩‍🔬' },
  ]

  const faqs = [
    { q: 'How do I get started?', a: 'Sign up for a free account and browse our marketplace of verified publishers. Create your first campaign in minutes.' },
    { q: 'What makes your publishers different?', a: 'All publishers are manually verified, have real traffic, and maintain high editorial standards. We audit quality continuously.' },
    { q: 'How long until I see results?', a: 'Most clients see ranking improvements within 4-8 weeks, depending on their initial SEO foundation and competition.' },
    { q: 'Do you offer support?', a: 'Yes! We provide 24/7 support, strategy consultations, and dedicated account managers for enterprise clients.' },
    { q: 'What\'s your pricing model?', a: 'Per-placement pricing. You pay for each guest post or link insertion. No hidden fees or long-term contracts.' },
    { q: 'Can I manage campaigns myself?', a: 'Absolutely. Our platform is designed for self-service, but we also offer managed services for larger campaigns.' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-blue-100 text-primary px-4 py-1 rounded-full text-sm font-medium">
                  🚀 Trusted by 5000+ Agencies
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight">
                  High-Authority Guest Posts <span style={{ color: '#7a51f5' }}>& SEO Growth</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Connect with 500+ verified high-authority publishers. Scale your SEO strategy with quality backlinks from real publishers with real traffic.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/sign-in"
                  className="text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition duration-300 text-lg"
                  style={{ backgroundColor: '#5933cd' }}
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/marketplace"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition duration-300 text-lg"
                >
                  Browse Publishers
                </Link>
              </div>

              <div className="flex items-center gap-12 pt-8">
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#dadada' }}>500+</p>
                  <p className="text-sm text-gray-600">Publishers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#dadadc' }}>10K+</p>
                  <p className="text-sm text-gray-600">Links Placed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#e4e4e4' }}>99%</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Glassmorphism Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-lg group-hover:blur-xl transition"></div>
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Real-time Tracking</span>
                    <span className="text-green-500 text-xl">●</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">📊</div>
                      <div>
                        <p className="font-semibold text-black">Campaign Monitor</p>
                        <p className="text-sm text-gray-600">Track all placements live</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">✅</div>
                      <div>
                        <p className="font-semibold text-black">Quality Assured</p>
                        <p className="text-sm text-gray-600">All publishers verified</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">🎯</div>
                      <div>
                        <p className="font-semibold text-black">Expert Support</p>
                        <p className="text-sm text-gray-600">Dedicated team 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BY LOGOS ============ */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-medium text-gray-600 mb-12">Trusted by leading agencies and brands worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {['TechCorp', 'StartupHub', 'GrowthLabs', 'DigitalMax'].map((brand) => (
              <div key={brand} className="text-gray-400 font-bold text-lg hover:text-primary transition">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Premium SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for every stage of your SEO journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔗', title: 'Link Building', desc: 'High-quality backlinks from verified publishers' },
              { icon: '✍️', title: 'Guest Posting', desc: 'Authoritative content placements' },
              { icon: '🌐', title: 'Technical SEO', desc: 'Complete site optimization' },
              { icon: '📍', title: 'Local SEO', desc: 'Dominate local search results' },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition"></div>
                <div className="relative z-10">
                  <p className="text-5xl mb-4">{service.icon}</p>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATISTICS COUNTER ============ */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Active Clients', color: '#e4e4e4' },
              { number: '500+', label: 'Verified Publishers', color: '#dadada' },
              { number: '10K+', label: 'Monthly Placements', color: '#dadadc' },
              { number: '300%', label: 'Avg. Traffic Growth', color: '#ddddde' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-5xl font-bold" style={{ color: stat.color }}>{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED WEBSITES ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Featured Publishers</h2>
            <p className="text-xl text-gray-600">Browse our most popular high-authority websites</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'TechNews Pro', dr: 72, da: 68, traffic: '120K', price: '$199' },
              { name: 'Business Insider', dr: 85, da: 78, traffic: '850K', price: '$599' },
              { name: 'Growth Hacker', dr: 65, da: 62, traffic: '95K', price: '$149' },
            ].map((site, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">{site.name}</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">{site.dr}</p>
                      <p className="text-xs text-gray-600">DR Score</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">{site.da}</p>
                      <p className="text-xs text-gray-600">DA Score</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">{site.traffic}</p>
                      <p className="text-xs text-gray-600">Monthly</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-2xl font-bold text-primary mb-4">{site.price}</p>
                    <Link href="/marketplace" className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 transition text-center block">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SEO PACKAGES ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">SEO Packages</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$999', links: '10', features: ['10 quality links', '30-60 day turnaround', 'Basic analytics', 'Email support'] },
              { name: 'Professional', price: '$2,999', links: '30', features: ['30 quality links', '45-90 day turnaround', 'Advanced analytics', 'Priority support'], highlight: true },
              { name: 'Enterprise', price: 'Custom', links: 'Unlimited', features: ['Custom strategy', 'Fast turnaround', 'Real-time reporting', '24/7 support'] },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition transform hover:scale-105 ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl'
                    : 'bg-white border border-gray-200 text-black'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-4xl font-bold mb-6 ${pkg.highlight ? 'text-white' : 'text-primary'}`}>{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${
                  pkg.highlight
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:opacity-90'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SEO ACADEMY PREVIEW ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Learn SEO Mastery</h2>
            <p className="text-xl text-gray-600 mb-8">From beginner to advanced - master every aspect of SEO</p>
            <Link href="/courses" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition">
              Explore All Courses
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                  {course.id === 1 ? '🔗' : course.id === 2 ? '✍️' : '⚙️'}
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-black">{course.title}</h3>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱️ {course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold text-black">{course.rating}</span>
                      <span className="text-sm text-gray-600">({course.students})</span>
                    </div>
                    <p className="font-bold text-primary text-lg">{course.price}</p>
                  </div>
                  <Link href="/courses" className="block w-full bg-primary text-white text-center py-2 rounded-lg font-bold hover:opacity-90 transition">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOG SECTION ============ */}
      <BlogSection />

      {/* ============ TESTIMONIALS ============ */}
      <section id="testimonials" className="py-24 px-6 bg-black text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Join thousands of satisfied agencies and brands</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{t.avatar}</div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role} at {t.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM SECTION ============ */}
      <TeamSection />

      {/* ============ FAQs ============ */}
      <section id="faqs" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our platform</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-black">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Dominate Search Rankings?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join 5000+ agencies and brands scaling their SEO with Jameel Biz
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/sign-in"
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-lg transition"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/marketplace"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition"
            >
              Browse Publishers
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
