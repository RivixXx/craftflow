import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const categories: Record<
  string,
  {
    name: string;
    description: string;
    posts: { slug: string; title: string; image: string }[];
  }
> = {
  "svg-files": {
    name: "SVG Files",
    description: "Free SVG files for Cricut, Silhouette, and other cutting machines.",
    posts: [
      {
        slug: "20-free-halloween-svg-files",
        title: "20 Free Halloween SVG Files",
        image:
          "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=600&h=400&fit=crop",
      },
      {
        slug: "free-christmas-svg-bundle",
        title: "Free Christmas SVG Bundle",
        image:
          "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&h=400&fit=crop",
      },
      {
        slug: "floral-svg-designs",
        title: "Floral SVG Designs",
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=400&fit=crop",
      },
    ],
  },
  fonts: {
    name: "Fonts",
    description: "Best free fonts for designers and crafters.",
    posts: [
      {
        slug: "best-floral-fonts-2026",
        title: "Best Floral Fonts 2026",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
      },
      {
        slug: "handwritten-fonts-collection",
        title: "Handwritten Fonts Collection",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
      },
      {
        slug: "modern-sans-serif-fonts",
        title: "Modern Sans Serif Fonts",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      },
    ],
  },
  "coloring-pages": {
    name: "Coloring Pages",
    description: "Free printable coloring pages for kids and adults.",
    posts: [
      {
        slug: "cute-coloring-pages-for-kids",
        title: "Cute Coloring Pages for Kids",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
      },
      {
        slug: "mandala-coloring-pages",
        title: "Mandala Coloring Pages",
        image:
          "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop",
      },
      {
        slug: "animal-coloring-pages",
        title: "Animal Coloring Pages",
        image:
          "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&h=400&fit=crop",
      },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} | CraftFlow`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Category Not Found
          </h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

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
            {category.name}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {category.posts.map((post) => (
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
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
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
    </div>
  );
}
