import React from "react";
import Footer from "@/ClientComponents/Footer";
import Image from "next/image";
export default function cartpage() {
  return (
    <>
      <div className="main-front-layout">
        <div id="index-viewport">
          <div className="space"></div>
          <div id="cart">
            <div className="container cart-only">
              <div className="link-cart">سبد خرید</div>
              <div className="row">
                <div className="col-lg-7 p-0">
                  <div className="cart-introduce">
                    <div className="cart-content">
                      <div className="cart-text">
                        <h2 className="header">دوره فلان تخصصی در بیسار</h2>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                      </div>
                      <div className="cart-icons">
                        <div className="icon">
                          <p>10 ساعت</p>
                          <Image
                            src="/clientimages/clock-bg-size.svg"
                            width={15}
                            height={12}
                          />
                        </div>
                        <div className="icon">
                          <p>16 جلسه</p>
                          <Image
                            src="/clientimages/playe-bg-size.svg"
                            width={15}
                            height={12}
                          />
                        </div>
                        <div className="icon">
                          <p>فایل تمرین دارن</p>
                          <Image
                            src="/clientimages/folder-bg-size.svg"
                            width={15}
                            height={12}
                          />
                        </div>
                        <div className="icon-blue">
                          <a href="#">جزییات دوره</a>
                          <Image
                            src="/clientimages/eye-icon-course-section.svg"
                            width={15}
                            height={12}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0">
                  <div className="cart-price">
                    <div>
                      <h2 className="header">120000</h2>
                      <span>115000</span>
                      <p>تومان</p>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="off-code">
                        <div className="off-content">
                          <p>کد تخفیف خود را وارد کنید</p>
                          <textarea></textarea>

                          <div className="off-btn">
                            <a href="#">اعمال کد تخفیف</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="final-paid">
                        <a href="#">پرداخت نهایی</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
