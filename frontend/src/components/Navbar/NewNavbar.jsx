import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header">
      <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
          <div className="bars">
            <button
              onClick={() => {
                setExpandNavbar((prev) => !prev);
              }}
            >
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </button>
          </div>
        </div>
        <div className="links">
          <div className="changeLanguage">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className="item"
            >
              <img
                className="enFlag"
                alt="english flag"
                src={require("./assets/uk.png")}
              />
            </button>
            <button
              type="button"
              onClick={() => changeLanguage("fr")}
              className="item"
            >
              <img
                className="frFlag"
                alt="french flag"
                src={require("./assets/fr-round.png")}
              />
            </button>
          </div>
          <Link to="/">{t("menu.home")}</Link>
          <Link to="/about">{t("menu.about")}</Link>
          <Link to="/login">{t("menu.login")}</Link>
          <Link to="/contact">{t("menu.contact")}</Link>
          <Link to="/tarif">{t("menu.tarif")}</Link>
          <Link to="/why">{t("menu.why")} </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
