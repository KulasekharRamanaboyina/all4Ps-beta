import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 0;

export default async function BlogPage() {
  const posts = await client.fetch(`
  *[_type=="post"] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage
  }
  `);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Insights & Ideas
        </h1>
        <p className="text-gray-400 text-lg">
          Practical thinking on B2B growth, marketing, and positioning.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post: any) => (
            <Link
              key={post.slug.current}
              href={`/blog/${post.slug.current}`}
              className="bg-white group hover:shadow-2xl transition-all duration-500 block overflow-hidden"
            >
              {/* Image */}
              {post.mainImage && (
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).width(1200).url()}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 border-b-4 border-transparent group-hover:border-[#800080] transition-all duration-300">
                <h2 className="text-2xl font-bold mb-3 text-black group-hover:text-[#800080]">
                  {post.title}
                </h2>

                <p className="text-gray-500 mb-4 font-medium">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toDateString()
                    : ""}
                </p>

                {post.excerpt && (
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-4 text-[#800080] font-bold">
                  Read Article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
