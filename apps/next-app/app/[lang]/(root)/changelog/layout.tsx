import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog - Feishu CLI",
  description: "Release notes and changelog for Feishu CLI (Lark CLI)",
};

export default function ChangelogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
