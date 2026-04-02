import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Feishu CLI",
  description: "Privacy Policy for Feishu CLI (feishucli.net)",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
