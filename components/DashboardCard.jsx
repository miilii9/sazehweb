import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function DashboardCard() {
  return (
    <div className=" sm:h-32 md:h-40  shadow-lg bg-white w-full rounded-2xl overflow-hidden flex my-8">
      <div className="relative justify-center sm:w-80 md:w-96 sm:h-auto md:height-auto bg-slate-200 flex items-center">
        <Image src="/pannelimages/python.jpg" fill />
      </div>
      {/* Card Content */}
      <div className="w-full h-full sm:py-4 md:py-0 ">
        {/* Card Content */}
        <div className="flex flex-col w-full justify-start  md:pr-14 sm:pr-3 mt-4">
          <div className="mb-2 sm:text-sm md:text-base">
            آموزش کاربردی زبان پایتون
          </div>
          <div className="flex sm:flex-col md:flex-row">
            <div className=" text-xs flex  items-center">
              <span className="ml-1">
                <Image src="/pannelimages/clock.svg" width={18} height={18} />
              </span>
              <span> طول دوره:</span>
              <span className="mr-1 text-mainOrange">۴:۲۷:۵۵</span>
            </div>
            <div className=" text-xs flex items-center sm:mr-0 md:mr-4">
              <span className="ml-1">
                <Image src="/pannelimages/record.svg" width={18} height={18} />
              </span>
              <span>تعداد قسمت ها:</span>
              <span className="mr-1 text-mainOrange">۴۱ جلسه</span>
            </div>
          </div>
        </div>
        <div className="pl-6 mt-4 flex justify-end sm:hidden md:flex">
          <button className="px-6 py-2 border border-mainOrange rounded-xl text-mainOrange">
            مشاهده دوره
          </button>
        </div>
      </div>
    </div>
  );
}
