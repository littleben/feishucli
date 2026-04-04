export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: "review" | "tutorial" | "event";
  originalUrl?: string;
  translations?: {
    en?: {
      title: string;
      excerpt: string;
      author?: string;
    };
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "jiamu-claude-code-feishu-cli",
    title: "飞书 CLI 开源了，我用 Claude Code 玩转几大企业级场景，绝了！",
    excerpt: "从个人说明书到内容创作全流程，再到群聊消息总结和多维表格仪表盘，甲木用 Claude Code + 飞书 CLI 跑通了四个真实企业级场景。",
    author: "甲木",
    date: "2026-03-28",
    category: "review",
    originalUrl: "https://mp.weixin.qq.com/s/NTdxtKqE...",
    translations: {
      en: {
        title: "Feishu CLI Is Open Source: 4 Enterprise Workflows Built with Claude Code",
        excerpt: "From personal profile docs to content production, group-chat summaries, and Bitable dashboards, Jiamu shows four real enterprise scenarios powered by Claude Code + Feishu CLI.",
        author: "Jiamu",
      },
    },
  },
  {
    slug: "lengyi-feishu-wecom-cli-8-plays",
    title: "一文说清楚飞书、企微 CLI 究竟是什么，怎么用？附 8 大玩法",
    excerpt: "从日程播报到周报自动生成，从会议待办自动分配到知识库整理，冷逸分享了 8 个飞书 CLI 真实使用场景，并深入分析了为什么所有厂商都在做 CLI。",
    author: "冷逸",
    date: "2026-03-31",
    category: "tutorial",
    originalUrl: "https://mp.weixin.qq.com/s/W41fFTDt...",
    translations: {
      en: {
        title: "What Are Feishu CLI and WeCom CLI? 8 Practical Use Cases",
        excerpt: "From daily schedule briefings and automated weekly reports to meeting follow-ups and knowledge-base cleanup, Lengyi breaks down eight real-world use cases and why every vendor is building CLI interfaces.",
        author: "Lengyi",
      },
    },
  },
  {
    slug: "huangshu-ai-control-feishu",
    title: "我让 AI 直接操作我的飞书，结果它比我还熟练",
    excerpt: "黄叔用飞书 CLI 重构了知识库教程框架、将 Markdown 同步到飞书文档、从会议录音自动生成文档，并总结了飞书 CLI 好用的三个技术原因。",
    author: "黄叔",
    date: "2026-03-29",
    category: "review",
    originalUrl: "https://mp.weixin.qq.com/s/jwOPySDv...",
    translations: {
      en: {
        title: "I Let AI Operate My Feishu Workspace — and It Did Better Than Me",
        excerpt: "Huangshu used Feishu CLI to rebuild a knowledge-base tutorial structure, sync Markdown into Feishu Docs, generate docs from meeting recordings, and explain the three technical reasons the tool feels so effective.",
        author: "Huangshu",
      },
    },
  },
  {
    slug: "xiaohu-smart-task-assistant",
    title: "飞书 CLI 直接开源，为所有 AI 打开了大门",
    excerpt: "小互用飞书 CLI + Claude Code 搭建了一个智能任务助手，实现聊天中自动建任务、排日历、消息简报联动日程，还搭了知识库和多维表格。",
    author: "小互",
    date: "2026-03-28",
    category: "tutorial",
    originalUrl: "https://mp.weixin.qq.com/s/MvxDW_R-...",
    translations: {
      en: {
        title: "Feishu CLI Open Source Means Every AI Can Become a Task Assistant",
        excerpt: "Xiaohu built a smart task assistant with Feishu CLI + Claude Code, turning chat into tasks, coordinating calendars, generating message briefings, and syncing knowledge bases with Bitable.",
        author: "Xiaohu",
      },
    },
  },
  {
    slug: "cli-beginner-guide",
    title: "CLI 入门指南：从零了解命令行到玩转飞书 CLI",
    excerpt: "不懂编程也能看懂！用餐厅点菜的比喻解释 CLI 是什么，附飞书 CLI 完整功能全景图和 19 个 AI Agent Skills 详解。",
    author: "飞书 CLI 社区",
    date: "2026-03-30",
    category: "tutorial",
    translations: {
      en: {
        title: "CLI Beginner's Guide: From Command Line Basics to Using Lark CLI",
        excerpt: "A beginner-friendly explanation of CLI using a restaurant-ordering analogy, plus a full feature map of Lark CLI and an overview of 19 AI Agent skills.",
        author: "Lark CLI Community",
      },
    },
  },
  {
    slug: "feishu-cli-creator-contest",
    title: "飞书 CLI 创作者大赛：用你的创意赢取 Mac Mini",
    excerpt: "飞书 CLI 创作者大赛正式启动！提交你的 CLI Skill 作品或分享使用体验，赢取 Mac Mini、安克 AI 录音豆、京东卡等奖品。截止 4 月 20 日。",
    author: "飞书 CLI 官方",
    date: "2026-04-01",
    category: "event",
    originalUrl: "https://waytoagi.feishu.cn/wiki/R4S3w8wTTie04nkYiL6c8rxon4d",
    translations: {
      en: {
        title: "Feishu CLI Creator Contest: Win a Mac Mini with Your Ideas",
        excerpt: "The Feishu CLI Creator Contest is now live. Submit a CLI skill or share your usage story for a chance to win prizes including a Mac Mini before April 20.",
        author: "Feishu CLI Team",
      },
    },
  },
];
