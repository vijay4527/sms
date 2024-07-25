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
            <h3>Overhauling of Main Engine and Generator</h3>

            <h5>Full Service Capabilities</h5>

            <div className="description">
              <div className="text text-page">
                <p>
                  At Shazim Marine Mechanical Services, our team of highly
                  skilled engineers and technicians boasts extensive experience
                  and certifications in a diverse array of diesel engines and
                  main engine overhauls. Many of our experts hold Diplomas in
                  Mechanical Engineering, and a number of them are distinguished
                  marine engineers with top-tier competency certificates in the
                  marine sector. Their practical experience encompasses the
                  maintenance of nearly all types of marine diesel engines.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.imageContainer}>
                <img
                  src="https://fama.b-cdn.net/sms/services/overhauling/overhauling3.webp"
                  className="attachment-lamaro-post size-lamaro-post wp-post-image"
                  alt=""
                />
                <img
                  src="https://fama.b-cdn.net/sms/services/overhauling/overhauling4.webp"
                  className="attachment-lamaro-post size-lamaro-post wp-post-image"
                  alt=""
                />
              </div>
            </div>
            <div className="description">
              <div className="text text-page">
                <p>
                  Our engine repair department excels in providing through
                  inboard marine engine services and repairs, fully equipped
                  with mobile capabilities. Each technician and supervisor on
                  our team brings over 15 years of dedicated marine engine
                  repair experience.
                </p>
                <p>
                  Our rapid-response teams are ready to deliver engine repair
                  services anywhere in the world.
                </p>
              </div>
            </div>
          </article>

          <article
            id="post-7728"
            className={`post-7728 ${styles.services} type-services status-publish has-post-thumbnail hentry services-category-services`}
          >
            <h5>Our Services Include</h5>
            <h6>Diesel Engine Repair</h6>

            <div className="description">
              <div className="text text-page">
                <p>
                  Expert repair services for all types of diesel engines,
                  ensuring optimal performance and longevity.
                </p>
              </div>
            </div>
            <div className={styles.image}>
                <img
                  src="https://fama.b-cdn.net/sms/dieselEngineRepair.jpg"
                  className="attachment-lamaro-post size-lamaro-post wp-post-image"
                  alt=""
                />
            </div>

            <div className={styles.image}>
            <div className={styles.imageContainer}>
              <img
                src="https://fama.b-cdn.net/sms/services/overhauling/overhauling7.webp"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              <img
                src="https://fama.b-cdn.net/sms/dieselEngineRepair3.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              </div>
            </div>

            <h6>Main Engine Overhaul</h6>
            <div className="description">
              <div className="text text-page">
                <p>
                  Comprehensive overhauls that restore your main engines to
                  their best condition.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/mianEngineOverhaule.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>

            <h6>Reconditioning</h6>
            <div className="description">
              <div className="text text-page">
                <p>
                  Advanced reconditioning techniques that enhance the
                  performance and reliability of your engines in major
                  overhauling.
                </p>
              </div>
            </div>
            <div className={styles.image}>
            <div className={styles.imageContainer}>
              <img
                src="https://fama.b-cdn.net/sms/reconditioning1.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              <img
                src="https://fama.b-cdn.net/sms/reconditioning2.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
              </div>
            </div>

            <h6>Spare Parts Supply</h6>
            <div className="description">
              <div className="text text-page">
                <p>
                  High-quality spare parts that meet the stringent standards of
                  the marine industry.
                </p>
              </div>
            </div>
            <div className={styles.image}>
            {/* <img
                src="/overhauling9.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              /> */}
              <img
                src="https://fama.b-cdn.net/sms/spare_parts.webp"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>
            <div className="description">
              <div className="text text-page">
                <p>
                  Trust us to keep your engines running smoothly with our
                  unparalleled service and expertise. Contact us today to learn
                  how we can support your marine operations.
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
