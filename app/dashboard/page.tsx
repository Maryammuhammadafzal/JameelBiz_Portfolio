import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) {
    redirect('/sign-in')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-700 bg-slate-900/50">
          <div className="p-6">
            <h2 className="mb-6 text-lg font-semibold text-white">Dashboard</h2>
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
              >
                Overview
              </Link>
              <Link
                href="/dashboard/seller"
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                My Websites
              </Link>
              <Link
                href="/dashboard/buyer"
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                My Orders
              </Link>
              <Link
                href="/dashboard/wallet"
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Wallet
              </Link>
              <Link
                href="/dashboard/messages"
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Messages
              </Link>
              <Link
                href="/dashboard/settings"
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Settings
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-8">
            <h1 className="mb-2 text-3xl font-bold text-white">Welcome, {session.user.name}!</h1>
            <p className="mb-8 text-slate-400">Here&apos;s your dashboard overview</p>

            {/* Quick Stats */}
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <p className="text-sm text-slate-400">Active Listings</p>
                <p className="mt-2 text-3xl font-bold text-white">0</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <p className="text-sm text-slate-400">Total Sales</p>
                <p className="mt-2 text-3xl font-bold text-white">$0</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <p className="text-sm text-slate-400">Wallet Balance</p>
                <p className="mt-2 text-3xl font-bold text-blue-400">$0</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <p className="text-sm text-slate-400">Messages</p>
                <p className="mt-2 text-3xl font-bold text-white">0</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-semibold text-white">Recent Activity</h2>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <p className="text-slate-400">No recent activity yet. Start by listing a website or making a purchase.</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-semibold text-white">Quick Actions</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href="/dashboard/seller/new"
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500"
                >
                  <h3 className="font-semibold text-white">List a Website</h3>
                  <p className="mt-2 text-sm text-slate-400">Add your website to the marketplace</p>
                </Link>
                <Link
                  href="/marketplace"
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500"
                >
                  <h3 className="font-semibold text-white">Browse Websites</h3>
                  <p className="mt-2 text-sm text-slate-400">Explore available websites to purchase</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
