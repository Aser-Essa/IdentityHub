"use client";
import React from "react";
import { footerLinksArray } from "@/constants";
import Logo from "./Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

export default function LogoAndFooterLinks() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top 85%",
        end: "bottom 80%",
        toggleActions: isMobile
          ? "play play play play"
          : "play play play reverse",
      },
    });

    tl.from(".footer-links li", {
      x: 120,
      y: 120,
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.inOut",
    }).from(
      "footer .logo",
      {
        x: -120,
        y: 120,
        opacity: 0,
        scale: 0,
        ease: "back.out(1.2)",
      },
      "<+=.25",
    );
  });

  return (
    <>
      <div className="flex min-h-16.75 flex-wrap items-center justify-center gap-x-7 gap-y-2 border-b border-[#ffffff1a] sm:justify-between">
        <Logo />
        <ul className="footer-links font-sora flex items-center overflow-hidden text-[13px] text-nowrap">
          {footerLinksArray.map(({ label, href }) => (
            <li
              key={label}
              className="mx-3 my-[25.6px] cursor-pointer uppercase first-of-type:ml-0 last-of-type:mr-0 sm:mx-7 lg:mx-[38.5px]"
            >
              <Link to={`${href}`} smooth={true} duration={600} offset={-100}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
