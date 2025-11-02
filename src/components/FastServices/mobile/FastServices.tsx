import styles from "./FastServices.module.scss";

import Previous from "@/assets/Previous.svg";
import ImageSvg from "../../ui/ImageSvg/ImageSvg";
import services from "../Data";

export default function FastServices() {
  return (
    <section
      className={styles.fastServicesSection}
      aria-labelledby="fast-services-title"
    >
      <div className={styles.fastServicesHeadingContainer}>
        <h2 id="fast-services-title" className={styles.heading}>
          שירותים מהירים
        </h2>
        <div className={styles.PreviousIconContainer}>
          <ImageSvg src={Previous} />
        </div>
      </div>

      <ul className={styles.servicesGrid}>
        {services.map((service) => (
          <li key={service.id} className={styles.serviceItem}>
            <button
              type="button"
              className={styles.serviceButton}
              aria-label={service.title}
            >
              <span className={styles.iconWrapper} aria-hidden="true">
                {service.icon}
              </span>
              <span className={styles.serviceTitle}>{service.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
