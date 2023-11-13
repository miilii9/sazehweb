"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import AddressForm from "../../../../components/AddressForm";
import ProfileForm from "../../../../components/ProfileForm";
import EducationForm from "../../../../components/EducationForm";
import SocialForm from "../../../../components/SocialForm";
export default function profilePage() {
  const [address, setAddress] = useState(false);
  const [profile, setProfile] = useState(false);
  const [education, setEducation] = useState(false);
  const [social, setSocial] = useState(false);
  return (
    <main className="w-full flex justify-center pt-10 pb-48 bg-[#FAFAFA]">
      {address ? <AddressForm setAddress={setAddress} /> : null}
      {profile ? <ProfileForm setProfile={setProfile} /> : null}
      {education ? <EducationForm setEducation={setEducation} /> : null}
      {social ? <SocialForm setSocial={setSocial} /> : null}

      <div className="w-full md:container  flex px-4 flex-col">
        <div className="w-full flex md:flex-row sm:flex-col">
          <section className="sm:w-full md:w-2/5 md:h-full md:p-4">
            {/* User Info */}
            <div className="w-full md:h-64 bg-white rounded-2xl mb-6 flex flex-col py-4 sm:px-6 md:px-8 shadow-lg">
              <div className="flex items-center">
                <div className="sm:w-16 sm:h-16 md:h-auto md:w-auto">
                  <Image
                    src="/pannelimages/biguser.png"
                    width={90}
                    height={90}
                  />
                </div>
                <span className="md:text-2xl">فلانی بهمانی</span>
              </div>
              <div className="flex w-full justify-between mt-4 md:px-4">
                <div className="sm:text-[12px] md:text-sm"> ایمیل</div>
                <div className="sm:text-[12px] md:text-sm">
                  example@gmail.com
                </div>
              </div>
              <div className="flex w-full justify-between mt-4 md:px-4">
                <div className="sm:text-[12px] md:text-sm"> شماره تماس</div>
                <div className="sm:text-[12px] md:text-sm">09145024147</div>
              </div>
              <button
                onClick={() => setProfile(true)}
                className="w-full flex justify-center items-center mt-3"
              >
                <div className="text-mainOrange sm:text-[12px] md:text-sm">
                  ویرایش اطلاعات
                </div>
                <div className="mr-1">
                  <Image src="/pannelimages/edit.svg" width={20} height={20} />
                </div>
              </button>
            </div>
            <div className="w-full flex flex-col justify-center rounded-2xl h-28 bg-white p-8 shadow-lg">
              <div className="flex justify-between items-center">
                <div className=" md:text-lg font-bold">آدرس</div>
                <button onClick={() => setAddress(true)}>
                  <Image src="/pannelimages/edit.svg" width={20} height={20} />
                </button>
              </div>
              <div className="flex w-full mt-6">
                <span className="ml-1">
                  <Image
                    src="/pannelimages/location.svg"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="sm:text-sm">مشخص نشده</span>
              </div>
            </div>
          </section>
          <section className="sm:w-full md:w-3/5 h-full md:px-4">
            <div className="w-full flex flex-col justify-center rounded-2xl h-28 p-8 my-6 bg-white shadow-lg">
              <div className="flex justify-between items-center">
                <div className="sm:text-sm md:text-lg font-bold border-b-2 pb-2 border-mainOrange">
                  تجربیات دانشگاهی
                </div>
                <button
                  onClick={() => setEducation(true)}
                  className="sm:h-10 sm:w-10 flex justify-center items-center"
                >
                  <Image src="/pannelimages/add.svg" width={50} height={50} />
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center rounded-2xl h-28  p-8 my-6 bg-white shadow-lg">
              <div className="flex justify-between items-center">
                <div className=" sm:text-sm md:text-lg font-bold border-b-2 pb-2 border-mainOrange">
                  شبکه های اجتماعی
                </div>
                <button
                  onClick={() => setSocial(true)}
                  className="sm:h-10 sm:w-10 flex justify-center items-center"
                >
                  <Image src="/pannelimages/add.svg" width={50} height={50} />
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center rounded-2xl h-28  p-8 my-6 bg-white shadow-lg">
              <div className="flex justify-between items-center">
                <div className=" sm:text-sm md:text-lg font-bold border-b-2 pb-2 border-mainOrange">
                  تجربیات کاری
                </div>
                <button className="sm:h-10 sm:w-10 flex justify-center items-center">
                  <Image src="/pannelimages/add.svg" width={50} height={50} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
