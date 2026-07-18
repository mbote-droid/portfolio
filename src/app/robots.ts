import type { MetadataRoute } from "next";
import { site } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.links.url}/sitemap.xml`,
    host: site.links.url,
  };
}
