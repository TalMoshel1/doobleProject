import styles from "./FastServicesDesktop.module.scss";
import Previous from "@/assets/Previous.svg";
import ImageSvg from "@/components/ui/ImageSvg/ImageSvg";
import services from "../Data"; // ✅ ייבוא הנתונים

export default function FastServicesDesktop() {
  return (
    <section className={styles.fastServicesDesktopSection}>
      <div className={styles.fastServicesDesHeadingContainer}>
        <h2 className={styles.heading}>שירותים מהירים</h2>

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
              <span className={styles.iconWrapper}>{service.icon}</span>
              <span className={styles.serviceTitle}>{service.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
