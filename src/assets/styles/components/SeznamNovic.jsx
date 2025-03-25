import React from "react";
import useResponsive from "../../../hooks/useResponsive";

const SeznamNovic = ({ menuOpen }) => {
  const isMobile = useResponsive();

  return (
    <section className={isMobile ? "seznam-novic-mobile" : "seznam-novic"}>
      <div
        className={
          isMobile ? "seznam-novic-title-box-mobile" : "seznam-novic-title-box"
        }
      >
        <h2
          className={
            isMobile ? "seznam-novic-title-mobile" : "seznam-novic-title"
          }
        >
          Novice
        </h2>
      </div>
      <article
        className={
          isMobile
            ? "novica-bliznjica-mobile"
            : "novica-bliznjica border-top-addon"
        }
      >
        <span
          className={isMobile ? "separator-line-mobile" : "separator-line"}
        ></span>
        <a
          className={
            isMobile
              ? "novica-bliznjica-title-mobile"
              : "novica-bliznjica-title"
          }
        >
          <span className={isMobile ? "underline-mobile" : "underline"}>
            Nagrada Good Design Award Avstralija za projekt KCDM
          </span>
          Nagrada Good Design Award Avstralija za projekt KCDM
        </a>
        <p
          className={
            isMobile ? "novica-bliznjica-date-mobile" : "novica-bliznjica-date"
          }
        >
          1-3 april 2025
        </p>
      </article>
      <article
        className={
          isMobile
            ? "novica-bliznjica-mobile"
            : "novica-bliznjica border-top-addon"
        }
      >
        <span
          className={isMobile ? "separator-line-mobile" : "separator-line"}
        ></span>
        <a
          className={
            isMobile
              ? "novica-bliznjica-title-mobile"
              : "novica-bliznjica-title"
          }
        >
          <span className={isMobile ? "underline-mobile" : "underline"}>
            Nagrada Good Design Award Avstralija za projekt KCDM
          </span>
          Nagrada Good Design Award Avstralija za projekt KCDM
        </a>
        <p
          className={
            isMobile ? "novica-bliznjica-date-mobile" : "novica-bliznjica-date"
          }
        >
          1-3 april 2025
        </p>
      </article>
      <article
        className={!isMobile ? "novica-bliznjica border-top-addon" : "none"}
      >
        <span
          className={isMobile ? "separator-line-mobile" : "separator-line"}
        ></span>
        <a
          className={
            isMobile
              ? "novica-bliznjica-title-mobile"
              : "novica-bliznjica-title shorter-title"
          }
        >
          <span className={isMobile ? "underline-mobile" : "underline"}>
            še en naslov
          </span>
          še en naslov
        </a>
        <p
          className={
            isMobile ? "novica-bliznjica-date-mobile" : "novica-bliznjica-date"
          }
        >
          1-3 april 2025
        </p>
      </article>
      <article
        className={
          isMobile
            ? "novica-bliznjica-mobile"
            : "novica-bliznjica border-top-addon"
        }
      >
        <span
          className={isMobile ? "separator-line-mobile" : "separator-line"}
        ></span>
        <a
          className={
            isMobile
              ? "novica-bliznjica-title-mobile"
              : "novica-bliznjica-title"
          }
        >
          Nagrada Good Design Award Avstralija za projekt KCDM
          <span className={isMobile ? "underline-mobile" : "underline"}>
            Nagrada Good Design Award Avstralija za projekt KCDM
          </span>
        </a>
        <p
          className={
            isMobile ? "novica-bliznjica-date-mobile" : "novica-bliznjica-date"
          }
        >
          1-3 april 2025
        </p>
      </article>
      <article
        className={!isMobile ? "novica-bliznjica border-bottom-addon" : "none"}
      >
        <span
          className={isMobile ? "separator-line-mobile" : "separator-line"}
        ></span>
        <a
          className={
            isMobile
              ? "novica-bliznjica-title-mobile"
              : "novica-bliznjica-title"
          }
        >
          Nagrada Good Design Award Avstralija za projekt KCDM
          <span className={isMobile ? "underline-mobile" : "underline"}>
            Nagrada Good Design Award Avstralija za projekt KCDM
          </span>
        </a>
        <p
          className={
            isMobile ? "novica-bliznjica-date-mobile" : "novica-bliznjica-date"
          }
        >
          1-3 april 2025
        </p>
      </article>
      <div className={isMobile ? "more-news-mobile" : "more-news"}>
        <div
          className={isMobile ? "more-news-fixed-mobile" : "more-news-fixed"}
        >
          <div className={isMobile ? "more-news-box-mobile" : "more-news-box"}>
            <a className={isMobile ? "more-news-btn-mobile" : "more-news-btn"}>
              več novic
            </a>
            <div
              className={
                isMobile ? "indicator-gap-fixed-mobile" : "indicator-gap-fixed"
              }
            >
              <span
                className={isMobile ? "btn-indicator-mobile" : "btn-indicator"}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeznamNovic;
