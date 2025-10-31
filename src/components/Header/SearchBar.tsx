import styles from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className={styles.searchBar} role="search" aria-label="Site search">
      <button
        type="button"
        aria-label="click to start searching"
        className={styles.buttonsSearchBar}
      >
        <FaSearch className={styles.SearchIconInBar} />
      </button>
      <input
        className={styles.searchInput}
        type="search"
        aria-label="what would you like to search for?"
        placeholder="מה ברצונכם לחפש?"
      />
      <button
        className={styles.buttonsSearchBar}
        type="button"
        aria-label="click to close search"
      >
        <IoClose className={styles.cleanSearch} size={"2rem"} />
      </button>
    </div>
  );
}
