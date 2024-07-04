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
                  Shazim Marine Mechanical Services offers comprehensive bow
                  thruster inspection and repair services, whether in dock,
                  in-house, or afloat, depending on the specific requirements.
                  Our Propulsion Team is adept at maintaining all parts of the
                  bow thruster, regardless of make or model.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/bowThurster1.jpg"
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
                <p>Commonly Requested Checks Include</p>
                <ul className={styles.list}>
                  <li>- Replacement of blade foot O-rings</li>
                  <li>- Replacement of shaft seals</li>
                  <li>- Replacement of top seals</li>
                  <li>- Removal of the pinion shaft</li>
                  <li>- Replacement of bearings</li>
                  <li>- Inspection and overhaul of the OD box</li>
                  <li>- Quick scan of the gear set</li>
                  <li>- Blade repair</li>
                  <li>- Hub inspection and repair</li>

                  <div className={styles.image}>
                    <img
                      src="https://fama.b-cdn.net/sms/hubInspection2.jpg"
                      className="attachment-lamaro-post size-lamaro-post wp-post-image"
                      alt=""
                    />
                  </div>
                </ul>
                <p>
                  If a spare thruster is available, we can install it
                  immediately and transport the damaged unit to our workshop for
                  repair.
                </p>
                <p>
                  We also offer complete overhauls, renewing all parts that
                  exhibit wear or dysfunction, ensuring optimal performance and
                  longevity of your bow thruster system.
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
