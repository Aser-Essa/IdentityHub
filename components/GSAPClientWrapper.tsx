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
    gsap.to(".GSAP-client-wrapper", {
      opacity: 100,
    });
  });

  return <div className="GSAP-client-wrapper opacity-0">{children}</div>;
}
