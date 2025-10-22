import React from "react";
import Label from "./Label";
import Button from "./Button";

export default function HeroContent() {
  return (
    <>
      <Label>Secure your data</Label>
      <p className="text-gradient-pink-blue font-sora mt-1.5 text-[clamp(30px,5vw,48px)] leading-[120%] font-semibold">
        Identity-hub is a better way to
        <br className="hidden sm:block" /> achieve privacy
      </p>
      <p className="font-Aeonik mt-5 text-[clamp(14px,2vw,20px)]">
        Make your data invisible by generating unlimited identities. The
        next-level in <br className="hidden sm:block" /> privacy protection for
        online and travel.
      </p>
      <div className="mt-6.5 flex items-center justify-center gap-3">
        <Button
          className={
            "gradient-pink-blue-stroke rounded-[9px] text-xs font-medium text-white"
          }
        >
          Start free trial
        </Button>

        <Button
          className={
            "gradient-white-stroke rounded-[9px] bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-xs font-medium text-white"
          }
        >
          Use it Now
        </Button>
      </div>
    </>
  );
}
