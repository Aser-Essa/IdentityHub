import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type PricingPlan = {
  planType: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
};

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const { planType, price, currency, description, features } = plan;

  const isPremium = planType === "Premium";

  return (
    <>
      <div
        className={cn(
          `xs:h-[623.4px] min-w-67.5 flex-1 rounded-[26px] border border-[#ffffff1a] bg-[linear-gradient(45deg,_#00000029,_#53546c29)] px-6.5 py-9.5 lg:h-auto lg:py-6.5`,
          isPremium && "py-9.5",
        )}
      >
        <p className="font-sora mb-[13px] text-[26px] font-semibold text-white">
          {planType}
        </p>
        <div className="space-y-5">
          <p className="font-Aeonik leading-[130%]">{description}</p>
          <span className="font-sora flex items-center text-white">
            <p className="text-[32px]">{currency}</p>
            <p className="text-[70px] leading-[70.5px] font-semibold">
              {price}
            </p>
          </span>
          <Button
            className={cn(
              "h-[38.5px] w-full",
              isPremium &&
                "bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] before:bg-[linear-gradient(135deg,_#ffe1e14d,_#ffffff4d_86%)]",
            )}
          >
            Get Started
          </Button>

          <ul>
            {features?.map((feature, idx) => (
              <li
                key={`${feature}-${idx}`}
                className="font-Aeonik flex gap-3.5 border-[#ffffff1a] py-4 not-last:border-b"
              >
                <Image
                  src={`/violet-checkmark-circle.svg`}
                  width={19}
                  height={19}
                  alt={`violet-checkmark-circle`}
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
