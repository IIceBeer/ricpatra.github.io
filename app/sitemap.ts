import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ricpatra.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/know-us`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/handles`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/hire-me`,
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];
}
