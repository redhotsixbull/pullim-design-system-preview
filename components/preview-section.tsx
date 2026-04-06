import * as React from "react";

interface PreviewSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PreviewSection({ title, description, children }: PreviewSectionProps) {
  return (
    <section className="mb-10">
      <div className="mb-4 border-b border-border pb-3">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

interface PreviewRowProps {
  label?: string;
  children: React.ReactNode;
  vertical?: boolean;
}

export function PreviewRow({ label, children, vertical = false }: PreviewRowProps) {
  return (
    <div className="rounded-lg border border-border bg-muted p-4">
      {label && (
        <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </p>
      )}
      <div className={vertical ? "flex flex-col gap-3" : "flex flex-wrap items-center gap-3"}>
        {children}
      </div>
    </div>
  );
}
