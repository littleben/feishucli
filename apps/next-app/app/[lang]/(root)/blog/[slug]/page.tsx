import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { blogPosts } from "../data";

import JiamuArticle from "../posts/jiamu";
import LengyiArticle from "../posts/lengyi";
import HuangshuArticle from "../posts/huangshu";
import XiaohuArticle from "../posts/xiaohu";
import CliBeginnerGuide from "../posts/cli-beginner-guide";
import FeishuCliCreatorContest from "../posts/feishu-cli-creator-contest";

const contentMap: Record<string, React.ComponentType> = {
  "jiamu-claude-code-feishu-cli": JiamuArticle,
  "lengyi-feishu-wecom-cli-8-plays": LengyiArticle,
  "huangshu-ai-control-feishu": HuangshuArticle,
  "xiaohu-smart-task-assistant": XiaohuArticle,
  "cli-beginner-guide": CliBeginnerGuide,
  "feishu-cli-creator-contest": FeishuCliCreatorContest,
};

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { lang: "zh-CN", slug: post.slug },
    { lang: "en", slug: post.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Not Found" };

  const isZh = lang === 'zh-CN';
  const baseUrl = process.env.APP_BASE_URL || 'http://localhost:7001';
  const canonical = isZh ? `${baseUrl}/blog/${slug}` : `${baseUrl}/${lang}/blog/${slug}`;
  const localizedPost = isZh
    ? post
    : {
        ...post,
        title: post.translations?.en?.title ?? post.title,
        excerpt: post.translations?.en?.excerpt ?? post.excerpt,
        author: post.translations?.en?.author ?? post.author,
      };

  return {
    title: isZh
      ? `${post.title} - 飞书 CLI 博客`
      : `${localizedPost.title} - Lark CLI Blog`,
    description: localizedPost.excerpt,
    alternates: { canonical },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const Content = contentMap[slug];
  if (!Content) notFound();

  const isZh = lang === 'zh-CN';
  const sourceUrl = post.originalUrl && !post.originalUrl.includes('...') ? post.originalUrl : undefined;
  const localizedPost = isZh
    ? post
    : {
        ...post,
        title: post.translations?.en?.title ?? post.title,
        excerpt: post.translations?.en?.excerpt ?? post.excerpt,
        author: post.translations?.en?.author ?? post.author,
      };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="size-4" />
          {isZh ? "返回文章列表" : "Back to articles"}
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{localizedPost.title}</h1>
            <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
              <span>{localizedPost.author}</span>
              <span>·</span>
              <time>{post.date}</time>
              {sourceUrl && (
                <>
                  <span>·</span>
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    {isZh ? "原文" : "Source"} <ExternalLink className="size-3" />
                  </a>
                </>
              )}
            </div>
          </header>

          {isZh ? (
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <Content />
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">
              <p className="text-muted-foreground leading-relaxed">{localizedPost.excerpt}</p>
              <p className="text-muted-foreground leading-relaxed">
                This article is currently available in Chinese only. Use the source link above to read the original version.
              </p>
              {sourceUrl && (
                <a
                  href={post.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Read the original Chinese article <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
