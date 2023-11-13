"use client"

import React from 'react'
import { useState } from 'react'
import persian from "react-date-object/calendars/persian"
import DatePicker from 'react-multi-date-picker'
import persian_fa from "react-date-object/locales/persian_fa"

export default function ProfileForm({ setProfile }) {


    return (
        <form className='backdrop-blur-3xl w-full absolute top-0 z-50 flex flex-col items-center justify-center sm:p-12  lg:px-[20rem] overflow-y-hidden md:pt-16 h-screen'>
            <div className="flex sm:flex-row md:flex-col w-full mb-4">
                <div className="w-full h-full sm:mb-0 md:mb-4">
                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تاریخ تولد</label>

                    <DatePicker
                        style={{ fontSize: "14px", backgroundColor: "#F9FAFB", color: "#A4ABB6", height: "41px", boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05) ", borderRadius: "0.5rem", borderColor: "rgb(209 213 219)" }}
                        locale={persian_fa}
                        calendar={persian}
                    />
                </div>
                <div class=" w-full">
                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تحصیلات</label>
                    <input type="text" id="state" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="دیپلم، لیسانس و..." required />
                </div>
            </div>
            <div class="mb-6 w-full">
                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تجربه</label>
                <input type="text" id="city" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='سابقه کاری یا...' required />
            </div>
            <div class="mb-6 w-full">

                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">توضیحات بیشتر</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " ></textarea>

            </div>
            <div class="flex items-center justify-center w-full mb-6">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">برای آپلود کلیک کنید</span> یا اینجا رها کنید</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>
            <button onClick={() => setProfile(false)} type="submit" class="text-white bg-mainOrange hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ثبت اطلاعات</button>
        </form>
    )
}
