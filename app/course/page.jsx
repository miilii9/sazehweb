import React from "react";
import Footer from "../../ClientComponents/Footer";
import Image from "next/image";
export default function course() {
  return (
    <>
      <div className="main-front-layout">
        <div id="index-viewport-no-height">
          <div className="space"></div>
          <div className="container">
            <div className="row justify-content-center reverse">
              <div className="col-lg-7">
                <div id="course-introduction">
                  <div className="introduction-single-course">
                    <Image
                      src="/clientimages/single-course.svg"
                      width={15}
                      height={12}
                    />
                    <div className="describtion-single-course">
                      <h2 className="header">دوره فلان تخصصی در بیسار</h2>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیازلورم ایپسوم متن ساختگی
                        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است چاپگرها و
                      </p>
                      <div className="btn-single-course">
                        <a href="#">بیشتر بخوانید</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div id="single-page-course-shop">
                  <div className="left-side">
                    <div className="cost-of-course">
                      <p>
                        قیمت دوره: <span className="span-1">1200000</span>
                        <span>تومان</span>
                      </p>
                    </div>
                    <div className="btn-shop-course">
                      <img src="clientimages/shop-icon-white.svg" alt="#" />{" "}
                      <a href="#">خرید دوره</a>
                      <span>s</span>
                    </div>
                    <div className="course-details">
                      <div className="course-icons">
                        <Image
                          src="/clientimages/clock%20white.svg"
                          width={15}
                          height={12}
                        />
                        <p>10 ساعت</p>
                      </div>
                      <div className="course-icons">
                        <Image
                          src="/clientimages/play-white.svg"
                          width={15}
                          height={12}
                        />
                        <p>16 جلسه</p>
                      </div>
                      <div className="course-icons">
                        <Image
                          src="/clientimages/folder%20white.svg"
                          width={15}
                          height={12}
                        />
                        <p>فایل تمرین دارد</p>
                      </div>
                      <div className="course-icons">
                        <Image
                          src="/clientimages/setting%20icon.svg"
                          width={15}
                          height={12}
                        />
                        <p>پیش نیاز ندارد</p>
                      </div>
                      <div className="course-icons">
                        <Image
                          src="/clientimages/language%20icon.svg"
                          width={15}
                          height={12}
                        />
                        <p>زبان فارسی</p>
                      </div>
                    </div>
                  </div>
                  <div className="left-side-socialmedia">
                    <Image
                      src="/clientimages/telegram-gold.svg"
                      width={25}
                      height={12}
                    />
                    <Image
                      src="/clientimages/twitter-gold.svg"
                      width={25}
                      height={12}
                    />
                    <Image
                      src="/clientimages/linkedin%20gold.svg"
                      width={25}
                      height={12}
                    />
                    <Image
                      src="/clientimages/facebook%20gold.svg"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/clientimages/instagram%20gold.svg"
                      width={25}
                      height={12}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div id="course-seasons">
                <div className="course-head">
                  <h2 className="header">سرفصل های دوره</h2>
                  <div>
                    <div className="course-explain">
                      <div className="lesson-name">
                        <p>دوره فلان و بیسار</p>
                        <span>3 جلسه </span>
                      </div>
                      <div className="lessons-border-right">
                        <div className="lesson">
                          <div className="lesson-and-svg">
                            <a href="#">جلسه اول</a>
                            <Image
                              src="/clientimages/play-icon-lesson.svg"
                              width={18}
                              height={12}
                            />
                          </div>
                          <div className="lesson-and-svg">
                            <a href="#">جلسه دوم</a>
                            <div className="lesson-svg-display">
                              <Image
                                src="/clientimages/lock-icon-lesson.svg"
                                width={12}
                                height={12}
                              />
                              <Image
                                src="/clientimages/play-icon-lesson.svg"
                                width={18}
                                height={12}
                              />
                            </div>
                          </div>
                          <div className="lesson-and-svg">
                            <a href="#">جلسه سوم</a>
                            <div className="lesson-svg-display">
                              <Image
                                src="/clientimages/lock-icon-lesson.svg"
                                width={12}
                                height={12}
                              />
                              <Image
                                src="/clientimages/play-icon-lesson.svg"
                                width={18}
                                height={12}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="course-explain-blue">
                      <div className="lesson-name">
                        <p>دوره فلان و بیسار</p>
                        <span>3 جلسه </span>
                      </div>
                      <div className="lessons-border-right-blue">
                        <div className="lesson">
                          <div className="lesson-and-svg">
                            <a href="#">جلسه اول</a>
                          </div>
                          <div className="lesson-and-svg">
                            <a href="#">جلسه دوم</a>
                            <div className="lesson-svg-display">
                              <Image
                                src="/clientimages/lock-icon-lesson.svg"
                                width={12}
                                height={12}
                              />
                              <Image
                                src="/clientimages/play-icon-lesson.svg"
                                width={18}
                                height={12}
                              />
                            </div>
                          </div>
                          <div className="lesson-and-svg">
                            <a href="#">جلسه سوم</a>
                            <div className="lesson-svg-display">
                              <Image
                                src="/clientimages/lock-icon-lesson.svg"
                                width={12}
                                height={12}
                              />
                              <Image
                                src="/clientimages/play-icon-lesson.svg"
                                width={18}
                                height={12}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="course-explain">
                      <div className="lesson-name">
                        <p>دوره فلان و بیسار</p>
                        <span>3 جلسه </span>
                      </div>
                      <div className="lessons-border-right">
                        <div className="lesson">
                          <div className="lesson-and-svg">
                            <a href="#">جلسه اول</a>
                            <div className="lesson-svg-display">
                              <Image
                                src="/clientimages/lock-icon-lesson.svg"
                                width={12}
                                height={12}
                              />
                              <Image
                                src="/clientimages/play-icon-lesson.svg"
                                width={18}
                                height={12}
                              />
                            </div>
                          </div>
                          <div className="lesson-and-svg">
                            <a href="#">جلسه دوم</a>
                            <div className="lesson-svg-display">
                              <Image
                                src="/clientimages/lock-icon-lesson.svg"
                                width={12}
                                height={12}
                              />
                              <Image
                                src="/clientimages/play-icon-lesson.svg"
                                width={18}
                                height={12}
                              />
                            </div>
                          </div>
                          <div className="lesson-and-svg">
                            <a href="#">جلسه سوم</a>
                            <div className="lesson-svg-display">
                              <Image
                                src="/clientimages/lock-icon-lesson.svg"
                                width={12}
                                height={12}
                              />
                              <Image
                                src="/clientimages/play-icon-lesson.svg"
                                width={18}
                                height={12}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-explain-blue">
                    <div className="lesson-name">
                      <p>دوره فلان و بیسار</p>
                      <span>3 جلسه </span>
                    </div>
                    <div className="lessons-border-right-blue">
                      <div className="lesson">
                        <div className="lesson-and-svg">
                          <a href="#">جلسه اول</a>
                          <div className="lesson-svg-display">
                            <Image
                              src="/clientimages/lock-icon-lesson.svg"
                              width={12}
                              height={12}
                            />
                            <Image
                              src="/clientimages/play-icon-lesson.svg"
                              width={18}
                              height={12}
                            />
                          </div>
                        </div>
                        <div className="lesson-and-svg">
                          <a href="#">جلسه دوم</a>
                          <div className="lesson-svg-display">
                            <Image
                              src="/clientimages/lock-icon-lesson.svg"
                              width={12}
                              height={12}
                            />
                            <Image
                              src="/clientimages/play-icon-lesson.svg"
                              width={18}
                              height={12}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="common-questions">
                <h2 className="header">سوالات متداول</h2>
                <div className="questions-box active">
                  <div className="question">
                    <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
                    <Image
                      src="/clientimages/arrow-down.svg"
                      width={16}
                      height={12}
                    />
                  </div>
                  <div className="answer">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                  </div>
                </div>
                <div className="questions-box">
                  <div className="question">
                    <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
                    <Image
                      src="/clientimages/arrow-down.svg"
                      width={16}
                      height={12}
                    />
                  </div>
                  <div className="answer">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                  </div>
                </div>
                <div className="questions-box">
                  <div className="question">
                    <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
                    <Image
                      src="/clientimages/arrow-down.svg"
                      width={16}
                      height={12}
                    />
                  </div>
                  <div className="answer">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                  </div>
                </div>
                <div className="questions-box">
                  <div className="question">
                    <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
                    <Image
                      src="/clientimages/arrow-down.svg"
                      width={16}
                      height={12}
                    />
                  </div>
                  <div className="answer">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                  </div>
                </div>
                <div className="questions-box">
                  <div className="question">
                    <p>چرا در شمال کشور سقف خانه هارا شیب دار میسازند</p>
                    <Image
                      src="/clientimages/arrow-down.svg"
                      width={16}
                      height={12}
                    />
                  </div>
                  <div className="answer">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="courses-left-side">
                <h2 className="header">دوره های مرتبط</h2>
                <div className="last-courses-box">
                  <div className="img-course">
                    <Image
                      src="/clientimages/course-picture.svg"
                      width={1}
                      height={1}
                    />
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
                        <p>10 ساعت</p>
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
                <div className="last-courses-box">
                  <div className="img-course">
                    <Image
                      src="/clientimages/course-picture.svg"
                      width={1}
                      height={1}
                    />
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
                        <p>10 ساعت</p>
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
                <div className="last-courses-box">
                  <div className="img-course">
                    <Image
                      src="/clientimages/course-picture.svg"
                      width={1}
                      height={1}
                    />
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
                        <p>10 ساعت</p>
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
          <div className="space"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
