"use client";
import Footer from "../ClientComponents/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [timerStarted, setTimerStarted] = useState(false);
  var Timer = setTimeout(DoThis, 2000);

  function DoThis() {
    setTimerStarted(true);
  }

  return (
    <>
      <div className="main-front-layout">
        <div
          id="index-viewport"
          style={{
            backgroundImage: "url(/viewport.png)",
          }}
        >
          <div id="first-header-mobile">
            <div className="header-detail">
              <h2 className="header">
                با سازه وب <br />
                خیلی مهندس شوید !
              </h2>
              <div className="header-content">
                <div>
                  <Image
                    className="header-illustration"
                    src="/clientimages/first%20landing%20illustration.svg"
                    width={300}
                    height={12}
                  />
                </div>
                <div className="btn-header-group">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                  <div className="btn-div">
                    <Link className="btn-header" href="/about">
                      <div>درباره سازه وب</div>
                    </Link>
                    <Link className="btn-header" href="/courses">
                      <div>مشاهده دوره ها</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="first-header" className="flex-grow-1">
            <div className="row justify-content-center h-100">
              <div className="col-12 col-lg-10  d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                  <div className="header-detail">
                    <div className="header-content">
                      <h2 className="header">
                        با سازه وب <br />
                        خیلی مهندس شوید !
                      </h2>
                      <div className="btn-header-group">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                        <div className="btn-div">
                          <Link className="btn-header" href="/about">
                            <div>درباره سازه وب</div>
                          </Link>
                          <Link className="btn-header" href="/courses">
                            <div>مشاهده دوره ها</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="left">
                      <Image
                        className="header-illustration"
                        src="/clientimages/first%20landing%20illustration.svg"
                        width={300}
                        height={12}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="suggestion-section">
          <div className="background"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="suggestion-box-holder">
                  <div className="col-lg-4">
                    <div className="suggestion-box">
                      <div className="suggestion-box-detail">
                        <Image
                          className="suggestion-box-icon"
                          src="/clientimages/suggestion-box-1.svg"
                          width={180}
                          height={12}
                        />
                        <div className="suggestion-box-content">
                          <div>
                            <h2 className="header">کلاس حضوری</h2>
                          </div>
                          <div>
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                              و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                              لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                            </p>
                          </div>
                          <Link href="/about">
                            <div className="suggestion-box-btn">
                              <p>تعیین وقت مشاوره</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="suggestion-box-yellow">
                      <div className="suggestion-box-detail">
                        <Image
                          className="suggestion-box-icon"
                          src="/clientimages/suggestion-box-2.svg"
                          width={180}
                          height={12}
                        />
                        <div className="suggestion-box-content">
                          <h2 className="header">دوره های ضبط شده</h2>
                          <div>
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                              و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                              لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                            </p>
                          </div>
                          <Link href="/about">
                            <div className="suggestion-box-btn">
                              <p>تعیین وقت مشاوره</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="suggestion-box">
                      <div className="suggestion-box-detail">
                        <Image
                          className="suggestion-box-icon"
                          src="/clientimages/suggestion-box-3.svg"
                          width={180}
                          height={12}
                        />
                        <div className="suggestion-box-content">
                          <div>
                            <h2 className="header">خدمات مشاوره</h2>
                          </div>
                          <div>
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                              و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                              لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                            </p>
                          </div>
                          <Link href="/about">
                            <div className="suggestion-box-btn">
                              <p>تعیین وقت مشاوره</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="last-courses-section"
          style={{
            backgroundImage: "url(/backgroundfooter.svg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="last-courses-line-header">
                <div className="line"></div>
                <div>
                  <h3 className="header">اخرین دوره های سازه وب</h3>
                </div>
              </div>
              <div className="col-10">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="last-courses-box">
                      <div className="img-course">
                        <div className="img-course">
                          <Image
                            className="header-illustration"
                            src="/clientimages/course-picture.svg"
                            width={15}
                            height={12}
                          />
                        </div>
                      </div>
                      <div className="Course-description">
                        <h3 className="header">دوره فلان تخصصی در بیسار</h3>
                        <div className="time-and-date-of-course">
                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/clock.svg"
                              width={12}
                              height={12}
                            />
                            <p>۱۰ ساعت</p>
                          </div>

                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/play-icon.svg"
                              width={12}
                              height={12}
                            />
                            <p>16 جلسه</p>
                          </div>
                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/folder-icon.svg"
                              width={12}
                              height={12}
                            />
                            <p>فایل تمرین دارد</p>
                          </div>
                        </div>
                        <div className="eye-and-shop-course-group">
                          <div className="eye-icon">
                            <a href="#">
                              <Image
                                src="/clientimages/eye-icon-course-section.svg"
                                width={25}
                                height={12}
                              />
                            </a>
                          </div>
                          <div className="shop-btn">
                            <div>
                              <a href="#">
                                <Image
                                  src="/clientimages/shop-icon-white.svg"
                                  width={25}
                                  height={12}
                                />
                              </a>
                            </div>
                            <div>
                              <p>120000 تومان</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="last-courses-box">
                      <div className="img-course">
                        <div className="img-course">
                          <Image
                            className="header-illustration"
                            src="/clientimages/course-picture.svg"
                            width={15}
                            height={12}
                          />
                        </div>
                      </div>
                      <div className="Course-description">
                        <h3 className="header">دوره فلان تخصصی در بیسار</h3>
                        <div className="time-and-date-of-course">
                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/clock.svg"
                              width={12}
                              height={12}
                            />
                            <p>۱۰ ساعت</p>
                          </div>

                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/play-icon.svg"
                              width={12}
                              height={12}
                            />
                            <p>16 جلسه</p>
                          </div>
                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/folder-icon.svg"
                              width={12}
                              height={12}
                            />
                            <p>فایل تمرین دارد</p>
                          </div>
                        </div>
                        <div className="eye-and-shop-course-group">
                          <div className="eye-icon">
                            <a href="#">
                              <Image
                                src="/clientimages/eye-icon-course-section.svg"
                                width={25}
                                height={12}
                              />
                            </a>
                          </div>
                          <div className="shop-btn">
                            <div>
                              <a href="#">
                                <Image
                                  src="/clientimages/shop-icon-white.svg"
                                  width={25}
                                  height={12}
                                />
                              </a>
                            </div>
                            <div>
                              <p>120000 تومان</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="last-courses-box">
                      <div className="img-course">
                        <div className="img-course">
                          <Image
                            className="header-illustration"
                            src="/clientimages/course-picture.svg"
                            width={15}
                            height={12}
                          />
                        </div>
                      </div>
                      <div className="Course-description">
                        <h3 className="header">دوره فلان تخصصی در بیسار</h3>
                        <div className="time-and-date-of-course">
                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/clock.svg"
                              width={12}
                              height={12}
                            />
                            <p>۱۰ ساعت</p>
                          </div>

                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/play-icon.svg"
                              width={12}
                              height={12}
                            />
                            <p>16 جلسه</p>
                          </div>
                          <div className="detail-describtion-course">
                            <Image
                              src="/clientimages/folder-icon.svg"
                              width={12}
                              height={12}
                            />
                            <p>فایل تمرین دارد</p>
                          </div>
                        </div>
                        <div className="eye-and-shop-course-group">
                          <div className="eye-icon">
                            <a href="#">
                              <Image
                                src="/clientimages/eye-icon-course-section.svg"
                                width={25}
                                height={12}
                              />
                            </a>
                          </div>
                          <div className="shop-btn">
                            <div>
                              <a href="#">
                                <Image
                                  src="/clientimages/shop-icon-white.svg"
                                  width={25}
                                  height={12}
                                />
                              </a>
                            </div>
                            <div>
                              <p>120000 تومان</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-btn">
            <div className="btn-course">
              <Link href="/courses">مشاهده همه دوره ها</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
