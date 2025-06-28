import { NextResponse } from "next/server";
import fs from "fs";

const FILE = "urls.txt";    // simple text store for now

export async function POST(req) {
  const url = (await req.text()).trim();

  if (!url.startsWith("http")) {
    return NextResponse.json({ error: "Bad URL" }, { status: 400 });
  }

  fs.appendFileSync(FILE, url + "\n");
  return NextResponse.json({ ok: true });
}
