import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Separator,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Badge,
} from "@pullim/design-system";
import { PreviewSection, PreviewRow } from "@/components/preview-section";
import { BookOpen, TrendingUp } from "lucide-react";

export default function LayoutPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Layout</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          구조 컴포넌트 — Card, Separator, Accordion, Tabs
        </p>
      </div>

      {/* Card */}
      <PreviewSection title="Card" description="서브 컴포넌트: CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction">
        <div className="grid grid-cols-2 gap-4">
          {/* 기본 카드 */}
          <Card>
            <CardHeader>
              <CardTitle>기본 카드</CardTitle>
              <CardDescription>CardHeader + CardContent 구조</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">카드 내용이 여기에 들어갑니다. 다양한 컨텐츠를 담을 수 있습니다.</p>
            </CardContent>
          </Card>

          {/* 액션 포함 카드 */}
          <Card>
            <CardHeader>
              <CardTitle>액션 카드</CardTitle>
              <CardDescription>CardAction으로 우측 정렬</CardDescription>
              <CardAction>
                <Badge variant="blue">New</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">오른쪽에 뱃지나 버튼을 배치할 수 있습니다.</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm" variant="outline">취소</Button>
              <Button size="sm">확인</Button>
            </CardFooter>
          </Card>

          {/* 통계 카드 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-md bg-pullim-50">
                  <BookOpen className="size-4 text-pullim-600" />
                </div>
                <CardTitle className="text-base">총 문제 수</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">2,481</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="size-3" />
                지난달 대비 +12%
              </p>
            </CardContent>
          </Card>

          {/* Footer 포함 카드 */}
          <Card>
            <CardHeader>
              <CardTitle>Footer 카드</CardTitle>
              <CardDescription>하단 액션 영역</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">CardFooter에 버튼을 배치한 예시입니다.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">자세히 보기</Button>
            </CardFooter>
          </Card>
        </div>
      </PreviewSection>

      {/* Separator */}
      <PreviewSection title="Separator" description="수평 / 수직 구분선">
        <PreviewRow label="수평 (horizontal)" vertical>
          <div className="w-full">
            <p className="text-sm text-muted-foreground">위 영역</p>
            <Separator className="my-3" />
            <p className="text-sm text-muted-foreground">아래 영역</p>
          </div>
        </PreviewRow>
        <PreviewRow label="수직 (vertical)">
          <p className="text-sm text-muted-foreground">왼쪽</p>
          <Separator orientation="vertical" className="h-5" />
          <p className="text-sm text-muted-foreground">오른쪽</p>
          <Separator orientation="vertical" className="h-5" />
          <p className="text-sm text-muted-foreground">세 번째</p>
        </PreviewRow>
      </PreviewSection>

      {/* Accordion */}
      <PreviewSection title="Accordion">
        <PreviewRow vertical>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Pretendard 폰트란 무엇인가요?</AccordionTrigger>
              <AccordionContent>
                Pretendard는 다국어 환경을 위한 오픈소스 폰트입니다. 시스템 UI 폰트를 대체하기 위해 제작되었으며, 한국어 최적화가 잘 되어 있습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Tailwind v4는 어떻게 다른가요?</AccordionTrigger>
              <AccordionContent>
                Tailwind v4는 설정 파일 없이 CSS 파일 내 <code>@theme</code> 블록으로 테마를 정의합니다. 빌드 속도가 크게 개선되었고, CSS 변수와의 통합이 자연스럽습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>shadcn/ui와의 관계는?</AccordionTrigger>
              <AccordionContent>
                이 디자인시스템은 shadcn/ui의 컴포넌트 패턴(Radix UI + CVA + cn)을 기반으로 하되, Pullim 브랜드 토큰과 특화된 컴포넌트를 추가한 형태입니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PreviewRow>
      </PreviewSection>

      {/* Tabs */}
      <PreviewSection title="Tabs — Solid (기본)">
        <PreviewRow vertical>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="usage">사용법</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p className="text-sm text-muted-foreground">개요 탭 내용입니다.</p>
            </TabsContent>
            <TabsContent value="usage">
              <p className="text-sm text-muted-foreground">사용법 탭 내용입니다.</p>
            </TabsContent>
            <TabsContent value="api">
              <p className="text-sm text-muted-foreground">API 탭 내용입니다.</p>
            </TabsContent>
          </Tabs>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Tabs — Line (하단 인디케이터)">
        <PreviewRow vertical>
          <Tabs defaultValue="all" className="w-full">
            <TabsList variant="line" className="w-full justify-start">
              <TabsTrigger value="all" variant="line">전체</TabsTrigger>
              <TabsTrigger value="korean" variant="line">국어</TabsTrigger>
              <TabsTrigger value="english" variant="line">영어</TabsTrigger>
              <TabsTrigger value="math" variant="line">수학</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <p className="text-sm text-muted-foreground mt-2">전체 콘텐츠입니다.</p>
            </TabsContent>
            <TabsContent value="korean">
              <p className="text-sm text-muted-foreground mt-2">국어 콘텐츠입니다.</p>
            </TabsContent>
            <TabsContent value="english">
              <p className="text-sm text-muted-foreground mt-2">영어 콘텐츠입니다.</p>
            </TabsContent>
            <TabsContent value="math">
              <p className="text-sm text-muted-foreground mt-2">수학 콘텐츠입니다.</p>
            </TabsContent>
          </Tabs>
        </PreviewRow>
      </PreviewSection>
    </div>
  );
}
