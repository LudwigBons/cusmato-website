import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import BottomMobileCTA from "../components/BottomMobileCTA";
import TableOfContents from "../components/blog/TableOfContents";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts, BlogPost } from "../data/blog";

function parseContent(content: string) {
  const lines = content.split("\n");
  const elements: Array<{ type: "h2" | "h3" | "p" | "list"; content: string; items?: string[] }> = [];
  let currentList: string[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (currentList.length > 0) {
        elements.push({ type: "list", content: "", items: [...currentList] });
        currentList = [];
      }
      elements.push({ type: "h2", content: line.replace("## ", "").trim() });
    } else if (line.startsWith("### ")) {
      if (currentList.length > 0) {
        elements.push({ type: "list", content: "", items: [...currentList] });
        currentList = [];
      }
      elements.push({ type: "h3", content: line.replace("### ", "").trim() });
    } else if (line.trim().startsWith("- ")) {
      currentList.push(line.replace("- ", "").trim());
    } else if (line.trim() === "" && currentList.length > 0) {
      elements.push({ type: "list", content: "", items: [...currentList] });
      currentList = [];
    } else if (line.trim() !== "") {
      if (currentList.length > 0) {
        elements.push({ type: "list", content: "", items: [...currentList] });
        currentList = [];
      }
      elements.push({ type: "p", content: line.trim() });
    }
  }

  if (currentList.length > 0) {
    elements.push({ type: "list", content: "", items: [...currentList] });
  }

  return elements;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [contentElements, setContentElements] = useState<ReturnType<typeof parseContent>>([]);
  const [midpoint, setMidpoint] = useState(0);

  useEffect(() => {
    if (post) {
      const parsed = parseContent(post.content);
      setContentElements(parsed);
      setMidpoint(Math.ceil(parsed.length / 2));
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Artikel niet gevonden</h1>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              Terug naar blog
            </Link>
          </div>
        </main>
        <GlobalCTA />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Reveal>
                <Link
                  to="/blog"
                  className="text-sm text-blue-600 hover:text-blue-700 mb-8 inline-flex items-center gap-1 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Terug naar blog
                </Link>

                <article>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <span>
                        {new Date(post.date).toLocaleDateString("nl-NL", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readingTime} min lezen</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                      {post.title}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="prose prose-slate max-w-none">
                    {contentElements.map((element, index) => {
                      if (index === midpoint && contentElements.length > 10) {
                        return (
                          <div key={`midpoint-${index}`}>
                            {/* Hidden on mobile to avoid duplicate with BottomMobileCTA */}
                            <div className="hidden md:block my-12 py-8 px-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-200">
                              <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Klaar om klantantwoorden te automatiseren?
                              </h3>
                              <p className="text-slate-600 mb-4">
                                Probeer Cusmato 14 dagen gratis en ontdek hoe je support automatisert zonder kwaliteit te verliezen.
                              </p>
                              <Link
                                to="/probeer-14-dagen-gratis"
                                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                              >
                                Plan gratis kennismaking
                              </Link>
                            </div>
                            {renderElement(element, index)}
                          </div>
                        );
                      }
                      return <div key={index}>{renderElement(element, index)}</div>;
                    })}
                  </div>
                </article>

                {/* Gerelateerde artikelen */}
                {relatedPosts.length > 0 && (
                  <div className="mt-16 pt-12 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Gerelateerde artikelen</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {relatedPosts.map((relatedPost) => (
                        <BlogCard key={relatedPost.slug} post={relatedPost} />
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            </div>

            {/* Table of Contents Sidebar */}
            <div className="lg:col-span-1">
              <TableOfContents />
            </div>
          </div>
        </div>
      </main>

      <GlobalCTA />
      <BottomMobileCTA />
    </div>
  );
}

function renderElement(
  element: { type: "h2" | "h3" | "p" | "list"; content: string; items?: string[] },
  index: number
) {
  switch (element.type) {
    case "h2":
      return (
        <h2
          key={index}
          id={element.content.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
          className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight scroll-mt-24"
        >
          {element.content}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          id={element.content.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
          className="text-2xl font-bold text-slate-900 mt-8 mb-4 leading-tight scroll-mt-24"
        >
          {element.content}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="text-base text-slate-700 leading-relaxed mb-6">
          {element.content}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-slate-700">
          {element.items?.map((item, itemIndex) => (
            <li key={itemIndex} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}