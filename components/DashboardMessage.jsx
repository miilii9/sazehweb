"use client";
import React from "react";
import Image from "next/image";

export default function DashboardMessage() {
  return (
    <div className="bg-slate-100 p-4 rounded-2xl my-4">
      <div className="flex w-full justify-between items-center h-full">
        <div className="text-slate-600 sm:text-xs md:text-sm">
          به سازه وب خوش آمدید!
        </div>
        <div className="text-xs text-mainOrange">۱۸ خرداد ۱۴۰۲ ساعت ۱۶:۴۵</div>
      </div>
      <button className="mt-5 w-full flex justify-end items-center">
        <div className="text-slate-600 text-xs">دریافت هدیه</div>
        <span className="mr-2">
          <Image src="/pannelimages/gift.svg" width={20} height={20} />
        </span>
      </button>
    </div>
  );
}
