import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import BottomMobileCTA from "../components/BottomMobileCTA";
import BlogCardEN from "../components/blog/BlogCardEN";
import { blogPostsEN } from "../data/blogEN";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";
import { ROUTES } from "../lib/constants";

// Helper function to convert Dutch routes to English routes
const toEnglishUrl = (path: string): string => {
  if (path.startsWith("/en/")) {
    return path; // Already English
  }
  switch (path) {
    case ROUTES.tryFree: return "/en/try-14-days-for-free";
    default: return `/en${path}`;
  }
};

// Extract unique tags from blog posts
const allTags = Array.from(new Set(blogPostsEN.flatMap((post) => post.tags)));
// Tags are already in English, but we need "All" for the filter
const tags = ["All", ...allTags.sort()];

export default function BlogPageEN() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredPosts = useMemo(() => {
    let filtered = blogPostsEN;

    if (selectedTag !== "All") {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Featured post first, then by date
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [searchQuery, selectedTag]);

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Hero Section */}
          <Reveal>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-[1.05]">
                Blog
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto mb-8 leading-relaxed">
                Practical tips to automate customer responses via email & chat.
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto mb-6">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Featured Article */}
          {featuredPost && (
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={staggerContainer}
              className="mb-12"
            >
              <BlogCardEN post={featuredPost} featured />
            </motion.div>
          )}

          {/* Blog Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {regularPosts.map((post) => (
              <BlogCardEN key={post.slug} post={post} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600 mb-4">
                No articles found for "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* CTA Banner - Hidden on mobile to avoid duplicate with BottomMobileCTA */}
          <Reveal>
            <div className="hidden md:block mt-16 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to automate?
              </h2>
              <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
                Try Cusmato free for 14 days and discover how to automate customer responses.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to={toEnglishUrl(ROUTES.tryFree)}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-150"
                  >
                    Try 14 days for free
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <a
                    href="https://www.cusmato.app/welkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-all duration-150"
                  >
                    Start onboarding
                  </a>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <GlobalCTA />
      <BottomMobileCTA />
    </div>
  );
}
