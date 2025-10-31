import React from "react";
import { footerLinksArray } from "@/constants";
import Logo from "./Logo";
import Link from "next/link";

export default function LogoAndFooterLinks() {
  return (
    <>
      <div className="flex min-h-16.75 flex-wrap items-center justify-center gap-x-7 gap-y-2 border-b border-[#ffffff1a] sm:justify-between">
        <Logo />
        <ul className="font-sora flex items-center text-[13px] text-nowrap">
          {footerLinksArray.map(({ label, href }) => (
            <li
              key={label}
              className="mx-3 my-[25.6px] uppercase first-of-type:ml-0 last-of-type:mr-0 sm:mx-7 lg:mx-[38.5px]"
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
