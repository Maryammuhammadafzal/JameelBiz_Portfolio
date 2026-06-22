'use client'

import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  image: string
  socials?: {
    twitter?: string
    linkedin?: string
    email?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Jameel Ahmad',
    position: 'Founder & CEO',
    bio: 'SEO expert with 10+ years of experience in link building and digital marketing. Founded Jameel Biz to revolutionize how agencies access quality backlinks.',
    image: '👨‍💼',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'jameel@jameelbiz.com',
    },
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    position: 'Head of Publisher Relations',
    bio: 'Strategic partnerships specialist. With 8 years of experience, Sarah manages relationships with 500+ premium publishers and ensures quality standards.',
    image: '👩‍💼',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'sarah@jameelbiz.com',
    },
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'SEO Strategy Director',
    bio: 'Certified SEO specialist with a track record of helping 1000+ clients achieve ranking improvements. Leads our strategy and consulting team.',
    image: '👨‍🔬',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'michael@jameelbiz.com',
    },
  },
  {
    id: 4,
    name: 'Emma Rodriguez',
    position: 'Customer Success Lead',
    bio: 'Dedicated to ensuring every client achieves their goals. Emma leads our support team and focuses on customer satisfaction and retention.',
    image: '👩‍🦰',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'emma@jameelbiz.com',
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            👥 Our Team
          </div>
          <h2 className="text-5xl font-bold text-black mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your SEO success and growth. Our team brings expertise from across the digital marketing industry.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-gradient-to-br from-purple-50 to-white rounded-2xl overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl"
            >
              {/* Avatar Container */}
              <div className="relative h-48 bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span className="text-8xl">{member.image}</span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Name and Position */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-purple-600">
                    {member.position}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-purple-100">
                  {member.socials?.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition"
                      title="LinkedIn"
                    >
                      💼
                    </a>
                  )}
                  {member.socials?.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition"
                      title="Twitter"
                    >
                      🐦
                    </a>
                  )}
                  {member.socials?.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition"
                      title="Email"
                    >
                      ✉️
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12 border border-purple-100">
          <h3 className="text-3xl font-bold text-black mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals passionate about SEO and digital marketing. Let&apos;s build something amazing together.
          </p>
          <a
            href="mailto:careers@jameelbiz.com"
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition"
          >
            View Careers →
          </a>
        </div>
      </div>
    </section>
  )
}
