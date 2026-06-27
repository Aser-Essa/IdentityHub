import { HeroInfoCardsDetails } from "@/constants";
import HeroInfoCard from "./HeroInfoCard";

export default function HeroInfoCards() {
  return (
    <div className=" ">
      {HeroInfoCardsDetails.map(
        ({ left, right, y, bottom, iconSrc, title, description }, idx) => (
          <HeroInfoCard
            key={`${title} , ${idx}`}
            left={left}
            right={right}
            y={y}
            bottom={bottom}
            iconSrc={iconSrc}
            title={title}
            description={description}
          />
        ),
      )}
    </div>
  );
}
