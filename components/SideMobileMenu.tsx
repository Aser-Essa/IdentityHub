"use client";
// #140c2af2
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { navLinksArray } from "@/constants";
import { IoIosArrowForward } from "react-icons/io";
import BackgroundLights from "./BackgroundLights";

export default function SideMobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // lock body scroll
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, mounted]);

  return (
    <div className="md:hidden">
      <FaBars
        onClick={() => setOpen(true)}
        className="cursor-pointer text-2xl"
      />

      {mounted &&
        createPortal(
          <>
            <div
              onClick={() => setOpen(false)}
              className={`fixed inset-0 z-[100000] bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />

            <aside
              className={`fixed top-0 right-0 z-[1000000] h-full w-[85%] max-w-sm transform overflow-hidden rounded-l-xl border-l border-[#ffffff17] bg-[rgba(15,12,23,0.95)] p-6 pt-8 backdrop-blur-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-end gap-2 text-xl font-bold">
                  <Logo />
                </div>
                <FaXmark
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-2xl"
                />
              </div>

              <ul className="flex flex-col gap-10 text-lg font-medium">
                {navLinksArray.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      smooth
                      duration={600}
                      offset={-100}
                      onClick={() => setOpen(false)}
                      className="block cursor-pointer px-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <BackgroundLights className="top-1/2 -translate-y-1/2 opacity-60" />

              {/* CTA */}
              <Button className="!absolute bottom-6 left-1/2 flex h-[56px] w-[calc(100%-48px)] -translate-x-1/2 items-center justify-center gap-1 text-base">
                <span>Start free trial</span>
                <IoIosArrowForward />
              </Button>
            </aside>
          </>,
          document.body,
        )}
    </div>
  );
}
