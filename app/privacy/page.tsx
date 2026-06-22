export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl prose prose-lg max-w-none">
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Jameel Biz (&ldquo;we&rdquo; or &ldquo;us&rdquo; or &ldquo;our&rdquo;) operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Information Collection and Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              
              <h3 className="text-2xl font-semibold text-black mb-3">Types of Data Collected:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Personal Data:</strong> Name, email address, phone number, postal address, cookies and usage data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and referral source</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Device Information:</strong> Device type, operating system, browser type, and IP address</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Payment Information:</strong> Processed securely through third-party payment processors</span>
                </li>
              </ul>
            </div>

            {/* Use of Data */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Use of Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Jameel Biz uses the collected data for various purposes:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>To provide and maintain our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>To notify you about changes to our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>To allow you to participate in interactive features of our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>To provide customer support and respond to inquiries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>To gather analysis or valuable information so we can improve our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>To monitor the usage of our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>To detect, prevent and address technical and security issues</span>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Security of Data</h2>
              <p className="text-gray-700 leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We implement a variety of security measures to maintain the safety of your personal information.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </div>

            {/* Third Party Services */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Third Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Service may contain links to third-party sites that are not operated by us. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We advise you to review the Privacy Policy of every site you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Service does not address anyone under the age of 18 (&ldquo;Children&rdquo;). We do not knowingly collect personally identifiable information from children under 18. If you become aware that a child has provided us with Personal Data, please contact us immediately.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;effective date&rdquo; at the top of this Privacy Policy.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-3">If you have any questions about this Privacy Policy, please contact us:</p>
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@jameelbiz.com<br />
                <strong>Phone:</strong> +1 (234) 567-8900<br />
                <strong>Address:</strong> 123 Business Street, New York, NY 10001, United States
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
