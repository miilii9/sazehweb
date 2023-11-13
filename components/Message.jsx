"use client";
import React from "react";

export default function Message() {
  return (
    <div className="my-4 w-full h-40 bg-[#f1f1f1] shad rounded-2xl shadow-lg flex flex-col justify-between sm:px-8 md:px-6 py-4">
      <div className="flex w-full justify-between">
        <div className="sm:text-xs md:text-base">به سازه وب خوش آمدید</div>
        <div className="sm:text-xs md:text-sm">۱۸ خرداد ۱۴۰۲ ساعت ۱۶:۴۵</div>
      </div>
      <div className="flex items-center ">
        <div className=" text-xs ml-4">وضعیت:</div>
        <span className=" bg-mainOrange px-2 py-1 rounded-lg text-white md:text-base sm:text-xs">
          دیده شده
        </span>
      </div>
      <div className="md:text-base sm:text-xs">
        هدیه ورود، کد تخفیف اولین خرید. برای دریافت کد تخفیف کلیک کنید
      </div>
    </div>
  );
}
