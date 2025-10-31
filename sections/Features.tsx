import BackgroundLights from "@/components/BackgroundLights";
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import { FeaturesCardsData } from "@/constants";

export default function Features() {
  return (
    <section className="mt-36.5 px-6 md:px-20">
      <SectionHeader
        label={"Features"}
        title={
          <p>
            Why{" "}
            <span className="text-gradient-blue-pink-horizontal">choose</span>{" "}
            us
          </p>
        }
        subTitle={`We are the only service that provides all 3 services as
          a packaged service`}
      />

      <div className="relative mx-auto mt-8 w-full max-w-264 space-y-8">
        <BackgroundLights className="top-[-46px]" />
        {FeaturesCardsData?.map(
          ({ mainColor, title, featuresList, imageUrl }, idx) => (
            <FeatureCard
              key={`${mainColor}-${title}-${idx}`}
              mainColor={mainColor}
              title={title}
              featuresList={featuresList}
              imageUrl={imageUrl}
            />
          ),
        )}
      </div>
    </section>
  );
}
