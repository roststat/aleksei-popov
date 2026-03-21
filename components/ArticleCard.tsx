import { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const Wrapper = article.link ? "a" : "div";
  return (
    <Wrapper
      {...(article.link ? { href: article.link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group border border-neutral-200 rounded-xl p-6 flex flex-col gap-2 hover:border-neutral-900 transition-colors"
    >
      <div className="flex items-center gap-3 text-xs text-neutral-400">
        <span>{article.date}</span>
        {article.source && <span>· {article.source}</span>}
      </div>
      <h2 className="text-lg font-semibold group-hover:text-neutral-600 transition-colors">
        {article.title}
      </h2>
      <p className="text-sm text-neutral-500 leading-relaxed">{article.excerpt}</p>
    </Wrapper>
  );
}
