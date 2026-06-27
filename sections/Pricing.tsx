"use client";
import BackgroundLights from "@/components/BackgroundLights";
import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";
import { PricingPlansData } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Pricing() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    gsap.from(".pricing-card", {
      scrollTrigger: {
        trigger: "#pricing",
        start: "top 30%",
        end: "bottom 0%",
        toggleActions: isMobile
          ? "play play play play"
          : "play play play reverse",
      },
      y: 400,
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      duration: 0.9,
      delay: 0.2,
      ease: "back.out(1.2)",
    });

    gsap.from(".lined-ball ", {
      scrollTrigger: {
        trigger: "#pricing",
        start: "top 80%",
        end: "bottom 0%",
        toggleActions: isMobile
          ? "play play play play"
          : "play play play reverse",
      },
      rotate: 360,
      transformOrigin: "50% 50%",
      right: "-50%",
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <section className="relative mt-20 md:mt-36.5 px-4 md:px-20" id="pricing">
        <div className="lined-ball absolute -top-26 right-4 size-20 md:size-31.5">
          <Image src="/lined-ball.svg" fill alt="lined-ball" />
        </div>
        <SectionHeader
          label={"Pricing"}
          title={
            <p>
              Our{" "}
              <span className="text-gradient-blue-pink-horizontal">
                Pricing
              </span>{" "}
              Package
            </p>
          }
        />

        <div className="relative mx-auto mt-8 w-full max-w-264 space-y-8">
          <BackgroundLights className="top-[-46px]" />
          <div className="flex flex-wrap items-center justify-center gap-5 lg:flex-nowrap">
            {PricingPlansData?.map((plan) => (
              <PricingCard key={`${plan?.planType}`} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
