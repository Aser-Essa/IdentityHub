import CTA from "@/components/CTA";
import GSAPClientWrapper from "@/components/GSAPClientWrapper";
import Features from "@/sections/Features";
import HeroSection from "@/sections/HeroSection";
import Pricing from "@/sections/Pricing";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <GSAPClientWrapper>
        <>
          <HeroSection />
          <Services />
          <Features />
          <Pricing />
          <Testimonials />
          <CTA />
        </>
      </GSAPClientWrapper>
    </>
  );
}
