import React from "react";
import styles from "@/components/about-us/about-us.module.css";
const aboutus = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionDivider}></div>
      <div className={styles.ClubServicesContainer}>
        <div className="container">
          <div className={styles.ClubServicesBody}>
            <h4 className={styles.ClubServiceSubheading}>What we do</h4>
            <h3 className={styles.ClubServiceHeading}>About us</h3>
            <p className={styles.ClubServiceDesc}>
              Our service is of international / national quality and we cater
              world wide to, machinery overhaul and repair services, hydraulics,
              calibration, gear box rudder, compressor, pumps, valves, windlass,
              mooring winch, turbo charger, hatch cover, all other machinery
              repairs & maintenance, supply of general store & spare parts & we
              also supply manpower. Due to our commitment and reliability we
              have a sizeable client list including some major shipping
              companies worldwide.
            </p>

            <div className={styles.ClubServicesItems}>
              <div className={styles.ClubServiceItem}>
                <div className={styles.ClubServiceItemImg}>
                  <img
                    src="https://fama.b-cdn.net/sms/about-us.webp"
                    alt="about"
                    style={{ width: "100%", maxHeight: "450px" }}
                  />
                </div>
                <div className={styles.ClubServiceItemInfo}>
                  <div className={styles.ClubServiceItemName}>OUR CORE VALUES</div>
                  <div className={styles.ClubServiceItemDesc}>
                    Our customers are the focus of our business and our esteemed
                    partners. We communicate with them openly, fairly and
                    reliably. Our commitment is their added value. Our aim to
                    provide our clients a One stop solution to all their
                    maritime requirements worldwide
                  </div>
                </div>
                {/* <div className={styles.ClubServiceButton}>
                  <button className={styles.btnPrimary}>
                    <span>read more</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutus;
