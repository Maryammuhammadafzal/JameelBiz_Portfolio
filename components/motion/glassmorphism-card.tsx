'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function GlassmorphismCard({ 
  children, 
  className = '', 
  delay = 0,
  hover = true 
}: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`group backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        animate={{ backgroundPosition: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
