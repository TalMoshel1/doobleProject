import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.headerNavLinks} aria-label="" title="">
      <a
        aria-label="insurance branches"
        href="/insurance-branches"
        className={styles.navLink}
      >
        ענפי ביטוח
      </a>

      <a aria-label="ABOUT US" href="/about" className={styles.navLink}>
        אודות
      </a>

      <a href="/news" className={styles.navLink} aria-label="WHATS NEW">
        מה חדש?
      </a>

      <a
        aria-label="customer-service"
        href="/customer-service"
        className={styles.navLink}
      >
        שירות לקוחות
      </a>
    </nav>
  );
}
