import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CraftFlow - Free Design Resources",
    template: "%s | CraftFlow",
  },
  description:
    "Discover the best free fonts, SVG files, coloring pages and design resources.",
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
      <body className="min-h-full flex flex-col font-sans">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-slate-900">
              CraftFlow
            </Link>
            <nav className="flex items-center gap-8">
              <Link
                href="/category/svg-files"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                SVG Files
              </Link>
              <Link
                href="/category/fonts"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Fonts
              </Link>
              <Link
                href="/category/coloring-pages"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Coloring Pages
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <Link href="/" className="text-xl font-bold text-slate-900">
                  CraftFlow
                </Link>
                <p className="text-sm text-slate-500 mt-2">
                  Free design resources for crafters and designers.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="/category/svg-files"
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  SVG Files
                </Link>
                <Link
                  href="/category/fonts"
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  Fonts
                </Link>
                <Link
                  href="/category/coloring-pages"
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  Coloring Pages
                </Link>
              </div>
            </div>
            <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-400">
              © {new Date().getFullYear()} CraftFlow. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
