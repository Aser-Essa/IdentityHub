"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function UnderlinedWord({
  children,
  size,
}: {
  children: string;
  size: "bigger" | "smaller";
}) {
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  function underlinePosition() {
    const wordEl = wordRef.current;
    const underlineEl = underlineRef.current;

    if (!wordEl || !underlineEl) return;

    const rect = wordEl.getBoundingClientRect();
    const parentRect = wordEl.parentElement?.getBoundingClientRect();

    if (!rect || !parentRect) return;
    underlineEl.style.width =
      size === "bigger"
        ? `${rect.width + rect.width * 0.16}px`
        : `${rect.width - rect.width * 0.16}px`;

    const leftOffset = (underlineEl.clientWidth - rect.width) / 2;

    const left = rect.left - parentRect.left - leftOffset;
    const top = rect.top - parentRect.top + rect.height - 6;

    underlineEl.style.left = `${left}px`;
    underlineEl.style.top = `${top}px`;
  }

  useEffect(() => {
    underlinePosition();
    window.addEventListener("resize", underlinePosition);
    return () => window.removeEventListener("resize", underlinePosition);
  }, []);

  return (
    <>
      <span ref={wordRef}>{children}</span>

      <span className="absolute aspect-[100/3] min-h-3" ref={underlineRef}>
        <Image
          src={"/underline-word.svg"}
          fill
          alt="underline-word"
          className="object-cover"
        />
      </span>
    </>
  );
}
