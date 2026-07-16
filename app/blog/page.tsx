"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { DetailedBlogPost } from "@/app/types";
import { MOCK_POSTS, MOCK_CATEGORIES } from "./mockBlogs";

// Modular Imports
import BlogHero from "../components/blog/Hero/BlogHero";
import CategoryGrid from "../components/blog/Categories/CategoryGrid";
import LatestArticlesSection from "../components/blog/LatestArticles/LatestArticlesSection";
import CtaSection from "../components/cta/CtaSection";

// Helper to resolve category dynamically if not specified in Sanity references
const getPostCategory = (slug: string, sanityCategoryTitle?: string) => {
  if (sanityCategoryTitle && sanityCategoryTitle.trim() !== "") {
    return sanityCategoryTitle;
  }
  
  const s = slug.toLowerCase();
  if (s.includes("buyer-behavior") || s.includes("account-based") || s.includes("abm")) {
    return "Demand Generation";
  }
  if (s.includes("robotics") || s.includes("deep-tech") || s.includes("brand")) {
    return "Brand Strategy";
  }
  if (s.includes("seo") || s.includes("ai-tools") || s.includes("search") || s.includes("sem")) {
    return "SEO & SEM";
  }
  if (s.includes("saas") || s.includes("trends") || s.includes("content")) {
    return "Content Marketing";
  }
  if (s.includes("sales") || s.includes("playbook") || s.includes("collateral") || s.includes("equip")) {
    return "Sales Enablement";
  }
  if (s.includes("automation") || s.includes("benchmarks") || s.includes("sandbox") || s.includes("product")) {
    return "Product Marketing";
  }
  
  return "Demand Generation"; // Default fallback
};

export default function BlogListingPage() {
  const [posts, setPosts] = useState<DetailedBlogPost[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let sanityCategories: any[] = [];
        let sanityPosts: any[] = [];

        // Check if Sanity Project ID is actually configured (is not the dummy fallback)
        const isConfigured = 
          client.config().projectId && 
          client.config().projectId !== "dummy-project-id";

        if (isConfigured) {
          try {
            // 1. Fetch live categories
            sanityCategories = await client.fetch(`
              *[_type == "category"] {
                title,
                "slug": slug.current
              }
            `);

            // 2. Fetch live blog posts
            sanityPosts = await client.fetch(`
              *[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                "slug": slug.current,
                publishedAt,
                excerpt,
                mainImage,
                featured,
                "readTime": select(
                  defined(readTime) => readTime,
                  "6 min read"
                ),
                "author": author-> {
                  name,
                  role,
                  image,
                  bio,
                  socials {
                    linkedin,
                    twitter,
                    email
                  }
                },
                "categories": categories[]-> {
                  title,
                  "slug": slug.current
                }
              }
            `);
          } catch (error) {
            console.warn("Sanity fetch failed. Using local fallback content.", error);
          }
        }

        let finalPosts: DetailedBlogPost[] = [];
        let finalCategories: any[] = [];

        if (sanityPosts && sanityPosts.length > 0) {
          finalPosts = sanityPosts.map((p: any) => {
            const rawCategory = p.categories && p.categories.length > 0 ? p.categories[0].title : undefined;
            const category = getPostCategory(p.slug, rawCategory);

            return {
              id: p._id || p.slug,
              slug: p.slug,
              title: p.title,
              subtitle: p.excerpt || "",
              excerpt: p.excerpt || "",
              category,
              publishedAt: p.publishedAt
                ? new Date(p.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "June 15, 2026",
              readTime: p.readTime || "6 min read",
              mainImage: p.mainImage,
              featured: p.featured || false,
              author: p.author ? {
                name: p.author.name,
                role: p.author.role || "Author, all4Ps",
                avatar: p.author.image,
                bio: Array.isArray(p.author.bio) 
                  ? p.author.bio.map((block: any) => block.children?.map((c: any) => c.text).join("")).join(" ")
                  : p.author.bio || "",
                socials: p.author.socials || {
                  linkedin: "https://linkedin.com/company/all4ps",
                  twitter: "https://twitter.com/all4ps",
                  email: "mailto:grow@all4ps.co"
                }
              } : {
                name: "all4Ps Team",
                role: "B2B growth experts",
                avatar: "/images/Team_Members/Pavani.webp",
                bio: "The all4Ps team helps SaaS, tech, and industrial companies scale through intentional positioning and marketing.",
                socials: {
                  linkedin: "https://linkedin.com/company/all4ps",
                  twitter: "https://twitter.com/all4ps",
                  email: "mailto:grow@all4ps.co"
                }
              },
              takeaways: p.takeaways || [],
              body: p.body || [],
            };
          });
        } else {
          finalPosts = MOCK_POSTS;
        }

        // Set loaded categories. If Sanity returned categories, we reconcile count client-side.
        if (sanityCategories && sanityCategories.length > 0) {
          finalCategories = sanityCategories.map((cat: any) => {
            const count = finalPosts.filter(
              (p) => p.category.toLowerCase() === cat.title.toLowerCase()
            ).length;
            return {
              title: cat.title,
              slug: cat.slug,
              count,
            };
          });
        } else {
          // If Sanity is empty, compute counts from mock posts
          finalCategories = MOCK_CATEGORIES.map((cat: any) => {
            const count = finalPosts.filter(
              (p) => p.category.toLowerCase() === cat.title.toLowerCase()
            ).length;
            return {
              ...cat,
              count,
            };
          });
        }

        setPosts(finalPosts);
        setCategories(finalCategories);

      } catch (error) {
        console.error("Error loading blog details from Sanity:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Featured post is the one marked featured, or the first post in the list
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  
  // Exclude featured post from lower feed unless category filter is active
  const otherPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  // Filtered posts based on category selection
  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    : otherPosts;

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category);
    setVisibleCount(3); // Reset visible count on filter
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[100px] pointer-events-none z-0" />

      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <div className="w-12 h-12 rounded-full border-t-2 border-brand-purple border-solid animate-spin" />
          <p className="text-gray-400 text-sm">Loading insights...</p>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <BlogHero featuredPost={featuredPost} />

          {/* Category Explorer */}
          {categories.length > 0 && (
            <CategoryGrid
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              categories={categories}
            />
          )}

          {/* Latest Articles Feed */}
          <LatestArticlesSection
            posts={posts}
            filteredPosts={filteredPosts}
            selectedCategory={selectedCategory}
            visibleCount={visibleCount}
            onLoadMore={handleLoadMore}
            author={featuredPost?.author}
          />
        </>
      )}

      {/* Final Call to Action */}
      <CtaSection />
    </div>
  );
}
