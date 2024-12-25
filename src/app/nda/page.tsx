import { FloatingNavbar } from '@/components/Menubars/floating-navbar';
import { Footer } from '@/components/Menubars/Footer';
import React from 'react';

function NDA() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-950/50">
      <FloatingNavbar />
      <div className="max-w-4xl mx-auto p-8 lg:pt-36 pt-32 space-y-8 text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-extrabold text-center mb-4">Non-Disclosure Agreement (NDA)</h1>
        <p className="text-lg text-center"><strong>Effective Date:</strong> December 20, 2004</p>
        <p className="text-center">This Non-Disclosure Agreement (the "Agreement") is made between Mynimalistic ("the Company") and the individual agreeing to employment, internship, or collaboration with the Company ("the Recipient"). By joining Mynimalistic, the Recipient agrees to the following terms and conditions:</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">1. Definition of Confidential Information</h2>
            <p>"Confidential Information" includes, but is not limited to:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Business strategies, plans, and financial information.</li>
              <li>Marketing strategies, campaign details, and unpublished materials.</li>
              <li>Client, partner, or vendor lists, agreements, and communications.</li>
              <li>Proprietary software, algorithms, codebases, designs, or data.</li>
              <li>Project details, internal processes, and work-related discussions.</li>
              <li>Any non-public information disclosed in any form (oral, written, electronic, etc.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Obligations of the Recipient</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Use Confidential Information solely for the purpose of fulfilling their role at Mynimalistic.</li>
              <li>Keep all Confidential Information strictly confidential and not disclose it to any third party without prior written consent from the Company.</li>
              <li>Protect Confidential Information from unauthorized access, theft, or misuse.</li>
              <li>Notify the Company immediately if they suspect or become aware of any breach of this Agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Exclusions from Confidential Information</h2>
            <p>The following is not considered Confidential Information:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Information that is publicly available through no fault of the Recipient.</li>
              <li>Information disclosed by third parties not bound by confidentiality obligations.</li>
              <li>Information independently developed by the Recipient without access to the Company’s Confidential Information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Duration of the Agreement</h2>
            <p>This Agreement is effective from the date the Recipient begins their association with Mynimalistic and continues indefinitely, even after the termination of the Recipient's association with the Company.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Return of Materials</h2>
            <p>Upon termination of the Recipient’s role or upon request by the Company, the Recipient must:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Return or securely destroy all copies of Confidential Information, in both physical and digital forms.</li>
              <li>Certify in writing that all Confidential Information has been returned or destroyed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Any work, creation, or invention (including software, designs, or marketing materials) produced during the Recipient's tenure at Mynimalistic is the exclusive property of the Company.</li>
              <li>The Recipient waives all claims to intellectual property created during their association with Mynimalistic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Remedies for Breach</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>In the event of a breach of this Agreement, the Company reserves the right to pursue legal action, including but not limited to, claims for damages, injunctions, or other equitable remedies.</li>
              <li>The Recipient may be held liable for all costs, including legal fees, incurred by the Company in enforcing this Agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Governing Law and Jurisdiction</h2>
            <p>This Agreement shall be governed by the laws of India, and any disputes arising out of or related to this Agreement shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Amendments and Waivers</h2>
            <p>Any amendments to this Agreement must be in writing and signed by both parties. Failure by the Company to enforce any provision of this Agreement shall not constitute a waiver of its rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Acknowledgment</h2>
            <p>By joining Mynimalistic as an employee, intern, or contractor, the Recipient acknowledges that they have read, understood, and agree to be bound by this Non-Disclosure Agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p>If you have any questions regarding this Agreement, please contact us:</p>
            <ul className="list-disc pl-5 mt-2">
                <li>Email: <a href="mailto:mynimalistic.dev@gmail.com" className="text-blue-500 hover:underline">mynimalistic.dev@gmail.com</a></li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default NDA;
