import type { MetadataRoute } from "next";
import { site } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.links.url;
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/radar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
