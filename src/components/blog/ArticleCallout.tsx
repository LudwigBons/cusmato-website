interface ArticleCalloutProps {
  type?: "tip" | "warning" | "info";
  children: React.ReactNode;
}

export default function ArticleCallout({ type = "info", children }: ArticleCalloutProps) {
  const config = {
    tip: {
      bg: "bg-green-50 border-green-200",
      icon: "💡",
      title: "Tip",
    },
    warning: {
      bg: "bg-amber-50 border-amber-200",
      icon: "⚠️",
      title: "Let op",
    },
    info: {
      bg: "bg-blue-50 border-blue-200",
      icon: "ℹ️",
      title: "Informatie",
    },
  };

  const style = config[type];

  return (
    <div className={`${style.bg} border-l-4 ${style.bg.replace("bg-", "border-").replace("-50", "-600")} rounded-r-lg p-4 my-6`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{style.icon}</span>
        <div>
          <div className="font-semibold text-slate-900 mb-1">{style.title}</div>
          <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}