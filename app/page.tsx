import GSAPClientWrapper from "@/components/GSAPClientWrapper";
import Features from "@/sections/Features";
import HeroSection from "@/sections/HeroSection";
import Pricing from "@/sections/Pricing";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 20000));

  return (
    <>
      <GSAPClientWrapper>
        <>
          <HeroSection />
          <Services />
          <Features />
          <Pricing />
          <Testimonials />
        </>
      </GSAPClientWrapper>
    </>
  );
}
