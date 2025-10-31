import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { ServicesCardsData } from "@/constants";

export default function Services() {
  return (
    <>
      <section className="mt-36.5 px-4 sm:px-10">
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
