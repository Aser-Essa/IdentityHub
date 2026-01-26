"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export default function CopywriteAndSocialLinks() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const textSplit = SplitText.create("footer .copy", {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: isMobile
          ? "play play play play"
          : "play play play reverse",
      },
    });

    tl.from(textSplit.words, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.35,
      ease: "power1.inOut",
    }).from(
      ".social-links li",
      {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(5)",
      },
      "<+=.1",
    );
  });

  return (
    <>
      <div className="flex flex-col-reverse flex-wrap items-center justify-between gap-5 sm:flex-row">
        <p className="copy font-sora overflow-hidden text-xs">
          &copy; identityhub 2024. All rights reserved
        </p>
        <ul className="social-links flex items-center gap-6.5">
          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1B1530] text-sm text-white">
            <Link
              href={"https://www.facebook.com/asser.yasser.711906/"}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1B1530] text-sm text-white">
            <Link
              href={"https://www.linkedin.com/in/asser-essa-a03407341/"}
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </li>

          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1B1530] text-sm text-white">
            <Link
              href={"https://www.instagram.com/asser_essa_"}
              target="_blank"
            >
              <AiFillInstagram />
            </Link>
          </li>

          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1B1530] text-sm text-white">
            <Link
              href={"https://www.linkedin.com/in/asser-essa-a03407341/"}
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
