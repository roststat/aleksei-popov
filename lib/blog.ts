import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content/blog");

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key) data[key.trim()] = rest.join(":").trim();
  });
  return { data, content: match[2] };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data, content } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    content,
  };
}
