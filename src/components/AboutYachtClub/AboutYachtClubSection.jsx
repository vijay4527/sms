"use client";
import React from "react";
import styles from "./AboutYachtClubSection.module.css";
import Image from "next/image";

const AboutYachtClubSection = () => {
    const data = [
        {
            number: 39,
            name: 'Motor Yachts',
            desc: 'Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque. Nullam sed ultricies.'
        },
        {
            number: 138,
            name: 'Professional Sailors',
            desc: 'Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque. Nullam sed ultricies.'
        },
        {
            number: 40,
            name: 'Sea Routes',
            desc: 'Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque. Nullam sed ultricies.'
        },
    ];
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.AboutYachtClubSectionContainer}>
                <div className="container">
                    <div className={styles.AboutYachtClubBody}>
                        <h4 className={styles.AboutYachtClubSubheading}>About club</h4>
                        <h3 className={styles.AboutYachtClubHeading}>About yacht club</h3>

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
