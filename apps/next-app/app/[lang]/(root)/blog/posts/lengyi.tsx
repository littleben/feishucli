type ArticleProps = {
  lang?: string;
};

export default function LengyiArticle({ lang = "zh-CN" }: ArticleProps) {
  if (lang === "en") {
    return (
      <div className="space-y-6">
        <img src="/images/features/overview.png" alt="Lark CLI capability overview" className="w-full rounded-xl border border-border" />

        <h2 className="text-xl font-semibold mt-8 mb-3">Agent-native software changes who the real user is</h2>
        <p className="text-muted-foreground leading-relaxed">
          For years, software design assumed the user would be a person. Interfaces were optimized for clicking, navigating, and visually scanning controls. In an agent-native world, that assumption breaks. AI agents are becoming operators too, and they need products to expose capabilities in a form language models can act on directly.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          That is where CLI becomes strategically important. A command line gives AI a precise interaction surface: text in, action out. For workplace software like Lark, this means agents can stop acting like external advisors and start functioning like real teammates with operational reach.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">An open interface matters more than a tool-specific integration</h2>
        <p className="text-muted-foreground leading-relaxed">
          One of the strongest ideas behind Lark CLI is that it does not belong to a single AI product. Whether a team prefers Claude Code, Cursor, Trae, or something else, the integration model stays stable. The CLI becomes the interface contract, while the AI layer remains replaceable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          That is a meaningful architectural choice for enterprises. It reduces platform lock-in and gives teams room to evolve their AI stack without rebuilding the bridge into their collaboration system every time the preferred model or coding environment changes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Eight practical ways teams can use it</h2>
        <img src="/images/features/calendar-demo.png" alt="Eight practical Lark CLI workflows" className="w-full rounded-xl border border-border my-4" />

        <h3 className="text-lg font-medium mt-4 mb-2">1. Daily agenda briefings</h3>
        <p className="text-muted-foreground leading-relaxed">
          An agent can read the day&apos;s calendar, summarize the meetings, note key participants or context, and push a concise morning briefing before the workday starts.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2. Auto-generated weekly reports</h3>
        <p className="text-muted-foreground leading-relaxed">
          Instead of manually reconstructing a week from memory, the agent can pull data from calendars, docs, and tasks to draft a structured report directly inside Lark docs.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3. Turning meeting notes into assignments</h3>
        <p className="text-muted-foreground leading-relaxed">
          After a meeting, AI can identify action items, map them to owners, and create follow-up tasks automatically. That shortens the gap between discussion and execution.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4. Group chat summaries</h3>
        <p className="text-muted-foreground leading-relaxed">
          For busy teams, catching up on chat is often expensive. An agent can read recent threads, surface decisions and unresolved points, and produce a fast catch-up summary for anyone rejoining the conversation.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">5. Cross-timezone scheduling</h3>
        <p className="text-muted-foreground leading-relaxed">
          Multi-region coordination becomes easier when AI can inspect availability across calendars, compare time zones, and propose meeting slots that are realistic for everyone involved.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6. Using docs as a searchable knowledge base</h3>
        <p className="text-muted-foreground leading-relaxed">
          Once AI can programmatically access Lark docs, the document system becomes more than a storage layer. It turns into a live knowledge base the agent can query, synthesize, and recombine into new outputs.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7. Managing Base automatically</h3>
        <p className="text-muted-foreground leading-relaxed">
          Base is especially powerful when agents can create tables, add records, update statuses, and sync structured data from other sources without manual entry.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8. Letting AI review documents in comments</h3>
        <p className="text-muted-foreground leading-relaxed">
          A subtle but valuable pattern is using AI as a reviewer rather than a replacement author. It can read a document section by section and leave targeted comments exactly where edits are needed.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Why this matters beyond simple productivity gains</h2>
        <p className="text-muted-foreground leading-relaxed">
          The obvious benefit is speed. Tasks that used to take half an hour—weekly updates, meeting cleanup, structured summaries—can be compressed dramatically. But the deeper shift is that work itself gets redesigned. AI starts linking steps together that used to depend on people constantly handing context from one tool to another.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Eventually that changes human roles too. People spend less time on mechanical coordination and more time on judgment, direction, and supervision. In that sense, the CLI is not just a utility layer. It is one of the pieces that makes agent-native organizations operationally real.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Adapted from Lengyi&apos;s original Chinese article.
            <a
              href="https://mp.weixin.qq.com/s/W41fFTDt"
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
      <img src="/images/features/overview.png" alt="飞书 CLI 功能全景" className="w-full rounded-xl border border-border" />

      <h2 className="text-xl font-semibold mt-8 mb-3">Agent Native 时代，软件的使用者变了</h2>
      <p className="text-muted-foreground leading-relaxed">
        过去我们谈论软件时，默认的使用者是人。界面设计、交互逻辑、按钮位置，一切都围绕着"人如何高效操作"展开。但进入 Agent Native 时代后，一个根本性的变化正在发生：软件的使用者不再只是人，还有 AI Agent。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        AI Agent 不会点击按钮，不会拖拽文件，也不会在下拉菜单里寻找选项。它需要一种更直接的方式与软件交互——命令行接口（CLI）正是这种方式。CLI 是一种以文本命令进行交互的软件接口，AI 天然擅长理解和生成文字指令。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">CLI 不绑定任何特定 AI 工具</h2>
      <p className="text-muted-foreground leading-relaxed">
        一个关键点是：飞书 CLI 不是为某一个 AI 产品设计的，而是一个开放的接口标准。无论你使用 Claude Code、Cursor、Trae 还是其他 AI 编程工具，都可以通过 CLI 与飞书交互。这意味着企业不需要因为选择了某个 AI 工具就被锁定在特定的生态中。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        CLI 的设计理念是"让任何 AI 都能成为飞书的操作者"。这对企业来说是一个重要的信号——AI 工具可以自由切换，而与飞书的集成能力不会受到影响。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">八大实战玩法</h2>
      <img src="/images/features/calendar-demo.png" alt="飞书 CLI 八大实战玩法" className="w-full rounded-xl border border-border my-4" />

      <h3 className="text-lg font-medium mt-4 mb-2">1. 每日日程简报</h3>
      <p className="text-muted-foreground leading-relaxed">
        让 AI 每天早上自动读取你的飞书日历，生成一份当日日程概览。包含会议时间、参会人、议题要点等信息，发送到指定群聊或以消息形式推送给你。省去了打开日历应用逐条查看的时间。
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">2. 自动生成周报</h3>
      <p className="text-muted-foreground leading-relaxed">
        这个玩法深受职场人喜爱。AI 通过读取你本周的日历安排、参与的文档编辑、任务完成情况等数据，自动生成一份结构化的周报，直接写入指定的飞书文档中。
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">3. 会后待办自动分配</h3>
      <p className="text-muted-foreground leading-relaxed">
        会议结束后，AI 读取会议纪要内容，识别其中的行动项（Action Items），自动在飞书任务中创建对应的待办条目，并指派给相关负责人。真正实现"会议不白开"。
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">4. 群聊摘要：告别翻聊天记录</h3>
      <p className="text-muted-foreground leading-relaxed">
        群聊消息多到看不过来？让 AI 帮你总结。它会读取指定群的近期消息，提炼出关键信息和讨论结论，生成一份简洁的群聊摘要。特别适合出差回来或休假后快速了解项目进展。
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">5. 跨时区智能会议安排</h3>
      <p className="text-muted-foreground leading-relaxed">
        对于有海外团队的企业，跨时区会议安排一直是个痛点。AI 可以读取多位参会者的日历空闲时段，自动计算各时区的合适时间，创建会议邀请并发送通知。
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">6. 飞书文档作为知识库</h3>
      <p className="text-muted-foreground leading-relaxed">
        通过 CLI，AI 可以把飞书文档体系当作一个可检索的知识库。你可以让 AI 搜索特定主题的文档，汇总其中的关键信息，甚至基于多篇文档的内容生成新的整合报告。
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">7. 多维表格自动管理</h3>
      <p className="text-muted-foreground leading-relaxed">
        多维表格是飞书的强大功能之一。通过 CLI，AI 可以自动创建表格、添加记录、更新状态，甚至基于其他数据源批量导入数据。对于项目管理和数据追踪场景特别有用。
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">8. AI 化身文档审阅者</h3>
      <p className="text-muted-foreground leading-relaxed">
        让 AI 通过文档评论功能充当审阅者的角色。它可以逐段阅读文档内容，在需要修改的地方以评论形式给出建议。这种方式保留了协作的自然感，同时大幅提升了审阅效率。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">飞书 CLI 与企微 CLI 对比</h2>
      <p className="text-muted-foreground leading-relaxed">
        除了飞书之外，企业微信也推出了自己的 CLI 工具。两者的核心理念相似——为 AI Agent 提供操作企业办公系统的能力。但在覆盖范围上有所不同：飞书 CLI 目前覆盖了 10+ 个业务域（文档、消息、日历、多维表格、任务、邮件、知识库等），命令数量达到 200+ 条；企微 CLI 则更侧重于消息通讯和审批流程。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        两个产品都选择了开源路线，说明行业正在形成共识：企业办公工具需要向 AI 开放操作权限。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">三层洞察：从效率到角色转变</h2>
      <h3 className="text-lg font-medium mt-4 mb-2">第一层：效率提升</h3>
      <p className="text-muted-foreground leading-relaxed">
        最直观的价值是节省时间。过去需要 30 分钟手动完成的工作（写周报、整理会议纪要、汇总数据），现在几分钟就能搞定。
      </p>
      <h3 className="text-lg font-medium mt-4 mb-2">第二层：工作流重构</h3>
      <p className="text-muted-foreground leading-relaxed">
        更深层的变化是工作流本身被重新设计了。以前内容创作的流程是"调研-写作-审阅-发布"，每个环节之间都有人工衔接。现在 AI 可以串联起整个流程，人只需要在关键节点做决策。
      </p>
      <h3 className="text-lg font-medium mt-4 mb-2">第三层：角色转变</h3>
      <p className="text-muted-foreground leading-relaxed">
        最终，个人在组织中的角色会发生变化。从"执行者"转向"决策者和监督者"。AI 承担了执行层的工作，人的价值更多体现在判断力、创造力和战略思考上。
      </p>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          本文内容基于冷逸（小栗子）的原创文章整理。原文发布于微信公众号，
          <a
            href="https://mp.weixin.qq.com/s/W41fFTDt"
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
