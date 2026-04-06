"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  Input,
  Label,
} from "@pullim/design-system";
import { PreviewSection, PreviewRow } from "@/components/preview-section";
import { ChevronDown, Settings, LogOut, User, Bell, Trash2, Info } from "lucide-react";

export default function OverlaysPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Overlays</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          오버레이 컴포넌트 — Dialog, AlertDialog, Sheet, Popover, Tooltip, DropdownMenu
        </p>
      </div>

      {/* Dialog */}
      <PreviewSection title="Dialog" description="모달 다이얼로그">
        <PreviewRow>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">기본 Dialog 열기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>프로필 수정</DialogTitle>
                <DialogDescription>
                  아래 정보를 수정한 후 저장 버튼을 클릭하세요.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                <div>
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" defaultValue="김철수" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" defaultValue="chul@example.com" className="mt-1.5" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">취소</Button>
                <Button>저장</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">닫기 버튼 없는 Dialog</Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>작업이 진행 중입니다</DialogTitle>
                <DialogDescription>잠시만 기다려 주세요. 닫을 수 없는 모달입니다.</DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center py-4">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-pullim-500" />
              </div>
            </DialogContent>
          </Dialog>
        </PreviewRow>
      </PreviewSection>

      {/* AlertDialog */}
      <PreviewSection title="AlertDialog" description="확인/취소가 필요한 경고 다이얼로그">
        <PreviewRow>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">삭제 확인</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  이 작업은 되돌릴 수 없습니다. 해당 데이터가 영구적으로 삭제됩니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/80">
                  삭제
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </PreviewRow>
      </PreviewSection>

      {/* Sheet */}
      <PreviewSection title="Sheet" description="슬라이드 패널 (left / right / top / bottom)">
        <PreviewRow>
          {(["left", "right", "top", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>{side} Sheet</SheetTitle>
                  <SheetDescription>
                    {side} 방향에서 슬라이드 인 됩니다.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">Sheet 내용이 들어갑니다.</p>
                </div>
                <SheetFooter>
                  <Button size="sm">확인</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </PreviewRow>
      </PreviewSection>

      {/* Popover */}
      <PreviewSection title="Popover" description="앵커 기준 부유 패널">
        <PreviewRow>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">알림 설정</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold">알림 설정</p>
                  <p className="text-xs text-muted-foreground mt-0.5">받을 알림을 선택하세요.</p>
                </div>
                <div className="space-y-2">
                  {["이메일 알림", "푸시 알림", "SMS 알림"].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      {item}
                    </label>
                  ))}
                </div>
                <Button size="sm" className="w-full">저장</Button>
              </div>
            </PopoverContent>
          </Popover>
        </PreviewRow>
      </PreviewSection>

      {/* Tooltip */}
      <PreviewSection title="Tooltip" description="hover 시 간단한 설명">
        <PreviewRow>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" aria-label="정보">
                <Info />
              </Button>
            </TooltipTrigger>
            <TooltipContent>도움말 내용입니다</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="알림">
                <Bell />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">알림 설정 열기</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="삭제">
                <Trash2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>이 항목 삭제</TooltipContent>
          </Tooltip>
        </PreviewRow>
      </PreviewSection>

      {/* DropdownMenu */}
      <PreviewSection title="DropdownMenu" description="맥락 메뉴">
        <PreviewRow>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                내 계정 <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>내 계정</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User />
                프로필
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                설정
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut />
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                보기 옵션 <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>표시 항목</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>제목</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>날짜</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>작성자</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>카테고리</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PreviewRow>
      </PreviewSection>
    </div>
  );
}
