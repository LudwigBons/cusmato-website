interface ArticleQuoteProps {
  author?: string;
  children: React.ReactNode;
}

export default function ArticleQuote({ author, children }: ArticleQuoteProps) {
  return (
    <blockquote className="border-l-4 border-blue-600 pl-6 py-4 my-6 bg-slate-50 rounded-r-lg">
      <p className="text-lg text-slate-700 italic leading-relaxed mb-2">{children}</p>
      {author && <cite className="text-sm text-slate-600 not-italic">{author}</cite>}
    </blockquote>
  );
}