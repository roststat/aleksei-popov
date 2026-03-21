import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-sm text-neutral-400 hover:text-neutral-700 mb-8 inline-block">
        ← Назад к блогу
      </Link>
      <p className="text-sm text-neutral-400 mb-2">{post.date}</p>
      <h1 className="text-4xl font-bold tracking-tight mb-10">{post.title}</h1>
      <div
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
      />
    </div>
  );
}

// Простой markdown-парсер для базового форматирования
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hul])(.+)$/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "");
}
