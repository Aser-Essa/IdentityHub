"use client";
import HeroContent from "@/components/HeroContent";
import HeroVisual from "@/components/HeroVisual";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".herosection",
        start: "top 25%",
        end: "85% 20%",
      },
    });

    tl.from(".hero-content .label", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    })
      .from(
        ".hero-content p",
        {
          y: 20,
          duration: 0.5,
          opacity: 0,
          ease: "power1.inOut",
          stagger: 0.05,
        },
        "-=0.8",
      )
      .from(
        ".hero-content .btns button:first-of-type ",
        {
          opacity: 0,
          x: -30,
          ease: "power1.inOut",
        },
        "-=0.55",
      )
      .from(
        ".hero-content .btns button:last-of-type ",
        {
          opacity: 0,
          x: 30,
          ease: "power1.inOut",
        },
        "<",
      )
      .from(
        ".herosection .radio-waves",
        {
          width: 0,
          duration: 2,
          delay: 0.08,
          ease: "power2.inOut",
        },
        "",
      )
      .from(
        ".herosection-image",
        {
          y: 300,
          opacity: 0,
          delay: 0.2,
          duration: 0.65,
          ease: "power1.inOut",
        },
        "<",
      )
      .from(
        ".HeroInfoCard",
        {
          opacity: 0,
          left: "50%",
          top: "50%",
          duration: 0.65,
          delay: 0.2,
          ease: "power1.inOut",
        },
        "<",
      )
      .fromTo(
        ".herosection .BackgroundLights",
        { opacity: 0.3 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "<",
      )
      .from(
        ".herosection .FloatingBalls img",
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.inOut(1.7)",
        },
        "<",
      )
      .to(
        ".herosection .FloatingBalls img:nth-child(even)",
        {
          x: 50,
          y: 50,
          duration: 5,
          yoyo: true,
          stagger: 1.2,
          repeat: -1,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".herosection .FloatingBalls img:nth-child(odd)",
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
      );
  }, []);

  return (
    <section className="herosection relative mt-16.75">
      <div className="mx-auto max-w-[794px] px-4 pt-[6%] text-center lg:pt-[66px]">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
