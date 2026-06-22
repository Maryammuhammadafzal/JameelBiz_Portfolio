# Jameel Biz - Premium SEO Marketplace Platform

A comprehensive enterprise-level marketplace platform for link building and guest posting services, built to compete with Authority Builders, Adsy, Getfluence, and FatJoe.

## Features

### 🏠 Homepage
- Premium SaaS landing page with hero section
- Platform statistics and social proof
- 6 service showcase sections
- Publisher testimonials and case studies
- Comprehensive FAQ section
- Clear call-to-action buttons throughout

### 🏬 Marketplace Core
- Advanced publisher listing browsing
- Real-time filtering by:
  - Niche (Technology, Finance, Health, Business, Marketing, Education)
  - Country
  - Domain Rating (DR) range
  - Custom pricing
- Detailed publisher profiles with metrics:
  - Domain Rating and Domain Authority
  - Monthly organic traffic
  - Guest post and link insertion pricing
  - Publisher ratings and reviews
- Pagination support
- Favorite/wishlist functionality

### 💼 Buyer Dashboard
- Campaign management interface
- View and track all orders
- Campaign progress visualization
- Budget tracking
- Link acquisition monitoring
- Billing and payment history
- Account settings

### 📊 Seller Dashboard
- Website listing management
- View analytics and metrics
- Track guest post requests
- Monitor revenue and earnings
- Request withdrawals
- Performance analytics

### 👨‍💼 Admin Dashboard
- Platform-wide statistics
- Website approval workflow
- User management
- Transaction history
- Platform settings configuration
- System health monitoring

### 💳 Payment System
- Secure checkout process
- Multi-step payment flow
- Order confirmation system
- Transaction tracking
- Seller withdrawal management
- Automatic commission calculation (10% platform fee)

## Technology Stack

- **Frontend**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with email/password
- **Server**: Node.js with Next.js API routes
- **Design**: Light blue (#3B82F6), white, and black color scheme

## Project Structure

```
app/
├── page.tsx                      # Homepage
├── marketplace/
│   ├── page.tsx                 # Marketplace browse
│   └── [id]/page.tsx            # Listing details
├── checkout/
│   └── page.tsx                 # Payment checkout
├── dashboard/
│   ├── buyer/page.tsx           # Buyer dashboard
│   ├── seller/page.tsx          # Seller dashboard
│   └── admin/page.tsx           # Admin dashboard
├── api/
│   ├── listings/route.ts        # List all listings
│   ├── listings/[id]/route.ts   # Get single listing
│   ├── campaigns/route.ts       # Campaign management
│   ├── orders/route.ts          # Order management
│   ├── payments/
│   │   ├── create-checkout/     # Create payment
│   │   └── confirm/             # Confirm payment
│   ├── withdrawals/route.ts     # Withdrawal requests
│   ├── seller/websites/route.ts # Seller websites
│   └── admin/
│       ├── stats/route.ts       # Admin statistics
│       ├── pending-websites/    # Approve listings
│       └── users/route.ts       # User management
├── sign-in/page.tsx             # Authentication
└── sign-up/page.tsx             # Registration

lib/
├── db.ts                        # Prisma client
├── auth.ts                      # NextAuth configuration
└── utils.ts                     # Utility functions

prisma/
└── schema.prisma                # Database schema

types/
└── next-auth.d.ts              # Auth type definitions

public/
└── images/                      # Static assets
```

## Database Schema

### Core Models
- **User**: Platform users with role-based access (BUYER/SELLER/ADMIN)
- **Website**: Publisher websites/listings
- **Order**: Guest post and link insertion orders
- **Campaign**: Buyer campaigns for tracking link acquisitions
- **Review**: Publisher reviews and ratings
- **Message**: Direct messaging between buyers and sellers
- **Wallet**: User account balances
- **Transaction**: Payment and withdrawal transactions
- **Withdrawal**: Seller withdrawal requests
- **Invoice**: Order invoices and history
- **AdminSettings**: Platform configuration

## Authentication

The platform uses NextAuth.js with email/password authentication:
- Email validation during signup
- Password hashing with bcrypt
- Session management via JWT
- Role-based access control (BUYER/SELLER/ADMIN)
- Protected API routes and pages

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- PostgreSQL database
- Environment variables configured

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run Prisma migrations
pnpm prisma migrate dev

# Start development server
pnpm dev
```

### Environment Variables

```
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

## API Endpoints

### Public Endpoints
- `GET /api/listings` - Browse all listings with filters
- `GET /api/listings/[id]` - Get listing details

### Authenticated Endpoints
- `GET /api/campaigns` - Get buyer campaigns
- `GET /api/orders` - Get orders
- `POST /api/payments/create-checkout` - Create checkout session
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/withdrawals` - Get withdrawals
- `POST /api/withdrawals` - Create withdrawal request

### Admin Endpoints
- `GET /api/admin/stats` - Platform statistics
- `GET /api/admin/pending-websites` - Pending approvals
- `GET /api/admin/users` - User management

## Features Highlights

### For Buyers
- ✅ Browse 100+ publishers across multiple niches
- ✅ Filter by domain authority, traffic, and pricing
- ✅ One-click ordering for guest posts and link insertions
- ✅ Campaign tracking and progress monitoring
- ✅ Instant payment processing
- ✅ Direct messaging with publishers

### For Sellers
- ✅ List unlimited websites
- ✅ Set custom pricing for each service type
- ✅ Accept and manage guest post requests
- ✅ Track earnings in real-time
- ✅ Withdraw funds with automatic commission splitting
- ✅ Performance analytics and reviews

### For Admins
- ✅ Approve/reject website listings
- ✅ User account management
- ✅ Platform statistics and analytics
- ✅ Transaction monitoring
- ✅ System configuration and settings

## Deployment

### Deploy to Vercel
The project is optimized for deployment on Vercel:

```bash
# Deploy using Vercel CLI
vercel deploy

# Set environment variables in Vercel dashboard
# Run Prisma migrations on production database
vercel env pull
pnpm prisma migrate deploy
```

### Requirements for Production
- PostgreSQL database (Neon, AWS RDS, or similar)
- Environment variables properly configured
- NEXTAUTH_SECRET set to a secure random string
- NEXTAUTH_URL set to your production domain

## Color Scheme

- **Primary**: Light Blue (#3B82F6)
- **Background**: White (#FFFFFF)
- **Text**: Black (#000000)
- **Borders**: Light Gray (#E5E7EB)
- **Accents**: Dark Blue (#1D4ED8)

## Contributing

This is a proprietary project. For feature requests or bug reports, please contact the development team.

## License

Proprietary - All rights reserved

## Support

For technical support or questions, please contact support@jameelbiz.com

---

**Built with Next.js, React, and Tailwind CSS**

<!-- Env Line from vercel.json -->
<!-- // "DATABASE_URL": "@database_url" -->
