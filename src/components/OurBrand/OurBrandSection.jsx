"use client";
import React from "react";
import styles from "./OurBrandSection.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurBrandSection = () => {
  const responsiveClubServices = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  // const ClubServicesImg = [
  //     'https://fama.b-cdn.net/sms/client1.png',
  //     'https://fama.b-cdn.net/sms/client2.png',
  //     'https://fama.b-cdn.net/sms/client3.png',
  //     'https://fama.b-cdn.net/sms/client4.png',
  //     'https://fama.b-cdn.net/sms/client5.png',
  //     'https://fama.b-cdn.net/sms/client6.png',
  // ];

  return (
    <section className={styles.AboutYachtClubSectionContainer}>
      {/* <div className={styles.OurBrandContainer}>
                <div className="container">
                    <div className={styles.OurBrandWrapper}>
                        <Carousel responsive={responsiveClubServices}>
                            {ClubServicesImg.map((image, index) => (
                                <a key={index} className={styles.OurBrandBody}>
                                    <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} data-set='NormalImg' />
                                    <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} data-set='hoverImg'/>
                                </a>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div> */}
      <section id="clients" className={`${styles.clients} section-bg`}>
        <div className="container aos-init aos-animate" data-aos="zoom-in">
          <div className={styles["section-title"]}>
            <h2>Clients</h2>
            {/* <h3><span>Contact Us</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client1.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client2.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client3.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client4.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client6.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client8.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client9.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client10.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="/client11.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client12.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client13.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="https://fama.b-cdn.net/sms/client14.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurBrandSection;
