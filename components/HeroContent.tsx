"use client";
import Button from "./Button";
import Label from "./Label";
import UnderlinedWord from "./UnderlinedWord";

export default function HeroContent() {
  return (
    <>
      <Label>Secure your data</Label>
      <div className="text-gradient-pink-blue-verticle font-sora relative mt-1.5 text-[clamp(32px,5vw,48px)] leading-[120%] font-semibold">
        <p>
          Identity-hub is a better way to
          <br className="hidden sm:block" /> achieve{" "}
          <UnderlinedWord>privacy</UnderlinedWord>
        </p>
      </div>
      <p className="font-Aeonik mt-5 text-[clamp(14px,2vw,20px)]">
        Make your data invisible by generating unlimited identities. The
        next-level in <br className="hidden sm:block" /> privacy protection for
        online and travel.
      </p>
      <div className="mt-6.5 flex items-center justify-center gap-3">
        <Button
          className={
            "gradient-stroke rounded-[9px] text-xs font-medium text-white before:bg-[linear-gradient(45deg,_#090edb,_#8d1ea2)]"
          }
        >
          Start free trial
        </Button>

        <Button
          className={
            "gradient-stroke rounded-[9px] bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-xs font-medium text-white before:bg-[linear-gradient(135deg,_#ffe0e04d,_#ffffff4d_6%)]"
          }
        >
          Use it Now
        </Button>
      </div>
    </>
  );
}
