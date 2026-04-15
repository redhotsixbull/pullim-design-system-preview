"use client";

import { useState } from "react";
import {
  BlockRenderer,
  QuestionRenderer,
  SetQuestionRenderer,
  OptionRenderer,
  DEFAULT_RENDER_CONFIG,
  type RenderVariant,
  type ComponentBlock,
  type OptionBlock,
  type Question,
  type SetQuestion,
} from "@pullim/design-system/question";
import { PreviewSection, PreviewRow } from "@/components/preview-section";

// ══════════════════════════════════════════
// Mock Data
// ══════════════════════════════════════════

const textBasicMock: ComponentBlock = {
  type: "text-basic",
  text: "다음 글을 읽고 물음에 답하시오.",
};

const textWithBoxMock: ComponentBlock = {
  type: "text-with-box",
  text: "공정거래위원회는 시장 경쟁을 촉진하고 소비자 주권을 확립하기 위해, 사업자의 불공정한 거래 행위와 부당한 광고를 규제한다.",
};

const imageSingleMock: ComponentBlock = {
  type: "image-single",
  imageUrl: "https://placehold.co/400x200/e2e8f0/64748b?text=Image+Single",
  alt: "Sample image",
};

const passageBlockGroupMock: ComponentBlock = {
  type: "passage-block-group",
  blocks: [
    { label: "(가)", text: "전통적인 윤리학의 주요 주제는 도덕 판단의 정당화이다." },
    { label: "(나)", text: "논리학에서 제기된 의문이 윤리학의 특정 전제에 대한 비판이 되기도 한다." },
  ],
};

const viewBoxMock: ComponentBlock = {
  type: "view-box",
  label: "보기",
  text: "ㄱ. 공리주의는 결과를 중시한다.\nㄴ. 의무론은 동기를 중시한다.\nㄷ. 덕 윤리학은 성품을 중시한다.",
};

const bulletListMock: ComponentBlock = {
  type: "bullet-list",
  blocks: [
    { label: "ㄱ.", text: "공리주의는 결과를 중시한다." },
    { label: "ㄴ.", text: "의무론은 동기를 중시한다." },
    { label: "ㄷ.", text: "덕 윤리학은 성품을 중시한다." },
  ],
};

const vocabNoteMock: ComponentBlock = {
  type: "vocab-note",
  notes: [
    { term: "rumble", definition: "우르르 울리다" },
    { term: "endeavor", definition: "노력, 시도" },
  ],
};

const annotatedParagraphMock: ComponentBlock = {
  type: "annotated-paragraph",
  label: "A",
  text: "'P이면 Q이다. P이다. 따라서 Q이다.'는 논증을 <u>전건 긍정식</u>이라 한다.",
};

const noteStylePassageMock: ComponentBlock = {
  type: "note-style-passage",
  text: "동물이 그린 그림의 판매에 대한 궁금증이 생겼다. 동물의 행동 사례를 열거하여 소개한 글에서 정보를 얻을 수 있었다.",
};

const paperStylePassageMock: ComponentBlock = {
  type: "paper-style-passage",
  text: "동물이 그린 그림의 판매에 대한 궁금증이 생겼다. '동물의 그림도 예술 상품이 될 수 있다'라는 정보를 얻을 수 있었다.",
};

const barChartMock: ComponentBlock = {
  type: "bar",
  title: "GDP 대비 의료비 지출",
  description: "OECD 주요국 비교",
  xAxis: { label: "국가", showLabel: true },
  yAxis: { label: "(%)", showLabel: true },
  labels: ["US", "Switzerland", "France", "Belgium", "UK"],
  series: [{ data: [16.9, 12.2, 11.2, 10.4, 9.8] }],
  options: { showDataLabel: true, dataLabelPosition: "outside" },
};

const barGroupedMock: ComponentBlock = {
  type: "bar-grouped",
  title: "직업별 종사자 수",
  description: "연도별 비교",
  xAxis: { label: "직업", showLabel: true },
  yAxis: { label: "명", showLabel: true },
  labels: ["Director", "Writer", "Editor"],
  series: [
    { label: "2020", data: [16, 12, 18] },
    { label: "2021", data: [12, 16, 21] },
  ],
  options: { showDataLabel: false },
};

const lineChartMock: ComponentBlock = {
  type: "line",
  title: "Percent of U.S. Households with Pets",
  description: null,
  xAxis: { label: "Year", showLabel: true },
  yAxis: { label: "(%)", showLabel: true },
  labels: ["1988", "2008", "2013", "2015", "2017", "2022"],
  series: [{ label: "Percent", data: [56, 62, 66, 63, 65, 63] }],
  options: { showDataLabel: false },
};

const pieChartMock: ComponentBlock = {
  type: "pie",
  title: "OECD 석유 수요 비중",
  description: "2020년 부문별",
  labels: ["Road", "Petrochem", "Industry", "Residential", "Aviation"],
  series: [{ label: "석유 수요", data: [50, 25, 12.5, 10, 2.5] }],
  options: { showDataLabel: true, displayValueType: "percentage" as const },
};

const tableBasicMock: ComponentBlock = {
  type: "table-basic",
  title: "College Enrollment Rates",
  unit: "%",
  description: "Note: Rounded figures",
  cells: [
    { row: 0, col: 0, value: "Race" },
    { row: 0, col: 1, value: "2010" },
    { row: 0, col: 2, value: "2021" },
    { row: 1, col: 0, value: "White" },
    { row: 1, col: 1, value: "42%" },
    { row: 1, col: 2, value: "40%" },
    { row: 2, col: 0, value: "Black" },
    { row: 2, col: 1, value: "36%" },
    { row: 2, col: 2, value: "28%" },
  ],
};

const splitBlockMock: ComponentBlock = {
  type: "split-block",
  left: [textBasicMock],
  right: [tableBasicMock],
};

const compositeMock: ComponentBlock = {
  type: "composite",
  label: "보기",
  blocks: [textBasicMock, bulletListMock],
};

const textOptionMock: OptionBlock = {
  type: "vertical" as const,
  options: [
    { displayOrder: 1, text: "ㄱ" },
    { displayOrder: 2, text: "ㄴ" },
    { displayOrder: 3, text: "ㄱ, ㄴ" },
    { displayOrder: 4, text: "ㄱ, ㄷ" },
    { displayOrder: 5, text: "ㄴ, ㄷ" },
  ],
};

// ── 실제 문제 Mock ──

const koreanQuestion: Question = {
  stemBlocks: [
    { type: "text-basic", text: "윗글을 바탕으로 <보기>를 이해한 내용으로 적절하지 <u>않은</u> 것은?" },
  ],
  contentBlocks: [
    paperStylePassageMock,
    {
      type: "composite",
      label: "보기",
      blocks: [
        {
          type: "text-basic",
          text: "A 출판사는 자사 도서의 소매 가격을 정가의 90%로 정해, 온라인 서점 B가 이를 따르도록 계약서에 명시하였다.",
        },
      ],
    },
  ],
  optionBlocks: {
    type: "vertical",
    options: [
      { displayOrder: 1, text: "A의 행위는 재판매 가격 유지 행위에 해당한다." },
      { displayOrder: 2, text: "A는 '공정거래법'에 따라 형사 처벌을 받을 수 있다." },
      { displayOrder: 3, text: "B가 계약을 위반한 것은 A의 강제에 불응한 것이다." },
      { displayOrder: 4, text: "A의 도서가 출판된 저작물이라면 금지 대상이 아닐 수 있다." },
      { displayOrder: 5, text: "A가 정당한 이유를 입증하면 허용될 수 있다." },
    ],
  },
  answer: "2",
  explanation: "재판매 가격 유지 행위를 하는 사업자는 형사 처벌은 받지 않는다.",
};

const englishSetQuestion: SetQuestion = {
  setStemBlocks: [{ type: "text-basic", text: "다음 글을 읽고, 물음에 답하시오. [23~24]" }],
  setContentBlocks: [
    {
      type: "composite-with-box",
      blocks: [
        {
          type: "text-basic",
          text: "In 2020, a survey was conducted among Americans to find out their preferred type of place to live. The results varied significantly across age groups.",
        },
        {
          type: "bar-horizontal-grouped",
          title: "Americans' Preferred Type of Place to Live",
          description: "Surveyed in 2020",
          xAxis: { label: "Percentage", showLabel: true },
          yAxis: { label: "Age Group", showLabel: true },
          labels: ["18-34", "35-54", "55+"],
          series: [
            { label: "Big/Small City", data: [33, 24, 26] },
            { label: "Suburb", data: [27, 27, 22] },
            { label: "Town/Rural", data: [39, 49, 52] },
          ],
          options: { showDataLabel: false, showRange: true },
          note: "Percentages may not sum to 100% due to rounding",
        },
      ],
    },
  ],
  questions: [
    {
      stemBlocks: [{ type: "text-basic", text: "23. Which of the following is true?" }],
      contentBlocks: [],
      optionBlocks: {
        type: "vertical",
        options: [
          { displayOrder: 1, text: "The majority of 18-34 year-olds prefer cities." },
          { displayOrder: 2, text: "Suburban living is equally popular across all ages." },
          { displayOrder: 3, text: "Town/rural areas are most preferred by 55+." },
          { displayOrder: 4, text: "35-54 year-olds show the strongest city preference." },
          { displayOrder: 5, text: "The survey was conducted in Europe." },
        ],
      },
      answer: "3",
      explanation: "55+ shows 52% for Town/Rural.",
    },
    {
      stemBlocks: [{ type: "text-basic", text: "24. What can be inferred about age and living preferences?" }],
      contentBlocks: [],
      optionBlocks: {
        type: "vertical",
        options: [
          { displayOrder: 1, text: "Older people tend to prefer rural or small-town settings." },
          { displayOrder: 2, text: "Younger adults uniformly prefer urban areas." },
          { displayOrder: 3, text: "Suburban living becomes less popular with age." },
          { displayOrder: 4, text: "There is no pattern between age and preference." },
          { displayOrder: 5, text: "All age groups equally prefer rural areas." },
        ],
      },
      answer: "1",
      explanation: "Town/Rural increases from 39% → 49% → 52%.",
    },
  ],
};

// ══════════════════════════════════════════
// Page Component
// ══════════════════════════════════════════

function BlockPreview({ label, block }: { label: string; block: ComponentBlock }) {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <BlockRenderer block={block} />
    </div>
  );
}

function QuestionCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-background p-5">
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

const VARIANTS: RenderVariant[] = ["preview", "print", "compact"];

export default function QuestionsPage() {
  const [scale, setScale] = useState(1);
  const [variant, setVariant] = useState<RenderVariant>("preview");

  const config = { scale, variant };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Questions</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          문제 블록 렌더러 — 34개 블록 타입 + scale/variant 설정
        </p>
      </div>

      {/* ── Leaf Blocks ── */}

      <PreviewSection title="Common Blocks" description="과목 공통 리프 블록">
        <BlockPreview label="text-basic" block={textBasicMock} />
        <BlockPreview label="text-with-box" block={textWithBoxMock} />
        <BlockPreview label="image-single" block={imageSingleMock} />
        <BlockPreview label="passage-block-group" block={passageBlockGroupMock} />
        <BlockPreview label="view-box" block={viewBoxMock} />
        <BlockPreview label="bullet-list" block={bulletListMock} />
      </PreviewSection>

      <PreviewSection title="Subject Blocks" description="과목별 고유 블록">
        <BlockPreview label="vocab-note (영어)" block={vocabNoteMock} />
        <BlockPreview label="annotated-paragraph (국어)" block={annotatedParagraphMock} />
        <BlockPreview label="note-style-passage (국어)" block={noteStylePassageMock} />
        <BlockPreview label="paper-style-passage (국어)" block={paperStylePassageMock} />
      </PreviewSection>

      {/* ── Visual Blocks ── */}

      <PreviewSection title="Charts" description="Recharts 기반 시각자료">
        <BlockPreview label="bar" block={barChartMock} />
        <BlockPreview label="bar-grouped" block={barGroupedMock} />
        <BlockPreview label="line" block={lineChartMock} />
        <BlockPreview label="pie" block={pieChartMock} />
      </PreviewSection>

      <PreviewSection title="Tables" description="표 시각자료">
        <BlockPreview label="table-basic" block={tableBasicMock} />
      </PreviewSection>

      {/* ── Container Blocks ── */}

      <PreviewSection title="Containers" description="레이아웃 컨테이너 (재귀 중첩)">
        <BlockPreview label="split-block" block={splitBlockMock} />
        <BlockPreview label="composite" block={compositeMock} />
      </PreviewSection>

      {/* ── Options ── */}

      <PreviewSection title="Options" description="선지 렌더러">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            text option (vertical)
          </p>
          <OptionRenderer block={textOptionMock} />
        </div>
      </PreviewSection>

      {/* ── Scale / Variant Control ── */}

      <PreviewSection
        title="Render Config"
        description="scale (CSS transform 리사이징) + variant (간격 프리셋)"
      >
        <PreviewRow>
          <div className="flex w-full flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Scale</span>
              <input
                type="range"
                min={0.5}
                max={1.5}
                step={0.05}
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-40"
              />
              <span className="w-12 font-mono text-sm text-muted-foreground">
                {(scale * 100).toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Variant</span>
              <div className="flex gap-1">
                {VARIANTS.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded px-3 py-1 text-sm transition-colors ${
                      variant === v
                        ? "bg-pullim-500 text-white"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* ── Full Questions ── */}

      <PreviewSection
        title="Full Question"
        description={`국어 단일 문제 — scale: ${(scale * 100).toFixed(0)}%, variant: ${variant}`}
      >
        <QuestionCard label="QuestionRenderer">
          <QuestionRenderer question={koreanQuestion} config={config} />
        </QuestionCard>
      </PreviewSection>

      <PreviewSection
        title="Set Question"
        description={`영어 세트 문제 [23~24] — scale: ${(scale * 100).toFixed(0)}%, variant: ${variant}`}
      >
        <QuestionCard label="SetQuestionRenderer">
          <SetQuestionRenderer setQuestion={englishSetQuestion} config={config} />
        </QuestionCard>
      </PreviewSection>
    </div>
  );
}
