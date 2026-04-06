"use client";

import {
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Label,
} from "@pullim/design-system";
import { PreviewSection, PreviewRow } from "@/components/preview-section";
import { Search, Plus, Trash2, Download, Settings } from "lucide-react";

export default function InputsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Inputs</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          폼 입력 컴포넌트 모음
        </p>
      </div>

      {/* Button */}
      <PreviewSection title="Button — Variant">
        <PreviewRow>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Button — Size">
        <PreviewRow>
          <Button size="lg">Large</Button>
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="icon" aria-label="설정">
            <Settings />
          </Button>
        </PreviewRow>
      </PreviewSection>

      <PreviewSection title="Button — States & Icons">
        <PreviewRow>
          <Button loading>저장 중...</Button>
          <Button disabled>비활성</Button>
          <Button>
            <Plus /> 새로 만들기
          </Button>
          <Button variant="outline">
            <Download /> 다운로드
          </Button>
          <Button variant="destructive">
            <Trash2 /> 삭제
          </Button>
          <Button variant="outline" asChild>
            <a href="#">링크 버튼</a>
          </Button>
        </PreviewRow>
      </PreviewSection>

      {/* Input */}
      <PreviewSection title="Input">
        <PreviewRow label="기본" vertical>
          <div className="w-80">
            <Label htmlFor="default-input">이메일</Label>
            <Input id="default-input" type="email" placeholder="example@email.com" className="mt-1.5" />
          </div>
          <div className="w-80">
            <Label htmlFor="search-input">검색</Label>
            <div className="relative mt-1.5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input id="search-input" placeholder="검색어를 입력하세요" className="pl-9" />
            </div>
          </div>
        </PreviewRow>
        <PreviewRow label="States" vertical>
          <div className="w-80">
            <Label htmlFor="disabled-input">비활성</Label>
            <Input id="disabled-input" placeholder="입력 불가" disabled className="mt-1.5" />
          </div>
          <div className="w-80">
            <Label htmlFor="error-input">에러</Label>
            <Input id="error-input" placeholder="잘못된 입력" aria-invalid className="mt-1.5" />
            <p className="mt-1 text-xs text-red-500">올바른 형식으로 입력해 주세요.</p>
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* Textarea */}
      <PreviewSection title="Textarea">
        <PreviewRow vertical>
          <div className="w-full max-w-sm">
            <Label htmlFor="textarea">내용</Label>
            <Textarea id="textarea" placeholder="내용을 입력하세요..." className="mt-1.5" />
          </div>
          <div className="w-full max-w-sm">
            <Label htmlFor="textarea-disabled">비활성</Label>
            <Textarea id="textarea-disabled" placeholder="입력 불가" disabled className="mt-1.5" />
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* Select */}
      <PreviewSection title="Select">
        <PreviewRow vertical>
          <div className="w-56">
            <Label htmlFor="select">과목 선택</Label>
            <Select>
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="과목을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="korean">국어</SelectItem>
                <SelectItem value="english">영어</SelectItem>
                <SelectItem value="math">수학</SelectItem>
                <SelectItem value="social">사회</SelectItem>
                <SelectItem value="science">과학</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* Checkbox */}
      <PreviewSection title="Checkbox">
        <PreviewRow vertical>
          <div className="flex items-center gap-2">
            <Checkbox id="check1" defaultChecked />
            <Label htmlFor="check1">체크된 상태</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="check2" />
            <Label htmlFor="check2">기본 상태</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="check3" disabled />
            <Label htmlFor="check3" className="opacity-50">비활성</Label>
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* Switch */}
      <PreviewSection title="Switch">
        <PreviewRow vertical>
          <div className="flex items-center gap-2">
            <Switch id="switch1" defaultChecked />
            <Label htmlFor="switch1">활성화</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="switch2" />
            <Label htmlFor="switch2">비활성화</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="switch3" disabled />
            <Label htmlFor="switch3" className="opacity-50">비활성 (disabled)</Label>
          </div>
        </PreviewRow>
      </PreviewSection>

      {/* RadioGroup */}
      <PreviewSection title="RadioGroup">
        <PreviewRow vertical>
          <RadioGroup defaultValue="english">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="korean" id="r1" />
              <Label htmlFor="r1">국어</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="english" id="r2" />
              <Label htmlFor="r2">영어</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="math" id="r3" />
              <Label htmlFor="r3">수학</Label>
            </div>
          </RadioGroup>
        </PreviewRow>
      </PreviewSection>
    </div>
  );
}
