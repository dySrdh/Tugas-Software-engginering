import { useState } from "react";
import styles from "./Header1.module.css";

const Header1 = ({ onLogoObeng2ImageClick, onSearchBarContainerClick }) => {
  const [isSearchFocused, setSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.logoobeng2Parent}>
        <img
          className={styles.logoobeng2Icon}
          loading="lazy"
          alt=""
          src="/logoobeng-2@2x.png"
          onClick={onLogoObeng2ImageClick}
        />
        <div className={styles.loginHeaderButton}>
          <div
            className={styles.searchbar}
            onClick={onSearchBarContainerClick}
          >
            <img
              className={styles.searchbarChild}
              alt=""
              src="/rectangle-2.svg"
            />
            <img
              className={styles.dummyNameBengkel}
              loading="lazy"
              alt=""
              src="/5186446-1@2x.png"
            />
            <input
              type="text"
              className={`${styles.searchInput} ${isSearchFocused ? styles.focused : ''}`}
              placeholder="Search..."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </div>
        </div>
      </div>
      <div className={styles.bengkelVerticalC}>
        <button className={styles.loginheaderbutton}>
          <img
            className={styles.loginheaderbuttonChild}
            alt=""
            src="/rectangle-3.svg"
          />
          <b className={styles.login}>Login</b>
        </button>
      </div>
    </header>
  );
};

export default Header1;
