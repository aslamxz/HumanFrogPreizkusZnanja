import React, { useState, useEffect } from "react";
import useResponsive from "../../../hooks/useResponsive";

const HighlightedNovica = ({ menuOpen }) => {
  const isMobile = useResponsive();

  return (
    <article
      className={isMobile ? "highlighted-news-mobile" : "highlighted-news"}
    >
      <div
        className={
          isMobile
            ? "highlighted-news-wrapper-mobile"
            : "highlighted-news-wrapper"
        }
      >
        <h4
          className={
            isMobile
              ? "highlighted-news-title-mobile"
              : "highlighted-news-title"
          }
        >
          Nagrada Good Design Award Avstralija za projekt KCDM
        </h4>
        <div
          className={
            isMobile
              ? "highlighted-news-text-box-mobile"
              : "highlighted-news-text-box"
          }
        >
          <p
            className={
              isMobile
                ? "highlighted-news-text-mobile"
                : "highlighted-news-text"
            }
          >
            Kompetenčni center za design management svojim članom ponuja nabor
            pristopov, orodij in znanj -, ki podjetju omogoča, da design
            uporablja za doseganje poslovnih ciljev.
          </p>
        </div>
        <p
          className={
            isMobile ? "highlighted-news-date-mobile" : "highlighted-news-date"
          }
        >
          1-3 april 2025
        </p>
      </div>
    </article>
  );
};

export default HighlightedNovica;
