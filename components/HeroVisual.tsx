import Image from "next/image";
import React from "react";
import HeroInfoCards from "./HeroInfoCards";

export default function HeroVisual() {
  return (
    <>
      <div className="relative min-h-[425px] overflow-hidden">
        <div className="relative mx-auto mt-4 h-[40vw] min-h-[275px] w-[40vw] min-w-[275px] lg:mt-10 lg:h-[350px] lg:w-[388px]">
          <Image src={"/herosection-image.svg"} fill alt="herosection-image" />
        </div>
        <HeroInfoCards />
      </div>
    </>
  );
}
