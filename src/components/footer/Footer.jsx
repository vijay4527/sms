import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <section className={styles.sectionContainer}>
            <div className={styles.sectionDivider}></div>
            <div className={styles.footerContainer}>
                <div className="container">
                  <div className={styles.footerWrapper}>
                    <div className={styles.footerLogo}>
        <img src="http://lamaro.like-themes.com/wp-content/uploads/2018/02/logo_lamaro-1x.png"/>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerHeading}>Explore</h4>
                        <ul>
                          <li><a>Home</a></li>
                          <li><a>About us</a></li>
                          <li><a>Products</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerContactUs}>
                        <h4 className={styles.footerHeading}>Contact us</h4>
                        <ul>
                          <li><a>44 Danwers,  NY City, USA, 70-102</a></li>
                          <li><a>+10800-33-800; +10500-55-900</a></li>
                          <li><a>lamaro@lamaroyc.us</a></li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
          </section>
    </div>
  );
};

export default Footer;
