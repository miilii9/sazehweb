import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Coursenav() {
  return (
    <nav className="sticky top-20 w-full shadow-md flex justify-center bg-[#f1f1f1] z-50">
      <div className="w-full h-16 flex items-center sm:justify-center md:justify-between md:container">
        {/* Nav Icons */}
        <div className="flex md:w-auto sm:justify-center md:justify-start sm:w-full">
          <div className="sm:mx-3 md:mx-6 items-center flex">
            <span className="ml-1 sm:w-4 sm:h-4 md:w-auto md:h-auto">
              <Image src="/pannelimages/intro.svg" width={20} height={20} />
            </span>
            <span className="sm:text-xs md:text-sm text-mainOrange">معرفی</span>
          </div>
          <div className="sm:mx-3 md:mx-6 items-center flex">
            <span className="ml-1 sm:w-4 sm:h-4 md:w-auto md:h-auto ">
              <Image src="/pannelimages/chat.svg" width={20} height={20} />
            </span>
            <span className="sm:text-xs md:text-sm">مخاطبین</span>
          </div>
          <div className="sm:mx-3 md:mx-6 items-center flex">
            <span className="ml-1 sm:w-4 sm:h-4 md:w-auto md:h-auto ">
              <Image src="/pannelimages/board.svg" width={20} height={20} />
            </span>
            <span className="sm:text-xs md:text-sm">پیشنیاز ها</span>
          </div>
          <div className="sm:mx-3 md:mx-6 items-center flex">
            <span className="ml-1 sm:w-4 sm:h-4 md:w-auto md:h-auto">
              <Image src="/pannelimages/tutors.svg" width={20} height={20} />
            </span>
            <span className="sm:text-xs md:text-sm">اساتید دوره</span>
          </div>
          <div className="sm:mx-3 md:mx-6 items-center flex">
            <span className="ml-1 sm:w-4 sm:h-4 md:w-auto md:h-auto">
              <Image src="/pannelimages/docs.svg" width={20} height={20} />
            </span>
            <span className="sm:text-xs md:text-sm">سرفصل ها</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
