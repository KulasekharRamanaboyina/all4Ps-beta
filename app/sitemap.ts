import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap() {
  let posts: any[] = [];
  try {
    posts = await client.fetch(`
      *[_type=="post"]{
        "slug": slug.current,
        _updatedAt
      }
    `);
  } catch (error) {
    console.warn("Could not fetch posts for sitemap from Sanity.");
  }

  const blogUrls = posts
    .filter((post: any) => post.slug && post.slug.trim() !== "")
    .map((post: any) => ({
      url: `https://www.all4ps.co/blog/${post.slug}`,
      lastModified: post._updatedAt,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [
    // Home
    {
      url: "https://www.all4ps.co/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Core Pages
    {
      url: "https://www.all4ps.co/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Service Pages
    {
      url: "https://www.all4ps.co/services/brand-identity",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/services/marketing-strategy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/services/growth-marketing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/services/content-marketing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/services/seo-sem",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/services/website-services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Case Studies
    {
      url: "https://www.all4ps.co/portfolio/motherson",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/portfolio/anscer",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/portfolio/unbox",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/portfolio/anzo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/portfolio/kloudlite",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/portfolio/synergy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/portfolio/xpstays",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/portfolio/panchayath",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    //  BLOGS
    ...blogUrls,
  ];
}
