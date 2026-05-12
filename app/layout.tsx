import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "F11汽车养护超级工厂",
  description: "透明、高效、保真的多页面企业官网，覆盖服务项目、门店形象、招商合作、预约到店与联系方式。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
