import type { MetadataRoute } from "next";
import { SITE_METADATA } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_METADATA.url;
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
