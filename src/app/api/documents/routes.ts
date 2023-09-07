import { Liveblocks } from "@liveblocks/node";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;
const ROOT_URL = process.env.LIVEBLOCKS_URL;
const ROOM_ID = process.env.LIVEBLOCKS_ROOM_ID;

const liveblocks = new Liveblocks({
  secret: API_KEY!,
});

// Store Document
export async function POST(request: NextRequest) {
  const res = await fetch(`${ROOT_URL}${ROOM_ID}/storage`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })
  const data = await res.json();
 
  return NextResponse.json({ data });
}

// Get Storage
export async function GET() {
    const res = await fetch(`${ROOT_URL}${ROOM_ID}/storage`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json();
   
    return NextResponse.json({ data });
 }