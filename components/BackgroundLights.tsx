import React from "react";

export default function BackgroundLights() {
  return (
    <div className="absolute top-27.5 left-1/2 -z-[1000] mx-auto aspect-square max-h-181 w-screen max-w-181 -translate-x-1/2 overflow-hidden bg-white mix-blend-color-dodge blur-[84px]">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-[#383063]"></div>
      <div className="mx-auto flex aspect-square h-175.25 w-211.5 items-center justify-center overflow-hidden">
        <div className="relative aspect-square h-full w-full blur-[90px]">
          <div className="absolute top-[100px] left-[46px] h-[449px] w-[565px] bg-[#18A0FB] sm:top-[122px]"></div>
          <div className="absolute top-[25px] left-[50px] h-[387px] w-[504px] bg-[#F2371F] sm:left-[188px]"></div>
          <div className="absolute top-[67px] left-[100px] h-[424px] w-[558px] bg-[#EE46D3] sm:left-[335px]"></div>
          <div className="absolute top-[348px] left-[250px] h-[377px] w-[397px] bg-[#00C5DF]"></div>
        </div>
      </div>
    </div>
  );
}
