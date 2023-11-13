import React from 'react'
import Image from 'next/image'
export default function CoursesCard() {
    return (
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
    )
}
