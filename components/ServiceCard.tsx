import Image from "next/image";
import React from "react";

type ServiceCardData = {
  iconSrc: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  iconSrc,
  title,
  description,
}: ServiceCardData) {
  return (
    <>
      <div className="relative h-fit w-fit">
        <div className="absolute top-12.5 right-8 z-[-10000] h-48.5 w-48.5 overflow-hidden rounded-[500px] opacity-40 mix-blend-color-dodge blur-[44px]">
          <div className="absolute h-full w-full bg-white"></div>
          <div className="absolute h-full w-full bg-[#907cff] opacity-[16%]"></div>
          <div className="absolute h-full w-full bg-[#6B05B4] opacity-[25%]"></div>
        </div>
        <div className="masked-image relative h-74 w-85 rounded-[25.6px] text-[#D6DDF8]">
          <Image src="/mask-border.svg" fill alt="masked-border" />

          <Image src={iconSrc} width={42} height={42} alt="service-card-1" />
          <p className="font-Aeonik mt-5.5 w-[70%] text-[22px] leading-[120%] font-medium">
            {title}
          </p>
          <p className="font-Aeonik mt-2 leading-[140%]">{description}</p>
          <button className="font-sora mt-5 flex items-center text-white">
            <p className="py-2 pr-1.25">Explore More</p>
            <Image
              src={"/arrow-right.svg"}
              width={22}
              height={22}
              alt="arrow-right"
            />
          </button>
        </div>
      </div>
    </>
  );
}
