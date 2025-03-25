import React, { useEffect, useState, useCallback } from "react";
import useResponsive from "../../../hooks/useResponsive";
// import Aktualno from "./Aktualno";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import img5Mobile from "../../images/img_5_mobile.png";
import img5Desktop from "../../images/image_5.png";
import HighlightedNovica from "../components/HighlightedNovica";
import SeznamNovic from "../components/SeznamNovic";
import SeznamDogodkov from "../components/SeznamDogodkov";
import Footer from "../components/Footer";

const Aktualno = ({ toggleMenu, menuOpen }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useResponsive();

  // const hideAll = () => {
  //   menuOpen ?
  // };

  return (
    // <div className={isMobile ? "body-mobile" : "body"}>
    <div
      className={`${isMobile ? "body-mobile" : "body"} ${
        isMobile && menuOpen ? "no-scroll" : ""
      }`}
    >
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <SubHeader menuOpen={menuOpen} />
      <div className={isMobile ? "img_5_container_mobile" : "img_5_container"}>
        <img
          src={isMobile ? img5Mobile : img5Desktop}
          className={isMobile ? "img_5_mobile" : "img_5"}
        ></img>
      </div>
      <HighlightedNovica menuOpen={menuOpen} />
      <h3 className={!isMobile ? "aktualno-title" : "none"}>Aktualno</h3>
      <SeznamNovic menuOpen={menuOpen} />
      <span className={isMobile ? "sep-line-mobile" : "sep-line"}></span>
      <h3 className={!isMobile ? "napovedujemo-title" : "none"}>
        Napovedujemo
      </h3>
      <SeznamDogodkov menuOpen={menuOpen} />
      <Footer menuOpen={menuOpen} />
    </div>
  );
};

export default Aktualno;
