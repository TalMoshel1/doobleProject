import ImageSvg from "../ui/ImageSvg/ImageSvg";
import styles from "./LanguageButton.module.scss";
import Down from "/Down.svg";

export default function LanguageButton() {
  return (
    <button className={styles.languageButton} aria-label="switch language">
      <span>English</span>
      <div className={styles.downContainer}>
        <ImageSvg src={Down} isTabIndex={false} aria-hidden="true" />
      </div>
    </button>
  );
}
