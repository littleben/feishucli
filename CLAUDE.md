# TinyShip 模板开发指南

**工作目录**: `./templates/tinyship/`

---

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev:next    # Next.js (React) - 端口 7001
pnpm dev:nuxt    # Nuxt.js (Vue)
pnpm dev:docs    # 文档站点

# 构建
pnpm build:next
pnpm build:nuxt
pnpm build:docs

# 数据库操作
pnpm db:push     # 推送 schema 到数据库
pnpm db:migrate  # 运行迁移
pnpm db:studio   # 打开 Drizzle Studio
pnpm db:seed     # 填充测试数据
```

---

## 📁 项目结构

```
tinyship/
├── apps/                    # 应用目录
│   ├── next-app/           # Next.js 15 (React) - 主应用
│   ├── nuxt-app/           # Nuxt.js 3 (Vue) - 备选
│   └── docs-app/           # Fumadocs 文档站点
├── libs/                    # 共享库 (核心!)
│   ├── ai/                 # AI 服务集成
│   ├── auth/               # Better-Auth 认证
│   ├── database/           # Drizzle ORM + PostgreSQL
│   ├── email/              # 邮件服务 (Resend/SendGrid)
│   ├── i18n/               # 国际化
│   ├── payment/            # 支付 (Stripe/微信/Creem)
│   ├── permissions/        # RBAC 权限 (CASL)
│   ├── sms/                # 短信服务 (阿里云/Twilio)
│   ├── storage/            # 存储 (OSS/S3/R2)
│   ├── ui/                 # 共享 UI 组件
│   └── validators/         # Zod 数据验证
├── config.ts               # 全局配置中心 (重要!)
├── env.example             # 环境变量模板
└── docs/                   # 项目文档
```

---

## ⚙️ 核心配置

### 配置文件: `config.ts`

所有配置集中在 `config.ts`，包括：
- `config.app` - 应用名称、URL、主题、i18n
- `config.auth` - 认证配置、OAuth 提供商
- `config.payment` - 支付配置、订阅计划
- `config.database` - 数据库连接
- `config.email` / `config.sms` - 通讯服务
- `config.storage` - 存储服务
- `config.ai` - AI 提供商

### 环境变量

必需的环境变量：
```env
# 核心 (必需)
APP_BASE_URL=http://localhost:7001
DATABASE_URL="postgresql://user:pass@localhost:5432/tinyship"
BETTER_AUTH_SECRET="32位以上密钥"
BETTER_AUTH_URL="http://localhost:7001"

# OAuth (可选)
GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET

# 支付 (按需)
STRIPE_PUBLIC_KEY / STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET
```

---

## 🔐 认证系统 (Better-Auth)

### 关键原则

**直接使用 Better-Auth hooks，不要封装！**

```typescript
// ✅ 正确
import { authClientReact } from '@libs/auth/authClient'
const { data: session, isPending } = authClientReact.useSession()

// ❌ 错误 - 不要创建 wrapper
export const useAuth = () => { ... }
```

### 认证方式

```typescript
// 邮箱密码
await authClient.signIn.email({ email, password })
await authClient.signUp.email({ email, password, name })

// 社交登录
await authClient.signIn.social({ provider: 'github' })
await authClient.signIn.social({ provider: 'google' })
await authClient.signIn.social({ provider: 'wechat' })

// 手机号
await authClient.phoneNumber.sendOtp({ phoneNumber })
await authClient.phoneNumber.verify({ phoneNumber, otp })
```

### 文件位置
- 服务端配置: `libs/auth/auth.ts`
- 客户端: `libs/auth/authClient.ts`
- 微信插件: `libs/auth/plugins/wechat.ts`

---

## 💳 支付系统

### 支持的提供商
- **Stripe** - 国际支付 (订阅 + 一次性)
- **微信支付** - 中国市场
- **Creem** - 备选方案

### 订阅计划配置

在 `config.ts` 的 `config.payment.plans` 中定义：

```typescript
plans: {
  monthly: {
    provider: 'stripe',
    id: 'monthly',
    amount: 10,
    currency: 'USD',
    duration: { months: 1, type: 'recurring' },
    stripePriceId: 'price_xxx',
    i18n: { en: {...}, 'zh-CN': {...} }
  }
}
```

---

## 🗄️ 数据库 (Drizzle ORM)

### Schema 位置
`libs/database/schema.ts`

### 核心表
- `user` - 用户信息
- `account` - OAuth 账户
- `session` - 会话管理
- `verification` - 验证码
- `subscription` - 订阅信息
- `order` - 支付订单

### 使用示例

```typescript
import { db, user, subscription } from "@libs/database"
import { eq } from "drizzle-orm"

// 查询
const users = await db.select().from(user).where(eq(user.email, "x@x.com"))

// 插入
await db.insert(subscription).values({
  id: "sub_" + crypto.randomUUID(),
  userId: "xxx",
  planId: "monthly",
  status: "active"
})
```

---

## 🌐 国际化 (i18n)

### 配置
```typescript
config.app.i18n = {
  defaultLocale: 'zh-CN',
  locales: ['en', 'zh-CN'],
  cookieKey: 'NEXT_LOCALE',
  autoDetect: false
}
```

### 翻译文件位置
- Next.js: `apps/next-app/messages/`
- Nuxt.js: `apps/nuxt-app/locales/`
- 支付计划: 直接在 `config.ts` 的 `i18n` 字段

---

## 🎨 主题系统

### 可用主题
- `default`
- `claude` (默认)
- `cosmic-night`
- `modern-minimal`
- `ocean-breeze`

### 配置
```typescript
config.app.theme = {
  defaultTheme: 'light',
  defaultColorScheme: 'claude',
  storageKey: 'tinyship-ui-theme'
}
```

---

## 📦 存储服务

### 支持的提供商
- 阿里云 OSS
- AWS S3
- Cloudflare R2

### 配置
```env
STORAGE_PROVIDER="oss"  # oss | s3 | r2
```

---

## 🤖 AI 集成

### 支持的提供商
- 通义千问 (Qwen) - 默认
- DeepSeek
- OpenAI

### 配置
```env
AI_PROVIDER="qwen"
QWEN_API_KEY="xxx"
QWEN_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
```

---

## 📋 开发规范

### 导入路径
使用 `@libs/` 别名导入共享库：
```typescript
import { db } from "@libs/database"
import { authClientReact } from "@libs/auth/authClient"
import { config } from "@/config"
```

### 类型安全
- 使用 Zod 进行运行时验证
- Schema 定义在 `libs/validators/`
- 自动推断 TypeScript 类型

### 代码位置
- 业务逻辑 → `apps/next-app/` 或 `apps/nuxt-app/`
- 共享代码 → `libs/`
- 全局配置 → `config.ts`

---

## 🚢 部署

### Vercel (推荐 Next.js)
```bash
pnpm build:next
# 部署 apps/next-app
```

### Docker
```bash
docker-compose up -d
```

### 环境变量检查
- 开发环境: 缺失变量会使用默认值或警告
- 生产环境: 必需变量缺失会抛出错误

---

## 📚 参考文档

- [Better-Auth 文档](https://www.better-auth.com/)
- [Drizzle ORM 文档](https://orm.drizzle.team/)
- [Fumadocs 文档](https://fumadocs.dev/)
- [shadcn/ui 组件](https://ui.shadcn.com/)
- 项目内文档: `docs/user-guide/`
- 各模块 README: `libs/*/README.md`

---

## ⚠️ 注意事项

1. **Node 版本**: 需要 Node.js >= 22.0.0
2. **包管理器**: 仅支持 pnpm (9.4.0+)
3. **数据库**: PostgreSQL 必需
4. **认证密钥**: `BETTER_AUTH_SECRET` 至少 32 字符
5. **Webhook**: 支付 webhook 需要公网地址 (开发时用内网穿透)
