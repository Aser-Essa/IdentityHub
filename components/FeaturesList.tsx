import Image from "next/image";
import React from "react";

export default function FeaturesList({ mainColor, featuresList }) {
  return (
    <>
      <ul className="space-y-[19px]">
        {featuresList.map((item, idx) => (
          <li key={`${item}-${idx}`} className="flex items-start gap-3.5">
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
