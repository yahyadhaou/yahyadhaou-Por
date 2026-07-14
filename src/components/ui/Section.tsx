import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8 lg:py-32 ${className ?? ""}`}
    >
      {(eyebrow || title) && (
        <Reveal className="mb-14 max-w-2xl">
          {eyebrow && (
            <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-accent-b">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
