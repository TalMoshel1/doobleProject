import styles from "./NewsBar.module.scss";
import { FiPauseCircle } from "react-icons/fi";

export default function NewsBar() {
  return (
    <section className={styles.newsBar}>
      <button aria-label="click to pause news">
        <FiPauseCircle className={styles.pauseIconNewsBar} size={"1.25rem"} />
      </button>

      <h1 aria-label="news" tabIndex={0}>
        חדשות ועדכונים
      </h1>

      <span>|</span>

      <div className={styles.newsTrackContainer}>
        <div className={styles.newsTrack}>
          <p
            className={styles.newsItem}
            tabIndex={0}
            role="text"
            aria-label="new"
          >
            האתר החדש שלנו באוויר!
          </p>

          <p
            className={styles.newsItem}
            tabIndex={0}
            role="text"
            aria-label="new"
          >
            האתר החדש שלנו באוויר וזה מרגש אותי עד מאוד בצורה משוגעת!!
          </p>
        </div>
      </div>
    </section>
  );
}
