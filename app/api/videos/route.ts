import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error("❌ Error fetching videos:", error);
    return NextResponse.json(
      { error: "Error fetching videos" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, description, publicId, originalSize, compressedSize, duration, url } = body;

    if (!title || !publicId || !url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const video = await prisma.video.create({
      data: {
        title,
        description,
        publicId,
        originalSize,
        compressedSize,
        duration,
        url,
      },
    });

    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating video:", error);
    return NextResponse.json(
      { error: "Error creating video" },
      { status: 500 }
    );
  }
}


