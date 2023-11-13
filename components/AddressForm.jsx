"use client"
import React from 'react'

export default function AddressForm({ setAddress }) {
    return (
        <form className='backdrop-blur-3xl w-full absolute top-0 z-50 flex flex-col items-center justify-center sm:p-12 lg:px-[20rem] overflow-y-hidden h-screen'>
            <div class="mb-6 w-full">
                <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">استان</label>
                <input type="text" id="state" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="تهران" required />
            </div>
            <div class="mb-6 w-full">
                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
                <input type="text" id="city" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='تهران' required />
            </div>
            <div class="mb-6 w-full">

                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس دقیق</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="خیابان، کوچه، پلاک و ..."></textarea>

            </div>
            <button onClick={() => setAddress(false)} type="submit" class="text-white bg-mainOrange hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">ثبت آدرس</button>
        </form>
    )
}
