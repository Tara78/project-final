import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${showNavbar ? styles.responsiveNav : ""}`}
        ref={navRef}
      >
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos de</Link>
        <Link to="/login">Prendre RV</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/tarif">Tarif</Link>
        <Link to="/why">La Gestalt-thérapie </Link>
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
    </header>
  );
};

export default Navbar;
