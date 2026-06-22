'use client'

import { useState } from 'react'
import Link from 'next/link'
import { blogPosts, getAllCategories, getAllTags } from '@/lib/blog-data'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const categories = getAllCategories()
  const tags = getAllTags()
  const postsPerPage = 9

  // Filter posts based on search, category, and tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)

    return matchesSearch && matchesCategory && matchesTag
  })

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-r from-purple-50 to-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            SEO Insights & Strategies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover actionable SEO tips, link-building strategies, and digital marketing insights from industry experts.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      {featuredPosts.length > 0 && (
        <section className="px-6 py-16 bg-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-black mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition"
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                      <span className="text-gray-400">Featured Article Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readingTime} min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{post.author.name}</span>
                      </div>
                      <span className="text-sm text-purple-600 font-semibold">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="px-6 py-12 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-black mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-purple-300'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-purple-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedTag(null)
                  setCurrentPage(1)
                }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  selectedTag === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                All Tags
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag)
                    setCurrentPage(1)
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    selectedTag === tag
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {paginatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-600 hover:shadow-lg transition"
                  >
                    <div className="aspect-video bg-gray-200 overflow-hidden group-hover:bg-purple-50 transition">
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                        <span className="text-gray-400">Article Image</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readingTime} min</span>
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-purple-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{post.author.name}</span>
                          <span className="text-xs text-purple-600 font-semibold">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg font-medium disabled:opacity-50 hover:border-purple-600 transition"
                  >
                    Previous
                  </button>
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg font-medium transition ${
                          currentPage === page
                            ? 'bg-purple-600 text-white'
                            : 'border-2 border-gray-200 text-gray-600 hover:border-purple-600'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg font-medium disabled:opacity-50 hover:border-purple-600 transition"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-black mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-purple-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to implement these strategies?
          </h2>
          <p className="text-purple-100 mb-8">
            Get expert help with your SEO strategy. Our team can guide you through implementation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
