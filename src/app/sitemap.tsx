import { routes } from "@/assets/data";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapUrls: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `https://qwick-codes.vercel.app/${route}`,
  }));
  return [...sitemapUrls];
}
