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
            <h3>Propulsion Systems</h3>

            <h5>CPP Maintenance, Shafting & Overhaul</h5>

            <div className="description">
              <div className="text text-page">
                <p>
                  Our Propulsion Service efficiently manages the entire
                  maintenance process, leveraging the expertise of our highly
                  skilled engineers who have extensive experience with all major
                  installations. We conduct detailed inspections and provide
                  comprehensive reports, including tailored solutions for any
                  identified issues.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/cppMaintanence.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              <img
                src="https://fama.b-cdn.net/sms/cppMaintenance2.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/cppMaintenance3.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              <img
                src="https://fama.b-cdn.net/sms/cppMaintenance4.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>
            <div className="description">
              <div className="text text-page">
                <p>
                  To optimize scheduled docking, we combine various tasks,
                  ensuring efficiency and minimizing downtime.
                </p>
             
                  <p>Commonly Combined Tasks Include:</p>
                  <ul className={styles.list}>
                    <li>- Removal of the shaft</li>
                    <li>- Replacement of blade foot O-rings</li>
                    <li>- RReplacement of stern tube seals</li>
                    <li>- Inspection of the hub</li>
                    <li>- OD-box check-up</li>
                    <li>- Inspection of SKF coupling</li>
                  </ul>
                <p>
                  At Shazim Marine Mechanical Services, we ensure your
                  propulsion system receives top-tier maintenance, enhancing
                  reliability and performance.
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
