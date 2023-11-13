import React from "react";
import "../scss/style.css";
import Link from "next/link";
import Image from "next/image";
export default function MainFooter() {
  return (
    <div className="main-front-layout">
      <div id="footer">
        <div className="container">
          <div className="row mobile">
            <div className="col-lg-6 border-left">
              <h3 className="header">لینک های فلان</h3>
              <div className="footer-content">
                <div className="col-3">
                  <ul>
                    <Link href="/policy">
                      <li>قوانین و مقررات</li>
                    </Link>
                    <Link href="/faq">
                      <li>سوالات متداول</li>
                    </Link>
                    <li>
                      <a href="">صفخه فلان</a>
                    </li>
                    <li>
                      <a href="">درس بیسار</a>
                    </li>
                    <li>
                      <a href="">صفحه فلان</a>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul>
                    <li>
                      <a href="">صفحه فلان</a>
                    </li>
                    <li>
                      <a href="">درس بیسار</a>
                    </li>
                    <li>
                      <a href="">صفخه فلان</a>
                    </li>
                    <li>
                      <a href="">درس بیسار</a>
                    </li>
                    <li>
                      <a href="">صفحه فلان</a>
                    </li>
                  </ul>
                </div>
                <div className="col-3 responsive">
                  <ul>
                    <li>
                      <a href="">صفحه فلان</a>
                    </li>
                    <li>
                      <a href="">درس بیسار</a>
                    </li>
                    <li>
                      <a href="">صفخه فلان</a>
                    </li>
                    <li>
                      <a href="">درس بیسار</a>
                    </li>
                    <li>
                      <a href="">صفحه فلان</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 border-tp">
              <div className="left-side-footer">
                <div>
                  <Image
                    className="logo-footer"
                    src="/clientimages/logo-footer.svg"
                    width={450}
                    height={12}
                  />
                </div>
                <div className="social-media-box">
                  <Image
                    src="/clientimages/social%20media1.svg"
                    width={40}
                    height={20}
                  />
                  <Image
                    src="/clientimages/social%20media%202.svg"
                    width={40}
                    height={20}
                  />
                  <Image
                    src="/clientimages/social%20media%203.svg"
                    width={40}
                    height={20}
                  />
                  <Image
                    src="/clientimages/social%20media%204.svg"
                    width={40}
                    height={20}
                  />
                  <Image
                    src="/clientimages/social%20media%205.svg"
                    width={40}
                    height={20}
                  />
                  <Image
                    src="/clientimages/social%20media%206.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="footer-phone-number">
                  <p>۰۲۱ - ۳۴۴۳ ۲۳۷۶</p>
                  <div className="footer-phone-number-line"></div>
                  <p>۰۲۱ - ۳۴۴۳ ۲۳۷۶</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>تمامی حقوق متعلق به شرکت اینونکست میباشد</p>
        </div>
      </div>
    </div>
  );
}
