import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/image";
export const revalidate = 0;

// ✅ METADATA (SEO ONLY)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug][0]{
      title,
      excerpt,
      mainImage
    }`,
    { slug },
  );
  //console.log("slug:", slug);
  //console.log("post:", post);
  const title = post?.title || "all4Ps Blog";
  const description =
    post?.excerpt || "Insights on B2B marketing and growth by all4Ps";

  const image = post?.mainImage
    ? urlFor(post.mainImage).width(1200).url()
    : "https://www.all4ps.co/default-og.png";

  const url = `https://www.all4ps.co/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "all4Ps",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ✅ BLOG PAGE
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug][0]{
      title,
      body,
      mainImage,
      publishedAt
    }`,
    { slug },
  );

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  // ✅ READING TIME (CORRECT PLACE)
  const text =
    post.body
      ?.map((block: any) =>
        block.children?.map((child: any) => child.text).join(" "),
      )
      .join(" ") || "";

  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // ✅ PortableText styles
  const components = {
    block: {
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-[#800080] pl-6 italic text-lg leading-8 text-gray-900 my-12 bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-sm text-left">
          {children}
        </blockquote>
      ),

      h2: ({ children }: any) => (
        <h2 className="text-[26px] font-semibold mt-8 mb-4 text-[#800080] leading-snug tracking-normal">
          {children}
        </h2>
      ),

      h3: ({ children }: any) => (
        <h3 className="text-[22px] font-semibold mt-6 mb-3 text-black tracking-normal">
          {children}
        </h3>
      ),

      h4: ({ children }: any) => (
        <h4 className="text-[18px] font-medium mt-6 mb-2 text-gray-900">
          {children}
        </h4>
      ),

      normal: ({ children }: any) => (
        <p className="text-gray-700 leading-8 tracking-normal whitespace-pre-wrap break-words text-left">
          {children}
        </p>
      ),
    },

    marks: {
      strong: ({ children }: any) => (
        <span className="font-semibold text-black">{children}</span>
      ),

      link: ({ value, children }: any) => (
        <a
          href={value.href}
          className="text-[#800080] underline hover:opacity-80 visited:text-[#800080]"
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-6 space-y-2">{children}</ul>
      ),
    },

    listItem: {
      bullet: ({ children }: any) => (
        <li className="text-gray-700 leading-7">{children}</li>
      ),
    },
  };

  return (
    <article className="bg-white min-h-screen">
      <div className="max-w-[760px] mx-auto py-20 px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#800080]">
          {post.title}
        </h1>

        {/* Date + Reading Time */}
        {post.publishedAt && (
          <p className="text-gray-500 mb-8">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • {readingTime} min read
          </p>
        )}

        {/* Hero Image */}
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(1600).url()}
            alt={post.mainImage?.alt || `${post.title} | all4Ps`}
            width={1600}
            height={900}
            className="mb-12 w-full h-auto object-cover"
          />
        )}

        {/* Content */}
        <div className="max-w-none">
          <PortableText value={post.body} components={components} />
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-black text-white rounded-xl text-center">
          <p className="text-lg mb-4">
            At <span className="font-semibold">all4Ps</span>, we help B2B tech
            companies build marketing strategies that actually convert.
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 px-6 py-3 bg-[#800080] text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Book a Strategy Call →
          </a>
        </div>

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.publishedAt,
              author: {
                "@type": "Organization",
                name: "all4Ps",
              },
              publisher: {
                "@type": "Organization",
                name: "all4Ps",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.all4ps.co/images/logo-black.png",
                },
              },
              image: post.mainImage
                ? urlFor(post.mainImage).width(1200).url()
                : "https://www.all4ps.co/default-og.png",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.all4ps.co/blog/${slug}`,
              },
            }),
          }}
        />
      </div>
    </article>
  );
}
