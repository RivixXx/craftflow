import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the CraftFlow team.",
};

export default function Contact() {
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
          <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 mb-8">
            Have a question, suggestion, or want to collaborate? We&apos;d love to
            hear from you!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
              <div className="p-3 bg-red-100 rounded-xl">
                <Mail className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-600">
                  For general inquiries, partnerships, or support:
                </p>
                <a
                  href="mailto:support@craftflow.app"
                  className="text-red-500 font-semibold hover:text-red-600"
                >
                  support@craftflow.app
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
              <div className="p-3 bg-blue-100 rounded-xl">
                <MessageCircle className="text-blue-500" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Request a Resource</h3>
                <p className="text-gray-600">
                  Looking for a specific SVG, font, or design resource? Let us
                  know and we&apos;ll try to add it to our collection.
                </p>
                <a
                  href="mailto:support@craftflow.app?subject=Resource%20Request"
                  className="text-red-500 font-semibold hover:text-red-600"
                >
                  Send a request
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
              <div className="p-3 bg-green-100 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Community</h3>
                <p className="text-gray-600">
                  Join our community of 50,000+ crafters. Share your projects,
                  get inspiration, and connect with fellow creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
