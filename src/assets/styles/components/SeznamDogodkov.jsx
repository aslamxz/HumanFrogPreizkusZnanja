import React, { useState, useEffect } from "react";
import useResponsive from "../../../hooks/useResponsive";

const SeznamDogodkov = ({ menuOpen }) => {
  const isMobile = useResponsive();

  return (
    <section
      className={isMobile ? "seznam-dogodkov-mobile" : "seznam-dogodkov"}
    >
      <div
        className={
          isMobile
            ? "seznam-dogodkov-gap-fixed-mobile"
            : "seznam-dogodkov-gap-fixed"
        }
      >
        <div
          className={
            isMobile
              ? "seznam-dogodkov-title-box-mobile"
              : "seznam-dogodkov-title-box"
          }
        >
          <h2
            className={
              isMobile
                ? "seznam-dogodkov-title-mobile"
                : "seznam-dogodkov-title"
            }
          >
            Napovedujemo
          </h2>
        </div>
        <article
          className={
            isMobile ? "dogodek-bliznjica-mobile" : "dogodek-bliznjica"
          }
        >
          <span
            className={isMobile ? "separator-line-mobile" : "separator-line"}
          ></span>
          <h2
            className={
              isMobile
                ? "dogodek-bliznjica-title-mobile"
                : "dogodek-bliznjica-title"
            }
          >
            Amsterdam, Nizozemska in online
            <span className={isMobile ? "dogodek-date-mobile" : "dogodek-date"}>
              1-3 april 2025
            </span>
          </h2>
          <a
            className={
              isMobile
                ? "dogodek-bliznjica-date-mobile"
                : "dogodek-bliznjica-date"
            }
          >
            Design Management Europe konferenca
          </a>
        </article>
        <article
          className={
            isMobile ? "dogodek-bliznjica-mobile" : "dogodek-bliznjica"
          }
        >
          <span
            className={isMobile ? "separator-line-mobile" : "separator-line"}
          ></span>
          <h2
            className={
              isMobile
                ? "dogodek-bliznjica-title-mobile"
                : "dogodek-bliznjica-title"
            }
          >
            Amsterdam, Nizozemska in online
            <span className={isMobile ? "dogodek-date-mobile" : "dogodek-date"}>
              1-3 april 2025
            </span>
          </h2>
          <a
            className={
              isMobile
                ? "dogodek-bliznjica-date-mobile"
                : "dogodek-bliznjica-date"
            }
          >
            Design Management Europe konferenca
          </a>
        </article>
        <article
          className={!isMobile ? "dogodek-bliznjica shorter one" : "none"}
        >
          <span
            className={isMobile ? "separator-line-mobile" : "separator-line"}
          ></span>
          <h2
            className={
              isMobile
                ? "dogodek-bliznjica-title-mobile"
                : "dogodek-bliznjica-title"
            }
          >
            Ljubljana, Slovenija
            <span className={isMobile ? "dogodek-date-mobile" : "dogodek-date"}>
              1-3 april 2025
            </span>
          </h2>
          <a
            className={
              isMobile
                ? "dogodek-bliznjica-date-mobile"
                : "dogodek-bliznjica-date"
            }
          >
            Design Management Europe konferenca
          </a>
        </article>
        <article className={isMobile ? "dogodek-bliznjica-mobile" : "none"}>
          <span
            className={isMobile ? "separator-line-mobile" : "separator-line"}
          ></span>
          <h2
            className={
              isMobile
                ? "dogodek-bliznjica-title-mobile"
                : "dogodek-bliznjica-title"
            }
          >
            Amsterdam, Nizozemska in online
            <span className={isMobile ? "dogodek-date-mobile" : "dogodek-date"}>
              1-3 april 2025
            </span>
          </h2>
          <a
            className={
              isMobile
                ? "dogodek-bliznjica-date-mobile"
                : "dogodek-bliznjica-date"
            }
          >
            Design Management Europe konferenca
          </a>
        </article>
        <div
          className={`${isMobile ? "more-events-mobile" : ""} ${
            !isMobile ? "more-events" : ""
          }`}
        >
          <div
            className={
              isMobile ? "more-events-fixed-mobile" : "more-events-fixed"
            }
          >
            <div
              className={
                isMobile ? "more-events-box-mobile" : "more-events-box"
              }
            >
              <a
                className={
                  isMobile ? "more-events-btn-mobile" : "more-events-btn"
                }
              >
                več dogodkov
              </a>
              <div
                className={
                  isMobile
                    ? "indicator-gap-fixed-mobile"
                    : "indicator-gap-fixed"
                }
              >
                <span
                  className={
                    isMobile ? "btn-indicator-mobile" : "btn-indicator"
                  }
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeznamDogodkov;
