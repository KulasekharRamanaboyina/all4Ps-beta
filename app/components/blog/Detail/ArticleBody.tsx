"use client";

import React from "react";
import { PortableText } from "@portabletext/react";
import { Quote } from "lucide-react";
import { DetailedBlogPost } from "@/app/types";

interface ArticleBodyProps {
  post: DetailedBlogPost;
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

export default function ArticleBody({ post }: ArticleBodyProps) {
  // PortableText components overrides
  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => {
        const text = React.Children.toArray(children).join("");
        const id = slugify(text);
        return (
          <h2
            id={id}
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-6 text-white scroll-mt-24"
          >
            {children}
          </h2>
        );
      },
      h3: ({ children }: any) => {
        const text = React.Children.toArray(children).join("");
        const id = slugify(text);
        return (
          <h3 id={id} className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-white scroll-mt-24">
            {children}
          </h3>
        );
      },
      h4: ({ children }: any) => (
        <h4 className="text-lg font-bold mt-6 mb-3 text-white">{children}</h4>
      ),
      normal: ({ children }: any) => (
        <p className="text-gray-300 text-base leading-8 mb-6">{children}</p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-brand-purple pl-6 italic text-lg leading-8 text-gray-200 my-10 bg-[#0d0d14] border border-white/5 p-6 rounded-2xl relative">
          <div className="w-9 h-9 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-4">
            <Quote className="w-4.5 h-4.5 fill-brand-purple" />
          </div>
          <div className="relative z-10">{children}</div>
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-none pl-0 space-y-4 my-6">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="custom-blog-list list-none pl-0 space-y-6 my-8">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-brand-purple flex-shrink-0 mt-2.5" />
          <span className="text-gray-300 text-sm leading-relaxed">{children}</span>
        </li>
      ),
      number: ({ children }: any) => (
        <li className="flex items-start gap-4 custom-counter-item">
          <div className="custom-counter-badge w-8 h-8 rounded-full border border-brand-purple/30 bg-brand-purple/5 flex items-center justify-center text-xs font-bold text-brand-purple flex-shrink-0 mt-1">
            {/* Populated by CSS */}
          </div>
          <span className="text-gray-300 text-sm leading-relaxed mt-2">{children}</span>
        </li>
      ),
    },
  };

  return (
    <div className="prose prose-invert max-w-none">
      {Array.isArray(post.body) && post.body.length > 0 && "type" in post.body[0] ? (
        // Render Mock Body
        post.body.map((block, idx) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={idx} className="text-gray-300 text-base leading-8 mb-6">
                  {block.text}
                </p>
              );
            case "heading":
              const tagId = block.text ? slugify(block.text) : `h-${idx}`;
              if (block.level === 2) {
                return (
                  <h2
                    key={idx}
                    id={tagId}
                    className="text-2xl sm:text-3xl font-extrabold mt-12 mb-6 text-white scroll-mt-24"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <h3
                  key={idx}
                  id={tagId}
                  className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-white scroll-mt-24"
                >
                  {block.text}
                </h3>
              );
            case "blockquote":
              return (
                <blockquote
                  key={idx}
                  className="border-l-4 border-brand-purple pl-6 italic text-lg leading-8 text-gray-200 my-10 bg-[#0d0d14] border border-white/5 p-6 rounded-2xl relative"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-4">
                    <Quote className="w-4.5 h-4.5 fill-brand-purple" />
                  </div>
                  <p className="relative z-10">{block.text}</p>
                  {block.source && (
                    <p className="text-sm text-gray-400 mt-2 not-italic">
                      — {block.source}
                    </p>
                  )}
                </blockquote>
              );
            case "bullet-list":
              return (
                <ul key={idx} className="list-none pl-0 space-y-4 my-6">
                  {block.items?.map((item: string, subIdx: number) => (
                    <li key={subIdx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-purple flex-shrink-0 mt-2.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            case "numbered-list":
              return (
                <ol key={idx} className="list-none pl-0 space-y-6 my-8">
                  {block.items?.map((item: string, subIdx: number) => (
                    <li key={subIdx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full border border-brand-purple/30 bg-brand-purple/5 flex items-center justify-center text-xs font-bold text-brand-purple flex-shrink-0 mt-1">
                        {String(subIdx + 1).padStart(2, "0")}
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed mt-2">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              );
            default:
              return null;
          }
        })
      ) : (
        // Render Sanity Portable Text
        <PortableText value={post.body as any} components={portableTextComponents} />
      )}
    </div>
  );
}
