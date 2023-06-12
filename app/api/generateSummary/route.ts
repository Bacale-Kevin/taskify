import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  //communicate with open AI
}
