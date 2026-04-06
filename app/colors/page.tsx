import { PreviewSection, PreviewRow } from "@/components/preview-section";

interface SwatchProps {
  name: string;
  value: string;
  textDark?: boolean;
}

function Swatch({ name, value, textDark }: SwatchProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-10 w-full rounded-lg border border-black/5"
        style={{ backgroundColor: value }}
      />
      <div>
        <p className={`text-xs font-medium ${textDark ? "text-muted-foreground" : "text-muted-foreground"}`}>
          {name}
        </p>
        <p className="font-mono text-[10px] text-gray-400">{value}</p>
      </div>
    </div>
  );
}

interface SemanticRowProps {
  token: string;
  lightValue: string;
  darkValue: string;
  lightBg: string;
  darkBg: string;
}

function SemanticSwatch({ token, lightValue, darkValue, lightBg, darkBg }: SemanticRowProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3">
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded border border-black/5" style={{ backgroundColor: lightBg }} />
        <div className="h-8 w-8 rounded border border-black/5" style={{ backgroundColor: darkBg }} />
      </div>
      <div className="flex-1">
        <p className="font-mono text-xs font-medium text-foreground">{token}</p>
        <p className="text-[10px] text-gray-400">
          Light: {lightValue} · Dark: {darkValue}
        </p>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Colors</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Primitive → Semantic → Tailwind 3단계 레이어 토큰 시스템
        </p>
      </div>

      {/* Brand Blue */}
      <PreviewSection title="Brand Blue (pullim-*)" description="Primary 브랜드 컬러. 11단계 팔레트">
        <div className="grid grid-cols-11 gap-1.5">
          {[
            { name: "50", value: "#f4faff" },
            { name: "100", value: "#d1e8ff" },
            { name: "200", value: "#9fc8ff" },
            { name: "300", value: "#5aa9ff" },
            { name: "400", value: "#1f89f5" },
            { name: "500", value: "#0362da" },
            { name: "600", value: "#004bb9" },
            { name: "700", value: "#00389e" },
            { name: "800", value: "#002878" },
            { name: "900", value: "#001b52" },
            { name: "1000", value: "#0d1a1f" },
          ].map(({ name, value }) => (
            <Swatch key={name} name={name} value={value} />
          ))}
        </div>
      </PreviewSection>

      {/* Gray */}
      <PreviewSection title="Neutral Gray" description="9단계 중성 팔레트">
        <div className="grid grid-cols-10 gap-1.5">
          {[
            { name: "50", value: "#fdfdfd" },
            { name: "100", value: "#f7f7f7" },
            { name: "150", value: "#f2f2f2" },
            { name: "200", value: "#ededed" },
            { name: "300", value: "#e4e3e8" },
            { name: "400", value: "#cfcdd2" },
            { name: "500", value: "#a4a3a8" },
            { name: "600", value: "#7c7a7f" },
            { name: "700", value: "#656369" },
            { name: "800", value: "#47454a" },
          ].map(({ name, value }) => (
            <Swatch key={name} name={name} value={value} />
          ))}
        </div>
        <div className="grid grid-cols-10 gap-1.5 mt-1.5">
          <Swatch name="900" value="#262528" />
        </div>
      </PreviewSection>

      {/* Status */}
      <PreviewSection title="Status Colors" description="에러 · 성공 · 경고">
        <div className="grid grid-cols-6 gap-3">
          <Swatch name="red" value="#ea2d2d" />
          <Swatch name="red-hover" value="#ee5151" />
          <Swatch name="red-50" value="#fef2f2" />
          <Swatch name="red-100" value="#fee2e2" />
          <Swatch name="green" value="#4ad676" />
          <Swatch name="green-hover" value="#6add8e" />
          <Swatch name="warning" value="#f28500" />
          <Swatch name="warning-surface" value="#fce3c5" />
        </div>
      </PreviewSection>

      {/* Subject Colors */}
      <PreviewSection title="Subject Colors" description="과목별 컬러 시스템. main / bg / text / inverted 역할 분리">
        {[
          {
            label: "국어 (Korean)",
            main: "#ef863f",
            bg: "rgba(239,134,63,0.1)",
            text: "#a75f2c",
            invBg: "#ef863f",
          },
          {
            label: "영어 (English)",
            main: "#0362da",
            bg: "rgba(3,98,218,0.1)",
            text: "#024eae",
            invBg: "#0362da",
          },
          {
            label: "수학 (Math)",
            main: "#e6ff4c",
            bg: "rgba(230,255,76,0.15)",
            text: "#5c6619",
            invBg: "#73991e",
          },
          {
            label: "사회 (Social)",
            main: "#fbc3b4",
            bg: "rgba(251,195,180,0.12)",
            text: "#957568",
            invBg: "#af8976",
          },
          {
            label: "과학 (Science)",
            main: "#6fc1ba",
            bg: "rgba(111,193,186,0.12)",
            text: "#4e8782",
            invBg: "#6fc1ba",
          },
        ].map(({ label, main, bg, text, invBg }) => (
          <div key={label} className="rounded-lg border border-gray-100 bg-white p-4">
            <p className="mb-3 text-sm font-medium text-muted-foreground">{label}</p>
            <div className="flex gap-2">
              {[
                { role: "main", color: main, fg: "#fff" },
                { role: "bg", color: bg, fg: "#333" },
                { role: "text", color: text, fg: "#fff" },
                { role: "inverted-bg", color: invBg, fg: "#fff" },
              ].map(({ role, color, fg }) => (
                <div key={role} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className="h-10 w-full rounded-md border border-black/5 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <span className="text-[9px] font-mono" style={{ color: fg }}>
                      {role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </PreviewSection>

      {/* Semantic Tokens */}
      <PreviewSection title="Semantic Tokens" description="라이트 / 다크 모드별 값 매핑">
        <PreviewRow vertical>
          {[
            { token: "--color-background", lightValue: "gray-50", darkValue: "gray-900", lightBg: "#fdfdfd", darkBg: "#262528" },
            { token: "--color-foreground", lightValue: "gray-900", darkValue: "gray-50", lightBg: "#262528", darkBg: "#fdfdfd" },
            { token: "--color-primary", lightValue: "pullim-500", darkValue: "pullim-400", lightBg: "#0362da", darkBg: "#1f89f5" },
            { token: "--color-border", lightValue: "gray-300", darkValue: "white/10%", lightBg: "#e4e3e8", darkBg: "rgba(255,255,255,0.1)" },
            { token: "--color-muted", lightValue: "gray-100", darkValue: "gray-800", lightBg: "#f7f7f7", darkBg: "#47454a" },
            { token: "--color-destructive", lightValue: "red", darkValue: "red", lightBg: "#ea2d2d", darkBg: "#ea2d2d" },
          ].map((item) => (
            <SemanticSwatch key={item.token} {...item} />
          ))}
        </PreviewRow>
      </PreviewSection>
    </div>
  );
}
