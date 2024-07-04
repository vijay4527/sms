"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const links = [
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const session = useSession();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const media = [
    "https://fama.b-cdn.net/sms/sms_video.mp4",
    "https://fama.b-cdn.net/sms/m1.webp",
    "https://fama.b-cdn.net/sms/cargo-ship.webp",

  ];

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className="container">
          <div className={styles.navbarLogo}>
            <div className={styles.links}>
              {links.map((link) => (
                <Link key={link.id} href={link.url} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </div>
            <Link href="/" className={styles.logo}>
              <img alt="Logo not found" src="https://fama.b-cdn.net/sms/sms_logo.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bannerContainer}>
        <Carousel
          responsive={responsive}
          // autoPlay={true}
          autoPlaySpeed={10000} 
          infinite={true}
        >
          {media.map((url, index) => (
            <div key={index} className={styles.bannerWrapper}>
              {url.endsWith(".mp4") ? (
                <video
                  src={url}
                  muted
                  autoPlay
                  loop
                  style={{ width: "100%"}}
                />
              ) : (
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%" }}
                />
              )}
              <div className={styles.bannerBody}>
                <div>
                  <h4 className={styles.bannerSubheading}>Prepare for</h4>
                  <h3 className={styles.bannerHeading}>Fantasy sailing</h3>
                  <p className={styles.bannerDesc}>
                    Integer sagittis nisi nec tortor fermentum aliquet. Integer
                    non neque tempor, porttitor lorem id, commodo nulla. Nullam
                    sed ultricies erat, nec euismod metus. Morbi porttitor
                    sapien vitae leo scelerisque consequat.
                  </p>
                  <div>
                    <button className={styles.btnPrimary}>
                      <span>Online Store</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.bannerSeaAnchor}>
        <img src="https://fama.b-cdn.net/sms/sea-anchor.png" />
      </div>
    </div>
  );
};

export default Navbar;
