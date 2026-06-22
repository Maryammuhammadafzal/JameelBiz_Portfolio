'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Users, Award, Trash2 } from 'lucide-react'
import { useState } from 'react'

const enrollments = [
  { id: 1, student: 'Ahmed Ali', course: 'Link Building Masterclass', progress: 85, completed: false, certificate: false, enrolled: '2024-05-15' },
  { id: 2, student: 'Fatima Khan', course: 'SEO Fundamentals', progress: 100, completed: true, certificate: true, enrolled: '2024-04-20' },
  { id: 3, student: 'Muhammad Hassan', course: 'Digital PR Strategy', progress: 45, completed: false, certificate: false, enrolled: '2024-06-01' },
  { id: 4, student: 'Sara Ahmed', course: 'Technical SEO', progress: 72, completed: false, certificate: false, enrolled: '2024-05-10' },
  { id: 5, student: 'Ali Ibrahim', course: 'Content Marketing', progress: 100, completed: true, certificate: true, enrolled: '2024-03-15' },
]

export default function EnrollmentsManagement() {
  const [enrollmentList, setEnrollmentList] = useState(enrollments)
  const [issuing, setIssuing] = useState<number | null>(null)

  const issueCertificate = (id: number) => {
    setIssuing(id)
    setTimeout(() => {
      setEnrollmentList(enrollmentList.map(e => e.id === id ? { ...e, certificate: true } : e))
      setIssuing(null)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <AdminSidebar />
      
      <div className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Student Enrollments</h1>
            <p className="text-gray-400">Manage course enrollments and certificates</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Enrollments</p>
                  <p className="text-3xl font-bold text-white">{enrollmentList.length}</p>
                </div>
                <Users className="w-12 h-12 text-purple-400 opacity-50" />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Completed</p>
                  <p className="text-3xl font-bold text-green-400">{enrollmentList.filter(e => e.completed).length}</p>
                </div>
                <Award className="w-12 h-12 text-green-400 opacity-50" />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">In Progress</p>
                  <p className="text-3xl font-bold text-yellow-400">{enrollmentList.filter(e => !e.completed).length}</p>
                </div>
                <Users className="w-12 h-12 text-yellow-400 opacity-50" />
              </div>
            </div>
          </div>

          {/* Enrollments Table */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Student</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Course</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Progress</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Certificate</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollmentList.map((enrollment) => (
                    <tr key={enrollment.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                      <td className="px-6 py-4">
                        <p className="font-medium text-white">{enrollment.student}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{enrollment.course}</td>
                      <td className="px-6 py-4">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full"
                            style={{ width: `${enrollment.progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{enrollment.progress}%</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          enrollment.completed
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {enrollment.completed ? 'Completed' : 'In Progress'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {enrollment.certificate ? (
                          <div className="flex items-center gap-2 text-green-400">
                            <Award className="w-4 h-4" />
                            <span className="text-sm">Issued</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => issueCertificate(enrollment.id)}
                            disabled={issuing === enrollment.id}
                            className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition disabled:opacity-50"
                          >
                            {issuing === enrollment.id ? 'Issuing...' : 'Issue'}
                          </button>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 hover:bg-red-500/10 rounded transition text-gray-300 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </button>
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
