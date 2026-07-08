import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const { data: posts } = await supabase
    .from("posts")
    .select("category")
    .eq("category", slug)
    .eq("status", "published")
    .limit(1);

  const name = posts?.[0]?.category || slug;

  return {
    title: `${name} | CraftFlow`,
    description: `Free ${name} resources and downloads.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("category", slug)
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error || !posts || posts.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Category Not Found
          </h1>
          <p className="text-slate-500 mb-6">
            No posts found in this category.
          </p>
          <Link href="/" className="text-red-500 hover:underline font-semibold">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = posts[0].category;

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
            {categoryName}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Free {categoryName.toLowerCase()} resources and downloads.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/post/${post.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
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
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-red-500 font-medium">
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
    </div>
  );
}
