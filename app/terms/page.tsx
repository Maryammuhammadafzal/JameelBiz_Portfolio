export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* 1. Agreement */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* 2. Use License */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Jameel Biz's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Modifying or copying the materials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Using the materials for any commercial purpose or for any public display</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Attempting to decompile or reverse engineer any software contained on the website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Removing any copyright or other proprietary notations from the materials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Transferring the materials to another person or &ldquo;mirroring&rdquo; the materials on any other server</span>
              </li>
            </ul>
          </div>

          {/* 3. Disclaimer */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on Jameel Biz's website are provided on an &apos;as is&apos; basis. Jameel Biz makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          {/* 4. Limitations */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">4. Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Jameel Biz or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Jameel Biz's website, even if Jameel Biz or a Jameel Biz authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          {/* 5. Accuracy of Materials */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on Jameel Biz's website could include technical, typographical, or photographic errors. Jameel Biz does not warrant that any of the materials on its website are accurate, complete, or current. Jameel Biz may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          {/* 6. Links */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">6. Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Jameel Biz has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Jameel Biz of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </div>

          {/* 7. Modifications */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">7. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Jameel Biz may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          {/* 8. Governing Law */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">8. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          {/* 9. User Responsibilities */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">9. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our platform, you agree to:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Provide accurate and truthful information in your account</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Maintain the confidentiality of your account password</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Accept responsibility for all activities under your account</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Comply with all applicable laws and regulations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Not engage in any activity that is illegal or violates these terms</span>
              </li>
            </ul>
          </div>

          {/* 10. Payment Terms */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">10. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All payments are processed securely and are subject to the following terms:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Prices are subject to change without notice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>All charges are final and non-refundable unless otherwise stated</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>You authorize us to charge your payment method for all purchases</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-3">If you have questions about these Terms & Conditions, please contact us:</p>
            <p className="text-gray-700">
              <strong>Email:</strong> legal@jameelbiz.com<br />
              <strong>Phone:</strong> +1 (234) 567-8900<br />
              <strong>Address:</strong> 123 Business Street, New York, NY 10001, United States
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
