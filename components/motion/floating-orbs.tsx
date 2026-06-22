'use client'

import { motion } from 'framer-motion'

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ 
          y: [0, -100, 0],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', right: '5%' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-br from-purple-300 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ 
          y: [0, 100, 0],
          x: [0, -50, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ bottom: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ 
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ top: '50%', left: '50%' }}
      />
    </div>
  )
}

export function FloatingOrbsSmall() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-15"
        animate={{ 
          y: [0, -60, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '20%', right: '10%' }}
      />
      <motion.div
        className="absolute w-40 h-40 bg-gradient-to-br from-purple-300 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10"
        animate={{ 
          y: [0, 60, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ bottom: '20%', left: '15%' }}
      />
    </div>
  )
}
