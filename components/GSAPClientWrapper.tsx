"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

type GSAPClientWrapperProps = {
  children: React.ReactNode;
};

export default function GSAPClientWrapper({
  children,
}: GSAPClientWrapperProps) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      smoothTouch: 0.001,
      effects: true,
    });
  }, []);

  useGSAP(() => {
    gsap.to(".GSAP-client-wrapper", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  return <div className="GSAP-client-wrapper opacity-0">{children}</div>;
}
