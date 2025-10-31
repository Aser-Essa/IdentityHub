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
        <div className="flex gap-3">
          <div className="relative aspect-square h-8.75 w-8.75">
            <Image src={avatar || "/userAvatar.png"} fill alt="userAvatar" />
          </div>

          <div>
            <p className="font-sora mb-1 text-xl leading-[100%] font-semibold text-white">
              {name}
            </p>
            <p className="font-Aeonik mb-4 space-x-1.25 leading-[100%] text-[#9D9BA6]">
              <span>{role}</span>
              <span>&#x2022;</span>
              <span>{calcDaysAgo(date)}</span>
            </p>
            <p className="font-inter mb-[46px] line-clamp-4 h-22 leading-[140%] font-[300]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
