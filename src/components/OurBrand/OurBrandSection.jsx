"use client";
import React from "react";
import styles from "./OurBrandSection.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurBrandSection = () => {
    const responsiveClubServices = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const ClubServicesImg = [
        'https://fama.b-cdn.net/sms/partner-1.webp',
        'https://fama.b-cdn.net/sms/partner-2.webp',
        'https://fama.b-cdn.net/sms/partner-3.webp',
        'https://fama.b-cdn.net/sms/partner-4.webp',
        'https://fama.b-cdn.net/sms/partner-5.webp',
        'https://fama.b-cdn.net/sms/partner-6.webp',
    ];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.OurBrandContainer}>
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
            </div>
        </section>
    );
};

export default OurBrandSection;
