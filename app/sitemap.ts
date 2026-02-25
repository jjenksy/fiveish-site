import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fiveish.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/press`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
