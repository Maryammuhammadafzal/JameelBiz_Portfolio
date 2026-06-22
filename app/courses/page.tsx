import Link from 'next/link'
import { auth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export default async function CoursesPage() {
  const session = await auth()

  const allCourses = [
    { id: 1, category: 'Link Building', title: 'Link Building Fundamentals', lessons: 12, duration: '4 weeks', students: 2840, rating: 4.9, price: '$99', level: 'Beginner' },
    { id: 2, category: 'Link Building', title: 'Advanced Link Building Strategies', lessons: 18, duration: '6 weeks', students: 1456, rating: 4.8, price: '$199', level: 'Advanced' },
    { id: 3, category: 'Guest Posting', title: 'Guest Posting Mastery', lessons: 15, duration: '5 weeks', students: 2104, rating: 4.8, price: '$129', level: 'Intermediate' },
    { id: 4, category: 'Technical SEO', title: 'Technical SEO Bootcamp', lessons: 18, duration: '6 weeks', students: 1956, rating: 4.9, price: '$149', level: 'Intermediate' },
    { id: 5, category: 'Technical SEO', title: 'Advanced Technical SEO', lessons: 22, duration: '8 weeks', students: 987, rating: 4.9, price: '$249', level: 'Advanced' },
    { id: 6, category: 'Local SEO', title: 'Local SEO Domination', lessons: 12, duration: '4 weeks', students: 1534, rating: 4.7, price: '$99', level: 'Beginner' },
    { id: 7, category: 'Local SEO', title: 'Multi-Location SEO', lessons: 16, duration: '5 weeks', students: 845, rating: 4.8, price: '$179', level: 'Advanced' },
    { id: 8, category: 'Digital Marketing', title: 'Digital Marketing Fundamentals', lessons: 20, duration: '7 weeks', students: 3210, rating: 4.8, price: '$129', level: 'Beginner' },
    { id: 9, category: 'Digital Marketing', title: 'Conversion Rate Optimization', lessons: 14, duration: '5 weeks', students: 1678, rating: 4.9, price: '$179', level: 'Intermediate' },
  ]

  const categories = ['All', 'Link Building', 'Guest Posting', 'Technical SEO', 'Local SEO', 'Digital Marketing']

  const testimonials = [
    { name: 'Alex Rodriguez', text: 'These courses transformed my SEO knowledge. Highly recommended!' },
    { name: 'Jessica Park', text: 'Best investment I made for my agency. Increased rankings significantly.' },
    { name: 'David Thompson', text: 'The content is up-to-date and practical. Immediate results.' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl relative z-10 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
            Learn <span className="text-primary">SEO Mastery</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Master link building, guest posting, technical SEO, and digital marketing from industry experts. Start your journey from beginner to advanced SEO professional.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition">
              Browse All Courses
            </button>
            <Link href="#" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition">
              View Certificate Program
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-gray-600">Expert-led Courses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">10K+</p>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">4.8⭐</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COURSE CATEGORIES ============ */}
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COURSES GRID ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                {/* Course Thumbnail */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-7xl group-hover:scale-110 transition duration-300">
                  {course.category === 'Link Building' && '🔗'}
                  {course.category === 'Guest Posting' && '✍️'}
                  {course.category === 'Technical SEO' && '⚙️'}
                  {course.category === 'Local SEO' && '📍'}
                  {course.category === 'Digital Marketing' && '📊'}
                </div>

                <div className="p-6 space-y-4">
                  {/* Category & Level */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary bg-blue-100 px-3 py-1 rounded-full">{course.category}</span>
                    <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{course.level}</span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-black line-clamp-2">{course.title}</h3>

                  {/* Course Details */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 py-2">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱️ {course.duration}</span>
                  </div>

                  {/* Rating & Students */}
                  <div className="flex items-center gap-4 py-2 border-y border-gray-200">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold text-black">{course.rating}</span>
                    </div>
                    <span className="text-xs text-gray-600">({course.students.toLocaleString()} students)</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <p className="font-bold text-2xl text-primary">{course.price}</p>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 transition">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED COURSE - VIDEO PREVIEW ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Featured Course</h2>
            <p className="text-xl text-gray-600">Link Building Fundamentals - Master the essentials</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">▶️</div>
                <p className="text-gray-600 font-medium">Click to watch preview</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-black mb-4">Link Building Fundamentals</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Learn the complete process of building high-quality backlinks that improve your search rankings. This course covers publisher research, outreach strategies, and campaign management.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-black">12 In-depth Lessons</p>
                    <p className="text-gray-600">Comprehensive curriculum from basics to advanced</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-black">Real-world Case Studies</p>
                    <p className="text-gray-600">Learn from actual successful campaigns</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-black">Lifetime Access</p>
                    <p className="text-gray-600">Access course materials forever</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-bold text-black">Certificate of Completion</p>
                    <p className="text-gray-600">Shareable credential on LinkedIn</p>
                  </div>
                </div>
              </div>

              <Link href="#" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition text-lg">
                Enroll Now - Only $99
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATES ============ */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Earn Professional Certificates</h2>
            <p className="text-xl text-gray-400">Recognized credentials to boost your career</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'SEO Specialist', courses: 5, time: '3 months' },
              { title: 'Link Building Expert', courses: 3, time: '2 months' },
              { title: 'Digital Marketing Master', courses: 8, time: '6 months' },
            ].map((cert, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 text-center hover:bg-white/20 transition">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
                <p className="text-gray-400 mb-6">
                  Complete {cert.courses} courses in {cert.time}
                </p>
                <button className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:opacity-90 transition">
                  View Requirements
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STUDENT TESTIMONIALS ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Join thousands who transformed their SEO career</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-black">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: 'Do I need any prerequisites?', a: 'No! Our courses range from beginner to advanced. Start with the fundamentals course.' },
              { q: 'How long do I have access?', a: 'Lifetime access! Enroll once and access forever, even if content is updated.' },
              { q: 'Can I get a refund?', a: 'Yes, we offer 30-day money-back guarantee if you\'re not satisfied.' },
              { q: 'Are certificates recognized?', a: 'Absolutely! Our certificates are recognized by the SEO industry and valued by employers.' },
              { q: 'Is there support available?', a: 'Yes! Join our community forum and get support from instructors and peers.' },
              { q: 'Can I download course materials?', a: 'Yes, all course materials are available for download on most courses.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-black">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of students mastering SEO and transforming their careers
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg"
          >
            Browse All Courses
          </Link>
        </div>
      </section>
    </main>
  )
}
