import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    if (!db) {
      return Response.json(
        { error: 'Database not initialized' },
        { status: 503 }
      )
    }

    const { email, password, name } = await req.json()

    if (!email || !password) {
      return Response.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return Response.json(
        { error: 'Email already in use' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user with Prisma
    const userId = nanoid()
    const user = await db.user.create({
      data: {
        id: userId,
        email,
        name: name || email.split('@')[0],
        password: hashedPassword,
        role: 'BUYER',
      },
    })

    return Response.json(
      { message: 'User created successfully', user: { id: user.id, email: user.email } },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Registration error:', error)
    return Response.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}
