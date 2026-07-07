import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";


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
      category,
      affiliate,
      pinterest_title,
      pinterest_description
    } = body;


    const { data, error } = await supabaseAdmin
      .from("posts")
      .insert({
        slug,
        title,
        excerpt,
        content,
        image,
        category,
        affiliate,
        pinterest_title,
        pinterest_description
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
