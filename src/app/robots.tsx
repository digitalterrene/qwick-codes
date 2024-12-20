import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/privacy-policy",
          "/returns-policy",
          "/terms-and-conditions",
        ],
      },
    ],
    sitemap: `https://qwick-codes.vercel.app/sitemap.xml`,
  };
}
