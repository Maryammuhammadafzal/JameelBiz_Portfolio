export const servicesData = {
  coreServices: [
    {
      id: 'technical-seo',
      name: 'Technical SEO',
      slug: 'technical-seo',
      category: 'Core SEO Services',
      shortDesc: 'Optimize your website for search engine crawling and indexing',
      fullDesc: 'Fix crawlability issues, improve site speed, enhance indexation, and ensure your website is technically optimized for search engines.',
      icon: '⚙️',
      benefits: [
        'Improved site crawlability and indexation',
        'Faster page load speeds and better performance',
        'Mobile-first optimization and responsiveness',
        'Schema markup and structured data implementation',
        'Sitemap and robots.txt optimization',
        'Core Web Vitals improvement'
      ],
      process: [
        { step: 1, title: 'Technical Audit', desc: 'Complete site analysis for technical issues' },
        { step: 2, title: 'Issue Prioritization', desc: 'Identify and prioritize critical problems' },
        { step: 3, title: 'Implementation', desc: 'Execute fixes and optimizations systematically' },
        { step: 4, title: 'Monitoring & Verification', desc: 'Continuous tracking and performance improvement' }
      ],
      pricing: 'Starting at $499',
      results: {
        backlinks: 'Better Indexation',
        traffic: '20-40% Speed Improvement',
        value: 'Enhanced Crawlability'
      }
    },
    {
      id: 'local-seo',
      name: 'Local SEO',
      slug: 'local-seo',
      category: 'Core SEO Services',
      shortDesc: 'Dominate local search results in your target area',
      fullDesc: 'Optimize your business for local search with Google Business Profile management, local citations, and location-based SEO strategies.',
      icon: '📍',
      benefits: [
        'Google Business Profile optimization',
        'Local citation building and management',
        'Local keyword targeting and optimization',
        'Review management and reputation building',
        'Local link building from area-relevant sites',
        'Map pack ranking improvement'
      ],
      process: [
        { step: 1, title: 'Business Profile Setup', desc: 'Optimize and verify Google Business Profile' },
        { step: 2, title: 'Citation Building', desc: 'Build consistent citations across directories' },
        { step: 3, title: 'Local Content', desc: 'Create location-specific content strategy' },
        { step: 4, title: 'Review Management', desc: 'Monitor and respond to customer reviews' }
      ],
      pricing: 'Starting at $399',
      results: {
        backlinks: 'Local Citations',
        traffic: '50-100% Local Traffic Growth',
        value: 'Map Pack Rankings'
      }
    },
    {
      id: 'link-building',
      name: 'Link Building',
      slug: 'link-building',
      category: 'Core SEO Services',
      shortDesc: 'Build high-quality backlinks from authoritative websites',
      fullDesc: 'Secure authoritative backlinks through guest posting, link insertions, and digital PR to improve domain authority and rankings.',
      icon: '🔗',
      benefits: [
        'Links from high-authority websites',
        'Improved domain authority and trust',
        'Referral traffic from quality sources',
        'Contextual link placement',
        'White-hat and Google-safe methods',
        'Comprehensive link reporting'
      ],
      process: [
        { step: 1, title: 'Link Strategy', desc: 'Develop link building strategy for your niche' },
        { step: 2, title: 'Prospect Identification', desc: 'Identify relevant high-authority prospects' },
        { step: 3, title: 'Outreach & Placement', desc: 'Secure placements and build relationships' },
        { step: 4, title: 'Tracking & Reporting', desc: 'Monitor links and report on improvements' }
      ],
      pricing: 'Starting at $299',
      results: {
        backlinks: '5-20 Quality Links',
        traffic: '100-300 Referral Visits',
        value: 'DA 40+ Publishers'
      }
    },
    {
      id: 'content-marketing',
      name: 'Content Marketing',
      slug: 'content-marketing',
      category: 'Core SEO Services',
      shortDesc: 'Create and distribute valuable content that attracts and engages audiences',
      fullDesc: 'Develop a comprehensive content strategy with blog posts, guides, whitepapers, and multimedia content optimized for search and engagement.',
      icon: '✍️',
      benefits: [
        'SEO-optimized blog content strategy',
        'Long-form content for authority building',
        'Content calendar and planning',
        'Video and multimedia content creation',
        'Content distribution and promotion',
        'Performance tracking and optimization'
      ],
      process: [
        { step: 1, title: 'Content Strategy', desc: 'Develop keyword-focused content roadmap' },
        { step: 2, title: 'Content Creation', desc: 'Write high-quality, engaging content' },
        { step: 3, title: 'SEO Optimization', desc: 'Optimize for keywords and search intent' },
        { step: 4, title: 'Distribution & Promotion', desc: 'Promote content across channels' }
      ],
      pricing: 'Starting at $349',
      results: {
        backlinks: 'Organic Link Generation',
        traffic: '20-50 Monthly Visits Per Post',
        value: 'Authority Establishment'
      }
    }
  ],
  searchServices: [
    {
      id: 'paid-search-ppc',
      name: 'Paid Search (PPC)',
      slug: 'paid-search-ppc',
      category: 'Search Everywhere Services',
      shortDesc: 'Expert Google Ads and PPC campaign management',
      fullDesc: 'Manage high-performing Google Ads campaigns with expert optimization, A/B testing, and ROI-focused strategies.',
      icon: '📊',
      benefits: [
        'Expert campaign setup and optimization',
        'Advanced bid management and automation',
        'A/B testing for continuous improvement',
        'Negative keyword management',
        'Landing page optimization',
        'Comprehensive ROI tracking'
      ],
      process: [
        { step: 1, title: 'Campaign Strategy', desc: 'Develop PPC strategy aligned with goals' },
        { step: 2, title: 'Campaign Setup', desc: 'Create and configure ad groups and keywords' },
        { step: 3, title: 'Optimization', desc: 'Continuous testing and bid adjustments' },
        { step: 4, title: 'Reporting', desc: 'Monthly performance reviews and optimization' }
      ],
      pricing: 'Starting at $399',
      results: {
        backlinks: 'Immediate Visibility',
        traffic: 'Scalable Clicks & Conversions',
        value: 'ROI-Focused Campaigns'
      }
    },
    {
      id: 'digital-pr',
      name: 'Digital PR',
      slug: 'digital-pr',
      category: 'Search Everywhere Services',
      shortDesc: 'Gain media coverage and build brand authority online',
      fullDesc: 'Secure media placements, press releases, and editorial coverage to build brand credibility and high-quality backlinks.',
      icon: '📰',
      benefits: [
        'Media coverage in top publications',
        'High-authority backlinks from news sites',
        'Brand mention and reputation building',
        'Press release distribution',
        'Relationship building with journalists',
        'Crisis management support'
      ],
      process: [
        { step: 1, title: 'Story Development', desc: 'Craft newsworthy angles for your business' },
        { step: 2, title: 'Media Relations', desc: 'Build relationships with journalists' },
        { step: 3, title: 'Pitch & Placement', desc: 'Pitch stories to relevant media outlets' },
        { step: 4, title: 'Coverage Tracking', desc: 'Monitor coverage and measure impact' }
      ],
      pricing: 'Starting at $599',
      results: {
        backlinks: 'High-Authority Links',
        traffic: '500-2000 Referral Visits',
        value: 'Brand Authority'
      }
    },
    {
      id: 'cro',
      name: 'CRO (Conversion Rate Optimization)',
      slug: 'cro',
      category: 'Search Everywhere Services',
      shortDesc: 'Optimize your website to convert more visitors into customers',
      fullDesc: 'Increase conversion rates through A/B testing, user experience optimization, and psychological persuasion techniques.',
      icon: '💰',
      benefits: [
        'A/B testing and multivariate testing',
        'User experience (UX) optimization',
        'Form optimization and simplification',
        'Landing page optimization',
        'Psychological persuasion techniques',
        'Detailed conversion analytics'
      ],
      process: [
        { step: 1, title: 'Conversion Audit', desc: 'Analyze current conversion funnel' },
        { step: 2, title: 'Hypothesis Development', desc: 'Identify improvement opportunities' },
        { step: 3, title: 'Test Execution', desc: 'Run A/B and multivariate tests' },
        { step: 4, title: 'Implementation & Scale', desc: 'Deploy winners and iterate' }
      ],
      pricing: 'Starting at $349',
      results: {
        backlinks: 'Better Conversions',
        traffic: '20-50% Increase in Conversions',
        value: 'Higher ROI'
      }
    },
    {
      id: 'tiktok-seo',
      name: 'TikTok SEO',
      slug: 'tiktok-seo',
      category: 'Search Everywhere Services',
      shortDesc: 'Optimize your content for TikTok search and discovery',
      fullDesc: 'Master TikTok algorithm optimization with strategic hashtags, trending sounds, and content strategies to maximize viral reach.',
      icon: '🎵',
      benefits: [
        'TikTok algorithm optimization',
        'Hashtag and sound strategy',
        'Trending content identification',
        'Engagement rate optimization',
        'Audience growth strategies',
        'Creator monetization guidance'
      ],
      process: [
        { step: 1, title: 'Audience Analysis', desc: 'Understand your target TikTok audience' },
        { step: 2, title: 'Content Strategy', desc: 'Develop viral-ready content strategy' },
        { step: 3, title: 'Content Optimization', desc: 'Optimize videos for TikTok algorithm' },
        { step: 4, title: 'Growth Tracking', desc: 'Monitor performance and iterate' }
      ],
      pricing: 'Starting at $299',
      results: {
        backlinks: 'Viral Potential',
        traffic: '10K-100K Video Views',
        value: 'Creator Growth'
      }
    },
    {
      id: 'instagram-seo',
      name: 'Instagram SEO',
      slug: 'instagram-seo',
      category: 'Search Everywhere Services',
      shortDesc: 'Optimize your Instagram presence for search and discovery',
      fullDesc: 'Boost visibility in Instagram search with bio optimization, hashtag strategy, and content planning for maximum reach.',
      icon: '📸',
      benefits: [
        'Instagram search visibility optimization',
        'Hashtag strategy and research',
        'Bio and profile optimization',
        'Reel and post strategy',
        'Audience growth and engagement',
        'Shopping and conversion optimization'
      ],
      process: [
        { step: 1, title: 'Profile Audit', desc: 'Analyze current Instagram presence' },
        { step: 2, title: 'Optimization', desc: 'Optimize bio, profile, and content strategy' },
        { step: 3, title: 'Content Creation', desc: 'Develop search-optimized content' },
        { step: 4, title: 'Growth & Engagement', desc: 'Monitor metrics and optimize' }
      ],
      pricing: 'Starting at $249',
      results: {
        backlinks: 'Discoverability',
        traffic: '5-20K Monthly Impressions',
        value: 'Audience Growth'
      }
    },
    {
      id: 'app-store-optimization',
      name: 'App Store Optimization (ASO)',
      slug: 'app-store-optimization',
      category: 'Search Everywhere Services',
      shortDesc: 'Optimize your app to rank higher in app store searches',
      fullDesc: 'Improve app visibility through keyword optimization, screenshot testing, and strategic app store listing optimization.',
      icon: '📱',
      benefits: [
        'Keyword optimization for app stores',
        'Icon and screenshot optimization',
        'App description and metadata',
        'Rating and review management',
        'A/B testing for app store listing',
        'Pre-launch and soft launch strategy'
      ],
      process: [
        { step: 1, title: 'Keyword Research', desc: 'Find high-volume, low-competition keywords' },
        { step: 2, title: 'Listing Optimization', desc: 'Optimize all app store listing elements' },
        { step: 3, title: 'Creative Testing', desc: 'Test icons and screenshots' },
        { step: 4, title: 'Performance Monitoring', desc: 'Track downloads and improve ranking' }
      ],
      pricing: 'Starting at $399',
      results: {
        backlinks: 'App Visibility',
        traffic: '50-500 Daily Downloads',
        value: 'Top App Rankings'
      }
    },
    {
      id: 'youtube-seo',
      name: 'YouTube SEO',
      slug: 'youtube-seo',
      category: 'Search Everywhere Services',
      shortDesc: 'Optimize your YouTube channel for maximum visibility and growth',
      fullDesc: 'Dominate YouTube search with channel optimization, video SEO, and strategic content planning to grow subscribers and views.',
      icon: '▶️',
      benefits: [
        'YouTube search and discovery optimization',
        'Video title, description, and tag strategy',
        'Playlist optimization',
        'Thumbnail and engagement optimization',
        'Subscriber growth strategies',
        'Monetization and revenue optimization'
      ],
      process: [
        { step: 1, title: 'Channel Audit', desc: 'Analyze channel performance and potential' },
        { step: 2, title: 'Optimization', desc: 'Optimize channel branding and strategy' },
        { step: 3, title: 'Video Strategy', desc: 'Develop SEO-optimized video content' },
        { step: 4, title: 'Growth Execution', desc: 'Execute growth and monetization strategy' }
      ],
      pricing: 'Starting at $349',
      results: {
        backlinks: 'Video Rankings',
        traffic: '100-1K Video Views Per Day',
        value: 'Channel Authority'
      }
    }
  ],
  additionalServices: [
    {
      id: 'chatgpt-seo',
      name: 'ChatGPT SEO (GEO)',
      slug: 'chatgpt-seo',
      category: 'Emerging Platforms',
      shortDesc: 'Optimize your presence in ChatGPT and AI search results',
      fullDesc: 'Get your website and content featured in ChatGPT responses and AI-powered search engines with strategic SEO optimization.',
      icon: '🤖',
      benefits: [
        'ChatGPT and AI search optimization',
        'Content structured for AI responses',
        'Featured snippet optimization',
        'Knowledge panel optimization',
        'Source attribution and authority',
        'AI-first SEO strategy'
      ],
      process: [
        { step: 1, title: 'AI Search Audit', desc: 'Analyze current AI search presence' },
        { step: 2, title: 'Content Strategy', desc: 'Develop AI-optimized content' },
        { step: 3, title: 'Implementation', desc: 'Optimize for ChatGPT and AI sources' },
        { step: 4, title: 'Monitoring', desc: 'Track mentions and AI search visibility' }
      ],
      pricing: 'Starting at $449',
      results: {
        backlinks: 'AI Search Visibility',
        traffic: '20-50% of AI Query Traffic',
        value: 'Emerging Platform Authority'
      }
    }
  ]
}

export function getServiceBySlug(slug: string) {
  const allServices = [
    ...servicesData.coreServices,
    ...servicesData.searchServices,
    ...servicesData.additionalServices
  ]
  return allServices.find(s => s.slug === slug)
}

export function getAllServices() {
  return [
    ...servicesData.coreServices,
    ...servicesData.searchServices,
    ...servicesData.additionalServices
  ]
}
