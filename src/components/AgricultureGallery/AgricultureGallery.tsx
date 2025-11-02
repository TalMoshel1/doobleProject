import styles from "./AgricultureGallery.module.scss";
import Image from "../ui/Image/Image";
import AppButton from "../AppButton/AppButton";
import GalleryImages from "./GalleryImages";
import Agriculture from '/src/assets/Agriculture-Gallery-Background-Image.svg'
import ImageSvg from "../ui/ImageSvg/ImageSvg";

export default function AgricultureGallery() {
  return (
    <section className={styles.agricultureGallery} >
<div className={styles.gredientColor}></div>
<div className={styles.imageContainerWrapper}>
      <div  className={styles.imageContainer} >
      <img src={Agriculture} className={styles.backgroundImage} />         
        </div>
</div>

      <div className={styles.contentLayer}>

        <div className={styles.textContent}>
          <h2 className={styles.title}>הגלריה החקלאית</h2>
          <p className={styles.description}>
            התחרות "הגלריה החקלאית" של קנט נועדה לצבור הרחבה של התמונות
            הגדולות של החקלאות הישראלית. מטרתה לעודד תיעוד יצירתי ומקורי של
            עבודת האדמה, הטבע והנוף בישראל.
          </p>
          <div className={styles.galleryButtonContainer}>
      <AppButton label="לצפייה בגלריה" to="/" color="primary" />
          </div>
        </div>
<div >
                  <GalleryImages />
</div>

      </div>
    </section>
  );
}
