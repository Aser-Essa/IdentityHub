import React from "react";

type LabelProps = {
  children: React.ReactNode;
};

export default function Label({ children }: LabelProps) {
  return (
    <>
      <span
        className="font-Aeonik gradient-pink-blue-stroke rounded-[30px] bg-[#0F0B15] px-3 py-1 text-xs"
        style={{
          boxShadow: "inset 0 0 10px #ffffff33 ,  0 3px 40px #9e64ef66",
        }}
      >
        {children}
      </span>
    </>
  );
}
