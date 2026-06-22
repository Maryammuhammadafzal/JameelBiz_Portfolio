'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2 },
    },
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-20"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl opacity-15"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div
                className="inline-block bg-blue-100 text-primary px-4 py-1 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                🚀 Trusted by 5000+ Agencies
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight">
                Premium Link Building{' '}
                <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                  & SEO Growth
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Connect with 500+ verified high-authority publishers. Scale your SEO strategy with quality backlinks from
                real publishers with real traffic.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition duration-300 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/marketplace"
                  className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition duration-300 text-lg"
                >
                  Browse Publishers
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div className="flex items-center gap-12 pt-8" variants={itemVariants}>
              {[
                { number: '500+', label: 'Publishers' },
                { number: '10K+', label: 'Links Placed' },
                { number: '99%', label: 'Satisfaction' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                >
                  <p className="text-3xl font-bold text-black">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Card */}
          <motion.div
            variants={floatingVariants}
            initial="hidden"
            animate={['visible', 'float']}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-lg group-hover:blur-xl transition"
              animate={{ 
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
              className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-xl"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Real-time Tracking</span>
                  <motion.span
                    className="text-green-500 text-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ●
                  </motion.span>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: '📊', title: 'Campaign Monitor', desc: 'Track all placements live' },
                    { icon: '✅', title: 'Quality Assured', desc: 'All publishers verified' },
                    { icon: '🎯', title: 'Expert Support', desc: 'Dedicated team 24/7' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.2 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-black">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
