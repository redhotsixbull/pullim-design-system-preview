"use client";

import {
  Badge,
  Skeleton,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Progress,
  Toaster,
  toast,
  Button,
} from "@pullim/design-system";
import { PreviewSection, PreviewRow } from "@/components/preview-section";

export default function FeedbackPage() {
  return (
    <div>
      <Toaster richColors position="top-right" />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Feedback</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          상태 표시 컴포넌트 — Badge, Skeleton, Avatar, Progress, Toaster
        </p>
      </div>

      {/* Badge */}
      <PreviewSection title="Badge — Variant">
        <PreviewRow>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="blue">Blue</Badge>
          <Badge variant="red">Red</Badge>
          <Badge variant="green">Green</Badge>
          <Badge variant="orange">Orange</Badge>
          <Badge variant="gray">Gray</Badge>
          <Badge variant="darkGray">Dark Gray</Badge>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Badge — 실사용 예시">
        <PreviewRow label="상태 배지">
          <Badge variant="green">게시됨</Badge>
          <Badge variant="orange">검토 중</Badge>
          <Badge variant="gray">임시저장</Badge>
          <Badge variant="red">오류</Badge>
        </PreviewRow>
        <PreviewRow label="과목 배지 (Subject 토큰 사용)">
          {[
            {
              label: "국어",
              bg: "var(--color-subject-korean-badge-bg)",
              color: "var(--color-subject-korean-badge-text)",
            },
            {
              label: "영어",
              bg: "var(--color-subject-english-badge-bg)",
              color: "var(--color-subject-english-badge-text)",
            },
            {
              label: "수학",
              bg: "var(--color-subject-math-badge-bg)",
              color: "var(--color-subject-math-badge-text)",
            },
            {
              label: "사회",
              bg: "var(--color-subject-social-badge-bg)",
              color: "var(--color-subject-social-badge-text)",
            },
            {
              label: "과학",
              bg: "var(--color-subject-science-badge-bg)",
              color: "var(--color-subject-science-badge-text)",
            },
          ].map(({ label, bg, color }) => (
            <span
              key={label}
              className="inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium"
              style={{ backgroundColor: bg, color }}
            >
              {label}
            </span>
          ))}
        </PreviewRow>
      </PreviewSection>

      {/* Avatar */}
      <PreviewSection
        title="Avatar"
        description="사용자 프로필 이미지 + Fallback"
      >
        <PreviewRow label="크기 변형">
          <Avatar className="size-6">
            <AvatarFallback className="text-[8px]">김</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarFallback>박</AvatarFallback>
          </Avatar>
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PreviewRow>
        <PreviewRow label="그룹 아바타">
          <div className="flex -space-x-2">
            {["김", "이", "박", "최", "정"].map((name, i) => (
              <Avatar key={i} className="size-8 border-2 border-white">
                <AvatarFallback className="text-xs">{name}</AvatarFallback>
              </Avatar>
            ))}
            <div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs text-muted-foreground">
              +12
            </div>
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* Progress */}
      <PreviewSection title="Progress" description="진행률 표시">
        <PreviewRow vertical>
          {[10, 35, 60, 80, 100].map((value) => (
            <div key={value} className="flex w-full items-center gap-3">
              <Progress value={value} className="flex-1" />
              <span className="w-10 text-right text-xs font-medium text-muted-foreground">
                {value}%
              </span>
            </div>
          ))}
        </PreviewRow>
        <PreviewRow label="실사용 예시 — 학습 진행률" vertical>
          {[
            { label: "국어", value: 72, color: "bg-[#ef863f]" },
            { label: "영어", value: 45, color: "bg-pullim-500" },
            { label: "수학", value: 88, color: "bg-[#73991e]" },
          ].map(({ label, value, color }) => (
            <div key={label} className="flex w-full items-center gap-3">
              <span className="w-8 text-xs font-medium text-muted-foreground">
                {label}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-full rounded-full transition-all ${color}`}
                  style={{ width: `${value}%` }}
                />
              </div>
              <span className="w-10 text-right text-xs font-medium text-muted-foreground">
                {value}%
              </span>
            </div>
          ))}
        </PreviewRow>
      </PreviewSection>

      {/* Skeleton */}
      <PreviewSection title="Skeleton" description="로딩 중 플레이스홀더">
        <PreviewRow label="기본" vertical>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </PreviewRow>
        <PreviewRow label="카드 스켈레톤">
          <div className="flex w-full gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-1 flex-col gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="flex flex-col gap-1.5 flex-1">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-4/6" />
              </div>
            ))}
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* Toast */}
      <PreviewSection
        title="Toaster (Sonner)"
        description="상단 우측 토스트 알림"
      >
        <PreviewRow>
          <Button variant="outline" onClick={() => toast("기본 알림입니다")}>
            기본
          </Button>
          <Button
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-50"
            onClick={() => toast.success("저장되었습니다")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            className="border-red-200 text-red-700 hover:bg-red-50"
            onClick={() => toast.error("오류가 발생했습니다")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            className="border-yellow-200 text-yellow-700 hover:bg-yellow-50"
            onClick={() => toast.warning("주의가 필요합니다")}
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("파일 업로드", {
                description: "총 3개의 파일이 업로드되었습니다.",
                action: { label: "보기", onClick: () => {} },
              })
            }
          >
            액션 포함
          </Button>
        </PreviewRow>
      </PreviewSection>
    </div>
  );
}
