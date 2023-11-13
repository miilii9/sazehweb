import React from 'react'

export default function SocialForm({ setSocial }) {
    return (
        <form className='backdrop-blur-3xl w-full absolute top-0 z-50 flex flex-col items-center justify-center sm:p-12 lg:px-[20rem] overflow-y-hidden h-screen'>
            <div className="w-full mb-4">
                <select id="socials" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option selected>انتخاب کنید</option>
                    <option value="instagram">اینستاگرام</option>
                    <option value="twitter">توییتر</option>
                    <option value="whatsapp">واتساپ</option>
                    <option value="telegram">تلگرام</option>
                </select>
            </div>
            <div className="mb-6 w-full">
                <label for="socialurl" className="block mb-2 text-sm font-medium text-gray-900 ">آدرس شبکه مجازی</label>
                <input type="text" id="socialurl" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='http://instagram.com/ID' required />
            </div>

            <button onClick={() => setSocial(false)} type="submit" className="text-white bg-mainOrange hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">ثبت آدرس</button>
        </form>
    )
}
