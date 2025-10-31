import Features from "@/sections/Features";
import HeroSection from "@/sections/HeroSection";
import Pricing from "@/sections/Pricing";
import Services from "@/sections/Services";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

  return (
    <>
      <HeroSection />
      <Services />
      <Features />

      <Pricing />

      <div className="h-[200vh]"></div>
    </>
  );
}
