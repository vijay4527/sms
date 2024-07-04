import React from "react";
import styles from "@/app/services/[slug]/page.module.css";

const page = () => {
  return (
    <div>
      <div className={`container ${styles.serviceContainer}`}>
        <section className={styles["blog-post"]}>
          <article
            id="post-7728"
            className={`post-7728 ${styles.services} type-services status-publish has-post-thumbnail hentry services-category-services`}
          >
            <h3>Bow Thruster System : </h3>

            <div className="description">
              <div className="text text-page">
                <p>
                  At Shazim Marine Mechanical Services, our team of experienced
                  professionals specializes in hydraulics and winch-related
                  repairs. We provide on-site repair and maintenance services
                  for winches, associated hydraulics, and winch control systems.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/winches1.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              <img
                src="https://fama.b-cdn.net/sms/winches2.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>
            <div className="description">
              <div className="text text-page">
                <p>
                  Sometimes, upgrading an existing system can be more beneficial
                  than installing a new one. Leveraging our extensive knowledge
                  and expertise, we can assist you in enhancing and modifying
                  your hydraulic systems. In our workshops, we overhaul motors,
                  pumps, valves, and PLC cabinets, significantly improving
                  performance.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/winches3.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              <img
                src="https://fama.b-cdn.net/sms/winches4.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>
            <div className="description">
              <div className="text text-page">
                <p>
                  We are dedicated to finding the most cost-effective and
                  advantageous solutions for your hydraulic needs. Your
                  satisfaction is the cornerstone of our operations, and we
                  always strive to exceed your expectations.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default page;
