export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold text-white">About Jameel Biz</h1>
          <p className="text-xl text-slate-300">
            We&apos;re building the trusted marketplace for buying and selling websites across South Asia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Our Story</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              Founded in 2024, Jameel Biz emerged from a simple observation: buying and selling websites was fragmented and risky. There was no trusted platform for entrepreneurs, developers, and businesses to connect.
            </p>
            <p>
              We created Jameel Biz to bridge this gap. Our platform provides security, transparency, and ease of use for all parties involved in website transactions.
            </p>
            <p>
              Today, we serve thousands of buyers and sellers across Pakistan, India, and beyond, facilitating millions of dollars in website trades.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Mission</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Empower Creators',
                description: 'Help digital entrepreneurs monetize their work and build wealth',
              },
              {
                title: 'Enable Growth',
                description: 'Connect businesses with ready-made online assets they can scale',
              },
              {
                title: 'Build Trust',
                description: 'Create a secure, transparent marketplace for digital commerce',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Our Values</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400">✓</span>
              <span><strong>Security First:</strong> Protecting user data and transactions is paramount</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">✓</span>
              <span><strong>Transparency:</strong> Clear pricing, processes, and terms for all users</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">✓</span>
              <span><strong>Innovation:</strong> Continuously improving our platform and features</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">✓</span>
              <span><strong>Community:</strong> Supporting our users&apos; success and growth</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
