import Image from "next/image";
import React from "react";

type FeaturesListProps = {
  mainColor: string;
  featuresList: string[];
};

export default function FeaturesList({
  mainColor,
  featuresList,
}: FeaturesListProps) {
  return (
    <>
      <ul className="space-y-[19px] overflow-hidden">
        {featuresList.map((item: string, idx: number) => (
          <li
            key={`${item}-${idx}`}
            className="feature-item flex items-start gap-3.5"
          >
            <Image
              src={`/${mainColor}-checkmark-circle.svg`}
              width={22}
              height={22}
              alt={`${mainColor}-checkmark-circle`}
            />
            <p className="min-h-[56px] leading-[140%]">{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
