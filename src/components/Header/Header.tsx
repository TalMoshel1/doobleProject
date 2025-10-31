import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";

import styles from "./Header.module.scss";
import MyAccountButton from "./MyAccountButton";
import LanguageButton from "./LanguageButton";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header tabIndex={0}>
      <div className={styles.row}>
        <div className={styles.logoContainer}>
          <img src="/Kanat-Logo.png" alt="קנט" loading="lazy" />
        </div>

        <Nav />
      </div>

      <div className={styles.iconsContainer}>
        <div className={styles.changeLanguageButtonContainer}>
          <FaChevronDown className={styles.down} />

          <LanguageButton />
        </div>

        <FaSearch
          className={styles.smallSizeIconContainer}
          role="button"
          aria-label="Search"
          tabIndex={0}
        />

        <MdOutlineLightMode
          className={styles.searchIconContainer}
          role="button"
          aria-label="Toggle theme"
          tabIndex={0}
        />

        <GiHamburgerMenu
          className={styles.hamburgerIconContainer}
          size={100}
          role="button"
          aria-label="Open menu"
          tabIndex={0}
        />

        <div className={styles.myAccountButtonContainer}>
          <FaRegUserCircle className={styles.userIcon} size={'2rem'} />
          <MyAccountButton />
        </div>
      </div>
    </header>
  );
}
