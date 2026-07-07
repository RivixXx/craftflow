import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";


type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params
}: Props) {

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();


  return {
    title: post?.title
      ? `${post.title} | CraftFlow`
      : "CraftFlow",

    description: post?.excerpt
  };
}


export default async function PostPage({ params }: Props) {

  const { slug } = params;


  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();


  if (error || !post) {
    notFound();
  }


  return (
    <main className="max-w-4xl mx-auto p-10">

      <article>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl mb-8 w-full"
          />
        )}


        <h1 className="text-5xl font-bold mb-5">
          {post.title}
        </h1>


        <p className="text-xl text-gray-600 mb-8">
          {post.excerpt}
        </p>


        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: post.content
          }}
        />


        <div className="mt-10">

          <a
            href={post.affiliate}
            target="_blank"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl"
          >
            Download on Creative Fabrica
          </a>

        </div>

      </article>

    </main>
  );
}
