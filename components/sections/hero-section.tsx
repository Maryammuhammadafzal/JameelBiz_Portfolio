'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { FloatingOrbs } from '@/components/motion/floating-orbs'
import { GlassmorphismCard } from '@/components/motion/glassmorphism-card'
import { AnimatedGradientText } from '@/components/motion/animated-text'

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

  return (
    <section className="relative bg-gradient-to-b from-white via-purple-50/30 to-white py-32 px-6 overflow-hidden">
      <FloatingOrbs />

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
                className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                ✨ Trusted by 5000+ Agencies
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                High-Authority Guest Posts{' '}
                <span style={{ color: '#7a51f5' }}>& SEO Growth</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with 500+ verified high-authority publishers. Scale your SEO strategy with quality backlinks from real publishers with real traffic.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#5933cd' }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/marketplace"
                  className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg"
                >
                  Browse Publishers
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div className="flex items-center gap-12 pt-8" variants={itemVariants}>
              {[
                { number: '500+', label: 'Publishers', color: '#dadada' },
                { number: '10K+', label: 'Links', color: '#dadadc' },
                { number: '99%', label: 'Satisfaction', color: '#e4e4e4' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                >
                  <p className="text-3xl font-bold" style={{ color: stat.color }}>{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Card with 3D effect */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-purple-200/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"
              animate={{ 
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <GlassmorphismCard className="relative space-y-6 hover:shadow-2xl" hover>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Live Tracking</span>
                <motion.span
                  className="text-purple-600 text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ●
                </motion.span>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '📊', title: 'Campaign Monitor', desc: 'Track all placements live' },
                  { icon: '✅', title: 'Quality Assured', desc: 'All publishers verified' },
                  { icon: '🎯', title: 'Expert Support', desc: 'Dedicated team 24/7' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassmorphismCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
