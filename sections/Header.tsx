import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { navLinksArray } from "@/constants";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="top-0 mx-2 mt-4 flex h-[51px] items-center justify-between gap-8 rounded-[9px] border border-[#ffffff1a] bg-[rgba(15,12,23,0.17)] p-2.5 sm:mx-4 md:mx-14 lg:mx-40 2xl:mx-71.5">
      <Logo />
      <nav className="hidden md:block">
        <ul className="font-Aeonik flex items-center gap-5 text-[13px] text-nowrap">
          {navLinksArray.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        className={
          "gradient-stroke hidden rounded-[9px] text-xs before:bg-[linear-gradient(45deg,_#090edb,_#8d1ea2)] md:block"
        }
      >
        <div className="flex items-center gap-1">
          <p>Start free trial</p>
          <IoIosArrowForward />
        </div>
      </Button>

      <FaBars className="block cursor-pointer text-2xl md:hidden" />
    </header>
  );
}
