"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const images = [
    'http://lamaro.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg',
    'http://lamaro.like-themes.com/wp-content/uploads/2018/02/SLIDE_02.jpg',
    'http://lamaro.like-themes.com/wp-content/uploads/2018/02/SLIDE_03.jpg',
    'http://lamaro.like-themes.com/wp-content/uploads/2018/02/SLIDE_04.jpg',
  ];

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className='container'>
          <div className={styles.navbarLogo}>
            <div className={styles.links}>
              {links.map((link) => (
                <Link key={link.id} href={link.url} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </div>
            <Link href="/" className={styles.logo}>
              <img alt="Logo not found" src='http://lamaro.like-themes.com/wp-content/uploads/2018/02/logo_lamaro-1x.png' />
            </Link>
          </div>


          {/* <div className={styles.links}>
        
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div> */}
        </div>
      </div>
      <div className={styles.bannerContainer}>
        <Carousel responsive={responsive}>
          {images.map((image, index) => (
            <div key={index} className={styles.bannerWrapper}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
              <div className={styles.bannerBody}>
                <h4 className={styles.bannerSubheading}>Prepeare for</h4>
                <h3 className={styles.bannerHeading}>Fantasy sailing</h3>
                <p className={styles.bannerDesc}>Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque tempor, porttitor lorem id, commodo nulla. Nullam sed ultricies erat, nec euismod metus. Morbi porttitor sapien vitae leo scelerisque consequat.</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Navbar;
