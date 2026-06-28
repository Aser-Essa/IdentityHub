"use client";
import React, { useRef } from "react";
import Label from "./Label";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  subTitle?: string;
};

export default function SectionHeader({
  label,
  title,
  subTitle,
}: SectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: isMobile
            ? "play play play play"
            : "play play play reverse",
        },
      });

      tl.from(".label", {
        scale: 0,
        ease: "back.out(1.8)",
      })
        .from(
          "div.section-header-title > p",
          {
            y: 30,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.4,
          },
          "<=.25",
        )
        .from(
          "p.section-header-subTitle",
          {
            y: 30,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.4,
          },
          "<=.2",
        );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="section-header px-4 mx-auto text-center">
      <Label>{label}</Label>
      <div className="section-header-title font-sora text-softBlue mt-1.5 overflow-hidden text-[clamp(28px,4.5vw,32px)] leading-[120%] font-semibold">
        {title}
      </div>
      {subTitle && (
        <p className="section-header-subTitle font-Aeonik mt-3.5 text-[clamp(16px,2.8vw,20px)] sm:whitespace-pre-line">
          {subTitle}
        </p>
      )}
    </div>
  );
}
