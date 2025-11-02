import styles from "./Footer.module.scss";
import AppButton from "../AppButton/AppButton";
import Logo from "/Kanat-Logo-White.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* Left: logo & socials */}
        <div className={styles.brandColumn}>
          <img src={Logo} alt="קנט" className={styles.logo} />
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Middle: links */}
        <div className={styles.linksColumn}>
          <h3 className={styles.columnTitle}>מידע כללי</h3>
          <ul>
            <li>
              <a href="#">ארכיון חוזי בטיחות</a>
            </li>
            <li>
              <a href="#">פניות הציבור</a>
            </li>
            <li>
              <a href="#">הצהרת חופש המידע</a>
            </li>
            <li>
              <a href="#">אמנת שירות</a>
            </li>
          </ul>
        </div>

        {/* Right: contact */}
        <div className={styles.contactColumn}>
          <h3 className={styles.contactTitle}>אנחנו פה בשבילך ונשמח לעזור!</h3>
          <AppButton label="צור איתנו קשר" to="/" color="secondary" />
          <address className={styles.address}>
            <p>כתובת: דרך מנחם בגין 74, ת.ד. 51231</p>
            <p>תל-אביב 6721516</p>
            <p>טלפון: 03-6270200</p>
            <p>פקס: 03-6270206</p>
            <p>דוא״ל: kanat@kanat.co.il</p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarRight}>
          <p>כל הזכויות שמורות לקנט ©2021</p>
          <div className={styles.bottomLinks}>
            <a href="#">מפת אתר</a>
            <a href="#">תנאי שימוש ופרטיות</a>
            <a href="#">הצהרת נגישות</a>
          </div>
        </div>

        <span className={styles.credit}>dooble</span>
      </div>
    </footer>
  );
}
