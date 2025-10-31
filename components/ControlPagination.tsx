import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ControlPagination() {
  return (
    <>
      <div>
        <div className="swiper-button-prev !left-0 !hidden !h-8.75 !w-8.75 -translate-x-1/2 items-center justify-center rounded-full bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-white sm:!flex">
          <IoIosArrowBack className="!w-4 text-white" />
        </div>
        <div className="swiper-pagination !bottom-13 hidden !h-5 items-center justify-center gap-3 overflow-hidden sm:!flex"></div>
        <div className="swiper-button-next !right-0 !hidden !h-8.75 !w-8.75 translate-x-1/2 items-center justify-center rounded-full bg-[linear-gradient(45deg,_#090edb,_#DA24BB)] text-white sm:!flex">
          <IoIosArrowForward className="!w-4 text-white" />
        </div>
      </div>
    </>
  );
}
