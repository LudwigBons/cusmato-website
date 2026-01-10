import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blog";

export default function BlogPreviewSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Laatste artikelen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-sm text-slate-500 mb-3">
                {new Date(post.date).toLocaleDateString("nl-NL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {post.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
          >
            Alle artikelen
          </Link>
        </div>
      </div>
    </section>
  );
}