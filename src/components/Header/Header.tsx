import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";

import styles from "./Header.module.scss";
import MyAccountButton from "./MyAccountButton";
import LanguageButton from "./LanguageButton";
import Nav from "../Nav/Nav";
import Image from "../ui/Image/Image";

import SvgIcon from "../ui/SvgIcon/SvgIcon";
import Search from "@/assets/Search.svg";
// import HamburgerMenu from "@/assets/Hamburger-Menu.svg";
import Theme from "@/assets/Theme.svg";
import ImageSvg from "../ui/ImageSvg/ImageSvg";

export default function Header() {
  return (
    <header tabIndex={0}>
      <div className={styles.row}>
        <div className={styles.logoContainer}>
          <ImageSvg
            src={"/src/assets/Kanat-Logo.svg"}
            tabIndex={-1}
            alt="קנט"
          />
          {/* <SvgIcon color='secondary'>

                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 124 124" fill="none">
<rect width="124" height="124" rx="24"/>
<path d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z" fill="white"/>
<circle cx="63.2109" cy="37.5391" r="18.1641" fill="black"/>
<rect opacity="0.4" x="81.1328" y="80.7198" width="17.5687" height="17.3876" rx="4" transform="rotate(-45 81.1328 80.7198)" fill="#FDBA74"/>
</svg>
                    </SvgIcon> */}
        </div>

        <Nav />
      </div>

      <div className={styles.iconsContainer}>
        <div className={styles.changeLanguageButtonContainer}>
          {/* <FaChevronDown className={styles.down} /> */}
          {/* <div className={styles.down}>
            <ImageSvg src={Down} width={'0.75rem'} height={'0.463125rem'} isTabIndex={false}/>
          </div> */}

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

        {/* <MdOutlineLightMode
          className={styles.searchIconContainer}
          role="button"
          aria-label="Toggle theme"
          tabIndex={0}
        /> */}

        <ImageSvg src={Theme} aria-label="click to toggle theme" />

        <GiHamburgerMenu
          className={styles.hamburgerIconContainer}
          size={100}
          role="button"
          aria-label="Open menu"
          tabIndex={0}
        />

        <div className={styles.myAccountButtonContainer}>
          {/* <FaRegUserCircle className={styles.userIcon} size={"2rem"} /> */}
          <MyAccountButton />
        </div>
      </div>
    </header>
  );
}
