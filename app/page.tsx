import { Badge } from "@pullim/design-system";
import Link from "next/link";
import {
  Type,
  Palette,
  MousePointerClick,
  LayoutGrid,
  Layers,
  Bell,
  Sparkles,
  Shapes,
  ArrowRight,
} from "lucide-react";

const pages = [
  {
    href: "/typography",
    icon: Type,
    title: "Typography",
    desc: "Heading, Text, Lead, Muted, Code, Blockquote",
  },
  {
    href: "/colors",
    icon: Palette,
    title: "Colors",
    desc: "Brand, Gray, Subject, Status 토큰 시각화",
  },
  {
    href: "/inputs",
    icon: MousePointerClick,
    title: "Inputs",
    desc: "Button, Input, Select, Checkbox, Switch ...",
  },
  {
    href: "/layout",
    icon: LayoutGrid,
    title: "Layout",
    desc: "Card, Separator, Accordion, Tabs",
  },
  {
    href: "/overlays",
    icon: Layers,
    title: "Overlays",
    desc: "Dialog, Sheet, Popover, Tooltip, DropdownMenu",
  },
  {
    href: "/animations",
    icon: Sparkles,
    title: "Motion",
    desc: "Pullim 래퍼, variants, AnimatePresence",
  },
  {
    href: "/feedback",
    icon: Bell,
    title: "Feedback",
    desc: "Badge, Skeleton, Avatar, Progress, Toast",
  },
  {
    href: "/icons",
    icon: Shapes,
    title: "Icons",
    desc: "@pullim/design-system/icons 전체 미리보기",
  },
];

const brandColors = [
  { name: "pullim-50", bg: "#f4faff" },
  { name: "pullim-100", bg: "#d1e8ff" },
  { name: "pullim-200", bg: "#9fc8ff" },
  { name: "pullim-300", bg: "#5aa9ff" },
  { name: "pullim-400", bg: "#1f89f5" },
  { name: "pullim-500", bg: "#0362da", label: "base" },
  { name: "pullim-600", bg: "#004bb9" },
  { name: "pullim-700", bg: "#00389e" },
  { name: "pullim-800", bg: "#002878" },
  { name: "pullim-900", bg: "#001b52" },
  { name: "pullim-1000", bg: "#0d1a1f" },
];

const subjectColors = [
  { name: "korean", bg: "#ef863f", label: "국어" },
  { name: "english", bg: "#0362da", label: "영어" },
  { name: "math", bg: "#e6ff4c", label: "수학", dark: true },
  { name: "social", bg: "#fbc3b4", label: "사회", dark: true },
  { name: "science", bg: "#6fc1ba", label: "과학" },
];

export default function OverviewPage() {
  return (
    <div>
      {/* 헤더 */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2">
          <div className="size-8 rounded-lg bg-pullim-500" />
          <h1 className="text-2xl font-bold text-foreground">Pullim Design System</h1>
          <Badge variant="blue">v0.1.0</Badge>
        </div>
        <p className="text-muted-foreground">
          shadcn/ui 기반 · Tailwind v4 · OKLCH 컬러 토큰 · 24개 컴포넌트
        </p>
      </div>

      {/* 카테고리 카드 그리드 */}
      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Components
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {pages.map(({ href, icon: Icon, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:border-pullim-300 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-8 items-center justify-center rounded-md bg-pullim-50">
                  <Icon className="size-4 text-pullim-600" />
                </div>
                <ArrowRight className="size-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-pullim-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Blue 팔레트 */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Brand Blue
        </h2>
        <div className="flex overflow-hidden rounded-xl border border-border">
          {brandColors.map(({ name, bg, label }) => (
            <div
              key={name}
              className="group relative flex-1"
              style={{ backgroundColor: bg }}
            >
              <div className="h-14" />
              <div className="absolute bottom-0 left-0 right-0 hidden bg-black/60 px-1.5 py-1 group-hover:block">
                <p className="text-center text-[9px] font-mono text-white leading-tight">
                  {name}
                  {label && <span className="ml-0.5 text-white/70">({label})</span>}
                </p>
                <p className="text-center text-[9px] font-mono text-white/70">{bg}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">각 색상에 hover하면 토큰명을 확인할 수 있습니다.</p>
      </section>

      {/* Subject 색상 */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Subject Colors
        </h2>
        <div className="flex gap-3">
          {subjectColors.map(({ name, bg, label, dark }) => (
            <div key={name} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="h-12 w-full rounded-lg border border-black/5"
                style={{ backgroundColor: bg }}
              />
              <div className="text-center">
                <p className="text-xs font-medium text-foreground/80">{label}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
