import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "All Resources",
  description: "Browse all free SVG files, fonts, and design resources on CraftFlow.",
};

export default async function AllPostsPage() {
  const { data: posts, error } = await getSupabase()
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            All Resources
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Browse all free resources available on CraftFlow.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/post/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-50">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      No image
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
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-red-500 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-red-500 font-medium text-sm">
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
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No resources yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
