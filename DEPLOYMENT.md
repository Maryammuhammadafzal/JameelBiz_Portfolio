# Jameel Biz - Deployment Guide

This guide covers deployment of the Jameel Biz marketplace platform to production.

## Pre-Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] All API endpoints tested
- [ ] Authentication system verified
- [ ] Payment processing configured
- [ ] Admin account created
- [ ] Security checks completed

## Production Environment Variables

Set these in your Vercel dashboard or production server:

```env
# Database
DATABASE_URL=postgresql://user:password@host:port/dbname

# Authentication
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
NEXTAUTH_URL=https://yourdomain.com

# Payment Processing (if using Stripe)
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (optional)
SMTP_HOST=smtp.provider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

## Database Setup

### Using Neon PostgreSQL (Recommended)

1. Create a new project at neon.tech
2. Copy the connection string
3. Set `DATABASE_URL` to this connection string
4. Run migrations:

```bash
pnpm prisma migrate deploy
```

### Using AWS RDS

1. Create PostgreSQL instance
2. Update security group to allow inbound traffic
3. Set connection string in `DATABASE_URL`
4. Run migrations

## Deployment to Vercel

### Via GitHub (Recommended)

1. Push code to GitHub repository
2. Go to vercel.com and import the repository
3. Select Next.js framework
4. Configure environment variables in Vercel dashboard
5. Deploy (automatic on git push)

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
```

## Post-Deployment Steps

1. **Verify Functionality**
   - Test homepage loading
   - Test marketplace browsing
   - Create test user account
   - Complete test transaction

2. **SSL Certificate**
   - Automatically provided by Vercel
   - Verify HTTPS is enabled

3. **Domain Configuration**
   - Update domain DNS records
   - Point to Vercel nameservers
   - Wait 24-48 hours for propagation

4. **Email Notifications** (Optional)
   - Set up SMTP configuration
   - Test email verification flow
   - Configure order notifications

5. **Analytics & Monitoring**
   - Set up error tracking (e.g., Sentry)
   - Configure performance monitoring
   - Set up uptime monitoring

## Database Backup

### Automated Backups
- Neon: Automatic daily backups (14-day retention)
- AWS RDS: Configure automated snapshots

### Manual Backup

```bash
# Backup PostgreSQL database
pg_dump "postgresql://user:password@host:port/dbname" > backup.sql

# Restore from backup
psql "postgresql://user:password@host:port/dbname" < backup.sql
```

## Scaling Considerations

### Database
- Use connection pooling (PgBouncer) for high traffic
- Monitor query performance
- Add indexes for frequently queried fields
- Consider read replicas for reporting

### Application
- Use CDN for static assets (Vercel Edge Network)
- Enable API route caching
- Implement rate limiting
- Use background jobs for heavy operations

## Security Checklist

- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] API rate limiting enabled
- [ ] SQL injection prevention (Prisma handles)
- [ ] XSS protection enabled
- [ ] CSRF tokens implemented
- [ ] Admin dashboard password-protected
- [ ] Sensitive data encrypted in database
- [ ] Regular security audits scheduled

## Monitoring & Maintenance

### Daily Tasks
- Check error logs
- Monitor database performance
- Verify payment processing

### Weekly Tasks
- Review user registrations
- Check system performance metrics
- Backup verification

### Monthly Tasks
- Security patches
- Dependency updates
- Performance optimization review

## Troubleshooting

### Database Connection Issues
```bash
# Test connection
psql "your-connection-string"

# Check Prisma connection
pnpm prisma db execute --stdin < connection-test.sql
```

### Authentication Issues
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches deployment domain
- Clear browser cookies

### Payment Issues
- Verify Stripe API keys
- Check webhook configuration
- Review transaction logs

## Rollback Procedure

1. Revert code to previous commit:
   ```bash
   git revert <commit-hash>
   git push
   ```

2. Vercel automatically redeploys

3. If database schema changed:
   ```bash
   pnpm prisma migrate resolve --rolled-back <migration-name>
   ```

## Support & Contact

For deployment issues or questions:
- Email: deploy@jameelbiz.com
- Documentation: docs.jameelbiz.com
- Status Page: status.jameelbiz.com
