import Link from "next/link";
import { ArrowLeft, Scissors, Heart, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about CraftFlow - your source for free SVG files, fonts, and design resources.",
};

export default function About() {
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
          <h1 className="text-4xl font-bold text-slate-900">About CraftFlow</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="prose prose-slate max-w-none">
          <div className="flex items-center gap-3 mb-8 not-prose">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl text-white">
              <Scissors size={28} />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              CraftFlow
            </span>
          </div>

          <h2>Our Mission</h2>
          <p>
            CraftFlow was created with one goal in mind: to provide crafters,
            designers, and DIY enthusiasts with access to high-quality free
            design resources. Whether you use a Cricut, Silhouette, Procreate, or
            any other creative tool, we want to help you bring your ideas to life
            without breaking the bank.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Free SVG Files</strong> &mdash; Thousands of cut-ready SVG
              files perfect for Cricut, Silhouette, and other cutting machines.
            </li>
            <li>
              <strong>Free Fonts</strong> &mdash; Handpicked fonts for crafting,
              invitations, logos, and more.
            </li>
            <li>
              <strong>Coloring Pages</strong> &mdash; Printable coloring pages
              for kids and adults.
            </li>
            <li>
              <strong>Procreate Brushes</strong> &mdash; Digital brushes and
              resources for iPad artists.
            </li>
          </ul>

          <h2>How We Keep It Free</h2>
          <p>
            CraftFlow earns a small commission when you purchase premium
            resources through our affiliate partner, Creative Fabrica. This
            commission comes at no extra cost to you and helps us maintain the
            site, add new free resources, and keep everything running smoothly.
          </p>

          <div className="not-prose my-8 p-8 bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl text-center">
            <Heart className="mx-auto text-pink-500 fill-pink-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Made with Love for Crafters</h3>
            <p className="text-gray-600 mb-6">
              Every resource on CraftFlow is curated to help you create something amazing.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition-all"
            >
              <Sparkles size={18} />
              Explore Free Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
