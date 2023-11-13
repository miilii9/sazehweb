"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SessionDisclosure from "../../../../components/SessionDisclosure";

export default function CoursePage() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main className="w-full flex justify-center bg-[#FAFAFA] pt-10">
      <div className="w-full md:container flex sm:flex-col md:flex-row px-4 ">
        {/* Dashboard My Courses */}
        <div className="md:w-3/5 sm:w-full px-6 pb-4 rounded-2xl">
          {/* Course Banner */}
          <div className=" rounded-2xl overflow-hidden mb-8">
            <Image src="/pannelimages/python.jpg" width={900} height={900} />
          </div>
          {/* Course des */}

          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl py-8 px-8 mb-6">
            <div className="md:flex sm:hidden w-full justify-center mt-6 mb-6">
              <div className="flex flex-col items-center px-20 border-l border-slate-400">
                <div>
                  <Image src="/pannelimages/clock.svg" width={40} height={40} />
                </div>
                <div className=" text-xs mt-1">طول دوره</div>
                <div className=" text-2xl mt-2 text-mainOrange">۱۴ h</div>
              </div>
              <div className="flex flex-col items-center px-20">
                <div>
                  <Image src="/pannelimages/docs.svg" width={40} height={40} />
                </div>
                <div className=" text-xs mt-1">تعداد قسمت ها</div>
                <div className=" text-2xl mt-2 text-mainOrange">۴۱ جلسه</div>
              </div>
              <div className="flex flex-col items-center px-20 border-r border-slate-400">
                <div>
                  <Image src="/pannelimages/eyeb.svg" width={40} height={40} />
                </div>
                <div className=" text-xs mt-1">شرکت کنندگان</div>
                <div className=" text-2xl mt-2 text-mainOrange">۹ نفر</div>
              </div>
            </div>
            <div>
              <div id="#aboutCourse" className="w-full mb-8">
                <span className="border-b-2 border-mainOrange pb-1 text-lg font-bold">
                  معرفی دوره
                </span>
              </div>
              <div className="w-full ">
                <p className=" text-justify mb-6 text-gray-600 leading-7">
                  پایتون یک زبان برنامه نویسی همه کاره است که در طراحی و ساخت وب
                  سایت و هوش مصنوعی و طراحی اپلیکیشن های موبایلی اندروید و آیفون
                  و ... به کار می رود. از طرفی یادگیری این زبان برنامه‌نویسی با
                  توجه به نزدیکی زبان آن به زبان انسان، ساده و یادگیری آن، سریع
                  است. این ویژگی همراه با کاربردهای گسترده باعث شده که پایتون به
                  محبوب‌ترین زبان‌ برنامه‌نویسی در سال‌های اخیر تبدیل‌ شود. برای
                  رسیدن به مرحله طراحی وب سایت و هوش مصنوعی و ... در ابتدا باید
                  با پایتون آشنا باشید که در این دوره به صورت کامل به آنها
                  خواهیم پرداخت. اگر قصد شروع راه برنامه نویسی را دارید قطعا
                  آموختن زبان پایتون بهترین گزینه برای شروع است. دوره آموزش
                  برنامه نویسی پایتون گرینولی در ۱۲ فصل توسط شایان پپیغمبری
                  دانشجوی دکترای علوم کامپیوتر دانشگاه پیستبرگ آمریکا ، ارائه
                  شده است. این دوره آموزشی از صفر تا صد است و دانشجو پس از
                  گذراندن این دوره به دانش نسبتاً خوبی از پایتون و نحوه به
                  کاربردن آن می رسد.
                </p>
                <p className=" text-justify text-gray-600 leading-7">
                  تا حالا چند بار شده که دوره آموزشی که ثبت نام کردید رو تا
                  انتها نبینید و دنبال نکنید ؟ قطعا این دوره از اون دوره ها نیست
                  !!! در بین دوره های برنامه نویسی مخصوصا برنامه نویسی مقدماتی و
                  زبان پایتون جای یک دوره جدید با کیفیت امروزی خالی بود. معمولا
                  محتوای دوره های آموزشی پایتون سال ها پیش آماده و تدوین شده اند
                  و به صورت یه اسکرین ریکورد ساده همراه با صدای بعضا بی کیفیت
                  هستند. این دوره به گونه ای ضبط و تدوین شده که شما به راحتی
                  بتوانید محتوا رو دنبال کنید و از یادگیری لذت ببرید. چجوری ؟
                  اپیزود های این دوره به صورت خلاصه و کوتاه ضبط شده تا بتونید در
                  هر زمانی که خواستید آموزش دیدن را شروع کنید و مبحث آموزشی خود
                  را تمام کنید. اگر وقت مناسب و خوبی روی این دوره بگذارید با
                  انجام تمارین و پروژه ها شما صرف یک الی دو ماه ( ۵۰ ساعت آموزشی
                  ) میتونید این دوره رو تموم کنید. اگر هم سرشلوغ هستید و این
                  دوره آموزشی را در کنار کسب و کار یا درس خود دنبال میکنید
                  میتوانید در حداکثر دو الی سه ماه با دیدن اپیزود های این دوره
                  زبان برنامه نویسی پایتون رو به صورت کامل یاد بگیرید. همچنین
                  پاورپوینت اختصاصی این دوره تمامی مطالب رو به صورت خلاصه و نکته
                  به نکته برای شما ثبت کرده تا بتوانید با مراجعه به این محتوای
                  مکتوب هر بار دستور های این زبان را دوره کنید و نگران فراموش
                  کردن این دستورات نباشید. جلسه اول و دوم این دوره به صورت
                  رایگان میباشند و بعد ثبت نام در وبسایت بدون نیاز به ثبت نام در
                  این دوره با کلیک روی این اپیزود ها (با رنگ زرد متمایز شده اند)
                  در بخش سرفصل های دوره میتوانید این اپیزود ها رو تماشا کنید و
                  منظور ما از کیفیت بصری و حوصله سر بر نبودن دوره را مشاهده
                  کنید. در وبسایت گرینولی در انتهاای هر قسمت هر مشکلی داشتید رو
                  میتونید کامنت کنید و سوالات دانش پژوهان دیگر این دوره را
                  ببینید یا حتی از نظر خود به سوالات بقیه پاسخ بدید و با هم
                  تعامل داشته باشید. هر سوالی هم بی پاسخ موند توسط پشتیبان های
                  گرینولی پاسخ داده خواهند شد.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl mb-6 py-8 px-8">
            <div>
              <div className="w-full mb-8">
                <span className="border-b-2 border-mainOrange pb-1 text-lg font-bold">
                  پیشنیاز ها
                </span>
              </div>
              <div className="w-full ">
                <p className="text-justify text-gray-600 mb-6 leading-7">
                  همانطور که گفته شد این دوره آموزشی پایتون برای افرادی که هیچ
                  دانشی از برنامه نویسی و پایتون ندارند مناسب است و این دوره هیچ
                  پیش نیازی ندارد. تمام مواردی که برای شروع پایتون نیاز دارید در
                  همین دوره گفته شده است. طراحی این دوره به این صورت است که
                  میتواند شروعی بر راه برنامه نویسی شما باشد.
                </p>
                <p className="text-justify text-gray-600 leading-7">
                  برای کسانی که از قبل زبان برنامه نویسی مانند سی پلاس پلاس یا
                  ... را بلد هستند در آخرین بخش این دوره فقط در دو ساعت کل زبان
                  پایتون را با توجه به اینکه منطق برنامه نویسی و کار با کامپیوتر
                  را بلد هستند آموزش دادیم. این بخش فشرده برای دانشجویانی که هیچ
                  پیش زمینه ای از زبان پایتون ندارند میتواند بعد از دیدن آموزش
                  های این دوره حالت جمعبندی داشته باشد.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl py-8 px-8 mb-6">
            <div>
              <div className="w-full mb-8">
                <span className="border-b-2 border-mainOrange pb-1 text-lg font-bold">
                  مخاطبین دوره
                </span>
              </div>
              <div className="w-full ">
                <ul className=" list-disc text-gray-600 leading-7">
                  <li>کسانی که قصد دارند برنامه‌نویسی را از صفر شروع کنند.</li>
                  <li>
                    دانشجویان و فارغ‌التحصیلان رشته‌های کامپیوتر، برق و تمام
                    رشته‌های مهندسی که می‌خواهند با یادگیری تنها یک زبان برنامه
                    نویسی به طراحی وب، طراحی اپلیکیشن، طراحی برنامه‌های
                    کامپیوتری و غیره بپردازند.
                  </li>
                  <li>
                    برای پروژه‌های شخصی، دانشگاهی و یا کاری خود نیاز به یادگیری
                    سریع زبان پایتون دارید.
                  </li>
                  <li>
                    تمام علاقه‌مندان به برنامه‌نویسی که هیچ پیش‌زمینه‌ای از این
                    زبان مهارت ندارند.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl py-8 px-8">
            <div className="w-full">
              <div className="w-full mb-8">
                <span className="border-b-2 border-mainOrange pb-1 text-lg font-bold">
                  مقدمه
                </span>
              </div>
              <div className="w-full ">
                {num.map((item) => (
                  <SessionDisclosure key={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard Wallet */}
        <div className="sm:w-full md:w-1/5 md:px-6 pb-4 rounded-2xl sm:flex md:block justify-center">
          <div className="sticky top-40 bg-white w-[400px] flex flex-col items-center rounded-2xl shadow-2xl">
            <div className="flex my-10 bg-white w-full h-full justify-center items-center">
              <div className="ml-5">قیمت دوره:</div>
              <div className="flex items-center">
                <span className=" text-3xl font-bold text-[#4285F4]">
                  {" "}
                  ۱۲۰۰۰۰۰
                </span>
                <span className="mr-2">تومان</span>
              </div>
            </div>
            <div className=" absolute top-28  rounded-lg py-4 px-8 bg-[#FFA125] flex justify-center">
              <div className="ml-6 ">
                <svg
                  id="Group_54"
                  data-name="Group 54"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.001"
                  height="25.042"
                  viewBox="0 0 25.001 25.042"
                >
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M-654.627-137.441a1.528,1.528,0,0,1,.757.617c1.611,2.2,3.231,4.4,4.841,6.6a.474.474,0,0,0,.442.218c1.027-.01,2.054,0,3.08-.005a.925.925,0,0,1,.814.362.968.968,0,0,1,.18.509c.014,1.353-.014,2.706.019,4.058a.949.949,0,0,1-.894.937c-.219,0-.439,0-.684,0-.047.39-.095.766-.137,1.143-.089.793-.173,1.587-.262,2.38a.989.989,0,0,1-1.225.981.945.945,0,0,1-.73-1.042c.057-.682.14-1.361.216-2.041.09-.8.186-1.6.275-2.4a.991.991,0,0,1,1.067-.972c.138,0,.277,0,.435,0v-1.939h-21.091v1.939h16.508a1.011,1.011,0,0,1,1.077.667.975.975,0,0,1-.835,1.281c-.105.01-.212.007-.318.007h-14.791c.06.513.116,1,.175,1.493q.308,2.571.617,5.142c.06.5.107,1,.194,1.5a1.927,1.927,0,0,0,1.9,1.642c.2.007.391,0,.587,0q5.7,0,11.393,0a1.95,1.95,0,0,0,1.962-1.324c.06-.167.083-.347.127-.521a.969.969,0,0,1,1.148-.738.99.99,0,0,1,.764,1.117,3.907,3.907,0,0,1-3.945,3.42q-4.926.008-9.852,0c-.66,0-1.321-.019-1.98,0a3.988,3.988,0,0,1-4.118-3.738c-.178-1.872-.439-3.736-.663-5.6q-.131-1.092-.26-2.183c-.008-.063-.018-.126-.031-.215-.21,0-.412,0-.613,0a.974.974,0,0,1-1.017-1.017q-.009-1.919,0-3.838a.969.969,0,0,1,1.022-1.01c1.059-.006,2.119-.007,3.178,0a.432.432,0,0,0,.4-.208q2.424-3.313,4.856-6.621a1.487,1.487,0,0,1,.764-.609h.391a3.071,3.071,0,0,1,.343.177.988.988,0,0,1,.162,1.479q-2.037,2.777-4.077,5.552c-.046.062-.086.128-.141.209h11.277c-.06-.088-.1-.155-.148-.219l-2.878-3.917c-.415-.564-.837-1.123-1.242-1.695a.968.968,0,0,1,.482-1.542.741.741,0,0,0,.085-.045Z"
                    transform="translate(669.495 137.441)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M-512.114,176.343c0,.619,0,1.238,0,1.858a.984.984,0,0,1-.971,1.062.98.98,0,0,1-.983-1.05q-.005-1.882,0-3.764a.98.98,0,0,1,.983-1.05.984.984,0,0,1,.971,1.062C-512.112,175.088-512.114,175.716-512.114,176.343Z"
                    transform="translate(521.701 -158.14)"
                    fill="#fff"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M-432.421,176.345c0,.619,0,1.238,0,1.858a.984.984,0,0,1-.973,1.061.98.98,0,0,1-.981-1.052q0-1.882,0-3.764a.98.98,0,0,1,.985-1.048.98.98,0,0,1,.969,1.04C-432.417,175.074-432.421,175.709-432.421,176.345Z"
                    transform="translate(445.919 -158.14)"
                    fill="#fff"
                  />
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M-354.676,176.315c0-.619,0-1.238,0-1.858a.983.983,0,0,1,.975-1.058.981.981,0,0,1,.979,1.054q0,1.882,0,3.764a.979.979,0,0,1-.987,1.046.98.98,0,0,1-.967-1.042C-354.68,177.586-354.676,176.95-354.676,176.315Z"
                    transform="translate(370.131 -158.141)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="text-white font-medium">افزودن به سبد خرید</div>
            </div>
            <div className="px-6 pt-16 pb-8 bg-[#4285F4] w-full mt-6 rounded-2xl">
              <ul>
                <li className=" text-sm mb-7 text-white">10 ساعت</li>
                <li className=" text-sm mb-7 text-white">16 جلسه</li>
                <li className=" text-sm mb-7 text-white">فایل تمرین دارد</li>
                <li className=" text-sm mb-7 text-white">پیش نیاز ندارد</li>
                <li className=" text-sm mb-7 text-white">زبان فارسی</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
