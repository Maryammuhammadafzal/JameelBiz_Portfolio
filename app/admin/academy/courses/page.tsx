'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import Link from 'next/link'
import { BookOpen, Plus, Edit2, Trash2, Users, Eye } from 'lucide-react'
import { useState } from 'react'

const courses = [
  { id: 1, title: 'Complete Link Building Masterclass', slug: 'link-building-masterclass', instructor: 'John Doe', lessons: 12, students: 324, price: 199, published: true },
  { id: 2, title: 'SEO Fundamentals for Beginners', slug: 'seo-fundamentals', instructor: 'Jane Smith', lessons: 8, students: 156, price: 99, published: true },
  { id: 3, title: 'Advanced Technical SEO', slug: 'advanced-technical-seo', instructor: 'Mike Johnson', lessons: 15, students: 89, price: 299, published: false },
  { id: 4, title: 'Digital PR & Outreach Strategy', slug: 'digital-pr-strategy', instructor: 'Sarah Williams', lessons: 10, students: 67, price: 249, published: true },
]

export default function AcademyCoursesManagement() {
  const [courseList, setCourseList] = useState(courses)

  const togglePublish = (id: number) => {
    setCourseList(courseList.map(c => c.id === id ? { ...c, published: !c.published } : c))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Academy Courses</h1>
              <p className="text-gray-400">Manage courses and lessons</p>
            </div>
            <Link href="/admin/academy/courses/create" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Course
            </Link>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {courseList.map((course) => (
              <div key={course.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-purple-500 transition p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{course.title}</h3>
                      <p className="text-xs text-gray-400">by {course.instructor}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.published
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {course.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b border-gray-700">
                  <div>
                    <p className="text-xs text-gray-400">Lessons</p>
                    <p className="text-lg font-bold text-white">{course.lessons}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Students</p>
                    <p className="text-lg font-bold text-white">{course.students}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="text-lg font-bold text-white">${course.price}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link
                    href={`/admin/academy/courses/${course.id}`}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 font-medium"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Link>
                  <button
                    onClick={() => togglePublish(course.id)}
                    className="px-4 py-2 border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-500/10 transition flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    {course.published ? 'Hide' : 'Show'}
                  </button>
                  <button className="px-4 py-2 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
