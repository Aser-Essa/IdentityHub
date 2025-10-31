"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

type HeroInfoCardProps = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  iconSrc: string;
  title: string;
  description: string;
};

export default function HeroInfoCard({
  left,
  right,
  top,
  bottom,
  iconSrc,
  title,
  description,
}: HeroInfoCardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const topPercent = top && isMounted && isMobile ? top / 2 : top;
  const bottomPercent = bottom && isMounted && isMobile ? bottom * 2 : bottom;

  const positons = {
    left,
    right,
    top: topPercent,
    bottom: bottomPercent,
  };

  return (
    <>
      <div
        className={
          "gradient-stroke !absolute z-20 flex h-[52px] items-center gap-3 rounded-xl bg-[linear-gradient(160deg,_#1b1c3628,_#70717a28_80%)] p-2 backdrop-blur-[10px] before:bg-[linear-gradient(160deg,_#ffffff11,_#ffffff26)]"
        }
        style={{ ...positons }}
      >
        <div
          className="flex h-8.75 w-8.75 items-center justify-center rounded-[10px] bg-[#ffffff12]"
          style={{ boxShadow: "0 0 0 .8px #2D2E48" }}
        >
          <Image
            src={iconSrc || ""}
            width={23}
            height={23}
            alt="hero-info-card-icon"
          />
        </div>
        <div className="font-inter hidden text-start font-medium sm:block">
          <p className="text-[11px]">{title}</p>
          <p className="text-[13px]">{description}</p>
        </div>
      </div>
    </>
  );
}
