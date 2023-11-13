"use client";
import React from "react";
import { useState } from "react";
import Footer from "../../ClientComponents/Footer";
import Image from "next/image";
export default function faqPage() {
  const [firstFaq, setFirstFaq] = useState(false);
  const [secondFaq, setSecondFaq] = useState(false);
  const [thirdFaq, setThirdFaq] = useState(false);
  const [forthFaq, setForthFaq] = useState(false);
  return (
    <>
      <div className="main-front-layout">
        <div id="common-questions">
          <h2 className="header text-center mt-5">سوالات متداول</h2>
          <div className={` questions-box ${firstFaq ? "active" : null}`}>
            <div
              onClick={() => setFirstFaq(!firstFaq)}
              className="question mx-5"
            >
              <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
              <Image
                src="/clientimages/arrow-down.svg"
                width={18}
                height={12}
              />
            </div>
            <div className="answer mx-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
          </div>
          <div className={` questions-box ${secondFaq ? "active" : null}`}>
            <div
              onClick={() => setSecondFaq(!secondFaq)}
              className="question mx-5"
            >
              <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
              <Image
                src="/clientimages/arrow-down.svg"
                width={18}
                height={12}
              />
            </div>
            <div className="answer mx-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
          </div>
          <div className={` questions-box ${thirdFaq ? "active" : null}`}>
            <div
              onClick={() => setThirdFaq(!thirdFaq)}
              className="question mx-5"
            >
              <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
              <Image
                src="/clientimages/arrow-down.svg"
                width={18}
                height={12}
              />
            </div>
            <div className="answer mx-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
          </div>
          <div className={` questions-box ${forthFaq ? "active" : null}`}>
            <div
              onClick={() => setForthFaq(!forthFaq)}
              className="question mx-5"
            >
              <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
              <Image
                src="/clientimages/arrow-down.svg"
                width={18}
                height={12}
              />
            </div>
            <div className="answer mx-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
