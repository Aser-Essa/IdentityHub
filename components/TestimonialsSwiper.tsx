"use client";
import { testimonialsData } from "@/constants";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ControlPagination from "./ControlPagination";
import MobileControlPagination from "./MobileControlPagination";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSwiper() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    console.log(isMobile);
    if (typeof window === "undefined") return;
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      slidesPerGroupSkip: 1,
      spaceBetween: 20,
      initialSlide: 3,

      pagination: {
        el: isMobile ? ".swiper-pagination-mobile" : ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 5,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, [isMobile]);

  return (
    <>
      <div className="relative mx-auto mt-8 max-w-264 rounded-[16px] bg-[linear-gradient(45deg,_#00000029,_#52536b29)] p-4 sm:p-8">
        <div className="swiper w-full overflow-hidden rounded-[16px]">
          <div className="swiper-wrapper rounded-[16px]">
            {testimonialsData?.map((testimonial, idx) => (
              <TestimonialCard
                key={`${testimonial?.id}-${idx}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
        <ControlPagination />
      </div>

      <MobileControlPagination />
    </>
  );
}
