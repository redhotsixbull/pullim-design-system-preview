import {
  Heading,
  Text,
  Lead,
  Muted,
  Code,
  Blockquote,
} from "@pullim/design-system";
import { PreviewSection, PreviewRow } from "@/components/preview-section";

export default function TypographyPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Typography</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          조립형 타이포그라피 컴포넌트. <code className="text-xs bg-gray-100 px-1 rounded">as</code> prop으로 시맨틱 태그,{" "}
          <code className="text-xs bg-gray-100 px-1 rounded">size</code> prop으로 시각적 크기를 분리합니다.
        </p>
      </div>

      <PreviewSection title="Heading" description="h1~h6 시맨틱 태그 + size prop 분리">
        <PreviewRow vertical>
          <Heading as="h1" size="4xl">Heading 4xl — h1</Heading>
          <Heading as="h2" size="3xl">Heading 3xl — h2</Heading>
          <Heading as="h2" size="2xl">Heading 2xl — h2</Heading>
          <Heading as="h3" size="xl">Heading xl — h3</Heading>
          <Heading as="h4" size="lg">Heading lg — h4</Heading>
          <Heading as="h5" size="base">Heading base — h5</Heading>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Text" description="본문 텍스트. size / weight / muted 조합 가능">
        <PreviewRow vertical>
          <Text size="xl">Text xl — 본문 텍스트입니다.</Text>
          <Text size="lg">Text lg — 본문 텍스트입니다.</Text>
          <Text size="base">Text base — 기본 본문 크기입니다.</Text>
          <Text size="sm">Text sm — 작은 본문 텍스트입니다.</Text>
          <Text size="xs">Text xs — 아주 작은 텍스트입니다.</Text>
        </PreviewRow>
        <PreviewRow label="weight + muted 조합" vertical>
          <Text size="base" weight="normal">Normal weight — 기본 굵기</Text>
          <Text size="base" weight="medium">Medium weight — 중간 굵기</Text>
          <Text size="base" weight="semibold">Semibold weight — 두꺼운 굵기</Text>
          <Text size="base" muted>Muted — 흐린 텍스트 (보조 설명)</Text>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Lead" description="섹션 소개, h1/h2 아래에 위치하는 강조 본문">
        <PreviewRow>
          <Lead>
            Lead 텍스트입니다. 섹션의 핵심 내용을 한 줄로 요약하거나 섹션 소개문으로 사용합니다.
          </Lead>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Muted" description="보조 설명, 힌트 텍스트">
        <PreviewRow>
          <Muted>
            Muted 텍스트입니다. 폼 힌트, 부가 설명, 메타 정보 등에 사용합니다.
          </Muted>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Code" description="인라인 코드 스니펫">
        <PreviewRow>
          <Text as="p">
            설치 명령어는 <Code>npm install @pullim/design-system</Code> 입니다.
            컴포넌트는 <Code>import {"{ Button }"} from &quot;@pullim/design-system&quot;</Code>으로 가져옵니다.
          </Text>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Blockquote" description="인용문">
        <PreviewRow>
          <Blockquote>
            디자인시스템은 제품 팀이 공통 언어를 공유하고, 일관된 사용자 경험을 빠르게 구축할 수 있게 도와줍니다.
          </Blockquote>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="조합 예시" description="실제 콘텐츠에서의 조합">
        <PreviewRow vertical>
          <Heading as="h2" size="2xl">섹션 제목입니다</Heading>
          <Lead>이 섹션은 디자인시스템의 타이포그라피 사용 예시를 보여줍니다.</Lead>
          <Text>
            본문 내용이 여기에 들어갑니다. <Code>Heading</Code>, <Code>Text</Code>, <Code>Lead</Code> 컴포넌트를
            조합해서 계층적인 콘텐츠 구조를 만들 수 있습니다.
          </Text>
          <Muted>마지막으로 보조 설명이나 출처를 여기에 작성합니다.</Muted>
        </PreviewRow>
      </PreviewSection>
    </div>
  );
}
