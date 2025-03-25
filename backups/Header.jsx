import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import useResponsive from "../../../hooks/useResponsive";
import mobileLogo from "../../images/kcdm-mobile-logo.svg";
import desktopLogo from "../../images/kcdm-correct.svg";
import hamburgerIcon from "../../images/icons/f__hamburger_menu_.svg";
import xIcon from "../../images/icons/f__close_.svg";
import searchIcon from "../../images/icons/f__search_.svg";

const Header = ({ menuOpen, toggleMenu }) => {
  const isMobile = useResponsive();

  console.log(menuOpen);

  return (
    <header className={isMobile ? "header-mobile" : "header"}>
      <div className={isMobile ? "header-wrapper-mobile" : "header-wrapper"}>
        <div className="logo">
          <img src={isMobile ? mobileLogo : desktopLogo} />
        </div>
        <nav className={isMobile ? "nav-mobile" : "nav"}>
          {isMobile && <span className="line"></span>}
          {isMobile && (
            <div
              className="menu-height-fixed"
              onClick={() => {
                toggleMenu();
              }}
            >
              <img src={hamburgerIcon} alt="Mobile-Menu" />
            </div>
          )}
          {isMobile && menuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-wrapper">
                <span className="subtract"></span>
                <div className="close-icon">
                  <img
                    src={xIcon}
                    alt="Close-Menu"
                    onClick={() => {
                      toggleMenu();
                    }}
                  />
                </div>
                <ul className="mobile-menu-list">
                  <div className="item-width-fixed">
                    <li className="item">
                      <span className="indicator"></span>
                      <a href="#">Vstopna stran</a>
                    </li>
                  </div>
                  <div className="item-width-fixed">
                    <li className="item">
                      <span className="indicator"></span>
                      <a href="#">Znanje</a>
                    </li>
                  </div>
                  <div className="item-width-fixed">
                    <li className="item">
                      <span className="indicator"></span>
                      <a href="#">Aktualno</a>
                    </li>
                  </div>
                  <div className="item-width-fixed">
                    <li className="item">
                      <span className="indicator"></span>
                      <a href="#">O KCDM</a>
                    </li>
                  </div>
                </ul>
                <div className="platforma-dna">
                  <div className="vertical-alignment">
                    <h2 className="platforma-dna-text">Platforma dna</h2>
                  </div>
                </div>
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
                    <h4 className="en">EN</h4>
                  </div>
                </div>
                <div className={isMobile ? "search-mobile" : "search"}>
                  <img src={searchIcon} alt="Search icon"></img>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
