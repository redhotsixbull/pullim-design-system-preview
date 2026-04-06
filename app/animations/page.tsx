"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";
import {
  AnimatePresence,
  Button,
  motion,
  pullimMotionPresets,
  PullimFadeIn,
  PullimFadeSlideUp,
  PullimFadeSlideX,
  PullimPulse,
  PullimScaleIn,
  PullimStaggerItem,
  PullimStaggerRoot,
} from "@pullim/design-system";
import { PreviewSection, PreviewRow } from "@/components/preview-section";

type ReplayId =
  | "fadeIn"
  | "fadeSlide"
  | "fadeSlideX"
  | "pulse"
  | "stagger"
  | "inView"
  | "preset";

const initialReplays: Record<ReplayId, number> = {
  fadeIn: 0,
  fadeSlide: 0,
  fadeSlideX: 0,
  pulse: 0,
  stagger: 0,
  inView: 0,
  preset: 0,
};

function ReplayButton({
  onReplay,
  label = "다시 재생",
  disabled,
}: {
  onReplay: () => void;
  label?: string;
  disabled?: boolean;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="gap-1.5"
      disabled={disabled}
      onClick={onReplay}
    >
      <RotateCcw className="size-3.5" aria-hidden />
      {label}
    </Button>
  );
}

export default function AnimationsPage() {
  const [presenceOn, setPresenceOn] = React.useState(true);
  const [presenceReplay, setPresenceReplay] = React.useState(0);
  const [replays, setReplays] = React.useState(initialReplays);

  const bump = React.useCallback((id: ReplayId) => {
    setReplays((s) => ({ ...s, [id]: s[id] + 1 }));
  }, []);

  const bumpAll = React.useCallback(() => {
    setReplays((s) => {
      const next = { ...s };
      (Object.keys(next) as ReplayId[]).forEach((k) => {
        next[k] += 1;
      });
      return next;
    });
    setPresenceReplay((n) => n + 1);
  }, []);

  const replayPresenceEnter = React.useCallback(() => {
    setPresenceReplay((n) => n + 1);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          Motion & Animation
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            motion/react
          </code>{" "}
          re-export와 Pullim 래퍼·variants.
          <code className="ml-1 rounded bg-muted px-1 py-0.5 text-xs">
            tw-animate-css
          </code>{" "}
          기반 UI 전환은 Dialog 등 오버레이 페이지를 참고하세요.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          아래{" "}
          <strong className="font-medium text-foreground">다시 재생</strong>은
          해당 블록을 리마운트해서 mount / inView 애니를 처음부터 다시 돌립니다.
        </p>
        <div className="mt-3">
          <ReplayButton onReplay={bumpAll} label="모든 데모 다시 재생" />
        </div>
      </div>

      <PreviewSection
        title="PullimFadeIn"
        description="opacity만 — 오버레이·토스트 배경 등 이동 없이 등장"
      >
        <PreviewRow vertical>
          <ReplayButton onReplay={() => bump("fadeIn")} />
          <div key={replays.fadeIn}>
            <PullimFadeIn className="rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm">
              mount · fadeIn
            </PullimFadeIn>
          </div>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection
        title="PullimFadeSlideUp / PullimScaleIn"
        description="아래에서 올라오며 페이드 · 살짝 확대되며 등장"
      >
        <PreviewRow vertical>
          <ReplayButton onReplay={() => bump("fadeSlide")} />
          <div
            key={replays.fadeSlide}
            className="flex flex-wrap items-center gap-3"
          >
            <PullimFadeSlideUp
              className="rounded-lg border border-pullim-200 bg-pullim-50 px-4 py-3 text-sm text-pullim-900"
              options={{ duration: 0.35, y: 16 }}
            >
              fadeSlideUp (y: 16)
            </PullimFadeSlideUp>
            <PullimScaleIn
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm"
              options={{ scaleFrom: 0.88 }}
            >
              scaleIn
            </PullimScaleIn>
          </div>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection
        title="PullimFadeSlideX"
        description="좌우 슬라이드 + 페이드 — direction: left(기본) / right"
      >
        <PreviewRow vertical>
          <ReplayButton onReplay={() => bump("fadeSlideX")} />
          <div
            key={replays.fadeSlideX}
            className="flex flex-wrap items-center gap-3"
          >
            <PullimFadeSlideX className="rounded-md border border-border px-3 py-2 text-xs">
              ← 왼쪽에서
            </PullimFadeSlideX>
            <PullimFadeSlideX
              options={{ direction: "right" }}
              className="rounded-md border border-border px-3 py-2 text-xs"
            >
              오른쪽에서 →
            </PullimFadeSlideX>
          </div>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection
        title="PullimPulse"
        description="initial → animate 루프 — 강조·로딩 힌트 (재생 시 펄스가 처음부터)"
      >
        <PreviewRow vertical>
          <ReplayButton onReplay={() => bump("pulse")} />
          <div
            key={replays.pulse}
            className="flex flex-wrap items-center gap-3"
          >
            <PullimPulse className="inline-flex rounded-full bg-pullim-500 px-3 py-1 text-xs font-medium text-white">
              pulse
            </PullimPulse>
            <PullimPulse
              options={{ duration: 1, repeat: Infinity }}
              className="size-10 rounded-full bg-muted"
            />
          </div>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection
        title="PullimStaggerRoot + PullimStaggerItem"
        description="리스트·그리드 순차 등장 — 루트에 staggerContainer, 자식에 staggerItem"
      >
        <PreviewRow vertical>
          <ReplayButton onReplay={() => bump("stagger")} />
          <div key={replays.stagger}>
            <PullimStaggerRoot
              className="flex flex-wrap gap-2"
              options={{ staggerChildren: 0.18, delayChildren: 0.06 }}
            >
              {["첫 번째", "두 번째", "세 번째"].map((label) => (
                <PullimStaggerItem
                  key={label}
                  className="rounded-lg border border-border bg-card px-4 py-2 text-sm shadow-sm"
                >
                  {label}
                </PullimStaggerItem>
              ))}
            </PullimStaggerRoot>
          </div>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection
        title='when="inView"'
        description="뷰포트 진입 시 한 번 재생 (viewport once 기본) — 재생 버튼으로 리셋 후 다시 관찰"
      >
        <p className="mb-3 text-xs text-muted-foreground">
          스크롤 영역 아래 카드는 inView일 때 등장합니다.{" "}
          <strong className="text-foreground">다시 재생</strong>을 누르면 요소가
          새로 마운트되어 뷰 안에 있어도 애니가 다시 실행됩니다.
        </p>
        <div className="flex min-h-[28vh] items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
          스크롤 영역
        </div>
        <PreviewRow vertical>
          <ReplayButton onReplay={() => bump("inView")} />
          <div key={replays.inView}>
            <PullimFadeSlideUp
              when="inView"
              className="w-full rounded-xl border border-border bg-card p-6 text-center text-sm shadow-sm"
              options={{ y: 24, duration: 0.45 }}
            >
              inView 트리거로 등장한 블록
            </PullimFadeSlideUp>
          </div>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection
        title="motion.div + pullimMotionPresets"
        description="프리셋 variants를 그대로 넘겨 커스텀 레이아웃에 적용"
      >
        <PreviewRow vertical>
          <ReplayButton onReplay={() => bump("preset")} />
          <div key={replays.preset}>
            <motion.div
              className="rounded-lg border border-border px-4 py-3 text-sm"
              variants={pullimMotionPresets.fadeSlideXFromRight}
              initial="hidden"
              animate="show"
            >
              presets.fadeSlideXFromRight
            </motion.div>
          </div>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection
        title="AnimatePresence + motion"
        description="조건부 마운트 시 exit — 라우트/모달 전환 패턴의 기본"
      >
        <PreviewRow vertical>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPresenceOn((v) => !v)}
            >
              {presenceOn ? "숨기기" : "보이기"}
            </Button>
            <ReplayButton
              onReplay={replayPresenceEnter}
              label="보이는 상태에서 입장만 다시"
              disabled={!presenceOn}
            />
          </div>
          <div className="flex min-h-18 items-center justify-center">
            <AnimatePresence mode="wait">
              {presenceOn ? (
                <motion.div
                  key={`demo-${presenceReplay}`}
                  className="rounded-lg bg-pullim-500 px-5 py-2.5 text-sm font-medium text-white shadow-md"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  AnimatePresence 안의 블록
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </PreviewRow>
      </PreviewSection>
    </div>
  );
}
