'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { BookOpen, Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const lessons = [
  { id: 1, title: 'Introduction to Link Building', course: 'Link Building 101', order: 1, published: true },
  { id: 2, title: 'Finding High-Quality Sites', course: 'Link Building 101', order: 2, published: true },
  { id: 3, title: 'Outreach Strategy', course: 'Link Building 101', order: 3, published: false },
  { id: 4, title: 'SEO Fundamentals', course: 'SEO Masterclass', order: 1, published: true },
  { id: 5, title: 'On-Page Optimization', course: 'SEO Masterclass', order: 2, published: true },
]

export default function LessonsManagement() {
  const [lessonList, setLessonList] = useState(lessons)

  const togglePublish = (id: number) => {
    setLessonList(lessonList.map(l => l.id === id ? { ...l, published: !l.published } : l))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Course Lessons</h1>
              <p className="text-gray-400">Manage lessons and lessons content</p>
            </div>
            <Link href="/admin/academy/lessons/create" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Lesson
            </Link>
          </div>

          {/* Lessons Table */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Lesson Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Course</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Order</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lessonList.map((lesson) => (
                    <tr key={lesson.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-purple-400" />
                          <p className="font-medium text-white">{lesson.title}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{lesson.course}</td>
                      <td className="px-6 py-4 text-gray-300">
                        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">{lesson.order}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => togglePublish(lesson.id)}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition ${
                            lesson.published
                              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                              : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                          }`}
                        >
                          {lesson.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          {lesson.published ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Link href={`/admin/academy/lessons/${lesson.id}`} className="p-2 hover:bg-gray-700 rounded transition text-gray-300 hover:text-white">
                            <Edit2 className="w-4 h-4" />
                          </Link>
                          <button className="p-2 hover:bg-red-500/10 rounded transition text-gray-300 hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
