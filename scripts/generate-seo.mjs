import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fallbackSiteUrl = "https://gitasubedi.vercel.app";
const rawSiteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  fallbackSiteUrl;

const siteUrl = rawSiteUrl.replace(/\/+$/, "");
const publicDir = join(process.cwd(), "public");
const today = new Date().toISOString().slice(0, 10);
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/Journey", priority: "0.9" },
];

mkdirSync(publicDir, { recursive: true });

writeFileSync(
  join(publicDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

writeFileSync(
  join(publicDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(
      (route) =>
        `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>\n`,
);
