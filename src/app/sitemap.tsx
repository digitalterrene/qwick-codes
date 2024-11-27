import { routes } from "@/assets/data";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapUrls: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `https://qcodes.larrykingstone.com/${route}`,
  }));
  return [...sitemapUrls];
}
