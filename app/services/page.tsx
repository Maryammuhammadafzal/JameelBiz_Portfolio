export default function Services() {
  const services = [
    {
      title: 'Website Listing',
      description: 'Easily list your website with detailed information, screenshots, and pricing',
      features: ['High visibility', 'Detailed analytics', 'SEO optimization'],
    },
    {
      title: 'Secure Escrow',
      description: 'Protect both buyers and sellers with our secure escrow service',
      features: ['Third-party protection', 'Fund holding', 'Dispute resolution'],
    },
    {
      title: 'Payment Processing',
      description: 'Multiple payment methods for convenient transactions',
      features: ['Stripe integration', 'PayPal support', 'Payoneer integration'],
    },
    {
      title: 'Wallet System',
      description: 'Manage your funds in USD and PKR with instant withdrawals',
      features: ['Multi-currency', 'Low fees', 'Fast payouts'],
    },
    {
      title: 'Messaging & Support',
      description: 'Direct communication channel between buyers and sellers',
      features: ['Real-time chat', '24/7 availability', 'Translation support'],
    },
    {
      title: 'Analytics & Reports',
      description: 'Track performance and insights about your website',
      features: ['View tracking', 'Review analytics', 'Sales reports'],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-bold text-blue-500">
            Jameel Biz
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-slate-300 hover:text-white">
              Home
            </a>
            <a href="/about" className="text-sm text-slate-300 hover:text-white">
              About
            </a>
            <a href="/services" className="text-sm font-semibold text-blue-400">
              Services
            </a>
            <a href="/pricing" className="text-sm text-slate-300 hover:text-white">
              Pricing
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold text-white">Our Services</h1>
          <p className="text-xl text-slate-300">
            Comprehensive tools and services to make buying and selling websites seamless and secure
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mb-4 text-slate-400">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-blue-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mb-8 text-slate-300">
            Join thousands of successful buyers and sellers on Jameel Biz
          </p>
          <a
            href="/sign-up"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Create Your Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-400">
          <p>&copy; 2025 Jameel Biz. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
