import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh-CN";
  const baseUrl = process.env.APP_BASE_URL || "http://localhost:7001";
  const canonical = isZh ? `${baseUrl}/privacy` : `${baseUrl}/${lang}/privacy`;

  return {
    title: isZh ? "隐私政策 - 飞书 CLI" : "Privacy Policy - Lark CLI",
    description: isZh
      ? "飞书 CLI（feishucli.net）隐私政策"
      : "Privacy Policy for Lark CLI (feishucli.net)",
    alternates: {
      canonical,
      languages: {
        "zh-CN": `${baseUrl}/privacy`,
        en: `${baseUrl}/en/privacy`,
      },
    },
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
