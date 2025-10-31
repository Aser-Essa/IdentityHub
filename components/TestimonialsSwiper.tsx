"use client";
import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/constants";

export default function TestimonialsSwiper() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      slidesPerGroupSkip: 1,
      spaceBetween: 20,
      initialSlide: 3,

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
      <div className="relative mx-auto mt-8 max-w-264 rounded-[16px] bg-[linear-gradient(45deg,_#00000029,_#52536b29)] p-8">
        <div className="swiper w-full overflow-hidden rounded-[16px]">
          <div className="swiper-wrapper rounded-[16px]">
            {testimonialsData?.map((testimonial, idx) => (
              <TestimonialCard
                key={`${testimonial?.id}-${idx}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="swiper-pagination !bottom-5 flex !h-5 items-center justify-center gap-3 overflow-hidden"></div>
        </div>
        <div className="swiper-button-prev !left-0 flex !h-8.75 !w-8.75 -translate-x-1/2 items-center justify-center rounded-full bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-white">
          <IoIosArrowBack className="!w-4 text-white" />
        </div>
        <div className="swiper-button-next !right-0 flex !h-8.75 !w-8.75 translate-x-1/2 items-center justify-center rounded-full bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-white">
          <IoIosArrowForward className="!w-4 text-white" />
        </div>
      </div>
    </>
  );
}
