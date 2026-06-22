'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WalletDashboard() {
  const [balanceUsd] = useState(2500)
  const [balancePkr] = useState(412500)
  const [transactions] = useState([
    {
      id: '1',
      type: 'credit',
      amount: 2500,
      currency: 'USD',
      description: 'Sale - E-commerce Platform',
      date: '2024-01-20',
    },
    {
      id: '2',
      type: 'debit',
      amount: 8500,
      currency: 'USD',
      description: 'Purchase - SaaS Dashboard',
      date: '2024-01-15',
    },
  ])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Jameel Biz
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">
              Dashboard
            </Link>
            <button className="text-sm text-slate-300 hover:text-white">Sign Out</button>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-700 bg-slate-900/50">
          <div className="p-6">
            <h2 className="mb-6 text-lg font-semibold text-white">Dashboard</h2>
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
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
                className="block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
              >
                Wallet
              </Link>
              <Link
                href="/dashboard/messages"
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Messages
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-8">
            <h1 className="mb-8 text-3xl font-bold text-white">Wallet</h1>

            {/* Balance Cards */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-blue-900/20 to-slate-800/50 p-6">
                <p className="text-sm text-slate-400">USD Balance</p>
                <p className="mt-4 text-4xl font-bold text-blue-400">${balanceUsd.toLocaleString()}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Withdraw
                  </button>
                  <button className="flex-1 rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    Add Funds
                  </button>
                </div>
              </div>

              <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-green-900/20 to-slate-800/50 p-6">
                <p className="text-sm text-slate-400">PKR Balance</p>
                <p className="mt-4 text-4xl font-bold text-green-400">₨{balancePkr.toLocaleString()}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                    Withdraw
                  </button>
                  <button className="flex-1 rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    Add Funds
                  </button>
                </div>
              </div>
            </div>

            {/* Currency Conversion */}
            <div className="mb-8 rounded-lg border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Currency Exchange</h2>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="mb-2 text-sm text-slate-400">From USD</p>
                  <input
                    type="number"
                    placeholder="Amount"
                    className="w-full rounded-lg bg-slate-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-2 text-sm text-slate-400">To PKR</p>
                  <input
                    type="text"
                    placeholder="Converted amount"
                    disabled
                    className="w-full rounded-lg bg-slate-700 px-4 py-2 text-white outline-none"
                  />
                </div>
                <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">
                  Convert
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-400">Rate: 1 USD = 165 PKR</p>
            </div>

            {/* Transaction History */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-white">Transaction History</h2>
              {transactions.length === 0 ? (
                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center">
                  <p className="text-slate-400">No transactions yet</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {transactions.map(transaction => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-white">{transaction.description}</p>
                        <p className="text-xs text-slate-400">{transaction.date}</p>
                      </div>
                      <div
                        className={`text-right font-semibold ${
                          transaction.type === 'credit' ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toLocaleString()}{' '}
                        {transaction.currency}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
