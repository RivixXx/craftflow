import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";


export async function POST(request: Request) {

  const apiKey = request.headers.get("x-api-key");

  if (apiKey !== process.env.CRAFTFLOW_API_KEY) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {

    const body = await request.json();


    const {
      slug,
      title,
      excerpt,
      content,
      image,
      image_prompt,
      category,
      affiliate,
      status,
      views,
      clicks,
      pinterest_title,
      pinterest_description,
      pinterest_url
    } = body;


    const { data, error } = await getSupabaseAdmin()
      .from("posts")
      .insert({
        slug,
        title,
        excerpt,
        content,
        image,
        image_prompt: image_prompt || null,
        category,
        affiliate,
        status: status || "draft",
        views: views || 0,
        clicks: clicks || 0,
        pinterest_title,
        pinterest_description,
        pinterest_url: pinterest_url || null
      })
      .select()
      .single();



    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }


    return NextResponse.json(data);


  } catch (error) {

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );

  }

}
