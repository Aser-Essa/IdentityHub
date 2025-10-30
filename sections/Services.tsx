import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <>
      <section className="mt-36.5 px-6 sm:px-10">
        <SectionHeader
          label={"Services"}
          title={
            <p>
              See our services for
              <br /> secure your{" "}
              <span className="text-gradient-blue-pink-horizontal">Data</span>
            </p>
          }
          subTitle={`Make your data invisible by generating unlimited identities. The 
            next-level in privacy protection for online and travel.`}
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <ServiceCard
            icon={
              <Image
                src={"/service-card-1.svg"}
                width={42}
                height={42}
                alt="service-card-1"
              />
            }
            title={"Personal Information removal"}
            description={
              "Lets users quickly find answers to their questions without having to search through multiple sources."
            }
          />

          <ServiceCard
            icon={
              <Image
                src={"/service-card-2.svg"}
                width={42}
                height={42}
                alt="service-card-2"
              />
            }
            title={"Cloaking Alias Profiles"}
            description={
              "Lets users quickly find answers to their questions without having to search through multiple sources."
            }
          />

          <ServiceCard
            icon={
              <Image
                src={"/service-card-3.svg"}
                width={42}
                height={42}
                alt="service-card-3"
              />
            }
            title={"Virtual identities Security"}
            description={
              "Lets users quickly find answers to their questions without having to search through multiple sources."
            }
          />
        </div>
      </section>
    </>
  );
}
