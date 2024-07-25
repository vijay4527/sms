import React from "react";
import styles from "@/components/whatsAppButton/whatsAppButton.module.css";
import Link from "next/link";
const WhatsAppButton = () => {
  return (
    <div className={styles.whatsappButton}>
      <Link href="whatsapp://send?phone=+918169374414">
        <i className={`fa fa-whatsapp ${styles.icon}`}></i>
        <span className={styles.whatsAppSpan}>How can we help you ?</span>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
