"use client";
import React from "react";
import styles from "./AboutYachtClubSection.module.css";

const AboutYachtClubSection = () => {
  const data = [
    {
      number: "200+",
      name: "Projects Completed",
      desc: "We take pride in the diverse range of projects we have successfully completed. From large-scale ventures to specialized tasks, each project reflects our commitment to quality and innovation",
    },
    {
      number: "30+",
      name: "Supports",
      desc: "Exceptional support is a cornerstone of our service. We believe in providing comprehensive assistance to ensure our clients’ needs are met promptly and effectively.",
    },
    {
      number: "100+",
      name: "Clients",
      desc: "Over the years, we have had the privilege of working with a variety of clients, from small businesses to large enterprises. Each partnership has helped us grow and improve our services.",
    },
  ];
  return (
    <section className={styles.sectionContainer}>
    <div className={styles.ImageRotating}>
      <img src="https://fama.b-cdn.net/sms/cumpus.webp" alt="img" />
    </div>
      <div className={styles.AboutYachtClubSectionContainer}>
        <div className="container">
          <div className={styles.AboutYachtClubBody}>
            <h4 className={styles.AboutYachtClubSubheading}>Our Achievements</h4>
            <h3 className={styles.AboutYachtClubHeading}>
              Our Achievements at a Glance
            </h3>

            <div className={styles.customerCountBody}>
               {data.map((ele, index) => (
                <div className={styles.customerCountItem} key={index}>
                  <div className={styles.countNumber}>{ele.number}</div>
                  <div className={styles.countName}>{ele.name}</div>
                  <div className={styles.countDesc}>{ele.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYachtClubSection;
