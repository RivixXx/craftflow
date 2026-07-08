import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Eye,
  Share2,
  Sparkles,
} from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const { data: post } = await getSupabase()
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  return {
    title: post?.title ? `${post.title} | CraftFlow` : "CraftFlow",
    description: post?.excerpt,
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: post?.image ? [{ url: post.image, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post, error } = await getSupabase()
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !post) {
    notFound();
  }

  // Increment views
  await getSupabase()
    .from("posts")
    .update({ views: (post.views || 0) + 1 })
    .eq("id", post.id);

  // Get related posts
  const { data: relatedPosts } = await getSupabase()
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("category", post.category)
    .neq("id", post.id)
    .limit(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-amber-50 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-red-500 mb-6 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
              FREE
            </span>
            {post.views && post.views > 0 && (
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Eye size={14} />
                {post.views} views
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600">{post.excerpt}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image + CTA - Left Column */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-24">
                {/* Resource Preview */}
                {post.image && (
                  <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
                    <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">Ready to Download?</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Get this resource for free and start creating.
                  </p>
                  <a
                    href={post.affiliate || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition-all shadow-lg cta-pulse"
                  >
                    <Download size={20} />
                    Download Free
                  </a>
                  <p className="text-center text-gray-400 text-xs mt-3">
                    via Creative Fabrica
                  </p>
                </div>

                {/* Share */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 text-sm transition-colors">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Article Content - Right Column */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <article className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
                <div
                  className="prose prose-lg prose-slate max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Bottom CTA */}
                <div className="mt-12 p-8 bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl text-center">
                  <Sparkles className="mx-auto text-amber-500 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">
                    Love This Resource?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Download it now and start your next creative project!
                  </p>
                  <a
                    href={post.affiliate || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition-all shadow-lg"
                  >
                    <Download size={20} />
                    Download on Creative Fabrica
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 px-8 bg-orange-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              More {post.category} Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/post/${related.slug}`}
                  className="group resource-card bg-white rounded-3xl overflow-hidden shadow-md"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50">
                    {related.image && (
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FREE
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-500 transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
