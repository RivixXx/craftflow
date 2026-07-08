import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CraftFlow - Free SVG Files, Fonts & Design Resources.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-50 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-500 mt-2">Last updated: July 8, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="prose prose-slate max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to CraftFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website
            craftflow.vercel.app.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Email address when you subscribe to
              our newsletter.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information automatically
              collected when you access the site, such as IP address, browser
              type, operating system, and browsing patterns.
            </li>
          </ul>

          <h2>3. Use of Your Information</h2>
          <p>We may use the information we collect to:</p>
          <ul>
            <li>Send you periodic emails regarding free resources and updates.</li>
            <li>Improve and personalize your experience on our website.</li>
            <li>Analyze usage trends and optimize our content.</li>
            <li>Protect against unauthorized access and maintain site security.</li>
          </ul>

          <h2>4. Cookies and Tracking</h2>
          <p>
            We may use cookies and similar tracking technologies to enhance your
            experience. You can control cookie settings through your browser
            preferences.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>
              <strong>Supabase:</strong> For database hosting and content
              management.
            </li>
            <li>
              <strong>Vercel:</strong> For website hosting and analytics.
            </li>
            <li>
              <strong>Creative Fabrica:</strong> Our affiliate partner for
              premium design resources.
            </li>
          </ul>
          <p>
            These third parties have their own privacy policies governing the use
            of your information.
          </p>

          <h2>6. Affiliate Links</h2>
          <p>
            Our website contains affiliate links to Creative Fabrica. When you
            click on these links and make a purchase, we may earn a small
            commission at no additional cost to you. This helps us maintain the
            site and continue providing free resources.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information. However, no method of transmission
            over the Internet is 100% secure.
          </p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Unsubscribe from our email communications at any time.</li>
          </ul>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to individuals under 13. We do not
            knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page with an
            updated effective date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at: <strong>support@craftflow.app</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
