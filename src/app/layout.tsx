import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Scissors, Heart, Menu, X } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CraftFlow - Free SVG Files, Fonts & Design Resources",
    template: "%s | CraftFlow",
  },
  description:
    "Discover thousands of free SVG files, fonts, coloring pages, Procreate brushes, and Canva templates for Cricut and craft projects.",
  metadataBase: new URL("https://craftflow.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CraftFlow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#fffbf5]">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100">
          {/* Mobile hamburger checkbox - must be sibling of menu */}
          <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />

          <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white">
                <Scissors size={20} />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                CraftFlow
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/category/svg" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">SVG Files</Link>
              <Link href="/category/fonts" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">Fonts</Link>
              <Link href="/category/coloring-pages" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">Coloring Pages</Link>
              <Link href="/category/procreate" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">Procreate</Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://creativefabrica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-xl font-semibold text-sm hover:from-red-600 hover:to-pink-600 transition-all shadow-md"
              >
                Premium Resources
              </a>
              {/* Hamburger button */}
              <label htmlFor="mobile-menu-toggle" className="md:hidden cursor-pointer p-2 text-gray-600 hover:text-red-500 transition-colors">
                <Menu size={24} />
              </label>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <div className="hidden peer-checked:flex flex-col gap-1 px-8 pb-4 md:hidden border-t border-orange-100 bg-white">
            <Link href="/category/svg" className="py-2.5 text-sm font-medium text-gray-600 hover:text-red-500">SVG Files</Link>
            <Link href="/category/fonts" className="py-2.5 text-sm font-medium text-gray-600 hover:text-red-500">Fonts</Link>
            <Link href="/category/coloring-pages" className="py-2.5 text-sm font-medium text-gray-600 hover:text-red-500">Coloring Pages</Link>
            <Link href="/category/procreate" className="py-2.5 text-sm font-medium text-gray-600 hover:text-red-500">Procreate</Link>
            <a href="https://creativefabrica.com" target="_blank" rel="noopener noreferrer" className="py-2.5 text-sm font-semibold text-red-500">Premium Resources</a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white">
                    <Scissors size={20} />
                  </div>
                  <span className="text-xl font-extrabold">CraftFlow</span>
                </Link>
                <p className="text-gray-400 text-sm">
                  Free design resources for crafters and creatives. SVG files,
                  fonts, coloring pages, and more.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link href="/category/svg" className="hover:text-white transition-colors">
                      SVG Files
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/fonts" className="hover:text-white transition-colors">
                      Fonts
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/coloring-pages" className="hover:text-white transition-colors">
                      Coloring Pages
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/procreate" className="hover:text-white transition-colors">
                      Procreate Brushes
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Popular</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link href="/category/halloween" className="hover:text-white transition-colors">
                      Halloween SVG
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/christmas" className="hover:text-white transition-colors">
                      Christmas SVG
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/wedding-fonts" className="hover:text-white transition-colors">
                      Wedding Fonts
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/canva" className="hover:text-white transition-colors">
                      Canva Templates
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} CraftFlow. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                Made with <Heart className="text-red-500 fill-red-500" size={14} /> for crafters
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
