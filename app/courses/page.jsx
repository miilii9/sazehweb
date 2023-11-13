"use client"
import Link from "next/link";
import React from "react";
import Footer from "../../ClientComponents/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import CoursesCard from "@/ClientComponents/CoursesCard";

async function getProducts() {
  const { data } = await fetch('/api/courses', { next: { revalidate: 60 } })
  return data
}

export default function courses() {
  const [courses, setCourses] = useState([])
  const cards = [1, 2, 3, 4, 5, 6, 7, 8]

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts()
      setCourses(data)
    }
    fetchData()
  }, [])


  return (
    <>
      <div className="main-front-layout">
        <div
          id="index-viewport"
          className="course-viewport"
          style={{
            backgroundImage: "url(/second.png)",
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
                    src="/clientimages/header-second-page.svg"
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
                      <h2 className="header">دوره های اموزشی</h2>
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
                        src="/clientimages/header-second-page.svg"
                        width={15}
                        height={12}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="course"
          style={{
            backgroundImage: "url(/backgroundfooter.svg)",
          }}
        >
          <div className="container">
            <div className="lift">
              <div className="row justify-content-center">
                <div className="course-btn-group">
                  <div className="course-btn">
                    <a href="#">همه دور ها</a>
                  </div>
                  <div className="course-btn">
                    <a href="#">دوره های فلان </a>
                  </div>
                  <div className="course-btn">
                    <a href="#">دوره های بیسار</a>
                  </div>
                  <div className="course-btn">
                    <a href="#">دوره های بهمان</a>
                  </div>
                </div>
                <div className="col-10">
                  <div className="row">
                    {cards.map((card) => <CoursesCard />)}
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
