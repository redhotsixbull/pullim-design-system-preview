"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import * as PullimIcons from "@pullim/design-system/icons";
import { Input, Toaster, toast } from "@pullim/design-system";
import type { LucideIcon } from "@pullim/design-system/icons";
import { Search } from "lucide-react";

const NON_ICON_EXPORTS = new Set(["resolvePullimIcon", "wrapLucideIcon"]);

function isIconExport(name: string, value: unknown): value is LucideIcon {
  if (NON_ICON_EXPORTS.has(name) || value == null) return false;
  return typeof value === "function" || typeof value === "object";
}

function getAllIcons(): { name: string; Icon: LucideIcon }[] {
  return Object.entries(PullimIcons)
    .filter(([name, v]) => isIconExport(name, v))
    .map(([name, Icon]) => ({ name, Icon: Icon as LucideIcon }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

const IMPORT_LINE = (name: string) =>
  `import { ${name} } from "@pullim/design-system/icons"`;

export default function IconsPage() {
  const [query, setQuery] = useState("");
  const allIcons = useMemo(() => getAllIcons(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allIcons;
    return allIcons.filter(({ name }) => name.toLowerCase().includes(q));
  }, [allIcons, query]);

  async function copyImport(name: string) {
    try {
      await navigator.clipboard.writeText(IMPORT_LINE(name));
      toast.success("복사됨", { description: IMPORT_LINE(name) });
    } catch {
      toast.error("클립보드 복사에 실패했습니다.");
    }
  }

  return (
    <div>
      <Toaster richColors position="top-right" />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Icons</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
            @pullim/design-system/icons
          </code>
          에서 export되는 아이콘 — 카드를 클릭하면 import 문이 복사됩니다.
        </p>
      </div>

      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="이름으로 검색…"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          className="pl-9"
          aria-label="아이콘 검색"
        />
      </div>

      <p className="mb-4 text-xs text-muted-foreground">
        총 {filtered.length}
        {query.trim() ? ` / 전체 ${allIcons.length}` : ""}개
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {filtered.map(({ name, Icon }) => (
          <button
            key={name}
            type="button"
            onClick={() => void copyImport(name)}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-pullim-300 hover:bg-pullim-50/50 dark:hover:bg-pullim-950/20"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-muted/60">
              <Icon className="size-5  text-pullim-500" aria-hidden />
            </span>
            <span
              className="w-full truncate font-mono text-[11px] text-muted-foreground"
              title={name}
            >
              {name}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          검색 결과가 없습니다.
        </p>
      )}
    </div>
  );
}
