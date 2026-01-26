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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function TestimonialsSwiper() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      slidesPerGroupSkip: 1,
      spaceBetween: 20,
      initialSlide: Math.floor(testimonialsData.length / 2) || 0,

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
    return () => {
      swiper.destroy(true, true);
    };
  }, [isMobile]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".TestimonialsSwiper",
        start: "top 60%",
        end: "bottom 10%",
      },
    });

    tl.from(".TestimonialsSwiper", {
      opacity: 0,
      ease: "power1.inOut",
    })
      .from(
        ".TestimonialsSwiper .swiper",
        {
          opacity: 0,
          scale: 0,
          duration: 0.7,
          ease: "power1.inOut",
        },
        ">-=.15",
      )
      .from(
        ".swiper-button-next",
        {
          opacity: 0,
          scale: 0,
          x: 50,
          ease: "back.out(1.2)",
        },
        ">-=.1",
      )
      .from(
        ".swiper-button-prev",
        {
          opacity: 0,
          scale: 0,
          x: -50,
          ease: "back.out(1.2)",
        },
        "<",
      );
  });

  return (
    <>
      <div className="TestimonialsSwiper relative mx-auto mt-8 max-w-264 rounded-[16px] bg-[linear-gradient(45deg,_#00000029,_#52536b29)] p-4 sm:p-8">
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
