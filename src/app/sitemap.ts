import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/demo",
  "/features",
  "/privacy",
  "/proof",
  "/download",
  "/support",
  "/changelog",
  "/press",
  "/legal/terms",
  "/legal/licenses",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-18T00:00:00Z");
  return routes.map((route) => ({
    url: `https://sottokey.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/demo" ? 0.9 : 0.7,
  }));
}
