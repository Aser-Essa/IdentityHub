"use client";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { navLinksArray } from "@/constants";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import SideMobileMenu from "@/components/SideMobileMenu";

export default function Header() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 3.2,
    });

    tl.to("header", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.5,
      ease: "power1.inOut",
    }).from("header ul li", {
      scale: 0.5,
      opacity: 0,
      y: -20,
      x: -20,
      ease: "back.out(1.7)",
      stagger: 0.08,
      duration: 0.5,
    });
  }, []);

  return (
    <header
      className="fixed top-0 left-1/2 z-10000 mt-4 flex h-[51px] w-[calc(100%-16px)] max-w-[963px] -translate-x-1/2 items-center justify-between gap-8 rounded-[9px] border border-[#ffffff1a] bg-[rgba(15,12,23,0.17)] p-2.5 backdrop-blur-[8px] sm:w-[calc(100%-32px)] md:w-[85%]"
      style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
    >
      <Logo />

      <nav className="hidden md:block">
        <ul className="font-Aeonik flex items-center gap-5 text-[13px] text-nowrap">
          {navLinksArray.map(({ label, href }) => (
            <li key={label} className="cursor-pointer">
              <Link to={`${href}`} smooth={true} duration={600} offset={-100}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button className={"hidden md:block"}>
        <div className="flex items-center gap-1">
          <p>Start free trial</p>
          <IoIosArrowForward />
        </div>
      </Button>

      {/* <FaBars className="block cursor-pointer text-2xl md:hidden" /> */}

      <SideMobileMenu />
    </header>
  );
}
