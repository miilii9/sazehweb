"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "../scss/style.css";

export default function MainNavigation({ setShowLogin }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  const [home, setHome] = useState(pathname === "/" ? true : false);
  const [courses, setCourses] = useState(
    pathname === "/courses" ? true : false
  );
  const [about, setAbout] = useState(pathname === "/about" ? true : false);
  const [contact, setContact] = useState(
    pathname === "/contact" ? true : false
  );

  const homeHandler = () => {
    setHome(true);
    setAbout(false);
    setCourses(false);
    setContact(false);
    setMenu(false);
  };
  const coursesHandler = () => {
    setCourses(true);
    setHome(false);
    setAbout(false);
    setContact(false);
    setMenu(false);
  };
  const aboutHandler = () => {
    setAbout(true);
    setContact(false);
    setCourses(false);
    setHome(false);
    setMenu(false);
  };
  const contactHandler = () => {
    setContact(true);
    setAbout(false);
    setCourses(false);
    setHome(false);
    setMenu(false);
  };

  const logoHandler = () => {
    setContact(false);
    setAbout(false);
    setCourses(false);
    setHome(true);
    setMenu(false);
  };

  return (
    <div className="main-front-layout">
      <div className="container">
        <div id="main-menu">
          <Link onClick={logoHandler} className="logo" href="/">
            <Image src="clientimages/logo.svg" width={200} height={20} />
          </Link>

          <ul className="ul-layout">
            <Link onClick={homeHandler} href="/">
              <li className={home ? "hover-underline" : null}>خانه</li>
            </Link>
            <Link onClick={coursesHandler} href="/courses">
              <li className={courses ? "hover-underline" : null}>دوره ها</li>
            </Link>
            <Link onClick={aboutHandler} href="/about">
              <li className={about ? "hover-underline" : null}>درباره ما</li>
            </Link>
            <Link onClick={contactHandler} href="/contact">
              <li className={contact ? "hover-underline" : null}>تماس با ما</li>
            </Link>
          </ul>
          <div className="shop-btn-icon">
            <Link href="/cart">
              <img src="clientimages/shop-icon.svg" />
            </Link>
            <button onClick={() => setShowLogin(true)} className="shop-btn">
              ورود / ثبت نام
            </button>
          </div>
        </div>
        <div id="menu-mobile">
          <Link href="/">
            <div>
              <Image
                src="clientimages/logo-responsive.svg"
                width={100}
                height={20}
              />
            </div>
          </Link>
          <div className="burger" onClick={() => setMenu(!menu)}>
            <Image
              src={
                menu ? "/clientimages/close.svg" : "/clientimages/burger.svg"
              }
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className={`menu-expanded ${menu ? "open" : "close"}`}>
          <ul className="mobile-layout">
            <Link className="mobile-links-links" onClick={homeHandler} href="/">
              <li className="mobile-links">خانه</li>
            </Link>
            <Link onClick={coursesHandler} href="/courses">
              <li className="mobile-links">دوره ها</li>
            </Link>
            <Link onClick={aboutHandler} href="/about">
              <li className="mobile-links">درباره ما</li>
            </Link>
            <Link onClick={contactHandler} href="/contact">
              <li className="mobile-links">تماس با ما</li>
            </Link>
            <Link
              className="mobile-sign"
              onClick={contactHandler}
              href="/contact"
            >
              <li
                onClick={() => setShowLogin(true)}
                className={`mobile-links ${contact ? "hover-underline" : null}`}
              >
                ورود/ثبت نام
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
