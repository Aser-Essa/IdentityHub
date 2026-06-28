"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import Arrow from "./Arrow";
import FeaturesList from "./FeaturesList";

type FeaturesCardsDataType = {
  mainColor: string;
  title: string;
  featuresList: string[];
  imageUrl: string;
};

export default function FeatureCard({
  mainColor,
  title,
  featuresList,
  imageUrl,
}: FeaturesCardsDataType) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const titleSplit = SplitText.create(".feature-title", {
        type: "chars",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 50%",
          end: "bottom 10%",
        },
      });

      tl.from(cardRef.current, {
        opacity: 0,
        ease: "power1.inOut",
      })
        .from(
          "#arrow-circle",
          {
            scale: 0,
            opacity: 0,
            transformOrigin: "50% 50%",
            ease: "back.out(1.3)",
          },
          "<",
        )
        .from(
          titleSplit.chars,
          {
            y: 100,
            opacity: 0,
            stagger: 0.03,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "<-=.1",
        )
        .from(
          "#arrow-circle",
          {
            rotate: -90,
            transformOrigin: "50% 50%",
            duration: 0.25,
            ease: "power1.inOut",
          },
          ">-=.25",
        )
        .from(
          "#arrow-line",
          {
            scaleY: 0,
            opacity: 50,
            ease: "power1.inOut",
          },
          "<+=0.1",
        )
        .from(
          ".feature-item",
          {
            opacity: 0,
            stagger: 0.15,
            x: "60%",
            ease: "power1.inOut",
          },
          "<-=.1",
        )
        .from(
          ".feature-card-image",
          {
            scale: 0,
            y: 150,
            x: 150,
            opacity: 0,
            duration: .6,
            ease: "power1.inOut",
          },
          "<",
        );
    },
    { scope: cardRef },
  );

  return (
    <>
      <div
        ref={cardRef}
        className="feature-card gradient-stroke font-Aeonik h-fit min-h-102.5 w-full rounded-[16px] bg-[linear-gradient(45deg,_#00000028,_#53546c28)] px-4 py-8 before:bg-[linear-gradient(45deg,_#777cf705,_#101132)] sm:p-8"
      >
        <div className="flex items-center justify-between gap-10">
          <div className="flex h-full w-full gap-4">
            <div className="relative aspect-[10.63/100] h-[87%] min-w-8">
              <Arrow color={mainColor} />
            </div>
            <div className="w-full space-y-8.5 sm:min-w-100 lg:max-w-111.5">
              <p className="feature-title overflow-hidden text-[26px] leading-[120%] font-medium">
                {title}
              </p>
              <FeaturesList featuresList={featuresList} mainColor={mainColor} />
            </div>
          </div>

          <div className="relative hidden h-[284px] w-full max-w-[387px] min-[950px]:block">
            <Image
              src={imageUrl || "/feature-card-image1.png"}
              fill
              alt=""
              className="feature-card-image object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
