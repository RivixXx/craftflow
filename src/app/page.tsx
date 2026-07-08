import Link from "next/link";
import Image from "next/image";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
import {
  Scissors,
  Sparkles,
  Palette,
  PenTool,
  Download,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react";

const categoryMeta: {
  name: string;
  icon: typeof Scissors;
  color: string;
  bg: string;
  slug: string;
}[] = [
  {
    name: "SVG Files",
    icon: Scissors,
    color: "from-red-400 to-pink-500",
    bg: "bg-red-50",
    slug: "svg",
  },
  {
    name: "Fonts",
    icon: PenTool,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    slug: "fonts",
  },
  {
    name: "Coloring Pages",
    icon: Palette,
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-50",
    slug: "coloring-pages",
  },
  {
    name: "Procreate",
    icon: Sparkles,
    color: "from-purple-400 to-indigo-500",
    bg: "bg-purple-50",
    slug: "procreate",
  },
];

export default async function Home() {
  const { data: posts } = await getSupabase()
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(6);

  const { data: categoryRows } = await getSupabase()
    .from("posts")
    .select("category")
    .eq("status", "published");

  const categoryCounts: Record<string, number> = {};
  for (const row of categoryRows || []) {
    const cat = row.category?.toLowerCase();
    if (cat) categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  }

  const categories = categoryMeta.map((c) => ({
    ...c,
    count: categoryCounts[c.slug] || 0,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-amber-50 py-20 px-8">
        {/* Decorative dots */}
        <div className="absolute top-0 left-0 w-full h-full craft-dots opacity-20 pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block float-badge mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              FREE Resources for Crafters
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-gradient">CraftFlow</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover thousands of
            <span className="font-bold text-red-500"> free SVG files</span>,
            <span className="font-bold text-amber-500"> fonts</span>,
            <span className="font-bold text-cyan-500"> coloring pages</span>,
            and design resources for your creative projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#resources"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-pink-600 transition-all shadow-xl hover:shadow-2xl cta-pulse"
            >
              <Download size={22} />
              Browse Free Resources
            </a>
            <Link
              href="/category/svg"
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-red-300 hover:text-red-500 transition-all"
            >
              Explore SVG Files
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Star className="text-amber-400 fill-amber-400" size={18} />
              <span>100% Free Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-pink-400 fill-pink-400" size={18} />
              <span>50,000+ Happy Crafters</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-purple-400" size={18} />
              <span>New Resources Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      {posts && posts.length > 0 && (
        <section id="resources" className="py-16 px-8 bg-orange-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold">Latest Resources</h2>
                <p className="text-gray-500 mt-2">
                  Fresh freebies added every week
                </p>
              </div>
              <Link
                href="/category/all"
                className="hidden md:flex items-center gap-2 text-red-500 font-semibold hover:text-red-600"
              >
                View All
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="group resource-card bg-white rounded-3xl overflow-hidden shadow-md"
                >
                  <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-50">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Sparkles
                          className="text-gray-300"
                          size={48}
                        />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-700 px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        FREE
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-red-500 transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-red-500 font-semibold text-sm">
                      <Download size={16} />
                      Download Free
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
      )}

      {/* Newsletter CTA */}
      <section className="py-16 px-8 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Free Resources Every Week
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join 50,000+ crafters and receive exclusive freebies, tutorials, and
            design inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
