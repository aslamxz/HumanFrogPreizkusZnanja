import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import fbLogo from "../../images/icons/fb_logo.svg";
import inLogo from "../../images/icons/in_logo.svg";
import viLogo from "../../images/icons/vi_logo.svg";
import ministrstvoLogoMobile from "../../images/icons/ministrstvo_logo.png";
import podjetjaLogoMobile from "../../images/icons/podjetja_logo.png";
import humanfrogIcon from "../../images/icons/f__humanfrog_.svg";

const Footer = ({ menuOpen }) => {
  const isMobile = useResponsive();

  return (
    <footer className={isMobile ? "footer-mobile" : "footer"}>
      <section
        className={isMobile ? "social-container-mobile" : "social-container"}
      >
        <article
          className={
            isMobile ? "news-signup-container-mobile" : "news-signup-container"
          }
        >
          <div
            className={isMobile ? "news-upline-mobile" : "news-upline"}
          ></div>
          <div
            className={
              isMobile ? "news-signup-wrapper-mobile" : "news-signup-wrapper"
            }
          >
            <h4 className={isMobile ? "news-title-mobile" : "news-title"}>
              Naročite se na naše e-novice
            </h4>
            <div
              className={
                isMobile
                  ? "news-input-container-mobile"
                  : "news-input-container"
              }
            >
              <div
                className={
                  isMobile
                    ? "input-email-wrapper-mobile"
                    : "input-email-wrapper"
                }
              >
                <input
                  type="text"
                  className={isMobile ? "input-email-mobile" : "input-email"}
                  placeholder="Vnesite svoj e-naslov"
                  id="input-email"
                  name="input-email"
                ></input>
                <div
                  className={
                    isMobile ? "input-indicator-mobile" : "input-indicator"
                  }
                ></div>
              </div>
              <div
                className={
                  isMobile ? "acceptance-box-mobile" : "acceptance-box"
                }
              >
                <label
                  for={
                    isMobile ? "check-acceptance-mobile" : "check-acceptance"
                  }
                >
                  <input
                    type="checkbox"
                    className={
                      isMobile ? "check-acceptance-mobile" : "check-acceptance"
                    }
                  ></input>
                  <span
                    className={
                      isMobile
                        ? "acceptance-placeholder-mobile"
                        : "acceptance-placeholder"
                    }
                  ></span>
                  Strinjam se s pogoji uporabe
                </label>
              </div>
            </div>
          </div>
        </article>
        <article
          className={
            isMobile ? "social-cta-container-mobile" : "social-cta-container"
          }
        >
          <h4 className={isMobile ? "social-title-mobile" : "social-title"}>
            Spremljajte nas
          </h4>
          <div
            className={
              isMobile
                ? "social-logos-container-mobile"
                : "social-logos-container"
            }
          >
            <span>
              <img src={isMobile ? fbLogo : ""} alt="" />
            </span>
            <span>
              <img src={isMobile ? inLogo : ""} alt="" />
            </span>
            <span>
              <img src={isMobile ? viLogo : ""} alt="" />
            </span>
          </div>
        </article>
        <article
          className={
            isMobile ? "archive-container-mobile" : "archive-container"
          }
        >
          <h4 className={isMobile ? "archive-title-mobile" : "archive-title"}>
            Arhivske vsebine
          </h4>
          <p className={isMobile ? "archive-text-mobile" : "archive-text"}>
            Lorem ipsum dolor sit amet consectetur. Tempus blandit enim eget
            nunc enim. Tincidunt feugiat id eleifend eget. Fames condimentum
            scelerisque sollicitudin feugiat tellus lorem tristique iaculis.
            Mauris feugiat placerat.
          </p>
        </article>
        <div
          className={isMobile ? "social-underline-mobile" : "social-underline"}
        ></div>
      </section>
      <section
        className={isMobile ? "marks-container-mobile" : "marks-container"}
      >
        <img
          src={isMobile ? ministrstvoLogoMobile : ""}
          alt=""
          className={isMobile ? "ministrstvo-logo-mobile" : "ministrstvo-logo"}
        />
        <img
          src={isMobile ? podjetjaLogoMobile : ""}
          alt=""
          className={isMobile ? "podjetja-logo-mobile" : "podjetja-logo"}
        />
      </section>
      <section
        className={
          isMobile ? "copyright-container-mobile" : "copyright-container"
        }
      >
        <h4 className={isMobile ? "copyright-title-mobile" : "copyright-title"}>
          © Kompetenčni center za Design Management
        </h4>
        <a href="#" className="copyright-links">
          Pogoji uporabe
        </a>
        <a href="#" className="copyright-links">
          Politika zasebnosti
        </a>
        <span>
          <a href="#" id="humanfrog-cta">
            Oblikovanje in razvoj spletnih strani: Humanfrog
          </a>
          {/* <span id="humanfrog"></span> */}
          <img src={isMobile ? humanfrogIcon : humanfrogIcon} alt="" />
        </span>
      </section>
    </footer>
  );
};

export default Footer;
