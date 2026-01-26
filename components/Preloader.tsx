"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import BackgroundLights from "./BackgroundLights";
import FloatingBalls from "./FloatingBalls";

export default function Preloader() {
  useGSAP(() => {
    const coreTimeline = gsap.timeline();
    const infiniteTimeline = gsap.timeline();
    const endTimeline = gsap.timeline();
    const titleSplit = SplitText.create(".logo-title", { type: "chars" });

    infiniteTimeline
      .to(".preloader-wrapper .FloatingBalls img:nth-child(even)", {
        x: 50,
        y: 50,
        duration: 5,
        yoyo: true,
        stagger: 1.2,
        repeat: -1,
        delay: 0.5,
        ease: "power1.inOut",
      })
      .to(
        ".preloader-wrapper .FloatingBalls img:nth-child(odd)",
        {
          x: -50,
          y: -50,
          duration: 5,
          yoyo: true,
          stagger: 1.2,
          repeat: -1,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".preloader-wrapper .logo-container",
        {
          scale: 1.1,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        },
        "-=0.4",
      );

    coreTimeline
      .to(".preloader-wrapper", {
        opacity: 1,
      })
      .from(
        ".preloader-wrapper .FloatingBalls img",
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.inOut(1.7)",
        },
        "<",
      )
      .from(".preloader-wrapper  .logo-container", {
        opacity: 0,
        scale: 0,
        ease: "back.out(4)",
        duration: 0.35,
      })
      .from(
        ".progress-container",
        {
          opacity: 0,
        },
        "<",
      )
      .from(
        ".logo-title-wrapper",
        {
          opacity: 0,
          width: 0,
        },
        "-=0.1",
      )
      .from(
        titleSplit.chars,
        {
          opacity: 0,
          y: 25,
          stagger: 0.05,
          duration: 0.15,
        },
        "-=0.35",
      )
      .to(
        ".progress-fill",
        {
          width: "100%",
          duration: 0.8,
          ease: "power1.inOut",
        },
        "-=0.35",
      );

    coreTimeline.eventCallback("onComplete", () => {
      endTimeline
        .to(
          ".preloader-wrapper .BackgroundLights , .preloader-wrapper .FloatingBalls ",
          {
            opacity: 0.5,
            display: "none",
            duration: 0.3,
            ease: "power2.inOut",
          },
        )
        .to(
          ".preloader-wrapper",
          {
            duration: 0.5,
            ease: "power2.inOut",
            y: 1250,
            x: 5000,
            scale: 50,
          },
          "<+=0.3",
        )
        .to(
          ".preloader-wrapper",
          {
            opacity: 0,
            ease: "power2.inOut",
          },
          "-=0.35",
        )
        .to(".preloader-wrapper", {
          display: "none",
        });
    });
  }, []);

  return (
    <div className="preloader-wrapper bg-darkBase fixed inset-0 z-[99999] flex items-center justify-center opacity-0">
      <div className="absolute min-h-screen w-full">
        <BackgroundLights className="top-27.5 z-50 opacity-60" />
        <div className="absolute top-[20%] z-50 h-full w-full">
          <FloatingBalls />
        </div>
      </div>

      <div className="relative z-[2000] flex flex-col items-center gap-10">
        <div className="flex w-fit items-center justify-center gap-4">
          <div className="logo-container relative h-[70px] w-[65px] scale-100">
            <Image src={"/logo.svg"} fill alt="logo" />
          </div>
          <div className="logo-title-wrapper overflow-hidden">
            <p className="logo-title font-source-code-pro text-3xl font-bold text-nowrap">
              IdentityHub
            </p>
          </div>
        </div>

        <div className="progress-container relative z-[2000] flex flex-col items-center gap-4">
          <div className="h-2 w-54 overflow-hidden rounded-full bg-white/20">
            <div className="progress-fill bg-softBlue h-full w-0 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
