import type { Metadata } from "next";

import { KakaoSdk } from "@/components/KakaoSdk";
import "./globals.css";

export const metadata: Metadata = {
  title: "念 Type Test",
  description: "12개의 질문으로 알아보는 헌터헌터 넨 계통 진단",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head />
      <body className="app-shell antialiased">
        <KakaoSdk />
        {children}
      </body>
    </html>
  );
}
