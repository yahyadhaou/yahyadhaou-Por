"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useId, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Gallery as GalleryData, GalleryKey } from "@/lib/data";

type Props = {
  galleries: GalleryData[];
  title: string;
  label: string;
  variant?: "feature" | "card";
  aside?: Partial<Record<GalleryKey, ReactNode>>;
  tone?: Tone;
};

type Tone = "modern" | "editorial";

const SWIPE_THRESHOLD = 40;

// Class sets for the two designs: rounded "modern" cards (phone/tablet) and the
// flatter "editorial" look with hairline borders (desktop).
const styles: Record<Tone, Record<string, string>> = {
  modern: {
    arrow:
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rule bg-surface text-ink shadow-card transition-all hover:scale-105 hover:bg-ink hover:text-paper",
    featureFrame: "card overflow-hidden rounded-3xl",
    cardFrame: "overflow-hidden rounded-2xl border border-rule-soft bg-paper-alt",
    featureBar: "border-b border-rule bg-surface",
    cardBar: "",
    tab: "h-9 rounded-full px-4 text-[13px]",
    tabOn: "bg-ink text-paper",
    tabOff: "text-text hover:bg-surface hover:text-ink",
    counter: "rounded-full bg-surface px-2.5 py-1",
    featureStage: "bg-paper-alt",
    webBox: "rounded-xl",
    phone: "rounded-[30px] shadow-lift",
    aside: "bg-surface",
  },
  editorial: {
    arrow:
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rule bg-paper text-ink transition-colors hover:bg-ink hover:text-paper",
    featureFrame: "overflow-hidden rounded-md border border-rule bg-paper-alt",
    cardFrame: "overflow-hidden rounded-md border border-rule bg-paper-alt",
    featureBar: "border-b border-rule bg-paper",
    cardBar: "border-b border-rule bg-paper",
    tab: "min-h-10 rounded-full border px-4 text-sm",
    tabOn: "border-ink bg-ink text-paper",
    tabOff: "border-rule text-text hover:border-ink",
    counter: "",
    featureStage: "",
    webBox: "rounded-md border border-rule",
    phone: "rounded-[28px]",
    aside: "bg-paper",
  },
};

export function Gallery({ galleries, title, label, variant = "card", aside, tone = "modern" }: Props) {
  const t = useTranslations("gallery");
  const id = useId();
  const [tab, setTab] = useState(0);
  const [index, setIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);

  const gallery = galleries[tab];
  const total = gallery.images.length;
  const isFeature = variant === "feature";
  const css = styles[tone];

  function select(next: number) {
    setTab(next);
    setIndex(0);
  }

  function step(dir: 1 | -1) {
    setIndex((i) => (i + dir + total) % total);
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    }
  }

  function onPointerDown(e: PointerEvent) {
    pointerStart.current = e.clientX;
  }

  function onPointerUp(e: PointerEvent) {
    if (pointerStart.current === null) return;
    const delta = e.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) step(delta < 0 ? 1 : -1);
  }

  const altTitle = galleries.length > 1 ? `${title} · ${t(`tabs.${gallery.key}`)}` : title;
  const counter = t("counter", {
    current: String(index + 1).padStart(2, "0"),
    total,
  });

  const arrowClass = css.arrow;

  const isWeb = gallery.type === "web";
  const image = (
    <Image
      key={gallery.images[index]}
      src={gallery.images[index]}
      alt={t("alt", { title: altTitle, n: index + 1, total })}
      fill
      sizes={isWeb ? (isFeature ? "(max-width: 1024px) 95vw, 820px" : "(max-width: 1024px) 95vw, 600px") : "260px"}
      className={isWeb ? "object-contain" : "object-cover object-top"}
      draggable={false}
    />
  );

  const prevButton = (
    <button type="button" onClick={() => step(-1)} aria-label={t("prev")} className={arrowClass}>
      <ArrowLeft size={18} />
    </button>
  );
  const nextButton = (
    <button type="button" onClick={() => step(1)} aria-label={t("next")} className={arrowClass}>
      <ArrowRight size={18} />
    </button>
  );

  const stage = (
    <div
      id={`${id}-panel`}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      className={`relative flex min-w-0 flex-[3_1_520px] touch-pan-y select-none items-center ${
        isFeature ? `min-h-[520px] sm:min-h-[600px] ${css.featureStage}` : "min-h-[300px] sm:min-h-[460px]"
      } ${isWeb ? "justify-center p-4 sm:p-5" : "justify-between gap-3 px-3 py-6 sm:gap-5 sm:px-6"}`}
    >
      {isWeb ? (
        <>
          {/* Screenshots get the full width; the arrows float over their edges. */}
          <div className={`absolute inset-4 overflow-hidden sm:inset-5 ${css.webBox}`}>{image}</div>
          <div className="pointer-events-none absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between [&>button]:pointer-events-auto [&>button]:shadow-sm">
            {prevButton}
            {nextButton}
          </div>
        </>
      ) : (
        <>
          {prevButton}
          <div
            className={`relative aspect-[9/19.5] overflow-hidden border-[6px] border-phone-frame bg-phone-frame ${css.phone} ${
              isFeature ? "h-[460px] sm:h-[520px]" : "h-[360px]"
            }`}
          >
            {image}
          </div>
          {nextButton}
        </>
      )}
    </div>
  );

  return (
    <div
      className={isFeature ? css.featureFrame : css.cardFrame}
    >
      <div
        className={`flex items-center justify-between gap-3 px-3 py-3 sm:px-4 ${
          isFeature ? css.featureBar : css.cardBar
        }`}
      >
        {galleries.length > 1 ? (
          <div role="tablist" aria-label={label} className="-mx-1 flex min-w-0 flex-1 gap-1.5 overflow-x-auto px-1 [scrollbar-width:none] sm:flex-wrap">
            {galleries.map((g, i) => (
              <button
                key={g.key}
                type="button"
                role="tab"
                aria-selected={i === tab}
                aria-controls={`${id}-panel`}
                onClick={() => select(i)}
                className={`shrink-0 whitespace-nowrap font-medium transition-colors ${css.tab} ${
                  i === tab ? css.tabOn : css.tabOff
                }`}
              >
                {t(`tabs.${g.key}`)}
              </button>
            ))}
          </div>
        ) : (
          <span className="label pl-1">{t(`tabs.${gallery.key}`)}</span>
        )}
        <span className={`label shrink-0 ${css.counter}`} aria-live="polite">
          {counter}
        </span>
      </div>

      {isFeature && aside ? (
        <div className="flex flex-wrap">
          {stage}
          <div className={`flex flex-[1_1_280px] flex-col gap-3 border-t border-rule p-6 sm:p-8 lg:border-l lg:border-t-0 ${css.aside}`}>
            {aside[gallery.key]}
          </div>
        </div>
      ) : (
        stage
      )}
    </div>
  );
}
