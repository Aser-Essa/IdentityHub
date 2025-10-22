import Image from "next/image";
import React from "react";

export default function FloatingBalls() {
  return (
    <>
      <Image
        src={"/orangeBall.svg"}
        width={13}
        height={13}
        alt="orangeBall"
        className="absolute top-[5%] left-[5%] opacity-75 lg:top-[19%] lg:left-[17.8%]"
      />

      <Image
        src={"/orangeBall.svg"}
        width={6}
        height={6}
        alt="orangeBall"
        className="absolute top-[4%] right-[11%] opacity-75 lg:top-[8%] lg:right-[21%]"
      />

      <Image
        src={"/greenBall.svg"}
        width={19}
        height={19}
        alt="greenBall"
        className="absolute top-[56%] left-[8%] opacity-75 lg:top-[52.3%] lg:left-[16.5%]"
      />

      <Image
        src={"/greenBall.svg"}
        width={19}
        height={19}
        alt="greenBall"
        className="absolute top-[40%] right-[9.5%] opacity-75 lg:top-[37.7%] lg:right-[19%]"
      />

      <Image
        src={"/violetBall.svg"}
        width={10}
        height={10}
        alt="violetBall"
        className="absolute top-[35%] left-[15%] opacity-75 lg:top-[46%] lg:left-[29.7%]"
      />
    </>
  );
}
