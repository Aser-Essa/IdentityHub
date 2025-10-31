import HeroContent from "@/components/HeroContent";
import HeroVisual from "@/components/HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative mt-16.75">
      <div className="mx-auto max-w-[794px] px-4 pt-[6%] text-center lg:pt-[66px]">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
