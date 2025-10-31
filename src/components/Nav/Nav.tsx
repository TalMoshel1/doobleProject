import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.headerNavLinks} aria-label="ניווט ראשי" title="Main Navigation">
      <Link
        aria-label="insurance branches"
        to="/insurance-branches"
        className={styles.navLink}
      >
        ענפי ביטוח
      </Link>

      <Link aria-label="ABOUT US" to="/about" className={styles.navLink}>
        אודות
      </Link>

      <Link to="/news" className={styles.navLink} aria-label="WHATS NEW">
        מה חדש?
      </Link>

      <Link
        aria-label="customer-service"
        to="/customer-service"
        className={styles.navLink}
      >
        שירות לקוחות
      </Link>
    </nav>
  );
}
