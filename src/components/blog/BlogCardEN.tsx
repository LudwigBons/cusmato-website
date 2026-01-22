import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { BlogPost } from "../../data/blogEN";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

// Tags are already in English in blogEN data, so no translation needed
const getTranslatedTag = (tag: string): string => {
  return tag;
};

export default function BlogCardEN({ post, featured = false }: BlogCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
        className="col-span-full"
      >
        <Link
          to={`/en/blog/${post.slug}`}
          className="block bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 md:p-10 hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
        >
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {getTranslatedTag(tag)}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {post.title}
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
            <div className="h-48 md:h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
              <span className="text-6xl">📝</span>
            </div>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
            Read article
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.18 } }}
      className="h-full"
    >
      <Link
        to={`/en/blog/${post.slug}`}
        className="block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 h-full flex flex-col group"
      >
        <div className="px-2.5 sm:px-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
              >
                {getTranslatedTag(tag)}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.readingTime} min</span>
            </div>
            <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
