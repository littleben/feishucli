import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === 'zh-CN';
  return {
    title: isZh ? "更新日志 - 飞书 CLI" : "Changelog - Lark CLI",
    description: isZh
      ? "飞书 CLI 版本更新记录，包含新功能、问题修复和改进"
      : "Release notes and changelog for Lark CLI (Feishu CLI)",
  };
}

const changelog: {
  version: string;
  date: string;
  isInitialRelease?: boolean;
  description?: { zh: string; en: string };
  sections: { title: string; items: string[] }[];
}[] = [
  {
    version: "v1.0.2",
    date: "2026-04-01",
    sections: [
      {
        title: "Features",
        items: [
          "Improve OS keychain/DPAPI access error handling for sandbox environments (#173)",
          "mail: Auto-resolve local image paths in draft body HTML (#139)",
        ],
      },
      {
        title: "Bug Fixes",
        items: [
          "Correct URL formatting in login --no-wait output (#169)",
        ],
      },
      {
        title: "Documentation",
        items: [
          "Add concise AGENTS development guide (#178)",
        ],
      },
      {
        title: "CI",
        items: [
          "Refine PR business area labels and introduce skill format check (#148)",
        ],
      },
      {
        title: "Chore",
        items: [
          "Add pull request template (#176)",
        ],
      },
    ],
  },
  {
    version: "v1.0.1",
    date: "2026-03-31",
    sections: [
      {
        title: "Features",
        items: [
          "Add automatic CLI update detection and notification (#144)",
          "Add npm publish job to release workflow (#145)",
          "Support auto extension for downloads (#16)",
          "Normalize markdown message send/reply output (#28)",
          "Add auto-pagination to messages search and update lark-im docs (#30)",
        ],
      },
      {
        title: "Bug Fixes",
        items: [
          "base: Use base history read scope for record history list (#96)",
          "Remove sensitive send scope from reply and forward shortcuts (#92)",
          "Resolve silent failure in lark-cli api error output (#85)",
        ],
      },
      {
        title: "Documentation",
        items: [
          "base: Clarify field description usage in json (#90)",
          "Update Base description to include all capabilities (#61)",
          "Add official badge to distinguish from third-party Lark CLI tools (#103)",
          "Rename user-facing Bitable references to Base (#11)",
          "Add star history chart to readmes (#12)",
          "Simplify installation steps by merging CLI and Skills into one section (#26)",
          "Add npm version badge and improve AI agent tip wording (#23)",
          "Emphasize Skills installation as required for AI Agents (#19)",
          "Clarify install methods as alternatives and add source build steps",
        ],
      },
      {
        title: "CI",
        items: [
          "Improve CI workflows and add golangci-lint config (#71)",
        ],
      },
    ],
  },
  {
    version: "v1.0.0",
    date: "2026-03-28",
    isInitialRelease: true,
    description: {
      zh: "飞书 CLI 首个开源版本 —— 飞书/Lark 官方命令行工具。",
      en: "The first open-source release of Lark CLI — the official command-line interface for Lark/Feishu.",
    },
    sections: [
      {
        title: "Core Commands",
        items: [
          "lark api — Make arbitrary Lark Open API calls directly from the terminal",
          "lark auth — Complete OAuth authentication flow, including interactive login, logout, token status",
          "lark config — Manage CLI configuration, including init for guided setup",
          "lark schema — Inspect available API services and resource schemas",
          "lark doctor — Run diagnostic checks on CLI configuration and environment",
          "lark completion — Generate shell completion scripts for Bash, Zsh, Fish, and PowerShell",
        ],
      },
      {
        title: "Service Shortcuts",
        items: [
          "IM (Messaging) — Send messages, manage chats",
          "Drive — Upload, download, and manage cloud documents",
          "Docs — Work with Lark documents",
          "Sheets — Interact with spreadsheets",
          "Base — Manage multi-dimensional tables",
          "Calendar — Create and manage calendar events",
          "Mail — Send and manage emails",
          "Contact — Look up users and departments",
          "Task — Create and manage tasks",
          "Event — Subscribe to and manage event callbacks",
          "VC (Video Conference) — Manage meetings",
          "Whiteboard — Interact with whiteboards",
        ],
      },
      {
        title: "AI Agent Skills (19 Skills)",
        items: [
          "lark-im, lark-doc, lark-drive, lark-sheets, lark-base, lark-calendar, lark-mail, lark-contact, lark-task, lark-event, lark-vc, lark-whiteboard, lark-wiki, lark-minutes",
          "lark-openapi-explorer — Explore and discover Lark APIs interactively",
          "lark-skill-maker — Create custom AI skills",
          "lark-workflow-meeting-summary — Automated meeting summary workflow",
          "lark-workflow-standup-report — Automated standup report workflow",
        ],
      },
      {
        title: "Developer Experience",
        items: [
          "Cross-platform support (macOS, Linux, Windows) via GoReleaser",
          "Shell completion for Bash, Zsh, Fish, and PowerShell",
          "Bilingual documentation (English & Chinese)",
          "CI/CD pipelines: linting, testing, coverage reporting, and automated releases",
        ],
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  "Features": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Bug Fixes": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  "Documentation": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "CI": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  "Chore": "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
  "Core Commands": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Service Shortcuts": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "AI Agent Skills (19 Skills)": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400",
  "Developer Experience": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
};

const tagLabels: Record<string, Record<string, string>> = {
  "Features": { zh: "新功能", en: "Features" },
  "Bug Fixes": { zh: "问题修复", en: "Bug Fixes" },
  "Documentation": { zh: "文档", en: "Documentation" },
  "CI": { zh: "CI", en: "CI" },
  "Chore": { zh: "维护", en: "Chore" },
  "Core Commands": { zh: "核心命令", en: "Core Commands" },
  "Service Shortcuts": { zh: "服务快捷命令", en: "Service Shortcuts" },
  "AI Agent Skills (19 Skills)": { zh: "AI Agent 技能 (19 个)", en: "AI Agent Skills (19 Skills)" },
  "Developer Experience": { zh: "开发者体验", en: "Developer Experience" },
};

export default async function ChangelogPage({ params }: Props) {
  const { lang } = await params;
  const isZh = lang === 'zh-CN';
  const l = isZh ? 'zh' : 'en';

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">{isZh ? "更新日志" : "Changelog"}</h1>
            <p className="text-muted-foreground mt-1">{isZh ? "飞书 CLI 版本更新记录" : "All notable changes to Lark CLI"}</p>
          </div>
          <a
            href="https://github.com/larksuite/cli/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {isZh ? "GitHub 查看" : "View on GitHub"} <ExternalLink className="size-3.5" />
          </a>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {changelog.map((release) => (
              <div key={release.version} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-primary bg-background" />

                <div className="flex items-baseline gap-3 mb-4">
                  <a
                    href={`https://github.com/larksuite/cli/releases/tag/${release.version}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-primary transition-colors"
                  >
                    {release.version}
                  </a>
                  <time className="text-sm text-muted-foreground">{release.date}</time>
                  {release.isInitialRelease && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {isZh ? "首个版本" : "Initial Release"}
                    </span>
                  )}
                </div>

                {release.description && (
                  <p className="text-muted-foreground mb-4">
                    {typeof release.description === 'string' ? release.description : release.description[l]}
                  </p>
                )}

                <div className="space-y-4">
                  {release.sections.map((section) => (
                    <div key={section.title}>
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${tagColors[section.title] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"}`}>
                        {tagLabels[section.title]?.[l] || section.title}
                      </span>
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-muted-foreground/40">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
