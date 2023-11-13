import React from "react";
import Footer from "../../ClientComponents/Footer"

export default function contactpage() {
  return (
    <>
      <div className="main-front-layout">
        <div id="index-viewport">
          <div className="space"></div>
          <div id="contact-us">
            <div className="space"></div>

            <div className="container">
              <div className="row align-items-center justify-content-center gap-4">
                <div className="col-lg-5">
                  <div className="right-side-contact-us">
                    <div className="contact-us-header">
                      <h2 className="header">تماس با ما</h2>
                      <p>برای ما پیامی دارید؟ برای ما بنویسید.</p>
                    </div>
                    <div className="personal-information">
                      <div className="row gx-1 gy-3">
                        <div className="col-12 col-xl-6">
                          <div className="insert-info">
                            <input
                              type="text"
                              aria-label="First name"
                              className="form-control"
                              placeholder="نام و نام خانوادگی شما"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-xl-6">
                          <div className="insert-info">
                            <input
                              type="email"
                              aria-label="email"
                              className="form-control"
                              placeholder="ایمیل خود را وارد نمایید"
                            />
                          </div>
                        </div>
                        <div>
                          <textarea
                            name="comment"
                            rows="4"
                            cols="10"
                            placeholder="ما مشتاق خواندن پیام شما هستیم …"
                          ></textarea>
                        </div>
                        <button type="submit">
                          <a href="#">ارسال پیام</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="left-side-contact-us">
                    <p>
                      آدرس ۱: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <p>
                      آدرس ۱: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                    <div className="contact-us-number">
                      <p>۰۴۱ ۴۴۴ ۲۳۹۸</p>
                      <p>۰۴۱ ۴۴۴ ۲۳۹۸</p>
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
