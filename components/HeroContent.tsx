import Button from "./Button";
import Label from "./Label";
import UnderlinedWord from "./UnderlinedWord";

export default function HeroContent() {
  return (
    <div className="hero-content">
      <Label>Secure your data</Label>
      <p className="title text-gradient-pink-blue-verticle font-sora relative mt-1.5 text-[clamp(32px,5vw,48px)] leading-[120%] font-semibold">
        Identity-hub is a better way to
        <br className="hidden sm:block" /> achieve{" "}
        <UnderlinedWord size="bigger">privacy</UnderlinedWord>
      </p>
      <p className="font-Aeonik mt-5 text-[clamp(14px,2vw,20px)]">
        Make your data invisible by generating unlimited identities. The
        next-level in <br className="hidden sm:block" /> privacy protection for
        online and travel.
      </p>
      <div className="btns mt-6.5 flex items-center justify-center gap-3">
        <Button>Start free trial</Button>
        <Button
          className={
            "bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] before:bg-[linear-gradient(135deg,_#ffe0e04d,_#ffffff4d_6%)]"
          }
        >
          Use it Now
        </Button>
      </div>
    </div>
  );
}
