import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function CopywriteAndSocialLinks() {
  return (
    <>
      <div className="flex flex-col-reverse flex-wrap items-center justify-between gap-5 sm:flex-row">
        <p className="font-sora text-xs">
          &copy; identityhub 2024. All rights reserved
        </p>
        <ul className="flex items-center gap-6.5">
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
              href={"https://www.facebook.com/asser.yasser.711906/"}
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
