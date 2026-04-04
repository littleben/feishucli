export default function CliBeginnerGuide({ lang = "zh-CN" }: { lang?: string }) {
  if (lang === "en") {
    return (
      <div className="space-y-6">
        <img src="/images/features/install-demo.png" alt="Lark CLI installation and usage" className="w-full rounded-xl border border-border" />

        <div className="bg-muted/30 rounded-lg px-6 py-4 mb-6">
          <p className="text-sm font-medium text-foreground">Part 1</p>
          <p className="text-lg font-semibold text-foreground">What Is a CLI? Think of It Like Ordering Food</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">A Simple Analogy: Two Ways to Order at a Restaurant</h2>
        <p className="text-muted-foreground leading-relaxed">
          Imagine you walk into a restaurant. There are two ways to place your order.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The first way: you flip through a menu full of photos, point at something that looks good, and tell the waiter &quot;I&apos;ll have that.&quot; Everything is visual, everything is laid out for you. That&apos;s how a graphical user interface (GUI) works — what you see is what you get.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The second way: you skip the menu entirely and say &quot;Chicken stir-fry, easy on the spice, with a side of rice.&quot; No pictures needed — you describe exactly what you want in words. That&apos;s how a command-line interface (CLI) works — you type structured text commands to talk directly to the system.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For humans, browsing a visual menu is usually easier. But for AI, speaking in structured text is far more natural. That&apos;s exactly why CLIs are becoming so important in the age of AI.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">GUI vs. CLI at a Glance</h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-foreground">Dimension</th>
                <th className="text-left py-3 px-4 font-medium text-foreground">GUI (Graphical)</th>
                <th className="text-left py-3 px-4 font-medium text-foreground">CLI (Command Line)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Interaction</td>
                <td className="py-3 px-4">Mouse clicks, drag &amp; drop</td>
                <td className="py-3 px-4">Text commands</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Learning curve</td>
                <td className="py-3 px-4">Low — intuitive</td>
                <td className="py-3 px-4">Moderate — commands to learn</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Best suited for</td>
                <td className="py-3 px-4">Everyday users</td>
                <td className="py-3 px-4">Developers, AI agents</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Automation</td>
                <td className="py-3 px-4">Weak — hard to script</td>
                <td className="py-3 px-4">Strong — built for scripting</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Batch operations</td>
                <td className="py-3 px-4">Manual, one by one</td>
                <td className="py-3 px-4">One command can handle many items</td>
              </tr>
              <tr>
                <td className="py-3 px-4">AI friendliness</td>
                <td className="py-3 px-4">Low</td>
                <td className="py-3 px-4">High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">Common Commands, Explained Simply</h2>
        <p className="text-muted-foreground leading-relaxed">
          Here are a few everyday CLI commands, explained in plain language:
        </p>
        <div className="space-y-3 my-4">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-mono text-sm text-foreground">lark-cli doc create</p>
            <p className="text-muted-foreground text-sm mt-1">Equivalent to: open Lark and click &quot;New Document&quot;</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-mono text-sm text-foreground">lark-cli im send --chat &quot;Project Team&quot; --text &quot;Meeting delayed&quot;</p>
            <p className="text-muted-foreground text-sm mt-1">Equivalent to: open the group chat, type a message, and hit send</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-mono text-sm text-foreground">lark-cli calendar list --date today</p>
            <p className="text-muted-foreground text-sm mt-1">Equivalent to: open your calendar app and check today&apos;s schedule</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-mono text-sm text-foreground">lark-cli task create --title &quot;Submit report&quot; --due 2026-04-05</p>
            <p className="text-muted-foreground text-sm mt-1">Equivalent to: open the task app, create a task, and fill in the title and due date</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Once you see the pattern, each CLI command is really just a structured instruction. It may feel less visual for people, but for AI it&apos;s exactly the right format.
        </p>

        <div className="bg-muted/30 rounded-lg px-6 py-4 mb-6 mt-12">
          <p className="text-sm font-medium text-foreground">Part 2</p>
          <p className="text-lg font-semibold text-foreground">The Lark CLI Landscape: A Tour of 19 Skills</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">A Three-Layer Command Structure</h2>
        <p className="text-muted-foreground leading-relaxed">
          Lark CLI uses a clean three-layer command structure:
        </p>
        <div className="bg-muted/50 rounded-lg p-4 my-4 font-mono text-sm">
          <p className="text-foreground">lark-cli [Skill] [command] [arguments]</p>
          <p className="text-muted-foreground mt-2">Example: lark-cli doc get --doc-id xxx</p>
          <p className="text-muted-foreground">       ↑ tool    ↑ action  ↑ arguments</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The first layer is the Skill name, which tells Lark CLI which part of the Lark ecosystem you want to work with. The second layer is the action, such as create, get, list, update, or delete. The third layer contains the arguments that define the details of the operation.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">An Overview of 19 Skills</h2>
        <p className="text-muted-foreground leading-relaxed">
          Lark CLI currently offers 19 Skills, covering the core parts of the Lark platform:
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">Docs &amp; Knowledge</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
          <li><span className="font-medium text-foreground">lark-doc</span> — Create, read, edit, and comment on cloud documents</li>
          <li><span className="font-medium text-foreground">lark-wiki</span> — Manage knowledge bases, spaces, and nodes</li>
          <li><span className="font-medium text-foreground">lark-drive</span> — Manage files and folders in cloud storage</li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">Communication</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
          <li><span className="font-medium text-foreground">lark-im</span> — Send and receive messages, manage chats and groups</li>
          <li><span className="font-medium text-foreground">lark-mail</span> — Work with Lark Mail</li>
          <li><span className="font-medium text-foreground">lark-contact</span> — Look up org structure, people, and contact info</li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">Calendar &amp; Tasks</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
          <li><span className="font-medium text-foreground">lark-calendar</span> — Manage calendars and events</li>
          <li><span className="font-medium text-foreground">lark-task</span> — Manage tasks and checklists</li>
          <li><span className="font-medium text-foreground">lark-vc</span> — Handle video meeting workflows</li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">Data &amp; Tables</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
          <li><span className="font-medium text-foreground">lark-base</span> — Work with Bitable databases</li>
          <li><span className="font-medium text-foreground">lark-sheets</span> — Work with spreadsheets</li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">Other</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
          <li><span className="font-medium text-foreground">lark-minutes</span> — Access meeting transcription and smart minutes</li>
          <li><span className="font-medium text-foreground">lark-event</span> — Subscribe to and monitor Lark events in real time</li>
          <li><span className="font-medium text-foreground">lark-whiteboard</span> — Work with whiteboards and visual diagrams</li>
          <li><span className="font-medium text-foreground">lark-shared</span> — Shared setup and initialization utilities</li>
          <li>Plus additional Skill modules that continue to expand over time</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Get Started in 3 Steps</h2>
        <div className="space-y-4 my-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">1</div>
            <div>
              <p className="font-medium text-foreground">Install the CLI</p>
              <p className="text-muted-foreground text-sm mt-1">Install the Lark CLI package globally with npm.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">2</div>
            <div>
              <p className="font-medium text-foreground">Set up the Skills</p>
              <p className="text-muted-foreground text-sm mt-1">Install the Skills you need into your AI tool&apos;s Skills directory. The exact location may vary depending on the tool you use.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">3</div>
            <div>
              <p className="font-medium text-foreground">Authenticate your account</p>
              <p className="text-muted-foreground text-sm mt-1">Run the auth command and complete the authorization flow in your browser. Once that&apos;s done, you can start using every available Skill.</p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          After setup, you can use Lark through any AI tool that supports Skills or the MCP protocol. Whether you&apos;re handling everyday office work or building more advanced automations, these 19 Skills give you broad coverage across the platform.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Adapted from the Lark CLI community guide.
            <a
              href="https://github.com/nicepkg/lark-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors ml-1"
            >
              Lark CLI GitHub repository
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <img src="/images/features/install-demo.png" alt="飞书 CLI 安装与使用" className="w-full rounded-xl border border-border" />

      <div className="bg-muted/30 rounded-lg px-6 py-4 mb-6">
        <p className="text-sm font-medium text-foreground">第一部分</p>
        <p className="text-lg font-semibold text-foreground">CLI 是什么？用餐厅点餐来理解</p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">一个简单的比喻：餐厅点餐</h2>
      <p className="text-muted-foreground leading-relaxed">
        想象你走进一家餐厅。有两种点餐方式：
      </p>
      <p className="text-muted-foreground leading-relaxed">
        第一种是看菜单上的图片，指着某道菜告诉服务员&quot;我要这个&quot;。菜单上有图片有描述，你只需要选择就行。这就是图形界面（GUI）的方式——所见即所得，操作直观。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        第二种是直接对服务员说&quot;一份宫保鸡丁，少放辣，加一碗米饭&quot;。你不需要菜单，直接用语言精确描述你的需求。这就是命令行界面（CLI）的方式——用文本指令直接与系统交互。
      </p>
      <p className="text-muted-foreground leading-relaxed">
        对于人来说，看图片点菜通常更方便。但对于 AI 来说，用文字&quot;说&quot;出需求要容易得多。这就是为什么 CLI 在 AI 时代变得如此重要。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">GUI 与 CLI 对比</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">对比维度</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">GUI（图形界面）</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">CLI（命令行）</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">交互方式</td>
              <td className="py-3 px-4">鼠标点击、拖拽</td>
              <td className="py-3 px-4">文本命令输入</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">学习成本</td>
              <td className="py-3 px-4">低，直觉操作</td>
              <td className="py-3 px-4">中等，需记忆命令</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">适合对象</td>
              <td className="py-3 px-4">人类用户</td>
              <td className="py-3 px-4">开发者、AI Agent</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">自动化能力</td>
              <td className="py-3 px-4">弱，难以脚本化</td>
              <td className="py-3 px-4">强，天然支持自动化</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">批量操作</td>
              <td className="py-3 px-4">逐个手动操作</td>
              <td className="py-3 px-4">一条命令批量处理</td>
            </tr>
            <tr>
              <td className="py-3 px-4">AI 友好度</td>
              <td className="py-3 px-4">低</td>
              <td className="py-3 px-4">高</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">常见命令速览</h2>
      <p className="text-muted-foreground leading-relaxed">
        下面用日常语言解释几个常用的 CLI 概念：
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="font-mono text-sm text-foreground">lark-cli doc create</p>
          <p className="text-muted-foreground text-sm mt-1">相当于：打开飞书，点&quot;新建文档&quot;</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="font-mono text-sm text-foreground">lark-cli im send --chat &quot;项目组&quot; --text &quot;会议延后&quot;</p>
          <p className="text-muted-foreground text-sm mt-1">相当于：打开群聊，输入消息，点发送</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="font-mono text-sm text-foreground">lark-cli calendar list --date today</p>
          <p className="text-muted-foreground text-sm mt-1">相当于：打开日历应用，查看今天的安排</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="font-mono text-sm text-foreground">lark-cli task create --title &quot;提交报告&quot; --due 2026-04-05</p>
          <p className="text-muted-foreground text-sm mt-1">相当于：打开任务应用，新建任务，填写标题和截止日期</p>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        可以看到，每一条 CLI 命令本质上就是一句结构化的指令。对人来说可能不如图形界面直观，但对 AI 来说这种格式恰到好处。
      </p>

      <div className="bg-muted/30 rounded-lg px-6 py-4 mb-6 mt-12">
        <p className="text-sm font-medium text-foreground">第二部分</p>
        <p className="text-lg font-semibold text-foreground">飞书 CLI 功能全景：19 个 Skills 一览</p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">三层命令架构</h2>
      <p className="text-muted-foreground leading-relaxed">
        飞书 CLI 采用了三层命令架构，结构清晰：
      </p>
      <div className="bg-muted/50 rounded-lg p-4 my-4 font-mono text-sm">
        <p className="text-foreground">lark-cli [Skill] [命令] [参数]</p>
        <p className="text-muted-foreground mt-2">示例：lark-cli doc get --doc-id xxx</p>
        <p className="text-muted-foreground">       ↑ 工具   ↑ 动作   ↑ 参数</p>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        第一层是 Skill 名称，指定你要操作飞书的哪个模块；第二层是具体动作（如 create、get、list、update、delete）；第三层是操作参数。
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">19 个 Skills 全景</h2>
      <p className="text-muted-foreground leading-relaxed">
        飞书 CLI 目前提供了 19 个 Skill，覆盖了飞书生态的核心功能模块：
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">文档与知识管理</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
        <li><span className="font-medium text-foreground">lark-doc</span> — 云文档的创建、读取、编辑、评论等操作</li>
        <li><span className="font-medium text-foreground">lark-wiki</span> — 知识库管理，包括空间和节点的增删改查</li>
        <li><span className="font-medium text-foreground">lark-drive</span> — 云空间文件和文件夹管理</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">沟通与协作</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
        <li><span className="font-medium text-foreground">lark-im</span> — 即时通讯，收发消息、管理群聊</li>
        <li><span className="font-medium text-foreground">lark-mail</span> — 飞书邮箱操作</li>
        <li><span className="font-medium text-foreground">lark-contact</span> — 通讯录查询，组织架构和人员信息</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">日程与任务</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
        <li><span className="font-medium text-foreground">lark-calendar</span> — 日历与日程管理</li>
        <li><span className="font-medium text-foreground">lark-task</span> — 任务和清单管理</li>
        <li><span className="font-medium text-foreground">lark-vc</span> — 视频会议相关操作</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">数据与表格</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
        <li><span className="font-medium text-foreground">lark-base</span> — 多维表格（Bitable）操作</li>
        <li><span className="font-medium text-foreground">lark-sheets</span> — 电子表格操作</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">其他能力</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
        <li><span className="font-medium text-foreground">lark-minutes</span> — 妙记（会议录制转写）</li>
        <li><span className="font-medium text-foreground">lark-event</span> — 事件订阅，实时监听飞书事件</li>
        <li><span className="font-medium text-foreground">lark-whiteboard</span> — 白板与图表绘制</li>
        <li><span className="font-medium text-foreground">lark-shared</span> — 共享基础配置与初始化</li>
        <li>以及更多持续扩展中的 Skill 模块</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">快速开始三步走</h2>
      <div className="space-y-4 my-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">1</div>
          <div>
            <p className="font-medium text-foreground">安装 CLI</p>
            <p className="text-muted-foreground text-sm mt-1">通过 npm 全局安装飞书 CLI 工具包。</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">2</div>
          <div>
            <p className="font-medium text-foreground">配置 Skills</p>
            <p className="text-muted-foreground text-sm mt-1">将需要的 Skill 文件安装到 AI 工具的 Skills 目录中。不同 AI 工具的安装位置略有不同。</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">3</div>
          <div>
            <p className="font-medium text-foreground">完成认证</p>
            <p className="text-muted-foreground text-sm mt-1">运行认证命令，在浏览器中授权飞书账号。完成后即可开始使用所有 Skill。</p>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        配置完成后，你可以通过任何支持 Skill 或 MCP 协议的 AI 工具来操作飞书。无论是日常办公还是复杂的自动化流程，19 个 Skill 提供了足够丰富的能力覆盖。
      </p>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          本文由飞书 CLI 社区整理，综合了 CLI 入门教程和功能全景两部分内容。了解更多请访问
          <a
            href="https://github.com/nicepkg/lark-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors ml-1"
          >
            飞书 CLI GitHub 仓库
          </a>
          。
        </p>
      </div>
    </div>
  );
}
