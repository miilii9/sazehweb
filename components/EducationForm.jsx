"use client"

import React from 'react'
import persian from "react-date-object/calendars/persian"
import DatePicker from 'react-multi-date-picker'
import persian_fa from "react-date-object/locales/persian_fa"

export default function EducationForm({ setEducation }) {


    return (
        <form className='backdrop-blur-3xl w-full absolute top-0 z-50 flex flex-col items-center justify-center sm:p-12  lg:px-[20rem] overflow-y-hidden md:pt-24'>
            <div className="flex flex-col w-full h-full mb-4">
                <div className="w-full h-full mb-4">
                    <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تاریخ شروع</label>

                    <DatePicker
                        style={{ fontSize: "14px", backgroundColor: "#F9FAFB", color: "#A4ABB6", height: "41px", boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05) ", borderRadius: "0.5rem", borderColor: "rgb(209 213 219)" }}
                        locale={persian_fa}
                        calendar={persian}
                    />
                </div>
                <div className="w-full h-full sm:mb-0 ">
                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تاریخ پایان</label>

                    <DatePicker
                        style={{ fontSize: "14px", backgroundColor: "#F9FAFB", color: "#A4ABB6", height: "41px", boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05) ", borderRadius: "0.5rem", borderColor: "rgb(209 213 219)" }}
                        locale={persian_fa}
                        calendar={persian}
                    />
                </div>
            </div>
            <div className='w-full flex justify-start my-4'>
                <label className='ml-3 block mb-2 text-sm font-medium text-gray-900'>فارغ التحصیل :</label>

                <label className="relative inline-flex items-center mb-5 cursor-pointer ">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 p-1 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mainOrange"></div>
                </label>
            </div>
            <div className=" w-full mb-4">
                <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">مقطع</label>
                <input type="text" id="state" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="دیپلم، لیسانس و..." required />
            </div>

            <div className="mb-6 w-full">
                <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رشته تحصیلی</label>
                <input type="text" id="city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='سابقه کاری یا...' required />
            </div>
            <div className="mb-6 w-full">

                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">توضیحات بیشتر</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " ></textarea>

            </div>

            <button onClick={() => setEducation(false)} type="submit" className="text-white bg-mainOrange hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">ثبت اطلاعات</button>
        </form>
    )
}
