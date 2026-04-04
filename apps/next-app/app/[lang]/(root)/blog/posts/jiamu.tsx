type ArticleProps = {
  lang?: string;
};

export default function JiamuArticle({ lang = "zh-CN" }: ArticleProps) {
  if (lang === "en") {
    return (
      <div className="space-y-6">
        <img src="/images/features/ai-doc-1.png" alt="Lark CLI with Claude Code in enterprise workflows" className="w-full rounded-xl border border-border" />

        <h2 className="text-xl font-semibold mt-8 mb-3">Why CLI matters once AI becomes the operator</h2>
        <p className="text-muted-foreground leading-relaxed">
          Most workplace software was designed for humans clicking through interfaces. That works well when every action is manual, but it becomes a bottleneck once AI agents enter the loop. An agent does not naturally browse menus or drag files around. It works best when the product exposes a clear text-based interface.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          That is why Lark CLI feels important. It turns everyday Lark actions into structured commands that an AI system can reliably execute: read docs, send messages, create tasks, inspect calendars, and move information between apps. Instead of AI stopping at advice, it can move into execution.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Setup is short, but the implications are big</h2>
        <p className="text-muted-foreground leading-relaxed">
          The practical setup is straightforward: install the CLI, add the skill package to your AI tooling, then authenticate your Lark account. After that, the interesting part is not the installation itself but the fact that your workspace becomes programmable in a way general AI tools can understand.
        </p>
        <div className="bg-muted/50 rounded-lg p-4 my-4 font-mono text-sm">
          <p>1. Install the CLI</p>
          <p>2. Add the Lark skill to your AI tool</p>
          <p>3. Run authentication and authorize your account</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          In other words, the barrier to entry is low, but the leverage is high. A few minutes of setup can turn Lark from a destination app into an execution layer for your AI workflows.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Use case 1: auto-building a living profile</h2>
        <p className="text-muted-foreground leading-relaxed">
          One of the first experiments was to ask AI to compile a structured personal profile directly from Lark. The agent pulled contact information, looked at recent documents and projects, checked calendar patterns, and assembled everything into a clean Lark doc.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          What stood out was not just that the document was generated automatically, but that the agent could decide which tools to call and in what order. It behaved less like a template filler and more like a junior operator who knows where relevant context usually lives.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Use case 2: turning content production into one continuous flow</h2>
        <p className="text-muted-foreground leading-relaxed">
          Content work is usually fragmented. Research happens in one place, outlining in another, drafting somewhere else, and review inside comments or chat threads. With Lark CLI, those steps can be stitched together in a single agent-driven workflow.
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">Research</h3>
        <p className="text-muted-foreground leading-relaxed">
          The agent can check trend signals, search the internal knowledge base, and avoid repeating topics the team already covered.
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">Outline and first draft</h3>
        <p className="text-muted-foreground leading-relaxed">
          Once the direction is clear, it can create a Lark doc, build an outline, and expand it into a first draft without the user having to switch tools.
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">Review as collaboration, not replacement</h3>
        <p className="text-muted-foreground leading-relaxed">
          The most compelling part is review. Instead of replacing the doc wholesale, AI can leave comments exactly where revision is needed, which feels much closer to working with an editor than using a one-shot generator.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Use case 3: summarizing noisy chats into actionable tasks</h2>
        <p className="text-muted-foreground leading-relaxed">
          Group chats are where important work often gets buried. In this scenario, the agent reads recent discussion, extracts decisions and next steps, then creates the corresponding tasks in Lark automatically.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The real value is not the summary by itself. It is the conversion of scattered conversation into operational structure. Once chat is transformed into tasks, momentum stops depending on who happened to remember what.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Use case 4: building a project board from documents</h2>
        <img src="/images/features/meeting-dashboard.png" alt="Project dashboard built with Lark Base" className="w-full rounded-xl border border-border my-4" />
        <p className="text-muted-foreground leading-relaxed">
          Another strong scenario is using Lark Base as a destination for structured information. The agent can read multiple docs, identify fields like owner, status, deadline, or project name, and populate a centralized board automatically.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          That removes a surprisingly expensive category of work: copying operational data from one collaboration surface to another just so teams can track it consistently.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">The bigger takeaway: this is AI infrastructure, not just a CLI</h2>
        <p className="text-muted-foreground leading-relaxed">
          After trying several scenarios, the broader conclusion is that Lark CLI should be seen less as a developer utility and more as infrastructure for enterprise agents. It creates the missing bridge between language-native AI systems and the everyday tools organizations already use.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Open source makes that story stronger. Teams can inspect the behavior, extend it with their own skills, and combine small capabilities into larger automation systems that fit their internal workflows instead of waiting for a single product to cover every edge case.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Adapted from Jiamu&apos;s original article.
            <a
              href="https://mp.weixin.qq.com/s/NTdxtKqE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors ml-1"
            >
              Read the original Chinese version
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <img src="/images/features/ai-doc-1.png" alt="飞书 CLI + Claude Code 企业级场景" className="w-full rounded-xl border border-border" />

      <h2 className="text-xl font-semibold mt-8 mb-3">CLI 到底是什么？为什么它很重要</h2>
      <p className="text-muted-foreground leading-relaxed">
        如果你不是程序员，听到 CLI（命令行界面）可能会觉得离自己很远。但换个方式理解：平时我们用飞书，是通过点击按钮、拖拽文件来完成操作的，这叫图形界面（GUI）。而 CLI 则是通过输入文字命令来完成同样的事情。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        那 CLI 和 AI 有什么关系？关键在于：AI Agent 天生就擅长处理文字命令，但很难去"点击按钮"。有了飞书 CLI，AI 就能像一个真正的助手一样，直接帮你操作飞书里的各种功能——读文档、发消息、创建任务、管理日历，所有这些都能通过命令完成。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">安装与配置：三步搞定</h2>
      <p className="text-muted-foreground leading-relaxed">
        飞书 CLI 的安装过程非常简单，对于熟悉 Node.js 环境的开发者来说几乎零门槛：
      </p>
      <div className="bg-muted/50 rounded-lg p-4 my-4 font-mono text-sm">
        <p>1. 安装 CLI：npm install -g @anthropic-ai/lark-cli</p>
        <p>2. 安装 Skills：将对应的 Skill 文件放入 ~/.claude/skills/ 目录</p>
        <p>3. 认证授权：运行 lark-cli auth 完成飞书账号绑定</p>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        整个过程大约五分钟即可完成。认证完成后，CLI 就能代表你操作飞书里的几乎所有功能了。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">场景一：自动生成个人档案文档</h2>
      <p className="text-muted-foreground leading-relaxed">
        第一个尝试的场景是让 AI 从飞书中自动汇总我的信息，生成一份个人档案。它做了这些事情：先从通讯录获取我的基本信息，然后查看我最近参与的文档和项目，再翻阅我的日历了解工作重心，最后把所有信息整合成一份结构化的飞书文档。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        整个过程完全自动化，AI 会自主决定需要调用哪些命令来收集信息。最终输出的文档包含个人简介、近期项目、专业技能等模块，格式清晰且专业。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">场景二：内容创作全流程</h2>
      <p className="text-muted-foreground leading-relaxed">
        这是我觉得最实用的场景。传统的内容创作流程中，从选题调研到大纲制作再到初稿撰写，每一步都需要在不同工具间切换。有了飞书 CLI，整个流程可以在一个对话中串联完成：
      </p>
      <h3 className="text-lg font-medium mt-4 mb-2">选题调研</h3>
      <p className="text-muted-foreground leading-relaxed">
        AI 先通过搜索能力了解当前热门话题趋势，同时检索飞书知识库中已有的相关内容，避免重复选题。
      </p>
      <h3 className="text-lg font-medium mt-4 mb-2">大纲与初稿</h3>
      <p className="text-muted-foreground leading-relaxed">
        确定选题后，AI 直接在飞书文档中创建大纲，然后逐步填充内容，生成完整的初稿。
      </p>
      <h3 className="text-lg font-medium mt-4 mb-2">协作审阅</h3>
      <p className="text-muted-foreground leading-relaxed">
        最有意思的部分是审阅环节——AI 可以通过文档评论功能给出修改建议，就像一个真实的编辑在文档旁边批注一样。团队成员也能在同一份文档上直接回复或讨论。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">场景三：群聊摘要与自动建任务</h2>
      <p className="text-muted-foreground leading-relaxed">
        在企业协作中，群聊消息经常会淹没关键信息。我让 AI 做了一件事：读取指定群聊的近期消息，提炼出关键讨论要点和待办事项，然后自动在飞书任务中创建对应的 todo 条目。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        这个场景的核心价值在于信息不再"沉没"在聊天记录里。AI 帮你做了一个高质量的信息过滤和结构化工作，将碎片化的讨论转化为可执行的任务。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">场景四：多维表格数据看板</h2>
      <img src="/images/features/meeting-dashboard.png" alt="多维表格数据看板" className="w-full rounded-xl border border-border my-4" />
      <p className="text-muted-foreground leading-relaxed">
        最后一个场景围绕多维表格（Bitable）展开。我让 AI 从多份飞书云文档中提取关键数据，然后自动创建一个多维表格，将数据汇总成一个可视化的项目看板。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        表格中包含项目名称、负责人、进度状态、截止日期等字段，AI 会根据文档中的实际内容自动填充。这相当于省去了手动从多个文档中"搬运"数据的过程。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">总结：企业 AI Agent 基础设施</h2>
      <p className="text-muted-foreground leading-relaxed">
        经过这几个场景的实践，我越来越觉得飞书 CLI 不只是一个命令行工具，而是企业级 AI Agent 的基础设施。它打通了 AI 与企业办公系统之间的最后一道屏障。以前 AI 只能给你建议，现在它可以直接帮你执行。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        更重要的是，CLI 的开源意味着开发者可以在此基础上构建更丰富的自动化工作流。每一个 Skill 都是一块积木，组合起来就能搭建出适合自己企业的智能化解决方案。
      </p>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          本文内容基于甲木的原创文章整理。原文发布于微信公众号，
          <a
            href="https://mp.weixin.qq.com/s/NTdxtKqE"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            点击查看原文
          </a>
          。
        </p>
      </div>
    </div>
  );
}
