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

type ChangelogItem = {
  zh: string;
  en: string;
};

type ChangelogSection = {
  title: string;
  items: ChangelogItem[];
};

type ChangelogRelease = {
  version: string;
  date: string;
  isInitialRelease?: boolean;
  description?: { zh: string; en: string };
  sections: ChangelogSection[];
};

const changelog: ChangelogRelease[] = [
  {
    version: "v1.0.2",
    date: "2026-04-01",
    sections: [
      {
        title: "Features",
        items: [
          {
            zh: "优化沙盒环境下系统密钥链的访问，避免在受限环境中出现报错",
            en: "Improve OS keychain/DPAPI access error handling for sandbox environments (#173)",
          },
          {
            zh: "邮件草稿中的本地图片路径现在可以自动识别并正确嵌入",
            en: "mail: Auto-resolve local image paths in draft body HTML (#139)",
          },
        ],
      },
      {
        title: "Bug Fixes",
        items: [
          {
            zh: "修复登录时输出的链接格式不正确的问题",
            en: "Correct URL formatting in login --no-wait output (#169)",
          },
        ],
      },
      {
        title: "Documentation",
        items: [
          {
            zh: "新增 AI Agent 开发快速入门指南，帮助开发者更快上手",
            en: "Add concise AGENTS development guide (#178)",
          },
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
          {
            zh: "CLI 现在会自动检测新版本并提醒你更新，不再错过新功能",
            en: "Add automatic CLI update detection and notification (#144)",
          },
          {
            zh: "支持通过 npm 直接安装，让安装过程更加简单",
            en: "Add npm publish job to release workflow (#145)",
          },
          {
            zh: "下载文件时自动补全文件扩展名，无需手动指定格式",
            en: "Support auto extension for downloads (#16)",
          },
          {
            zh: "发送和回复消息时，Markdown 格式的输出更加统一美观",
            en: "Normalize markdown message send/reply output (#28)",
          },
          {
            zh: "搜索消息时支持自动翻页，一次获取所有结果不再遗漏",
            en: "Add auto-pagination to messages search and update lark-im docs (#30)",
          },
        ],
      },
      {
        title: "Bug Fixes",
        items: [
          {
            zh: "修复多维表格查看记录历史时权限不正确的问题",
            en: "base: Use base history read scope for record history list (#96)",
          },
          {
            zh: "回复和转发消息时不再请求多余的权限，提升安全性",
            en: "Remove sensitive send scope from reply and forward shortcuts (#92)",
          },
          {
            zh: "修复 API 调用出错时没有提示信息的问题，现在能看到清晰的错误说明",
            en: "Resolve silent failure in lark-cli api error output (#85)",
          },
        ],
      },
      {
        title: "Documentation",
        items: [
          {
            zh: "完善多维表格字段说明文档，让 JSON 参数更容易理解",
            en: "base: Clarify field description usage in json (#90)",
          },
          {
            zh: "更新多维表格功能介绍，展示完整的能力范围",
            en: "Update Base description to include all capabilities (#61)",
          },
          {
            zh: "添加官方认证标识，方便用户区分官方工具与第三方工具",
            en: "Add official badge to distinguish from third-party Lark CLI tools (#103)",
          },
          {
            zh: "将「多维表格」统一命名为 Base，与官方术语保持一致",
            en: "Rename user-facing Bitable references to Base (#11)",
          },
          {
            zh: "简化安装步骤，将 CLI 和 Skills 合并为一步安装",
            en: "Simplify installation steps by merging CLI and Skills into one section (#26)",
          },
          {
            zh: "强调安装 Skills 是使用 AI Agent 功能的必要步骤",
            en: "Emphasize Skills installation as required for AI Agents (#19)",
          },
        ],
      },
    ],
  },
  {
    version: "v1.0.0",
    date: "2026-03-28",
    isInitialRelease: true,
    description: {
      zh: "飞书 CLI 首个开源版本 —— 飞书/Lark 官方命令行工具正式发布。覆盖 11 个业务领域、200+ 精选命令、19 个 AI Agent 技能。",
      en: "The first open-source release of Lark CLI — the official command-line interface for Lark/Feishu.",
    },
    sections: [
      {
        title: "Core Commands",
        items: [
          {
            zh: "lark api — 直接在终端调用飞书开放平台的任意 API",
            en: "lark api — Make arbitrary Lark Open API calls directly from the terminal",
          },
          {
            zh: "lark auth — 扫码登录、退出登录、查看授权状态，一键搞定",
            en: "lark auth — Complete OAuth authentication flow, including interactive login, logout, token status",
          },
          {
            zh: "lark config — 管理 CLI 配置，支持引导式初始化",
            en: "lark config — Manage CLI configuration, including init for guided setup",
          },
          {
            zh: "lark schema — 查看可用的 API 服务和数据结构",
            en: "lark schema — Inspect available API services and resource schemas",
          },
          {
            zh: "lark doctor — 一键检查 CLI 的配置和运行环境是否正常",
            en: "lark doctor — Run diagnostic checks on CLI configuration and environment",
          },
          {
            zh: "lark completion — 生成命令行自动补全脚本，支持 Bash/Zsh/Fish/PowerShell",
            en: "lark completion — Generate shell completion scripts for Bash, Zsh, Fish, and PowerShell",
          },
        ],
      },
      {
        title: "Service Shortcuts",
        items: [
          {
            zh: "消息 (IM) — 发送消息、管理群聊",
            en: "IM (Messaging) — Send messages, manage chats",
          },
          {
            zh: "云文档 (Drive) — 上传、下载和管理云端文件",
            en: "Drive — Upload, download, and manage cloud documents",
          },
          {
            zh: "文档 (Docs) — 创建和编辑飞书文档",
            en: "Docs — Work with Lark documents",
          },
          {
            zh: "电子表格 (Sheets) — 读写电子表格数据",
            en: "Sheets — Interact with spreadsheets",
          },
          {
            zh: "多维表格 (Base) — 管理多维表格和数据记录",
            en: "Base — Manage multi-dimensional tables",
          },
          {
            zh: "日历 (Calendar) — 创建和管理日程",
            en: "Calendar — Create and manage calendar events",
          },
          {
            zh: "邮件 (Mail) — 发送和管理邮件",
            en: "Mail — Send and manage emails",
          },
          {
            zh: "通讯录 (Contact) — 查找用户和部门信息",
            en: "Contact — Look up users and departments",
          },
          {
            zh: "任务 (Task) — 创建和管理待办任务",
            en: "Task — Create and manage tasks",
          },
          {
            zh: "视频会议 (VC) — 管理会议",
            en: "VC (Video Conference) — Manage meetings",
          },
          {
            zh: "白板 (Whiteboard) — 在线协作白板",
            en: "Whiteboard — Interact with whiteboards",
          },
        ],
      },
      {
        title: "AI Agent Skills (19 Skills)",
        items: [
          {
            zh: "14 个业务技能：消息、文档、云盘、电子表格、多维表格、日历、邮件、通讯录、任务、事件、视频会议、白板、知识库、妙记",
            en: "14 service skills: lark-im, lark-doc, lark-drive, lark-sheets, lark-base, lark-calendar, lark-mail, lark-contact, lark-task, lark-event, lark-vc, lark-whiteboard, lark-wiki, lark-minutes",
          },
          {
            zh: "lark-openapi-explorer — 交互式探索和发现飞书 API",
            en: "lark-openapi-explorer — Explore and discover Lark APIs interactively",
          },
          {
            zh: "lark-skill-maker — 创建自定义 AI 技能",
            en: "lark-skill-maker — Create custom AI skills",
          },
          {
            zh: "lark-workflow-meeting-summary — 自动生成会议纪要",
            en: "lark-workflow-meeting-summary — Automated meeting summary workflow",
          },
          {
            zh: "lark-workflow-standup-report — 自动生成每日站会报告",
            en: "lark-workflow-standup-report — Automated standup report workflow",
          },
        ],
      },
      {
        title: "Developer Experience",
        items: [
          {
            zh: "全平台支持：macOS、Linux、Windows 开箱即用",
            en: "Cross-platform support (macOS, Linux, Windows) via GoReleaser",
          },
          {
            zh: "命令行自动补全：支持 Bash、Zsh、Fish、PowerShell",
            en: "Shell completion for Bash, Zsh, Fish, and PowerShell",
          },
          {
            zh: "中英文双语文档，适合全球开发者",
            en: "Bilingual documentation (English & Chinese)",
          },
          {
            zh: "完整的 CI/CD 流程：代码检查、测试、覆盖率报告、自动化发布",
            en: "CI/CD pipelines: linting, testing, coverage reporting, and automated releases",
          },
        ],
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  "Features": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Bug Fixes": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  "Documentation": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "Core Commands": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Service Shortcuts": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "AI Agent Skills (19 Skills)": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400",
  "Developer Experience": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
};

const tagLabels: Record<string, Record<string, string>> = {
  "Features": { zh: "新功能", en: "Features" },
  "Bug Fixes": { zh: "问题修复", en: "Bug Fixes" },
  "Documentation": { zh: "文档改进", en: "Documentation" },
  "Core Commands": { zh: "核心命令", en: "Core Commands" },
  "Service Shortcuts": { zh: "业务快捷命令", en: "Service Shortcuts" },
  "AI Agent Skills (19 Skills)": { zh: "AI Agent 技能（19 个）", en: "AI Agent Skills (19 Skills)" },
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
                  <p className="text-muted-foreground mb-4">{release.description[l]}</p>
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
                            {item[l]}
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
