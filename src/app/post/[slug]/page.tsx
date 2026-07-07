import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const posts: Record<
  string,
  {
    title: string;
    image: string;
    category: string;
    content: string;
    affiliateLink: string;
  }
> = {
  "20-free-halloween-svg-files": {
    title: "20 Free Halloween SVG Files",
    image:
      "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=1200&h=600&fit=crop",
    category: "SVG Files",
    affiliateLink: "#",
    content: `
      <p>Halloween is just around the corner, and it's time to get creative with your crafts! Whether you're decorating your home, making costumes, or creating themed party supplies, these free Halloween SVG files will help you bring your spooky ideas to life.</p>

      <h2>What's Included</h2>
      <p>This collection features 20 high-quality SVG files perfect for cutting machines like Cricut and Silhouette. From classic Halloween motifs like pumpkins and bats to more intricate designs, there's something for every project.</p>

      <h2>How to Use These Files</h2>
      <p>Simply download the SVG files and import them into your preferred cutting software. All files are compatible with major cutting machine brands and can be resized without losing quality.</p>

      <h2>Perfect For</h2>
      <ul>
        <li>T-shirt designs</li>
        <li>Home decorations</li>
        <li>Party invitations</li>
        <li>Window clings</li>
        <li>Stickers and labels</li>
      </ul>

      <h2>Download Now</h2>
      <p>Get instant access to all 20 Halloween SVG files completely free. Perfect for both beginners and experienced crafters.</p>
    `,
  },
  "best-floral-fonts-2026": {
    title: "Best Floral Fonts 2026",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=600&fit=crop",
    category: "Fonts",
    affiliateLink: "#",
    content: `
      <p>Floral fonts are taking the design world by storm in 2026. These elegant, nature-inspired typefaces add a touch of sophistication to any project, from wedding invitations to branding materials.</p>

      <h2>Top Picks for 2026</h2>
      <p>We've curated the best floral fonts that combine readability with stunning botanical elements. Each font has been carefully selected for its versatility and visual appeal.</p>

      <h2>Design Applications</h2>
      <p>Floral fonts work beautifully in a wide range of design contexts. Whether you're creating logos, posters, social media graphics, or packaging, these fonts will elevate your work.</p>

      <h2>Why Choose Floral Fonts</h2>
      <ul>
        <li>Add natural elegance to designs</li>
        <li>Perfect for seasonal projects</li>
        <li>Great for feminine branding</li>
        <li>Works well with both modern and vintage styles</li>
      </ul>

      <h2>Get Started Today</h2>
      <p>Download our top floral font picks and start creating beautiful designs. Free for personal and commercial use.</p>
    `,
  },
  "cute-coloring-pages-for-kids": {
    title: "Cute Coloring Pages for Kids",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=600&fit=crop",
    category: "Coloring Pages",
    affiliateLink: "#",
    content: `
      <p>Keep your little ones entertained with our collection of adorable coloring pages! These free printable designs feature cute animals, magical creatures, and fun scenes that kids absolutely love.</p>

      <h2>What's Inside</h2>
      <p>Our coloring page collection includes a variety of themes designed to spark creativity and imagination. From friendly animals to whimsical fantasy worlds, there's something for every child.</p>

      <h2>Benefits of Coloring</h2>
      <p>Coloring isn't just fun—it's educational too! These pages help develop fine motor skills, color recognition, and creative thinking in children of all ages.</p>

      <h2>Perfect for All Ages</h2>
      <ul>
        <li>Toddlers (simple shapes)</li>
        <li>Preschoolers (basic scenes)</li>
        <li>School-age kids (detailed designs)</li>
        <li>Pre-teens (complex patterns)</li>
      </ul>

      <h2>Print & Color</h2>
      <p>Simply download, print, and let the coloring fun begin! All pages are designed for standard letter-size paper.</p>
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | CraftFlow`,
    description: `Download ${post.title} for free. Perfect for your crafting projects.`,
    openGraph: {
      title: post.title,
      description: `Download ${post.title} for free.`,
      images: [{ url: post.image, width: 1200, height: 600 }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Post Not Found
          </h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Button */}
        <div className="mt-12 p-8 bg-slate-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Download?
          </h3>
          <p className="text-slate-600 mb-6">
            Get this resource for free and start creating amazing projects.
          </p>
          <a
            href={post.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Download on Creative Fabrica
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
