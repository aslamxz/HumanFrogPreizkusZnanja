import React, { useState, useEffect, useCallback } from "react";
import useResponsive from "../../../hooks/useResponsive";
import mobileLogo from "../../images/kcdm-mobile-logo.svg";
import desktopLogo from "../../images/kcdm-correct.svg";
import hamburgerIcon from "../../images/icons/f__hamburger_menu_.svg";
import xIcon from "../../images/icons/f__close_.svg";
import searchIconMobile from "../../images/icons/f__search_mobile_.svg";
import searchIconDesktop from "../../images/icons/f__search_.svg";

const Header = () => {
  const isMobile = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, [setMenuOpen]);

  return (
    <header className={isMobile ? "header-mobile" : "header"}>
      <div className={isMobile ? "header-wrapper-mobile" : "header-wrapper"}>
        <div className="logo">
          <img src={isMobile ? mobileLogo : desktopLogo} alt="Logo" />
        </div>

        <nav className={isMobile ? "nav-mobile" : "nav"}>
          <span className="line"></span>
          {isMobile && (
            <div className="menu-height-fixed" onClick={toggleMenu}>
              <img src={hamburgerIcon} alt="Mobile-Menu" />
            </div>
          )}
          {isMobile && menuOpen && (
            <div className={`mobile-menu ${menuOpen ? "open" : "close"}`}>
              <div className="mobile-menu-wrapper">
                <span className="subtract"></span>
                <div className="close-icon">
                  <img src={xIcon} alt="Close-Menu" onClick={toggleMenu} />
                </div>

                <ul className="mobile-menu-list">
                  {["Vstopna stran", "Znanje", "Aktualno", "O KCDM"].map(
                    (item, index) => (
                      <div key={index} className="item-width-fixed">
                        <li className="item">
                          <span className="indicator-mobile"></span>
                          <a href="#">{item}</a>
                        </li>
                      </div>
                    )
                  )}
                </ul>

                <button className="platforma-dna">Platforma dna</button>

                <span
                  className={isMobile ? "line-menu-mobile" : "line-menu"}
                ></span>

                <div
                  className={
                    isMobile ? "language-switch-mobile" : "language-switch"
                  }
                >
                  <div className="position-fixed">
                    <h4 className="sl">Sl</h4>
                    <h4
                      className={`${isMobile ? "en" : ""} ${
                        isMobile && menuOpen ? "show" : "un-show"
                      }`}
                    >
                      EN
                    </h4>
                  </div>
                </div>

                <div className={isMobile ? "search-mobile" : "search"}>
                  <img src={searchIconMobile} alt="Search icon" />
                </div>
              </div>
            </div>
          )}
          {!isMobile && !menuOpen && (
            <div className="menu">
              <div className="menu-wrapper">
                <span className="subtract"></span>
                <ul className="menu-list">
                  {["Znanje", "Aktualno", "O KCDM"].map((item, index) => (
                    <div key={index} className="item-width-fixed">
                      <li className="item">
                        <span className="indicator"></span>
                        <a href="#">{item}</a>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="search">
                <img
                  className="search-icon"
                  src={searchIconDesktop}
                  alt="Search icon"
                />
              </div>
              <button className="platforma-dna">Platforma dna</button>
            </div>
          )}
          <div className="line-menu"></div>
          <h4 className="en">eng</h4>
        </nav>
      </div>
    </header>
  );
};

export default Header;
