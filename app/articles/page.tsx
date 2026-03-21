import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Статьи</h1>
      <p className="text-neutral-500 mb-12">Публикации и материалы</p>
      {articles.length === 0 ? (
        <p className="text-neutral-400">Статьи скоро появятся.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
