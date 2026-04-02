export default function XiaohuArticle() {
  return (
      <div className="space-y-6">
        <img src="/images/calendar-demo.png" alt="智能任务助手与日历管理" className="w-full rounded-xl border border-border" />

        <h2 className="text-xl font-semibold mt-8 mb-3">用 CLAUDE.md 打造智能任务助手</h2>
        <p className="text-muted-foreground leading-relaxed">
          我做的第一件事是在项目中配置 CLAUDE.md 文件，为 AI 定义了一套任务管理规则。这些规则告诉 AI 如何解析自然语言中的任务意图、如何确定优先级、以及如何与飞书任务系统交互。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          有了这套规则，AI 就像一个训练有素的项目助理。当你在对话中随口提到"下周三之前把方案做完"，它能自动识别出这是一个任务，提取出截止日期和任务描述，然后在飞书任务中创建对应的条目。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">从聊天到行动：自然对话驱动的任务创建</h2>
        <p className="text-muted-foreground leading-relaxed">
          传统的任务管理工具要求你主动打开应用、填写表单、设置属性。但在真实的工作场景中，任务往往是在对话中产生的——一次讨论、一条消息、一个会议中的决定。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          通过飞书 CLI，AI 可以直接从对话上下文中提取任务信息。你不需要切换到任务管理界面，只需要在和 AI 的对话中自然地描述需要做的事情，它就会在后台帮你处理好一切。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">信息闭环：消息简报到任务创建的完整链路</h2>
        <p className="text-muted-foreground leading-relaxed">
          最让我兴奋的是打通了一条完整的信息处理链路：
        </p>
        <div className="bg-muted/50 rounded-lg p-4 my-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            消息简报 → 日历关联 → 任务创建 → 自动回复
          </p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          首先，AI 读取群聊消息生成简报，识别出其中与你日历安排相关的内容；然后将讨论中产生的待办事项自动创建为飞书任务；最后，根据需要在群聊中发送确认回复。整个过程形成了一个信息处理的闭环。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          这条链路的价值在于：信息从"被看到"变成了"被处理"。不再有信息在流转过程中被遗漏或遗忘。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Markdown 到飞书知识库的桥梁</h2>
        <p className="text-muted-foreground leading-relaxed">
          对于习惯用 Markdown 管理知识的人来说，飞书 CLI 提供了一种丝滑的同步体验。我把本地的 Markdown 知识体系通过 CLI 批量导入到了飞书知识库中，每篇文档自动创建为知识库中的一个节点，层级结构保持一致。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          反过来也一样——你可以让 AI 将飞书知识库中的文档导出为 Markdown 格式，方便在其他工具中使用。这种双向同步能力让飞书真正成为了一个开放的知识管理平台。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">多维表格实战：时间分配与内容追踪</h2>
        <h3 className="text-lg font-medium mt-4 mb-2">时间分配追踪表</h3>
        <p className="text-muted-foreground leading-relaxed">
          第一个多维表格场景是时间分配追踪。AI 通过读取我的日历数据，自动统计每周在不同类型事务上花费的时间（会议、深度工作、沟通协调等），然后将数据填充到多维表格中。一段时间积累下来，就能清晰地看到自己的时间都花在了哪里。
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">内容发布追踪表</h3>
        <p className="text-muted-foreground leading-relaxed">
          第二个场景是内容发布管理。作为内容创作者，我需要追踪多个平台的发布进度。AI 帮我创建了一个多维表格，包含文章标题、目标平台、当前状态、发布日期等字段，并在每次有新内容完成时自动更新记录。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">思考：CLI 正在为 AI 拆除围墙</h2>
        <p className="text-muted-foreground leading-relaxed">
          回顾整个实践过程，我最大的感受是：飞书 CLI 的意义不仅是"让操作更方便"，而是在根本上改变了 AI 与企业软件之间的关系。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          过去，AI 的角色是"顾问"——你问它问题，它给你答案，但执行还得靠你自己。现在，通过 CLI，AI 的角色进化成了"执行者"——它不只是告诉你该怎么做，还能直接帮你做完。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          这是一个重要的范式转换。当越来越多的企业软件向 AI 开放操作权限时，AI Agent 就不再是实验室里的概念，而是真正融入工作流的生产力工具。CLI 就是那把钥匙，打开了 AI 与企业办公系统之间的大门。
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            本文内容基于小互的原创文章整理。原文发布于微信公众号，
            <a
              href="https://mp.weixin.qq.com/s/MvxDW_R-"
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
