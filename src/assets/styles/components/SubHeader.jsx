import React, { useEffect, useState } from "react";
import useResponsive from "../../../hooks/useResponsive";
import img5Mobile from "../../images/img_5_mobile.png";

const SubHeader = ({ menuOpen }) => {
  const isMobile = useResponsive();

  console.log(menuOpen);

  return (
    <div
      className={`${isMobile ? "subheader-mobile" : "subheader"} ${
        !menuOpen ? "show" : "hidden"
      }`}
    >
      <div
        className={isMobile ? "subheader-wrapper-mobile" : "subheader-wrapper"}
      >
        <div className={isMobile ? "hidden" : "stripes"}></div>
        <div
          className={isMobile ? "subheader-title-mobile" : "subheader-title"}
        >
          <span
            className={isMobile ? "title-line-mobile" : "title-line"}
          ></span>
          <h2 className={isMobile ? "title-mobile" : "title"}>Aktualno</h2>
        </div>
        <div className={isMobile ? "subheader-menu-mobile" : "subheader-menu"}>
          <div
            className={
              isMobile ? "subhd-menu-wrapper-mobile" : "subhd-menu-wrapper"
            }
          >
            <ul
              className={isMobile ? "sbhd-menu-list-mobile" : "sbhd-menu-list"}
            >
              <span className={isMobile ? "list-item-mobile" : "list-item"}>
                <div className={isMobile ? "item-fixed-mobile" : "item-fixed"}>
                  <li className={isMobile ? "item-mobile" : "item"}>
                    <a href="#">Novice</a>
                  </li>
                </div>
              </span>
              <span className={isMobile ? "list-item-mobile" : "list-item"}>
                <div className={isMobile ? "item-fixed-mobile" : "item-fixed"}>
                  <li className={isMobile ? "item-mobile" : "item"}>
                    <a href="#">Prihajajoči dogodki</a>
                  </li>
                </div>
              </span>
              <span className={isMobile ? "list-item-mobile" : "list-item"}>
                <div className={isMobile ? "item-fixed-mobile" : "item-fixed"}>
                  <li className={isMobile ? "item-mobile" : "item"}>
                    <a href="#">Pretekli dogodki</a>
                  </li>
                </div>
              </span>
            </ul>
          </div>
        </div>
        <div
          className={
            isMobile ? "subhd-img-placeholder-mobile" : "subhd-img-placeholder"
          }
        >
          {/* <img
            src={isMobile ? img5Mobile : "img_5.png"}
            className={isMobile ? "img_5_mobile" : "img_5"}
          ></img> */}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
