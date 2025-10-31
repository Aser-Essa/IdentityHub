import React from "react";
import Label from "./Label";

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
  return (
    <div className="mx-auto text-center">
      <Label>{label}</Label>
      <div className="font-sora text-softBlue mt-1.5 text-[clamp(28px,4.5vw,32px)] leading-[120%] font-semibold">
        {title}
      </div>
      {subTitle && (
        <p className="font-Aeonik mt-3.5 text-[clamp(16px,2.8vw,20px)] sm:whitespace-pre-line">
          {subTitle}
        </p>
      )}
    </div>
  );
}
