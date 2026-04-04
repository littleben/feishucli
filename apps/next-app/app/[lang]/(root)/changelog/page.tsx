import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { getGitHubReleases, githubReleasesPageUrl } from "@/lib/github/releases";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === 'zh-CN';
  const baseUrl = process.env.APP_BASE_URL || 'http://localhost:7001';
  const canonical = isZh ? `${baseUrl}/changelog` : `${baseUrl}/${lang}/changelog`;
  return {
    title: isZh ? "更新日志 - 飞书 CLI" : "Changelog - Lark CLI",
    description: isZh
      ? "飞书 CLI 版本更新记录，自动同步官方 CHANGELOG.md，包含新功能、问题修复和改进"
      : "Release notes and changelog for Lark CLI, automatically synced from the official CHANGELOG.md",
    alternates: { canonical },
  };
}

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'zh-CN' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

const mdComponents: Components = {
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-foreground mt-5 mb-2">{children}</h3>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-muted-foreground">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  p: ({ children }) => (
    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{children}</p>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className={`${className ?? ""} block`}>{children}</code>
      );
    }
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{children}</code>
    );
  },
  pre: ({ children }) => (
    <pre className="rounded-lg bg-muted p-4 overflow-x-auto text-xs font-mono text-foreground my-3">{children}</pre>
  ),
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">{children}</a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};

export default async function ChangelogPage({ params }: Props) {
  const { lang } = await params;
  const isZh = lang === 'zh-CN';

  let releases = [] as Awaited<ReturnType<typeof getGitHubReleases>>;
  let loadFailed = false;

  try {
    releases = await getGitHubReleases();
  } catch (error) {
    loadFailed = true;
    console.error('Failed to load GitHub releases for changelog page', error);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="flex items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">{isZh ? "更新日志" : "Changelog"}</h1>
            <p className="text-muted-foreground mt-1">
              {isZh ? "飞书 CLI 版本更新记录，实时同步官方 CHANGELOG.md" : "All notable changes to Lark CLI, synced from the official CHANGELOG.md"}
            </p>
          </div>
          <a
            href={githubReleasesPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {isZh ? "GitHub 查看" : "View on GitHub"} <ExternalLink className="size-3.5" />
          </a>
        </div>

        {loadFailed ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p>{isZh ? "暂时无法获取 GitHub Releases，请前往 GitHub 查看最新更新。" : "Unable to load GitHub releases right now. Please check the latest updates on GitHub."}</p>
          </div>
        ) : releases.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p>{isZh ? "暂时还没有可展示的发布记录。" : "No release notes are available yet."}</p>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-12">
              {releases.map((release, index) => (
                <div key={`${release.version}-${release.publishedAt}`} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-primary bg-background" />

                  <div className="flex flex-wrap items-baseline gap-3 mb-4">
                    <a
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold hover:text-primary transition-colors"
                    >
                      {release.version}
                    </a>
                    <time className="text-sm text-muted-foreground">{formatDate(release.publishedAt, lang)}</time>
                    {release.prerelease && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                        {isZh ? "预发布" : "Prerelease"}
                      </span>
                    )}
                    {index === releases.length - 1 && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {isZh ? "首个版本" : "Initial Release"}
                      </span>
                    )}
                  </div>

                  {release.title !== release.version && (
                    <p className="mb-3 text-sm font-medium text-foreground/80">{release.title}</p>
                  )}

                  <div className="rounded-2xl border border-border bg-card p-5">
                    <ReactMarkdown components={mdComponents}>{isZh ? release.bodyZh : (release.body || "No detailed notes provided.")}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
