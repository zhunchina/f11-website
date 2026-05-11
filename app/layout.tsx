import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "F11汽车养护超级工厂",
  description: "透明、高效、保真的汽车养护超级工厂官网首页。",
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
