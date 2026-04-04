const CHANGELOG_RAW_URL = "https://raw.githubusercontent.com/larksuite/cli/main/CHANGELOG.md";
const CHANGELOG_PAGE_URL = "https://github.com/larksuite/cli/blob/main/CHANGELOG.md";

type SectionKey = "features" | "fixes" | "docs" | "refactor" | "ci" | "chore" | "other";

type ParsedItem = {
  kind: "bullet" | "paragraph";
  text: string;
};

export type ChangelogRelease = {
  version: string;
  title: string;
  body: string;
  bodyZh: string;
  url: string;
  publishedAt: string;
  prerelease: boolean;
};

type ParsedSection = {
  title: string;
  key: SectionKey;
  items: ParsedItem[];
};

type ParsedRelease = {
  version: string;
  publishedAt: string;
  title: string;
  prerelease: boolean;
  sections: ParsedSection[];
  body: string;
  bodyZh: string;
  url: string;
};

const sectionTitleMap: Record<string, { key: SectionKey; zh: string }> = {
  features: { key: "features", zh: "新功能" },
  "bug fixes": { key: "fixes", zh: "问题修复" },
  documentation: { key: "docs", zh: "文档更新" },
  refactor: { key: "refactor", zh: "重构调整" },
  ci: { key: "ci", zh: "工程与 CI" },
  chore: { key: "chore", zh: "杂项更新" },
  other: { key: "other", zh: "其他更新" },
  "initial release": { key: "other", zh: "初始版本" },
  "core commands": { key: "other", zh: "核心命令" },
  "service shortcuts": { key: "other", zh: "服务快捷命令" },
  "ai agent skills": { key: "other", zh: "AI Agent Skills" },
  "developer experience": { key: "other", zh: "开发体验" },
};

const scopeLabelMap: Record<string, string> = {
  mail: "邮件",
  calendar: "日历",
  security: "安全",
  dashboard: "仪表盘",
  drive: "云盘",
  im: "即时消息",
  base: "Base",
  docs: "文档",
};

const phraseTranslations: Array<[RegExp, string]> = [
  [/\bSupport\b/g, "支持"],
  [/\bImplement\b/g, "实现"],
  [/\bAdd\b/g, "新增"],
  [/\bImprove\b/g, "改进"],
  [/\bReplace\b/g, "替换"],
  [/\bBlock\b/g, "阻止"],
  [/\bRestructure\b/g, "重构"],
  [/\bUse\b/g, "使用"],
  [/\bNormalize\b/g, "规范化"],
  [/\bClarify\b/g, "补充说明"],
  [/\bCorrect\b/g, "修正"],
  [/\bRemove\b/g, "移除"],
  [/\bResolve\b/g, "解决"],
  [/\bEmphasize\b/g, "强调"],
  [/\bSimplify\b/g, "简化"],
  [/\bRename\b/g, "重命名"],
  [/\bUpdate\b/g, "更新"],
  [/\bIntroduce\b/g, "引入"],
  [/\bmitigate MITM risk\b/gi, "降低中间人攻击风险"],
  [/\bproxy-aware base transport\b/gi, "支持代理的基础传输层"],
  [/\bauthentication response logging\b/gi, "认证响应日志记录"],
  [/\buser identity\b/gi, "用户身份"],
  [/\bidentity guidance to prefer user over bot\b/gi, "补充身份选择说明，优先使用用户身份而不是机器人身份"],
  [/\bCLI E2E testing framework\b/gi, "CLI 端到端测试框架"],
  [/\btask domain testcase and ci action\b/gi, "任务域测试用例和 CI 动作"],
  [/\bauto bot fallback\b/gi, "自动回退到机器人身份"],
  [/\bwithout user login\b/gi, "在未登录用户时"],
  [/\badd scope notes\b/gi, "补充权限范围说明"],
  [/\bapprove domain\b/gi, "审批域能力"],
  [/\bfiltering JSON output\b/gi, "筛选 JSON 输出"],
  [/\bminutes media download\b/gi, "妙记媒体下载"],
  [/\bdrive import, export, move, and task result shortcuts\b/gi, "云盘导入、导出、移动和任务结果快捷命令"],
  [/\bmessage send\/reply with uat\b/gi, "在 UAT 环境发送和回复消息"],
  [/\bin-memory keyring\b/gi, "内存钥匙串"],
  [/\bmail scope tests\b/gi, "邮件权限测试"],
  [/\bavoid macOS keychain popups\b/gi, "避免 macOS 钥匙串弹窗"],
  [/\bon-demand scope checks\b/gi, "按需权限检查"],
  [/\bwatch event filtering\b/gi, "监听事件过滤"],
  [/\bbinary download\b/gi, "二进制下载"],
  [/\bnpmmirror fallback\b/gi, "npmmirror 回退方案"],
  [/\bescaped sheet range separators\b/gi, "转义的表格范围分隔符"],
  [/\bJSON output is directly usable without extra encoding\b/gi, "JSON 输出可直接使用，无需额外编码"],
  [/\bdocs search query usage\b/gi, "文档搜索查询用法"],
  [/\bOS keychain\/DPAPI access error handling\b/gi, "操作系统钥匙串 / DPAPI 访问报错处理"],
  [/\bsandbox environments\b/gi, "沙箱环境"],
  [/\blocal image paths\b/gi, "本地图片路径"],
  [/\bdraft body HTML\b/gi, "草稿正文 HTML"],
  [/\bURL formatting\b/gi, "URL 格式"],
  [/\bautomatic CLI update detection and notification\b/gi, "CLI 自动更新检测与通知"],
  [/\bnpm publish job to release workflow\b/gi, "发布流程中的 npm 发布任务"],
  [/\bauto extension for downloads\b/gi, "下载文件自动补全扩展名"],
  [/\buseless files\b/gi, "无用文件"],
  [/\bmarkdown message send\/reply output\b/gi, "Markdown 消息发送 / 回复输出"],
  [/\bauto-pagination to messages search\b/gi, "消息搜索自动分页"],
  [/\bupdate lark-im docs\b/gi, "更新 lark-im 文档"],
  [/\bbase history read scope\b/gi, "Base 历史记录读取权限"],
  [/\bsensitive send scope\b/gi, "敏感发送权限"],
  [/\bsilent failure\b/gi, "静默失败问题"],
  [/\bfield description usage in json\b/gi, "JSON 中字段描述的用法"],
  [/\binclude all capabilities\b/gi, "涵盖全部能力"],
  [/\bofficial badge\b/gi, "官方徽章"],
  [/\bthird-party Lark CLI tools\b/gi, "第三方 Lark CLI 工具"],
  [/\bBitable references\b/gi, "Bitable 相关表述"],
  [/\bstar history chart\b/gi, "Star 历史图"],
  [/\binstallation steps\b/gi, "安装步骤"],
  [/\bmerging CLI and Skills into one section\b/gi, "将 CLI 和 Skills 合并到同一安装章节"],
  [/\bnpm version badge\b/gi, "npm 版本徽章"],
  [/\bAI agent tip wording\b/gi, "AI Agent 提示文案"],
  [/\bSkills installation as required for AI Agents\b/gi, "强调 Skills 安装是 AI Agent 的必需步骤"],
  [/\binstall methods as alternatives\b/gi, "各安装方式为可选方案"],
  [/\bsource build steps\b/gi, "源码构建步骤"],
  [/\bCI workflows\b/gi, "CI 工作流"],
  [/\bgolangci-lint config\b/gi, "golangci-lint 配置"],
  [/\bpull request template\b/gi, "Pull Request 模板"],
  [/\bconcise AGENTS development guide\b/gi, "简明 AGENTS 开发指南"],
  [/\bCross-platform support\b/gi, "跨平台支持"],
  [/\bShell completion\b/gi, "Shell 自动补全"],
  [/\bBilingual documentation\b/gi, "双语文档"],
  [/\bCI\/CD pipelines\b/gi, "CI/CD 流水线"],
  [/\bMake arbitrary Lark Open API calls directly from the terminal with flexible parameter support\b/gi, "在终端中直接调用任意 Lark Open API，并支持灵活参数传递"],
  [/\bComplete OAuth authentication flow, including interactive login, logout, token status, and scope management\b/gi, "完成 OAuth 认证流程，包括交互式登录、登出、Token 状态查看和权限范围管理"],
  [/\bManage CLI configuration, including `init` for guided setup and `default-as` for switching contexts\b/gi, "管理 CLI 配置，包括用于引导式设置的 `init` 和用于切换上下文的 `default-as`"],
  [/\bInspect available API services and resource schemas\b/gi, "查看可用 API 服务和资源 Schema"],
  [/\bRun diagnostic checks on CLI configuration and environment\b/gi, "对 CLI 配置和运行环境执行诊断检查"],
  [/\bGenerate shell completion scripts for Bash, Zsh, Fish, and PowerShell\b/gi, "为 Bash、Zsh、Fish 和 PowerShell 生成自动补全脚本"],
  [/\bBuilt-in shortcuts for commonly used Lark APIs, enabling concise commands like `lark im send` or `lark drive upload`\b/gi, "内置常用 Lark API 快捷命令，可直接使用 `lark im send`、`lark drive upload` 这类简洁调用方式"],
  [/\bBundled AI agent skills for intelligent assistance\b/gi, "内置 AI Agent Skills，用于智能协作与自动化"],
];

function translateScope(scope?: string) {
  if (!scope) return "";
  return scopeLabelMap[scope.toLowerCase()] ?? scope;
}

function translateLine(text: string) {
  let translated = text.trim();

  for (const [pattern, replacement] of phraseTranslations) {
    translated = translated.replace(pattern, replacement);
  }

  return translated
    .replace(/\*\*/g, "")
    .replace(/\s+\(#\d+\)$/g, "")
    .replace(/\bwith\b/gi, "支持")
    .replace(/\bwithout\b/gi, "不使用")
    .replace(/\bfor\b/gi, "用于")
    .replace(/\band\b/gi, "和")
    .replace(/\bto\b/gi, "以")
    .replace(/\bvia\b/gi, "通过")
    .replace(/\bincluding\b/gi, "包括")
    .replace(/\binteractive\b/gi, "交互式")
    .replace(/\bflexible\b/gi, "灵活的")
    .replace(/\bmore\b/gi, "更多")
    .replace(/\bSend messages, manage chats, and more\b/gi, "发送消息、管理群聊等")
    .replace(/\bUpload, download, and manage cloud documents\b/gi, "上传、下载和管理云文档")
    .replace(/\bWork with Lark documents\b/gi, "处理 Lark 文档")
    .replace(/\bInteract with spreadsheets\b/gi, "操作电子表格")
    .replace(/\bManage multi-dimensional tables\b/gi, "管理多维表格")
    .replace(/\bCreate and manage calendar events\b/gi, "创建和管理日历事件")
    .replace(/\bSend and manage emails\b/gi, "发送和管理邮件")
    .replace(/\bLook up users and departments\b/gi, "查询用户和部门")
    .replace(/\bCreate and manage tasks\b/gi, "创建和管理任务")
    .replace(/\bSubscribe to and manage event callbacks\b/gi, "订阅和管理事件回调")
    .replace(/\bManage meetings\b/gi, "管理会议")
    .replace(/\bInteract with whiteboards\b/gi, "操作白板")
    .replace(/\s+/g, " ")
    .trim();
}

function translateBullet(line: string) {
  const scopeMatch = line.match(/^\*?\*?([^*`]+?)\*?\*?:\s*(.+)$/);
  if (scopeMatch && !line.startsWith("`")) {
    const [, rawScope, rest] = scopeMatch;
    const scope = translateScope(rawScope.trim());
    return `${scope}：${translateLine(rest)}`;
  }

  return translateLine(line);
}

function toMarkdown(sectionTitle: string, items: ParsedItem[]) {
  const lines = [`### ${sectionTitle}`, ""];

  for (const item of items) {
    if (item.kind === "bullet") {
      lines.push(`- ${item.text}`);
    } else {
      lines.push(item.text, "");
    }
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function toChineseMarkdown(release: ParsedRelease) {
  const sections: string[] = [];

  if (release.prerelease) {
    sections.push("### 预发布说明\n\n- 这是一个预发布版本。\n");
  }

  for (const section of release.sections) {
    const mapped = sectionTitleMap[section.title.toLowerCase()] ?? { key: "other" as const, zh: section.title };
    const items = section.items.map((item) => ({
      kind: item.kind,
      text: item.kind === "bullet" ? translateBullet(item.text) : translateLine(item.text),
    }));
    sections.push(toMarkdown(mapped.zh, items));
  }

  if (sections.length === 0) {
    sections.push("### 更新内容\n\n- 本次版本暂无可展示的更新内容。");
  }

  return sections.join("\n\n").trim();
}

function normalizeDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toISOString();
}

function parseChangelog(markdown: string): ParsedRelease[] {
  const lines = markdown.split("\n");
  const releases: ParsedRelease[] = [];
  let currentRelease: ParsedRelease | null = null;
  let currentSection: ParsedSection | null = null;

  const pushSection = () => {
    if (currentRelease && currentSection) {
      currentRelease.sections.push(currentSection);
      currentSection = null;
    }
  };

  const pushRelease = () => {
    if (!currentRelease) return;

    pushSection();
    currentRelease.body = currentRelease.sections
      .map((section) => toMarkdown(section.title, section.items))
      .join("\n\n")
      .trim();
    currentRelease.bodyZh = toChineseMarkdown(currentRelease);
    currentRelease.title = currentRelease.version;
    releases.push(currentRelease);
    currentRelease = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    const releaseMatch = line.match(/^## \[(.+?)\] - (\d{4}-\d{2}-\d{2})$/);
    if (releaseMatch) {
      pushRelease();
      const [, version, date] = releaseMatch;
      currentRelease = {
        version,
        title: version,
        publishedAt: normalizeDate(date),
        prerelease: /alpha|beta|rc|preview/i.test(version),
        sections: [],
        body: "",
        bodyZh: "",
        url: `https://github.com/larksuite/cli/releases/tag/${version}`,
      };
      continue;
    }

    if (!currentRelease) continue;

    const sectionMatch = line.match(/^### (.+)$/);
    if (sectionMatch) {
      pushSection();
      currentSection = {
        title: sectionMatch[1],
        key: sectionTitleMap[sectionMatch[1].toLowerCase()]?.key ?? "other",
        items: [],
      };
      continue;
    }

    const subSectionMatch = line.match(/^#### (.+)$/);
    if (subSectionMatch) {
      pushSection();
      currentSection = {
        title: subSectionMatch[1],
        key: sectionTitleMap[subSectionMatch[1].toLowerCase()]?.key ?? "other",
        items: [],
      };
      continue;
    }

    if (line.startsWith("- ")) {
      if (!currentSection) {
        currentSection = { title: "Other", key: "other", items: [] };
      }
      currentSection.items.push({ kind: "bullet", text: line.slice(2) });
      continue;
    }

    if (line && !line.startsWith("#")) {
      if (!currentSection) {
        currentSection = { title: "Other", key: "other", items: [] };
      }
      currentSection.items.push({ kind: "paragraph", text: line });
    }
  }

  pushRelease();
  return releases;
}

export async function getGitHubReleases(): Promise<ChangelogRelease[]> {
  const headers: HeadersInit = {
    Accept: "text/markdown",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(CHANGELOG_RAW_URL, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch CHANGELOG.md: ${response.status}`);
  }

  const markdown = await response.text();
  const releases = parseChangelog(markdown);

  return releases.map((release) => ({
    version: release.version,
    title: release.title,
    body: release.body,
    bodyZh: release.bodyZh,
    url: release.url,
    publishedAt: release.publishedAt,
    prerelease: release.prerelease,
  }));
}

export const githubReleasesPageUrl = CHANGELOG_PAGE_URL;
