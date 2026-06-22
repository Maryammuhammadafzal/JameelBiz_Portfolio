'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.05 
}: AnimatedTextProps) {
  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function AnimatedGradientText({ 
  text, 
  className = '', 
  delay = 0 
}: Omit<AnimatedTextProps, 'stagger'>) {
  return (
    <motion.span
      initial={{ opacity: 0, backgroundPosition: '0% 50%' }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent animate-gradient-flow ${className}`}
    >
      {text}
    </motion.span>
  )
}
