"use client";

import React from "react";
import Image from "next/image";
import BackgroundLights from "./BackgroundLights";
import Button from "./Button";
import UnderlinedWord from "./UnderlinedWord";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function CTA() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#CTA",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: isMobile
          ? "play play play play"
          : "play reverse play reverse",
      },
    });

    tl.from(".CTA-section p", {
      y: 80,
      duration: 0.5,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.1,
    })
      .from(
        ".CTA-section .radio-wavess",
        {
          scale: 0,
          ease: "power2.inOut",
        },
        "<+=.1",
      )
      .fromTo(
        ".CTA-section .BackgroundLightss",
        { opacity: 0 },
        { opacity: 0.45, duration: 0.5, ease: "power2.out" },
        "<+=.2",
      )
      .from(
        ".CTA-section button",
        {
          opacity: 0,
          scale: 0,
          ease: "back.out(1.2)",
        },
        "<+=.2",
      );
  });

  return (
    <>
      <section className="CTA-section relative mt-36.5 min-h-[504px]" id="CTA">
        <BackgroundLights className="BackgroundLightss -top-11.5 left-[42.6%] z-50 max-h-120 max-w-120 opacity-45 blur-[50px]" />
        <div className="radio-wavess absolute top-1/2 !left-1/2 aspect-square max-h-[595px] w-[95%] max-w-[595px] -translate-x-1/2 -translate-y-1/2 sm:-top-11.5 sm:w-[90%] sm:translate-y-0">
          <Image
            src={"/radio-waves.svg"}
            fill
            alt="radio-waves BG"
            className="object-cover"
          />
        </div>
        <div className="font-sora px-4 md:px-20 absolute top-1/2 left-1/2 z-50 w-full -translate-1/2 text-center">
          <p className="mb-5 text-[clamp(32px,5vw,48px)] leading-[120%] font-semibold text-white">
            Be part of the future of <br className="hidden sm:block" />
            <UnderlinedWord size="smaller">IdentityHub</UnderlinedWord>
          </p>
          <p className="text-[clamp(14px,2vw,20px)] font-[300] sm:leading-[25.6px]">
            Unleash the power of AI within Brainwave. Upgrade your
            <br className="hidden sm:block" /> productivity with Brainwave, the
            open AI chat app.
          </p>
          <Button className="mt-6.5 h-8 bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] before:bg-[linear-gradient(135deg,_#ffe0e04d,_#ffffff4d_6%)]">
            Start free trail
          </Button>
        </div>
      </section>
    </>
  );
}
