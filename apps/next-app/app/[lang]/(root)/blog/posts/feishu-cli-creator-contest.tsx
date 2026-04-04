export default function FeishuCliCreatorContest({ lang = "zh-CN" }: { lang?: string }) {
  if (lang === "en") {
    return (
        <div className="space-y-6">
          <img src="/images/features/banner.png" alt="Lark CLI Creator Contest" className="w-full rounded-xl border border-border" />

          <p className="text-muted-foreground leading-relaxed">
            Since Lark CLI was open-sourced, creators across the community have been experimenting with inventive ways to use it. To encourage more building, sharing, and real-world practice, we&apos;re launching the Lark CLI Creator Contest. Whether you write code every day or simply love trying new tools, you&apos;re welcome to join and compete for a great set of prizes.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Contest Timeline</h2>
          <div className="space-y-3 my-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg px-3 py-1.5 text-sm font-medium text-primary">
                April 1
              </div>
              <div>
                <p className="font-medium text-foreground">Contest launch</p>
                <p className="text-muted-foreground text-sm">Submissions officially open</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg px-3 py-1.5 text-sm font-medium text-primary">
                April 20
              </div>
              <div>
                <p className="font-medium text-foreground">Submission deadline</p>
                <p className="text-muted-foreground text-sm">All entries must be submitted by this date</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg px-3 py-1.5 text-sm font-medium text-primary">
                April 25-30
              </div>
              <div>
                <p className="font-medium text-foreground">Judging and results</p>
                <p className="text-muted-foreground text-sm">A panel of judges reviews entries and announces the winners</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-3">Tracks</h2>

          <h3 className="text-lg font-medium mt-4 mb-2">Track 1: GitHub Developer Track</h3>
          <p className="text-muted-foreground leading-relaxed">
            This track is designed for developers. To enter, submit a Skill project built with Lark CLI on GitHub. You can create something entirely new that expands what Lark CLI can do, or build an original workflow on top of existing Skills.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Judges will focus on practical value, code quality, documentation, and originality.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-2">Track 2: Social Media Track</h3>
          <p className="text-muted-foreground leading-relaxed">
            This track is open to everyone, including non-developers. To participate, publish a post or video about your experience using Lark CLI on social media platforms such as Twitter and other creator communities. You can share your workflow, lessons learned, use cases, or even mistakes that helped you understand the tool better.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Entries will be evaluated based on content quality, audience impact, and how useful they are to other users.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Prizes</h2>
          <div className="space-y-4 my-4">
            <div className="border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-semibold text-foreground">Best Practice Award</span>
              </div>
              <p className="text-muted-foreground text-sm">A Mac Mini — awarded to the entry with the strongest mix of practical value and innovation</p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-semibold text-foreground">Most Popular Award</span>
              </div>
              <p className="text-muted-foreground text-sm">Anker AI earbuds — awarded to the entry that receives the most community support</p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-semibold text-foreground">Best Reach Award</span>
              </div>
              <p className="text-muted-foreground text-sm">A gift card — awarded to the social media entry with standout distribution and reach</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-3">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
            <li>All submissions must be original and created with Lark CLI</li>
            <li>GitHub track entries must include complete usage documentation and installation instructions</li>
            <li>Social media track entries must be publicly posted and include the required contest hashtag</li>
            <li>You may participate in both tracks at the same time</li>
            <li>Team submissions are welcome, but one team lead must be designated as the main contact</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">Learning Resources</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you&apos;re new to Lark CLI, these resources will help you get up to speed quickly:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
            <li>The Lark CLI GitHub repository: installation guide and API documentation</li>
            <li>Community examples: real-world use cases and code shared by other creators</li>
            <li>Official livestream replays: walkthroughs of core features and product demos</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            During the contest, there will also be online livestream sessions featuring core Lark CLI contributors and early users, giving participants a clearer sense of what the tool can do and what makes a strong submission.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">How to Enter</h2>
          <p className="text-muted-foreground leading-relaxed">
            There&apos;s no separate registration form. For the GitHub track, simply submit your entry via Pull Request. For the social media track, publishing your content with the official hashtag counts as your submission. For detailed instructions and the exact submission format, please visit the contest page.
          </p>

          <div className="bg-muted/30 rounded-lg p-6 my-8">
            <p className="text-foreground font-medium mb-2">Contest details and submission entry</p>
            <p className="text-muted-foreground text-sm">
              For the full rules, judging criteria, and submission process, please refer to the official contest documentation.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Adapted from the official Lark CLI Creator Contest announcement. For full details, see
              <a
                href="https://waytoagi.feishu.cn/wiki/R4S3w8wTTie04nkYiL6c8rxon4d"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors ml-1"
              >
                the original WaytoAGI page
              </a>
              .
            </p>
          </div>
        </div>
    );
  }

  return (
      <div className="space-y-6">
        <img src="/images/features/banner.png" alt="飞书 CLI 创作者大赛" className="w-full rounded-xl border border-border" />

        <p className="text-muted-foreground leading-relaxed">
          飞书 CLI 开源以来，社区涌现出大量创新用法。为了鼓励更多人参与探索和分享，我们正式启动飞书 CLI 创作者大赛。无论你是开发者还是普通用户，都有机会参与并赢取丰厚奖品。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">大赛时间线</h2>
        <div className="space-y-3 my-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-primary/10 rounded-lg px-3 py-1.5 text-sm font-medium text-primary">
              4月1日
            </div>
            <div>
              <p className="font-medium text-foreground">大赛启动</p>
              <p className="text-muted-foreground text-sm">正式开放报名和作品提交通道</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-primary/10 rounded-lg px-3 py-1.5 text-sm font-medium text-primary">
              4月20日
            </div>
            <div>
              <p className="font-medium text-foreground">作品截止</p>
              <p className="text-muted-foreground text-sm">所有参赛作品须在此日期前提交</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-primary/10 rounded-lg px-3 py-1.5 text-sm font-medium text-primary">
              4月25-30日
            </div>
            <div>
              <p className="font-medium text-foreground">评审与公布</p>
              <p className="text-muted-foreground text-sm">专家评审团评选，最终结果公布</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">参赛赛道</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">赛道一：GitHub 开发者赛道</h3>
        <p className="text-muted-foreground leading-relaxed">
          面向开发者群体。参赛方式是在 GitHub 上提交基于飞书 CLI 开发的 Skill 作品。你可以创建全新的 Skill 来扩展飞书 CLI 的能力边界，也可以基于现有 Skill 构建创新的自动化工作流。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          评审将重点关注：作品的实用性、代码质量、文档完整性以及创新程度。
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">赛道二：社交媒体赛道</h3>
        <p className="text-muted-foreground leading-relaxed">
          面向所有用户，不需要编程背景。参赛方式是在社交媒体平台（微信公众号、小红书、Twitter 等）发布关于飞书 CLI 使用体验的文章或视频。分享你的使用场景、心得体会、踩坑经验都可以。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          评审将综合考虑：内容质量、传播影响力以及对其他用户的参考价值。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">奖品设置</h2>
        <div className="space-y-4 my-4">
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-semibold text-foreground">最佳实践奖</span>
            </div>
            <p className="text-muted-foreground text-sm">Mac Mini 一台 — 颁发给最具实用价值和创新性的作品</p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-semibold text-foreground">最受欢迎奖</span>
            </div>
            <p className="text-muted-foreground text-sm">Anker AI 录音耳机 — 颁发给社区投票最高的作品</p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-semibold text-foreground">传播力奖</span>
            </div>
            <p className="text-muted-foreground text-sm">京东购物卡 — 颁发给传播效果突出的社交媒体内容</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">参赛要求</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
          <li>作品必须为原创内容，基于飞书 CLI 工具进行创作</li>
          <li>GitHub 赛道的作品需要包含完整的使用文档和安装说明</li>
          <li>社交媒体赛道的作品需要公开发布，且注明参赛标签</li>
          <li>每位参赛者可以同时参与两个赛道</li>
          <li>团队参赛也欢迎，但需指定一位队长作为联系人</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">学习资源</h2>
        <p className="text-muted-foreground leading-relaxed">
          如果你还不熟悉飞书 CLI，以下资源可以帮助你快速上手：
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-2">
          <li>飞书 CLI GitHub 仓库：完整的安装指南和 API 文档</li>
          <li>社区案例集：其他创作者分享的使用场景和代码示例</li>
          <li>官方直播回放：飞书 CLI 核心功能讲解和演示</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          我们还将在比赛期间举办线上直播活动，邀请飞书 CLI 核心开发者和早期用户分享经验，帮助参赛者更好地理解工具能力和创作方向。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">如何报名</h2>
        <p className="text-muted-foreground leading-relaxed">
          大赛无需单独报名。GitHub 赛道的参赛者直接提交 Pull Request 即可；社交媒体赛道的参赛者在发布内容时带上指定话题标签即视为参赛。具体标签和提交方式请查看大赛详情页。
        </p>

        <div className="bg-muted/30 rounded-lg p-6 my-8">
          <p className="text-foreground font-medium mb-2">大赛详情与报名入口</p>
          <p className="text-muted-foreground text-sm">
            完整的比赛规则、评审标准和提交方式，请查看大赛官方文档。
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            本文内容来源于飞书 CLI 创作者大赛官方公告。详细信息请参阅
            <a
              href="https://waytoagi.feishu.cn/wiki/R4S3w8wTTie04nkYiL6c8rxon4d"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors ml-1"
            >
              WaytoAGI 知识库原文
            </a>
            。
          </p>
        </div>
      </div>
  );
}
