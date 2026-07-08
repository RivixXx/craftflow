import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function convertGoogleDriveUrl(url: string): string {
  if (!url) return url;

  // Match: https://drive.google.com/file/d/FILE_ID/...
  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) {
    return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;
  }

  // Match: https://drive.google.com/open?id=FILE_ID
  const openMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (openMatch) {
    return `https://lh3.googleusercontent.com/d/${openMatch[1]}`;
  }

  // Already a CDN or other URL — return as-is
  return url;
}

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
        image: convertGoogleDriveUrl(image),
        image_prompt: image_prompt || null,
        category,
        affiliate,
        status: status || "published",
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
