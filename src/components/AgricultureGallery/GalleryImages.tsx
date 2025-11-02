import Image from "../ui/Image/Image";
import styles from "./AgricultureGallery.module.scss";

export default function GalleryImages() {
  return (
    <div className={styles.galleryImages}>
      <figure className={styles.galleryCard + " " + styles.firstGalleryCard}>
        <img
          className={styles.cardImage}
          src="/src/assets/Asher-Golan-Photo-Desktop.png"
          alt="צילום: אשר גולן"
        />
        <figcaption>צילום: אשר גולן</figcaption>
      </figure>

      <figure className={styles.galleryCard}>
        <img
          className={styles.cardImage}
          src="/src/assets/Bina-Cohen_Picture-Desktop.png"
          alt="צילום: בינה כהן"
        />
        <figcaption>צילום: בינה כהן</figcaption>
      </figure>
    </div>
  );
}
