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
            <h3>Fabrication : </h3>

            <div className="description">
              <div className="text text-page">
                <p>
                  Shazim Marine Mechanical Services excels in the fabrication of
                  structures, piping, and outfitting for the marine and offshore
                  oil and gas industries. Collaborating with our associate
                  companies, we undertake projects in Singapore, Indonesia, and
                  Bangladesh, tailored to our clients' needs.
                </p>
              </div>
            </div>
           
            <div className="description">
              <div className="text text-page">
                <p>
                  Our dedicated mobile teams ensure rapid and cost-effective
                  repairs, reducing downtime and facilitating the swift return
                  of vessels to service. Operating round the clock, 365 days a
                  year, we guarantee continuous support for the uninterrupted
                  operation of our clients' vessels.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/fabrication2.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>
            <div className={styles.image}>
              <img
                src="https://fama.b-cdn.net/sms/fabrication4.jpg"
                className="attachment-lamaro-post size-lamaro-post wp-post-image"
                alt=""
              />
            </div>
            <div className="description">
              <div className="text text-page">
                <p>
                  We specialize in designing and fabricating offshore
                  containers, cargo baskets, and gangways. Additionally, we are
                  highly regarded for our proficiency in afloat repairs for
                  vessels docking at Southeast Asian ports.
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
