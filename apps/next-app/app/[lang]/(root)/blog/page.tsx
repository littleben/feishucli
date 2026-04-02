import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "./data";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === 'zh-CN';
  const baseUrl = process.env.APP_BASE_URL || 'http://localhost:7001';
  const canonical = isZh ? `${baseUrl}/blog` : `${baseUrl}/${lang}/blog`;
  return {
    title: isZh ? "博客 - 飞书 CLI" : "Blog - Lark CLI",
    description: isZh
      ? "评测、教程、案例与社区动态，了解飞书 CLI 的最新玩法"
      : "Articles, tutorials, and community stories about Lark CLI (Feishu CLI)",
    alternates: { canonical },
  };
}

const categoryLabels: Record<string, string> = {
  review: "评测",
  tutorial: "教程",
  event: "活动",
};

const categoryColors: Record<string, string> = {
  review: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  tutorial: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  event: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};

export default async function BlogListPage({ params }: Props) {
  const { lang } = await params;
  const isZh = lang === 'zh-CN';

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {isZh ? "博客" : "Blog"}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {isZh ? "评测、教程、案例与社区动态" : "Reviews, tutorials, case studies & community updates"}
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="group block rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[post.category]}`}>
                        {categoryLabels[post.category]}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-2 inline-block text-xs text-muted-foreground/60">
                      {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
