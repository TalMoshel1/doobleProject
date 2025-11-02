import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.scss";
import MyAccountButton from "./MyAccountButton";
import LanguageButton from "./LanguageButton";
import Nav from "../Nav/Nav";
import Search from "/Search.svg";
import Theme from "/Theme.svg";
import ImageSvg from "../ui/ImageSvg/ImageSvg";

export default function Header({ children }: React.PropsWithChildren<{}>) {
  return (
    <header tabIndex={0}>
      <div className={styles.row}>
        <div className={styles.logoContainer}>
          <ImageSvg src={"/Kanat-Logo.svg"} tabIndex={-1} alt="קנט" />
        </div>

        {children ?? <Nav />}
      </div>

      <div className={styles.iconsContainer}>
        <div className={styles.changeLanguageButtonContainer}>
          <LanguageButton />
        </div>

        <button aria-label="search" className={styles.searchContainer}>
          <ImageSvg
            src={Search}
            color="primary"
            aria-label={"search"}
            tabIndex={-1}
          />
        </button>

        <ImageSvg src={Theme} aria-label="click to toggle theme" />

        <GiHamburgerMenu
          className={styles.hamburgerIconContainer}
          size={100}
          role="button"
          aria-label="Open menu"
          tabIndex={0}
        />

        <div className={styles.myAccountButtonContainer}>
          <MyAccountButton />
        </div>
      </div>
    </header>
  );
}
