import Image from "next/image";
import React from "react";
import HeroInfoCards from "./HeroInfoCards";
import FloatingBalls from "./FloatingBalls";
import BackgroundLights from "./BackgroundLights";

export default function HeroVisual() {
  return (
    <>
      <BackgroundLights className="top-27.5" />
      <Image
        src={"/radio-waves.svg"}
        fill
        alt="radio-waves BG"
        className="!top-[55%] !left-1/2 -z-10 aspect-square !h-auto !w-[90%] -translate-1/2 object-cover lg:!top-0 lg:!h-full lg:min-h-[998px] lg:!w-full lg:translate-y-0"
      />
      <FloatingBalls />
      <div className="relative min-h-[425px] overflow-hidden">
        <div className="relative mx-auto mt-10 h-[40vw] min-h-[250px] w-[40vw] min-w-[250px] lg:mt-10 lg:h-[350px] lg:w-[388px]">
          <Image src={"/herosection-image.svg"} fill alt="herosection-image" />
        </div>
        <HeroInfoCards />
      </div>
    </>
  );
}
