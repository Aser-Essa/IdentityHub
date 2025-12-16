"use client";
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

  return <>{children}</>;
}
