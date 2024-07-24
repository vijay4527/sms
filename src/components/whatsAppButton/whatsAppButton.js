import React from "react";
import styles from "./WhatsAppButton.module.css";
import Link from "next/link";
const WhatsAppButton = () => {
  return (
    <div className={styles.whatsappButton}>
      <Link href="whatsapp://send?phone=+918169374414">
        <i className={`fa fa-whatsapp ${styles.icon}`}></i>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
