import BackgroundLights from "@/components/BackgroundLights";
import FloatingBalls from "@/components/FloatingBalls";
import HeroContent from "@/components/HeroContent";
import HeroVisual from "@/components/HeroVisual";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative">
      <BackgroundLights className="top-27.5" />
      <Image
        src={"/radio-waves.svg"}
        fill
        alt="radio-waves BG"
        className="!top-1/2 !left-1/2 -z-10 aspect-square !h-auto !w-[90%] -translate-1/2 object-cover lg:!top-0 lg:!h-full lg:min-h-[998px] lg:!w-full lg:translate-y-0"
      />
      <FloatingBalls />
      <div className="mx-auto max-w-[794px] px-6 pt-[6%] text-center lg:pt-[66px]">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
