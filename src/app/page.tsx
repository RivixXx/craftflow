import { supabase } from "@/lib/supabase";


export default async function Home() {

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", {
      ascending: false
    });


  if (error) {
    return (
      <div>
        Ошибка загрузки:
        {error.message}
      </div>
    )
  }


  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        CraftFlow
      </h1>


      <div className="grid gap-6">

        {posts?.map((post)=>(
          <article
            key={post.id}
            className="border rounded-xl p-5"
          >

            <h2 className="text-2xl font-bold">
              {post.title}
            </h2>


            <p className="mt-2">
              {post.excerpt}
            </p>


            <div className="mt-4 text-sm">
              Category: {post.category}
            </div>

          </article>
        ))}


      </div>

    </main>
  )
}
