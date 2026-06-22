let db: any = null

// Safe database client - only create if DATABASE_URL exists
if (process.env.DATABASE_URL) {
  try {
    const { PrismaClient } = require('@prisma/client')
    const globalForPrisma = global as any
    db = globalForPrisma.prisma || new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query'] : [],
    })
    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = db
    }
  } catch (error) {
    console.error('[v0] Failed to initialize Prisma client:', error)
    db = null
  }
}

export { db }
