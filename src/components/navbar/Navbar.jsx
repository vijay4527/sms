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
        <Carousel responsive={responsive} autoPlay={true}
          autoPlaySpeed={10000} // 10 seconds
          infinite={true}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Navbar;
