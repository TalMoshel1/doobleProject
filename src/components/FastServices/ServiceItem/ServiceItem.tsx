import React from "react";
import styles from "./ServiceItem.module.scss";
import Image from "@/components/ui/Image/Image";

interface ServiceItemProps {
  id: string | number;
  title: string;
  src: string;
  alt: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ id, title, src, alt }) => {
  return (
    <li key={id} className={styles.serviceItem}>
      <button type="button" className={styles.serviceButton} aria-label={title}>
        <span className={styles.iconWrapper} aria-hidden="true">
          <img src={src} alt={alt} />
        </span>
        <span className={styles.serviceTitle}>{title}</span>
      </button>
    </li>
  );
};

export default ServiceItem;
