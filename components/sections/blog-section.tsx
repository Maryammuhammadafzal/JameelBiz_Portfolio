'use client'

import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-data'

export default function BlogSection() {
  // Get the 3 most recent featured blog posts
  const featuredPosts = blogPosts
    .filter((post) => post.featured)
    .slice(0, 3)

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            📚 Latest Insights
          </div>
          <h2 className="text-5xl font-bold text-black mb-6">
            Featured Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover expert tips, strategies, and industry insights to boost your SEO performance and link building success.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                {/* Image Container */}
                <div className="relative h-48 bg-gradient-to-br from-purple-200 to-purple-100 overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {post.category === 'SEO Strategy' && '🔍'}
                      {post.category === 'Link Building' && '🔗'}
                      {post.category === 'Content' && '✍️'}
                      {post.category === 'Technical' && '⚙️'}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-black group-hover:text-purple-600 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>👤 {post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⏱️ {post.readingTime} min read</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition">
                    Read More →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blog Posts CTA */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
