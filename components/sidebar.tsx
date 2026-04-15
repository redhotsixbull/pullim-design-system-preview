"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Type,
  Palette,
  MousePointerClick,
  LayoutGrid,
  Layers,
  Bell,
  Sparkles,
  Shapes,
  FileQuestion,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "./theme-provider";

const navItems = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/typography", label: "Typography", icon: Type },
  { href: "/colors", label: "Colors", icon: Palette },
  { href: "/inputs", label: "Inputs", icon: MousePointerClick },
  { href: "/layout", label: "Layout", icon: LayoutGrid },
  { href: "/overlays", label: "Overlays", icon: Layers },
  { href: "/animations", label: "Motion", icon: Sparkles },
  { href: "/feedback", label: "Feedback", icon: Bell },
  { href: "/icons", label: "Icons", icon: Shapes },
  { href: "/questions", label: "Questions", icon: FileQuestion },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-56 flex-col border-r border-border bg-sidebar">
      {/* 로고 */}
      <div className="flex h-14 items-center gap-2.5 border-b border-border px-5">
        <div className="size-6 rounded-md bg-pullim-500" />
        <span className="text-sm font-semibold text-foreground">Design System</span>
      </div>

      {/* 네비게이션 */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3">
        <p className="mb-1 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Components
        </p>
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={[
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-pullim-50 text-pullim-700 font-medium"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              ].join(" ")}
            >
              <Icon
                className={[
                  "size-4 shrink-0",
                  isActive ? "text-pullim-500" : "text-muted-foreground",
                ].join(" ")}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* 테마 토글 + 버전 */}
      <div className="border-t border-border p-3 space-y-2">
        {/* 테마 토글 버튼 */}
        <button
          onClick={toggleTheme}
          className={[
            "w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
            "border border-border",
            isDark
              ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200",
          ].join(" ")}
          aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
        >
          <div className="flex items-center gap-2">
            {isDark ? (
              <Moon className="size-4 text-pullim-400" />
            ) : (
              <Sun className="size-4 text-pullim-500" />
            )}
            <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
          </div>
          {/* 토글 슬라이더 */}
          <div
            className={[
              "relative h-5 w-9 rounded-full transition-colors",
              isDark ? "bg-pullim-500" : "bg-gray-300",
            ].join(" ")}
          >
            <div
              className={[
                "absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform",
                isDark ? "translate-x-4" : "translate-x-0.5",
              ].join(" ")}
            />
          </div>
        </button>

        <p className="px-1 text-xs text-muted-foreground">
          @pullim/design-system v0.1.0
        </p>
      </div>
    </aside>
  );
}
