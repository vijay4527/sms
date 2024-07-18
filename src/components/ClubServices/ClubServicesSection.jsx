"use client";
import React from "react";
import styles from "./ClubServicesSection.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const ClubServicesSection = () => {
  const responsiveClubServices = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ClubServicesImg = [
    {
      image: "https://fama.b-cdn.net/sms/service1.webp",
      name: "Overhauling of Main Engine and Generator",
      desc: "At Shazim Marine Mechanical Services, our team of highly skilled engineers and technicians boasts extensive experience and certifications in a diverse array of diesel engines and main engine overhauls.",
    },
    {
      image: "https://fama.b-cdn.net/sms/services/propulsion/propulsion.webp",
      name: "Propulsion Systems",
      desc: "Our Propulsion Service efficiently manages the entire maintenance process, leveraging the expertise of our highly skilled engineers who have extensive experience with all major installations.",
    },
    {
      image: "https://fama.b-cdn.net/sms/service3.webp",
      name: "Bow Thruster Systems",
      desc: "Shazim Marine Mechanical Services offers comprehensive bow thruster inspection and repair services, whether in dock, in-house, or afloat, depending on the specific requirements.",
    },
    {
      image: "https://fama.b-cdn.net/sms/service4.webp",
      name: "Winches and Hydraulics",
      desc: "At Shazim Marine Mechanical Services, our team of experienced professionals specializes in hydraulics and winch-related repairs. We provide on-site repair and maintenance services for winches.",
    },
    {
      image: "https://fama.b-cdn.net/sms/service5.webp",
      name: "Fabrication",
      desc: "Shazim Marine Mechanical Services specializes in fabricating structures, piping, and outfitting for the marine and offshore oil and gas industries, with projects in Singapore, Indonesia, and Bangladesh.",
    },
  ];

  return (

    <section className={styles.sectionContainer}>
      <div className={styles.sectionDivider}></div>
      <div className={styles.ClubServicesContainer}>
        <div className="container">
          <div className={styles.ClubServicesBody}>
            <h4 className={styles.ClubServiceSubheading}>What we do</h4>
            <h3 className={styles.ClubServiceHeading}>Club services</h3>
            <p className={styles.ClubServiceDesc}>
              Integer sagittis nisi nec tortor fermentum aliquet. Integer non
              neque tempor, porttitor lorem id, commodo nulla. Nullam sed
              ultricies erat, nec euismod metus. Morbi porttitor sapien vitae
              leo scelerisque consequat.
            </p>

            <div className={styles.ClubServicesItems}>
              <Carousel responsive={responsiveClubServices}>
                {ClubServicesImg.map((ele, index) => (
                  <Link href={`/services/${ele.name.split(" ").join("-")}`} className={styles.clubServiceLink} key={index}>
                    <div className={styles.ClubServiceItem} key={index}>
                      <div>
                      <div className={styles.ClubServiceItemImg}>
                        <img
                          src={ele.image}
                          alt={`Slide ${index + 1}`}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className={styles.ClubServiceItemInfo}>
                        <div
                          className={styles.ClubServiceItemName}
                          title={ele.name}
                        >
                          {ele.name}
                        </div>
                        <div className={styles.ClubServiceItemDesc}>
                          {ele.desc}
                        </div>
                      </div>
                      </div>
                      <div className={styles.ClubServiceButton}>
                        <button className={styles.btnPrimary}>
                          <span>read more</span>
                        </button>
                      </div>
                    </div>
                  </Link>

                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubServicesSection;
