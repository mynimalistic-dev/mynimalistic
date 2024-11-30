import { FloatingNavbar } from '@/components/Menubars/floating-navbar';
import { Footer } from '@/components/Menubars/Footer';
import React from 'react';

function Terms() {
  return (
    <main className="relative min-h-screen  bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-950/50">
      <FloatingNavbar />
      <div className="max-w-4xl mx-auto p-8 lg:pt-36 pt-32 space-y-8 text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-extrabold text-center mb-4">Terms and Conditions</h1>
        <p className="text-lg text-center"><strong>Effective Date:</strong> December 1, 2024</p>
        <p className="text-center">Welcome to Mynimalistic! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>By using Mynimalistic’s website or services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Use of Services</h2>
            <p>You must be at least 18 years old or have parental/guardian consent to use our services. You agree to use our services only for lawful purposes and in compliance with all applicable laws. Any unauthorized use of our website or services is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
            <p>All content on the Mynimalistic website, including but not limited to text, graphics, logos, images, and software, is the property of Mynimalistic or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Payment and Pricing</h2>
            <p>All prices for our services or products are subject to change without notice. Payments must be made in full before services are delivered unless otherwise agreed upon. Refunds, if applicable, will be made solely at the discretion of Mynimalistic.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. User Content</h2>
            <p>By submitting any content (e.g., reviews, comments) to Mynimalistic, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, reproduce, and display the content in connection with our services. You are solely responsible for the accuracy and legality of the content you submit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
            <p>Mynimalistic is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Any errors or interruptions in our services caused by technical issues or third-party actions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Termination</h2>
            <p>We reserve the right to terminate or suspend access to our services at any time, without notice, for any reason, including but not limited to a breach of these Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Privacy Policy</h2>
            <p>Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms will be resolved in the courts of Bhubaneswar, Odisha.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us:</p>
            <ul className="list-disc pl-5">
              <li>Email: mynimalistic.dev@gmail.com</li>
              <li>Phone: 8729806726</li>
              <li>Address: Patia, Bhubaneswar, Odisha, India</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Terms;
