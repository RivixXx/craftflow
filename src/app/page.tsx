import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const latestPosts = [
  {
    slug: "20-free-halloween-svg-files",
    title: "20 Free Halloween SVG Files",
    image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=600&h=400&fit=crop",
    category: "SVG Files",
  },
  {
    slug: "best-floral-fonts-2026",
    title: "Best Floral Fonts 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    category: "Fonts",
  },
  {
    slug: "cute-coloring-pages-for-kids",
    title: "Cute Coloring Pages for Kids",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
    category: "Coloring Pages",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            CraftFlow
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the best free fonts, SVG files, coloring pages and design
            resources.
          </p>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Latest Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/post/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-700 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4 text-sm text-blue-600 font-medium">
                    Read more
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
