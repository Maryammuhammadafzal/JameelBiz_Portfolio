import { pgTable, text, timestamp, boolean, numeric, integer } from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// --- App tables -----------------------------------------------------------

export const websites = pgTable('websites', {
  id: text('id').primaryKey(),
  userId: text('userId').notNull(),
  title: text('title').notNull(),
  description: text('description'),
  category: text('category').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  currency: text('currency').notNull().default('USD'),
  image: text('image'),
  features: text('features').array(),
  rating: numeric('rating', { precision: 3, scale: 2 }).default('0'),
  reviewsCount: integer('reviews_count').default(0),
  status: text('status').notNull().default('active'),
  views: integer('views').default(0),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const orders = pgTable('orders', {
  id: text('id').primaryKey(),
  buyerId: text('buyerId').notNull(),
  websiteId: text('websiteId').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
  currency: text('currency').notNull().default('USD'),
  status: text('status').notNull().default('pending'),
  paymentMethod: text('paymentMethod'),
  transactionId: text('transactionId'),
  notes: text('notes'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const wallets = pgTable('wallets', {
  id: text('id').primaryKey(),
  userId: text('userId').notNull().unique(),
  balanceUsd: numeric('balance_usd', { precision: 15, scale: 2 }).default('0'),
  balancePkr: numeric('balance_pkr', { precision: 15, scale: 2 }).default('0'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const transactions = pgTable('transactions', {
  id: text('id').primaryKey(),
  userId: text('userId').notNull(),
  walletId: text('walletId').notNull(),
  type: text('type').notNull(),
  amount: numeric('amount', { precision: 15, scale: 2 }).notNull(),
  currency: text('currency').notNull(),
  description: text('description'),
  status: text('status').notNull().default('completed'),
  relatedId: text('relatedId'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

export const messages = pgTable('messages', {
  id: text('id').primaryKey(),
  senderId: text('senderId').notNull(),
  recipientId: text('recipientId').notNull(),
  content: text('content').notNull(),
  isRead: boolean('isRead').notNull().default(false),
  conversationId: text('conversationId'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

export const conversations = pgTable('conversations', {
  id: text('id').primaryKey(),
  participant1Id: text('participant1Id').notNull(),
  participant2Id: text('participant2Id').notNull(),
  lastMessage: text('lastMessage'),
  lastMessageTime: timestamp('lastMessageTime'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const invoices = pgTable('invoices', {
  id: text('id').primaryKey(),
  userId: text('userId').notNull(),
  orderId: text('orderId'),
  websiteId: text('websiteId'),
  amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
  status: text('status').notNull().default('pending'),
  dueDate: timestamp('dueDate'),
  paidDate: timestamp('paidDate'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

export const adminSettings = pgTable('admin_settings', {
  id: text('id').primaryKey(),
  key: text('key').notNull().unique(),
  value: text('value'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const reviews = pgTable('reviews', {
  id: text('id').primaryKey(),
  websiteId: text('websiteId').notNull(),
  buyerId: text('buyerId').notNull(),
  rating: integer('rating').notNull(),
  comment: text('comment'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// CMS Tables for Admin Management

export const services = pgTable('services', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  icon: text('icon'),
  image: text('image'),
  category: text('category'),
  price: numeric('price', { precision: 10, scale: 2 }),
  priceUsd: numeric('price_usd', { precision: 10, scale: 2 }),
  pricePkr: numeric('price_pkr', { precision: 10, scale: 2 }),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  seoKeywords: text('seo_keywords'),
  content: text('content'),
  features: text('features').array(),
  faq: text('faq'),
  order: integer('order').default(0),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const pricingPlans = pgTable('pricing_plans', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  priceUsd: numeric('price_usd', { precision: 10, scale: 2 }).notNull(),
  pricePkr: numeric('price_pkr', { precision: 10, scale: 2 }).notNull(),
  planType: text('plan_type').notNull(),
  features: text('features').array(),
  highlighted: boolean('highlighted').notNull().default(false),
  active: boolean('active').notNull().default(true),
  order: integer('order').default(0),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const blogPosts = pgTable('blog_posts', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  featuredImage: text('featured_image'),
  category: text('category'),
  tags: text('tags').array(),
  authorId: text('author_id'),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  seoKeywords: text('seo_keywords'),
  published: boolean('published').notNull().default(false),
  publishedAt: timestamp('published_at'),
  views: integer('views').default(0),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const courses = pgTable('courses', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  image: text('image'),
  price: numeric('price', { precision: 10, scale: 2 }),
  priceUsd: numeric('price_usd', { precision: 10, scale: 2 }),
  pricePkr: numeric('price_pkr', { precision: 10, scale: 2 }),
  instructorId: text('instructor_id'),
  published: boolean('published').notNull().default(false),
  order: integer('order').default(0),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const courseLessons = pgTable('course_lessons', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull(),
  title: text('title').notNull(),
  description: text('description'),
  videoUrl: text('video_url'),
  content: text('content'),
  order: integer('order').notNull().default(0),
  published: boolean('published').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const courseEnrollments = pgTable('course_enrollments', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull(),
  userId: text('user_id').notNull(),
  progress: integer('progress').default(0),
  completed: boolean('completed').notNull().default(false),
  certificateIssued: boolean('certificate_issued').notNull().default(false),
  enrolledAt: timestamp('enrolled_at').notNull().defaultNow(),
  completedAt: timestamp('completed_at'),
})

export const pageContent = pgTable('page_content', {
  id: text('id').primaryKey(),
  pageSlug: text('page_slug').notNull().unique(),
  pageName: text('page_name').notNull(),
  content: text('content'),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  seoKeywords: text('seo_keywords'),
  updatedBy: text('updated_by'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const seoSettings = pgTable('seo_settings', {
  id: text('id').primaryKey(),
  pageSlug: text('page_slug').notNull().unique(),
  metaTitle: text('meta_title'),
  metaDescription: text('meta_description'),
  keywords: text('keywords'),
  canonicalUrl: text('canonical_url'),
  ogTitle: text('og_title'),
  ogDescription: text('og_description'),
  ogImage: text('og_image'),
  schemaMarkup: text('schema_markup'),
  robots: text('robots'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const globalSettings = pgTable('global_settings', {
  id: text('id').primaryKey(),
  websiteName: text('website_name'),
  websiteDescription: text('website_description'),
  logo: text('logo'),
  favicon: text('favicon'),
  primaryColor: text('primary_color'),
  secondaryColor: text('secondary_color'),
  footerText: text('footer_text'),
  contactEmail: text('contact_email'),
  contactPhone: text('contact_phone'),
  googleAnalyticsId: text('google_analytics_id'),
  googleSearchConsole: text('google_search_console'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const marketplaceCategories = pgTable('marketplace_categories', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  icon: text('icon'),
  order: integer('order').default(0),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const marketplaceNiches = pgTable('marketplace_niches', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  categoryId: text('category_id'),
  description: text('description'),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const banners = pgTable('banners', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  image: text('image'),
  link: text('link'),
  ctaText: text('cta_text'),
  position: text('position').notNull(),
  active: boolean('active').notNull().default(true),
  order: integer('order').default(0),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const redirects = pgTable('redirects', {
  id: text('id').primaryKey(),
  fromUrl: text('from_url').notNull(),
  toUrl: text('to_url').notNull(),
  redirectType: text('redirect_type').notNull().default('301'),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
