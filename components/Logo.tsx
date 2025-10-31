import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex w-fit items-center gap-[6px]">
        <div className="relative h-[21px] w-[19px]">
          <Image src={"/logo.svg"} fill alt="logo" />
        </div>
        <p className="font-source-code-pro text-xl font-bold">IdentityHub</p>
      </div>
    </Link>
  );
}
