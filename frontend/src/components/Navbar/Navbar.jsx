import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const navRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${showNavbar ? styles.responsiveNav : ""}`}
        ref={navRef}
      >
        <Link to="/">{t("menu.home")}</Link>
        <Link to="/about">{t("menu.about")}</Link>
        <Link to="/login">{t("menu.login")}</Link>
        <Link to="/contact">{t("menu.contact")}</Link>
        <Link to="/tarif">{t("menu.tarif")}</Link>
        <Link to="/why">{t("menu.why")} </Link>
        {/* <select>
          <option type="button" onClick={() => changeLanguage("en")}>
            English
          </option>
          <option type="button" onClick={() => changeLanguage("fr")}>
            French
          </option>
        </select> */}

        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={handleClick}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={styles.navBtn} onClick={handleClick}>
        <FaBars />
      </button>

      <div className={styles.changeLanguage}>
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={styles.item}
        >
          <img
            className={styles.enFlag}
            alt="english-flag"
            src={require("./assets/uk.png")}
          />
        </button>
        <button
          type="button"
          onClick={() => changeLanguage("fr")}
          className={styles.item}
        >
          <img
            className={styles.frFlag}
            alt="frenchflag"
            src={require("./assets/fr-round.png")}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
