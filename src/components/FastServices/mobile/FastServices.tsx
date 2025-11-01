import styles from "./FastServices.module.scss";

import Image from "../../ui/Image/Image";
import ServiceItem from "../ServiceItem/ServiceItem";
import SvgIcon from "../../ui/SvgIcon/SvgIcon";
import Previous from "@/assets/Previous.svg";
import ImageSvg from "../../ui/ImageSvg/ImageSvg";
import services from "../Data";

/* margin inline end of 11px on heading*/
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
          // <ServiceItem
          //   id={service.id}
          //   title={service.title}
          //   src={service.src}
          //   alt={service.alt}
          // />
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
