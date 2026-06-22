'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MessagesDashboard() {
  const [conversations] = useState([
    {
      id: '1',
      recipientName: 'John Smith',
      lastMessage: 'Thanks for the website, it&apos;s amazing!',
      lastTime: '2 hours ago',
      unread: 0,
    },
    {
      id: '2',
      recipientName: 'Sarah Johnson',
      lastMessage: 'Do you have any documentation?',
      lastTime: '1 day ago',
      unread: 1,
    },
  ])

  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [messageText, setMessageText] = useState('')

  const mockMessages = [
    { id: '1', senderId: 'other', text: 'Hi, I\'m interested in your website', time: '2 hours ago' },
    { id: '2', senderId: 'me', text: 'Thanks for your interest! What would you like to know?', time: '2 hours ago' },
    { id: '3', senderId: 'other', text: 'Thanks for the website, it\'s amazing!', time: '2 hours ago' },
  ]

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
                className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Wallet
              </Link>
              <Link
                href="/dashboard/messages"
                className="block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
              >
                Messages
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex h-screen gap-6">
            {/* Conversations List */}
            <div className="w-80 border-r border-slate-700 bg-slate-900/50 p-4">
              <h2 className="mb-4 text-lg font-semibold text-white">Conversations</h2>
              {conversations.length === 0 ? (
                <p className="text-slate-400">No conversations yet</p>
              ) : (
                <div className="space-y-2">
                  {conversations.map(conversation => (
                    <button
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`w-full rounded-lg p-4 text-left transition ${
                        selectedConversation === conversation.id
                          ? 'bg-blue-600'
                          : 'hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <p className="font-medium text-white">{conversation.recipientName}</p>
                        {conversation.unread > 0 && (
                          <span className="inline-block rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                      <p className="line-clamp-2 text-xs text-slate-400">{conversation.lastMessage}</p>
                      <p className="mt-2 text-xs text-slate-500">{conversation.lastTime}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-slate-800/50 p-6">
              {selectedConversation ? (
                <>
                  {/* Messages */}
                  <div className="mb-4 flex-1 overflow-y-auto space-y-4">
                    {mockMessages.map(msg => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs rounded-lg px-4 py-2 ${
                            msg.senderId === 'me'
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-700 text-slate-100'
                          }`}
                        >
                          <p>{msg.text}</p>
                          <p className="mt-1 text-xs opacity-70">{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={e => setMessageText(e.target.value)}
                      onKeyPress={e => {
                        if (e.key === 'Enter' && messageText.trim()) {
                          setMessageText('')
                        }
                      }}
                      className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center">
                  <p className="text-slate-400">Select a conversation to start messaging</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
