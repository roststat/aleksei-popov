import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Блог</h1>
      <p className="text-neutral-500 mb-12">Мысли, заметки и личные записи</p>
      {posts.length === 0 ? (
        <p className="text-neutral-400">Записи скоро появятся.</p>
      ) : (
        <div className="flex flex-col divide-y divide-neutral-100">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="py-6 group">
              <p className="text-sm text-neutral-400 mb-1">{post.date}</p>
              <h2 className="text-xl font-semibold group-hover:text-neutral-500 transition-colors mb-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-neutral-500 text-sm leading-relaxed">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
