import Link from 'next/link'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const relatedPosts = post ? getRelatedPosts(post.id) : []

  if (!post) {
    notFound()
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-600">
            Blog
          </Link>
          <span>/</span>
          <span className="text-black font-medium">{post.title}</span>
        </nav>

        {/* Meta Info */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm font-semibold rounded">
            {post.category}
          </span>
          <span className="text-gray-600 text-sm">{post.readingTime} min read</span>
          <span className="text-gray-600 text-sm">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 py-6 border-t border-b border-gray-200 mb-8">
          <div>
            <p className="font-semibold text-black">{post.author.name}</p>
            <p className="text-gray-600 text-sm">{post.author.role}</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 aspect-video bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center border-2 border-gray-200">
          <span className="text-gray-400">Featured Article Image</span>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, idx) => {
              // Handle headers
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1
                const text = paragraph.replace(/^#+\s/, '')
                const className = {
                  1: 'text-4xl font-bold text-black mt-12 mb-4',
                  2: 'text-2xl font-bold text-black mt-8 mb-3',
                  3: 'text-xl font-bold text-black mt-6 mb-2',
                }[level] || 'font-bold text-black'

                return (
                  <h2 key={idx} className={className}>
                    {text}
                  </h2>
                )
              }

              // Handle lists
              if (paragraph.startsWith('-') || paragraph.startsWith('•')) {
                const items = paragraph.split('\n').filter((item) => item.trim())
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-gray-700">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^[-•]\s/, '')}</li>
                    ))}
                  </ul>
                )
              }

              // Handle checkboxes
              if (paragraph.includes('[ ]')) {
                const items = paragraph.split('\n').filter((item) => item.trim())
                return (
                  <ul key={idx} className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <input
                          type="checkbox"
                          disabled
                          checked={item.includes('[x]')}
                          className="w-4 h-4 accent-purple-600"
                        />
                        <span>{item.replace(/^\[.\]\s/, '')}</span>
                      </li>
                    ))}
                  </ul>
                )
              }

              // Regular paragraph
              return (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="py-6 border-t border-gray-200 mb-12">
          <p className="text-sm font-semibold text-black mb-3">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-100 hover:text-purple-600 transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Sharing */}
        <div className="py-6 border-t border-b border-gray-200 mb-12">
          <p className="text-sm font-semibold text-black mb-3">Share this article:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mb-12">
          <div>
            <h3 className="font-bold text-black mb-2">{post.author.name}</h3>
            <p className="text-purple-600 font-semibold text-sm mb-3">{post.author.role}</p>
            <p className="text-gray-700">
              {post.author.name} is a skilled {post.author.role} with years of experience in digital marketing
              and SEO strategy. They contribute valuable insights to help businesses improve their online visibility.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-600 transition"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                    <span className="text-gray-400">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                        {relatedPost.category}
                      </span>
                      <span className="text-xs text-gray-500">{relatedPost.readingTime} min</span>
                    </div>
                    <h3 className="font-bold text-black mb-2 group-hover:text-purple-600 transition line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-6 py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to implement these SEO strategies?
          </h2>
          <p className="text-purple-100 mb-8">
            Our team can help you develop and execute a comprehensive SEO strategy tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-purple-700 transition"
            >
              View Our Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
