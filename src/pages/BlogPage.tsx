import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts } from "../data/blog";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

// Extract unique tags from blog posts
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));
const tags = ["Alle", ...allTags.sort()];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("Alle");
  const shouldReduceMotion = useReducedMotion();

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    if (selectedTag !== "Alle") {
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
                Praktische tips om klantantwoorden te automatiseren via e-mail & chat.
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
                    placeholder="Zoek artikelen..."
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
              <BlogCard post={featuredPost} featured />
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
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600 mb-4">
                Geen artikelen gevonden voor "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("Alle");
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Wis filters
              </button>
            </div>
          )}

          {/* CTA Banner */}
          <Reveal>
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Klaar om te automatiseren?
              </h2>
              <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
                Probeer Cusmato 14 dagen gratis en ontdek hoe je klantantwoorden automatiseert.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to="/probeer-14-dagen-gratis"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-150"
                  >
                    Probeer 14 dagen gratis
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to="/integraties"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-all duration-150"
                  >
                    Bekijk integraties
                  </Link>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <GlobalCTA />
    </div>
  );
}