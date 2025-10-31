import { calcDaysAgo } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  date: string;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const { name, role, avatar, text, date } = testimonial;
  return (
    <>
      <div className="swiper-slide gradient-stroke relative !h-full !min-h-60 !w-full rounded-[16px] bg-[linear-gradient(45deg,_#32323e29,_#52536b29)] p-5 before:bg-[linear-gradient(45deg,_#9296ee00,_#27293499)]">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="relative aspect-square h-8.75 w-8.75">
            <Image src={avatar || "/userAvatar.png"} fill alt="userAvatar" />
          </div>

          <div>
            <p className="font-sora mb-1 text-lg leading-[100%] font-semibold text-nowrap text-white sm:text-xl">
              {name}
            </p>
            <p className="font-Aeonik mb-4 space-x-1.25 text-xs text-[#9D9BA6] sm:text-base">
              <span>{role}</span>
              <span>&#x2022;</span>
              <span>{calcDaysAgo(date)}</span>
            </p>
            <p className="font-inter line-clamp-5 text-sm font-[300] sm:mb-11.5 sm:line-clamp-4 sm:h-22 sm:text-base sm:leading-[140%]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
