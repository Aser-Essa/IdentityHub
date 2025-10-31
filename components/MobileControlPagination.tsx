import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function MobileControlPagination() {
  return (
    <>
      <div className="relative mt-5 flex h-10 w-full items-center justify-between p-4 sm:hidden">
        <div className="swiper-button-prev !relative !top-0 !left-0 !mt-0 !flex !h-8.75 !w-8.75 items-center justify-center rounded-full bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-white">
          <IoIosArrowBack className="!w-4 text-white" />
        </div>
        <div className="swiper-pagination-mobile absolute !top-1/2 flex !h-5 -translate-y-1/2 items-center justify-center gap-3 overflow-hidden"></div>
        <div className="swiper-button-next !relative !top-0 !right-0 !mt-0 !flex !h-8.75 !w-8.75 items-center justify-center rounded-full bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-white">
          <IoIosArrowForward className="!w-4 text-white" />
        </div>
      </div>
    </>
  );
}
