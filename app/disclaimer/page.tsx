export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Introduction */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mb-8">
            <h2 className="text-2xl font-bold text-red-900 mb-3">Important Notice</h2>
            <p className="text-red-800 leading-relaxed">
              The information provided on this website is for general informational purposes only. It is not intended to constitute legal, financial, or professional advice. Always consult with a qualified professional before making any decisions based on information from this website.
            </p>
          </div>

          {/* 1. No Professional Advice */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">1. No Professional Advice</h2>
            <p className="text-gray-700 leading-relaxed">
              The content on Jameel Biz's website is provided solely for informational and educational purposes. Nothing on this website constitutes professional advice, including but not limited to legal, financial, tax, medical, or business advice. We strongly recommend that you seek appropriate professional counsel before relying on or acting upon any information contained on this website.
            </p>
          </div>

          {/* 2. No Warranties */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">2. No Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jameel Biz makes no representations or warranties of any kind, express or implied, regarding:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>The accuracy, completeness, or reliability of the website content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>The fitness of the website for any particular purpose</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>The website's uninterrupted availability or operation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>The absence of viruses or harmful code on the website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Any results that may be obtained from using the website</span>
              </li>
            </ul>
          </div>

          {/* 3. Limitation of Liability */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">3. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Jameel Biz, its owners, employees, or agents be liable for any damages (including without limitation, indirect, incidental, special, consequential, or punitive damages) arising out of or related to your use of or inability to use the website or its content, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          {/* 4. Third-Party Content */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">4. Third-Party Content and Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites and may display content from third parties. We:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Do not endorse or control third-party websites or content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Are not responsible for third-party content, accuracy, or practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Advise you to review third-party terms and policies before use</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Assume no liability for third-party actions or content</span>
              </li>
            </ul>
          </div>

          {/* 5. User-Generated Content */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">5. User-Generated Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Users of our platform may submit, post, or display content. Jameel Biz does not endorse, verify, or assume responsibility for any user-generated content. We are not liable for any loss or damage resulting from reliance on such content. Users are solely responsible for their submissions.
            </p>
          </div>

          {/* 6. Service Interruptions */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">6. Service Interruptions</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website and services may be subject to interruptions, downtime, or discontinuation. Jameel Biz makes no guarantee of continuous, uninterrupted service. We are not liable for any damages or losses resulting from service interruptions, downtime, or discontinuation.
            </p>
          </div>

          {/* 7. Financial Information */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">7. Financial Information Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If our website contains financial information, pricing, or investment-related content:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Such information is provided for informational purposes only</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>It does not constitute investment advice or a recommendation to buy or sell</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Past performance does not guarantee future results</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>Consult a financial advisor before making investment decisions</span>
              </li>
            </ul>
          </div>

          {/* 8. Indemnification */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">8. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Jameel Biz, its owners, employees, and agents from any claims, damages, losses, or expenses arising out of your use of the website, violation of these terms, or violation of any rights of another party.
            </p>
          </div>

          {/* 9. Assumption of Risk */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">9. Assumption of Risk</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of the website and reliance on any content is entirely at your own risk. You assume all responsibility and risk for any loss, damage, or injury resulting from your use of or inability to use the website or its content.
            </p>
          </div>

          {/* 10. Changes to Disclaimer */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">10. Changes to This Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Jameel Biz reserves the right to modify this disclaimer at any time. Changes will be effective immediately upon posting. Your continued use of the website following changes constitutes your acceptance of the modified disclaimer.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
            <h2 className="text-2xl font-bold text-black mb-4">Questions or Concerns?</h2>
            <p className="text-gray-700 mb-3">If you have questions about this Disclaimer, please contact us:</p>
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
