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
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} - Feishu CLI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const Content = contentMap[slug];
  if (!Content) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="size-4" />
          返回文章列表
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{post.title}</h1>
            <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>·</span>
              <time>{post.date}</time>
              {post.originalUrl && (
                <>
                  <span>·</span>
                  <a
                    href={post.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    原文 <ExternalLink className="size-3" />
                  </a>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <Content />
          </div>
        </article>
      </div>
    </div>
  );
}
