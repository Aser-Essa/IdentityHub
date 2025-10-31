import Image from "next/image";
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
  return (
    <>
      <div className="gradient-stroke font-Aeonik h-fit min-h-102.5 w-full rounded-[16px] bg-[linear-gradient(45deg,_#00000028,_#53546c28)] px-4 py-8 before:bg-[linear-gradient(45deg,_#777cf705,_#101132)] sm:p-8">
        <div className="flex items-center justify-between gap-10">
          <div className="flex h-full w-full gap-4">
            <div className="relative aspect-[10.63/100] h-[87%] min-w-8">
              <Image
                src={`/${mainColor}-down-arrow-line.png`}
                fill
                alt={`${mainColor}-down-arrow-line`}
              />
            </div>
            <div className="w-full space-y-8.5 sm:min-w-100 lg:max-w-111.5">
              <p className="text-[26px] leading-[120%] font-medium">{title}</p>
              <FeaturesList featuresList={featuresList} mainColor={mainColor} />
            </div>
          </div>

          <div className="relative hidden h-[284px] w-full max-w-[387px] min-[950px]:block">
            <Image
              src={imageUrl || "/feature-card-image1.png"}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
