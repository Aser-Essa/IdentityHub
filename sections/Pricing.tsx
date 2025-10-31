import BackgroundLights from "@/components/BackgroundLights";
import PricingCard from "@/components/PricingCard";

import SectionHeader from "@/components/SectionHeader";
import { PricingPlansData } from "@/constants";
import React from "react";

export default function Pricing() {
  return (
    <section className="mt-36.5 px-6 md:px-20">
      <SectionHeader
        label={"Pricing"}
        title={
          <p>
            Our{" "}
            <span className="text-gradient-blue-pink-horizontal">Pricing</span>{" "}
            Package
          </p>
        }
      />

      <div className="relative mx-auto mt-8 w-full max-w-264 space-y-8">
        <BackgroundLights className="top-[-46px]" />

        <div className="flex flex-wrap items-center justify-center gap-5 lg:flex-nowrap">
          {PricingPlansData?.map((plan) => (
            <PricingCard key={`${plan?.planType}`} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
