import { NextRequest } from "next/server";

export function GET(_: NextRequest) {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://kfiatek.vercel.app/</loc>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://kfiatek.vercel.app/blog</loc>
        <priority>0.8</priority>
      </url>
    </urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
}
