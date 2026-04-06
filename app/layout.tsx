import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Pullim Design System Preview",
  description: "UI 컴포넌트 프리뷰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 다크모드 FOUC 방지: 렌더 전에 클래스를 먼저 적용 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('pullim-theme');if(t==='dark')document.documentElement.classList.add('dark');})()`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <Sidebar />
          <main className="ml-56 min-h-screen">
            <div className="mx-auto max-w-4xl px-8 py-8">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
