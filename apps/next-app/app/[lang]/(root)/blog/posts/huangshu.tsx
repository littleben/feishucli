export default function HuangshuArticle() {
  return (
      <div className="space-y-6">
        <img src="/images/ai-doc-3.png" alt="AI 操作飞书知识库" className="w-full rounded-xl border border-border" />

        <h2 className="text-xl font-semibold mt-8 mb-3">知识库教程重构：让 AI 帮你整理文档体系</h2>
        <p className="text-muted-foreground leading-relaxed">
          第一个动手尝试的场景是知识库教程的重构。团队的飞书知识库里积累了大量技术文档，但结构混乱、版本过旧、格式不统一。我让 Claude Code 通过飞书 CLI 读取了知识库中的文档目录，分析文档内容和结构关系，然后给出了一套重新组织的方案。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          最让我惊讶的是，AI 不仅能读取文档内容，还能理解文档之间的逻辑关系。它识别出了重复内容、过时信息，并建议了合理的目录层级。我只需要审核方案并确认，AI 就自动完成了文档的迁移和重新归类。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">基于评论的协作模式：AI 做你的文档编辑</h2>
        <p className="text-muted-foreground leading-relaxed">
          飞书文档的评论功能一直是协作的核心。我发现 CLI 打开了一种全新的协作模式：让 AI 通过评论来参与文档的修改讨论。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          具体的操作流程是：AI 逐段阅读文档内容，遇到可以优化的段落就在对应位置添加评论，提出具体的修改建议。作为文档作者，你可以逐条查看这些建议，接受合理的修改、忽略不适用的意见。这个过程非常自然，和人类编辑的审阅体验几乎一致。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          更进一步，你也可以在评论中回复 AI 的建议，要求它换一种方式修改或提供更多解释。这种来回对话式的文档修改，比传统的"AI 生成一整篇新文档"要精细得多。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Markdown 到飞书文档的同步</h2>
        <p className="text-muted-foreground leading-relaxed">
          开发团队通常习惯使用 Markdown 编写文档，但分享给非技术团队时需要转换为飞书文档格式。CLI 提供了一条直接的路径：将本地的 Markdown 文件内容推送到飞书文档中，并且能正确处理图片的排列顺序。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          这个能力看似简单，但在实际工作中非常高频。技术文档、产品需求文档、会议记录等内容，经常需要在 Markdown 和飞书文档之间同步。有了 CLI，这个过程可以自动化完成，不再需要手动复制粘贴和调整格式。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">会议录制到 Skill 文档的整合</h2>
        <p className="text-muted-foreground leading-relaxed">
          另一个有趣的用法是将会议录制内容转化为结构化的 Skill 文档。流程大致是：AI 先获取会议录制的转写文本（通过妙记功能），然后分析其中的知识点和操作步骤，最终整理成一份格式规范的文档。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          对于培训类或技术分享类的会议，这个功能特别有价值。一场一小时的会议录制，AI 可以在几分钟内提炼成一份简洁清晰的知识文档，大大降低了知识沉淀的门槛。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">CLI 为什么好用？三个核心原因</h2>
        <h3 className="text-lg font-medium mt-4 mb-2">覆盖面广</h3>
        <p className="text-muted-foreground leading-relaxed">
          飞书 CLI 覆盖了 10 个以上的业务领域，包括云文档、即时通讯、日历、多维表格、任务管理、邮件、知识库、云空间等。这意味着绝大多数日常办公场景都可以通过 CLI 实现自动化。
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">零配置安装</h3>
        <p className="text-muted-foreground leading-relaxed">
          安装和认证流程简化到了极致。npm 全局安装后，只需要一个认证步骤就能开始使用。不需要配置复杂的 API 密钥、不需要创建应用、不需要申请权限，开箱即用。
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">智能错误提示</h3>
        <p className="text-muted-foreground leading-relaxed">
          这一点对 AI 使用体验至关重要。当命令执行出错时，CLI 会返回清晰的错误信息和修复建议。AI 可以根据这些提示自动纠正命令参数，无需人工干预。这种"AI 自我纠错"的能力大大提升了自动化流程的健壮性。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">开源的意义：企业 AI 的确定性选择</h2>
        <p className="text-muted-foreground leading-relaxed">
          飞书 CLI 选择了开源，这对企业用户来说是一个重要信号。开源意味着代码透明、可审计，企业不需要担心数据安全黑箱问题。同时，开源社区可以贡献新的 Skill，不断扩展 CLI 的能力边界。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          从更宏观的角度看，当飞书、企业微信等主流办公平台都向 AI 开放了 CLI 接口，企业在构建智能化工作流时就有了一个稳定可靠的基础设施。这不再是实验性质的尝鲜，而是可以正式纳入生产环境的能力。
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            本文内容基于黄叔的原创文章整理。原文发布于微信公众号，
            <a
              href="https://mp.weixin.qq.com/s/jwOPySDv"
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
