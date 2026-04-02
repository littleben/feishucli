import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Feishu CLI",
  description: "Terms of Service for Feishu CLI (feishucli.net)",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
