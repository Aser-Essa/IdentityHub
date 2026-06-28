"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

type GSAPClientWrapperProps = {
  children: React.ReactNode;
};

export default function GSAPClientWrapper({
  children,
}: GSAPClientWrapperProps) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (isMobile) return;
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
    ScrollTrigger.refresh();
  });

  useGSAP(() => {
    gsap.to(".GSAP-client-wrapper", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  return <div className="GSAP-client-wrapper opacity-0">{children}</div>;
}
