import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <>
      <button
        className={cn(
          `font-Aeonik cursor-pointer bg-[#ffffff01] px-4 py-2 font-thin text-nowrap`,
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
