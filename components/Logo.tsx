import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

export default function Logo() {
  return (
    <Link
      to={`top`}
      smooth={true}
      duration={500}
      offset={0}
      className=" cursor-pointer"
    >
      <div className="logo flex w-fit items-center gap-[6px]">
        <div className="relative h-[21px] w-[19px]">
          <Image src={"/logo.svg"} fill alt="logo" />
        </div>
        <p className="font-source-code-pro text-xl font-bold">IdentityHub</p>
      </div>
    </Link>
  );
}
