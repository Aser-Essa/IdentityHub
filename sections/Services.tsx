"use client";

import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { ServicesCardsData } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function Services() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 50%",
        end: "bottom 0%",
        toggleActions: isMobile
          ? "play play play play"
          : "play play play reverse",
      },
      top: 450,
      stagger: 0.2,
    });
  });

  return (
    <>
      <section className="mt-20 md:mt-36.5 px-0 sm:px-10" id="services">
        <SectionHeader
          label={"Services"}
          title={
            <p>
              See our services for
              <br /> secure your{" "}
              <span className="text-gradient-blue-pink-horizontal px-4 sm:px-0">Data</span>
            </p>
          }
          subTitle={`Make your data invisible by generating unlimited identities. The 
            next-level in privacy protection for online and travel.`}
        />

        <div className="service-card-container mt-10 flex flex-wrap items-center justify-center gap-5 overflow-hidden">
          {ServicesCardsData?.map(({ title, description, iconSrc }) => (
            <ServiceCard
              key={title}
              iconSrc={iconSrc}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
