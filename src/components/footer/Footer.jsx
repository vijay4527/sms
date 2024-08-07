import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <div className={styles.sectionDivider}></div>
        <div className={styles.footerContainer}>
          <div className="container">
            <div className={styles.footerWrapper}>
              <div className={styles.footerLogo}>
                <img
                  src="https://fama.b-cdn.net/sms/sms_logo.webp"
                  className={styles.logoImage}
                  alt="logo"
                />
              </div>
              <div className={styles.footerLinks}>
                <h4 className={styles.footerHeading}>Explore</h4>
                <ul>
                  <li>
                    <Link href="/" className={styles.serviceLink}>
                      <span>
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 5 7 7-7 7"
                          />
                        </svg>
                      </span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#aboutUs" className={styles.serviceLink}>
                      <span>
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 5 7 7-7 7"
                          />
                        </svg>
                      </span>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/#servicesSection"}
                      className={styles.serviceLink}
                    >
                      <span>
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 5 7 7-7 7"
                          />
                        </svg>
                      </span>
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footerContactUs}>
                <h4 className={styles.footerHeading}>Contact us</h4>
                <ul>
                  <li>
                    <a>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                      </span>
                      Shazim Marine Mechanical Service Near M.G. School, Behram
                      Baugh, Jogeshwari West, Mumbai-400102
                    </a>
                  </li>
                  {/* <li>
                    <a>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                          />
                        </svg>
                      </span>
                      +91 9029461719 , +91 8433795289
                    </a>
                  </li> */}
                  <li className={styles.whatsappContact}>
                    <span className={styles.spanIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                        />
                      </svg>
                    </span>
                    <Link href="tel:+91 9029461719">+91 9029461719</Link>
                    {"  "}
                    {" , "}{" "}
                    <Link href="tel:+91 8433795289">+91 8433795289</Link>
                    <Link href="tel:+91 8433795289">+91 8169374414</Link>

                  </li>
                  <li className={styles.whatsappContact}>
                    <span className={styles.spanIcon}>
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                    <Link href="whatsapp://send?phone=+919029461719">
                      +91 9029461719
                    </Link>
                    {"  "}
                    {" , "}{" "}
                    <Link href="whatsapp://send?phone=+91 8433795289">
                      +91 8433795289
                    </Link>
                    <Link href="whatsapp://send?phone=+91 8433795289">
                      +91 8169374414
                    </Link>
                  </li>

                  <li className={styles.whatsappContact}>
                    <span className={styles.spanIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                      </svg>
                    </span>

                    <Link href="mailto:shazim.marine289@gmail.com">
                      shazim.marine289@gmail.com
                    </Link>
                  </li>
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
