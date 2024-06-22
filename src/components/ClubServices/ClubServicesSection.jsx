"use client";
import React from "react";
import styles from "./ClubServicesSection.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

const ClubServicesSection = () => {
    const responsiveClubServices = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const ClubServicesImg = [
        {
            image: 'https://fama.b-cdn.net/sms/service_01.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_02.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_03.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_01.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_02.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_03.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_01.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_02.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_03.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        },
        {
            image: 'https://fama.b-cdn.net/sms/service_01.webp',
            name: 'Yacht Rental',
            desc: 'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
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
                        <p className={styles.ClubServiceDesc}>Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque tempor, porttitor lorem id, commodo nulla. Nullam sed ultricies erat, nec euismod metus. Morbi porttitor sapien vitae leo scelerisque consequat.</p>

                        <div className={styles.ClubServicesItems}>
                            <Carousel responsive={responsiveClubServices}>
                                {ClubServicesImg.map((ele, index) => (
                                    <div className={styles.ClubServiceItem} key={index}>
                                        <div className={styles.ClubServiceItemImg}>
                                            <img src={ele.image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                                        </div>
                                        <div className={styles.ClubServiceItemInfo}>
                                            <div className={styles.ClubServiceItemName}>{ele.name}</div>
                                            <div className={styles.ClubServiceItemDesc}>{ele.desc}</div>
                                        </div>
                                        <div className={styles.ClubServiceButton}>
                                            <button className={styles.btnPrimary}>
                                                <span>read more</span>
                                            </button>
                                        </div>
                                    </div>
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
