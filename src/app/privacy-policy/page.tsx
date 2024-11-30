import { FloatingNavbar } from '@/components/Menubars/floating-navbar'
import { Footer } from '@/components/Menubars/Footer'
import React from 'react'

function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen  bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-950/50">
<FloatingNavbar/>
<div className="max-w-4xl mx-auto p-8 lg:pt-36 pt-32 space-y-8 text-gray-800 dark:text-gray-200">
<h1 className="text-4xl font-extrabold text-center mb-4">Privacy Policy</h1>
      <p className="text-lg text-center"><strong>Effective Date:</strong> December 1, 2024</p>
      <p className="text-center">At Mynimalistic, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services. By accessing our website or using our services, you agree to the terms of this Privacy Policy.</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Personal Information: Name, email address, phone number, billing address, and other information you provide when contacting us or using our services.</li>
            <li>Technical Information: IP address, browser type, device information, and browsing data collected automatically through cookies or similar technologies.</li>
            <li>Transaction Information: Details about payments and services purchased.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>To provide and improve our services.</li>
            <li>To process transactions and send you related updates.</li>
            <li>To communicate with you regarding your inquiries or account.</li>
            <li>To comply with legal requirements and protect against fraud or abuse.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
          <p>We do not sell, rent, or share your personal information with third parties except in the following circumstances:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Service Providers: Trusted third-party vendors who assist us in operating our business (e.g., payment processors).</li>
            <li>Legal Obligations: When required by law or to protect our rights.</li>
            <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control your cookie preferences through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <ul className="list-disc pl-5">
            <li>Access, update, or delete your information by contacting us.</li>
            <li>Opt-out of receiving promotional emails by clicking the unsubscribe link.</li>
            <li>Request information about how your data is processed.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Retention of Information</h2>
          <p>We retain your personal information only as long as necessary for the purposes outlined in this Privacy Policy or as required by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-5">
            <li>Email: mynimalistic.dev@gmail.com</li>
            <li>Phone: 8729806726</li>
            <li>Address: Patia, Bhubaneswar, Odisha, India</li>
          </ul>
        </section>
      </div>
    </div>
    <Footer/>
    </main>
  )
}

export default PrivacyPolicy
