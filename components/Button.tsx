import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <>
      <button
        className={cn(
          `font-Aeonik gradient-stroke cursor-pointer rounded-[9px] bg-[#ffffff01] px-4 py-2 text-xs font-medium text-nowrap text-white before:bg-[linear-gradient(45deg,_#090edb,_#8d1ea2)]`,
          className,
        )}
        style={{
          boxShadow: "inset 0 0 9.6px #ffffff33",
        }}
      >
        {children}
      </button>
    </>
  );
}
