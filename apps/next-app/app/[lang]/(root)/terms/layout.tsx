import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh-CN";
  const baseUrl = process.env.APP_BASE_URL || "http://localhost:7001";
  const canonical = isZh ? `${baseUrl}/terms` : `${baseUrl}/${lang}/terms`;

  return {
    title: isZh ? "用户协议 - 飞书 CLI" : "Terms of Service - Lark CLI",
    description: isZh
      ? "飞书 CLI（feishucli.net）用户协议"
      : "Terms of Service for Lark CLI (feishucli.net)",
    alternates: {
      canonical,
      languages: {
        "zh-CN": `${baseUrl}/terms`,
        en: `${baseUrl}/en/terms`,
      },
    },
  };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
