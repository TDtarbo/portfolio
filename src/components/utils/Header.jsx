import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import styles from "../../styles/modules/Header.module.css";
import logo from "../../assets/brand/logo-small.svg";
import Navigation from "./Navigation";
import { CursorContext } from "../../contexts/CursorContext";
import { MenuBtnContext } from "../../contexts/MenuBtnContext";

const Header = () => {
  console.log("Header rendered");

  const { cursorVariant, setCursorVariant } = useContext(CursorContext);
  const { isOpen, setIsOpen } = useContext(MenuBtnContext);
  const location = useLocation();
  const isAyurraPage = location.pathname === "/mywork/Ayurra-Herbal";
  const isGetawayPage = location.pathname === "/mywork/Getaway-Driver";
  const isReactAlertPage = location.pathname === "/mywork/React-Alert";
  const [scrollDirection, setScrollDirection] = useState("top");

  useEffect(() => {
    let lastScroll = 0;

    const scrollActivatedNavigation = () => {
      let currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection("top");
      } else if (currentScroll > lastScroll) {
        setScrollDirection("down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("up");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", scrollActivatedNavigation);

    return () => {
      window.removeEventListener("scroll", scrollActivatedNavigation);
    };
  }, []);

  const mouseEnter = () => {
    cursorVariant == "default"
      ? setCursorVariant("menu")
      : setCursorVariant("close");
  };

  const mouseLeave = () => {
    cursorVariant == "close"
      ? setCursorVariant("open")
      : setCursorVariant("default");
  };

  const mouseClick = () => {
    cursorVariant == "menu"
      ? setCursorVariant("close")
      : setCursorVariant("menu");
  };

  const headerTitle = "< DevThilina />";

  const handleToggle = () => {
    mouseClick();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`
          ${styles.overlay} 
          ${isOpen ? styles["overlay-open"] : ""}`}
      >
        <Navigation
          mouseClick={handleToggle}
          mouseLeave={mouseLeave}
          isOpen={isOpen}
        />
      </div>

      <header
        className={`
          ${styles["header-wrapper"]} 
          ${isAyurraPage ? styles["header-wrapper-ayurra"] : ""}
          ${isGetawayPage ? styles["header-wrapper-getaway"] : ""}
          ${isReactAlertPage ? styles["header-wrapper-react-alert"] : ""}
          ${isOpen ? styles.open : ""}
          ${
            scrollDirection === "down"
              ? styles["header-wrapper-scroll-down"]
              : ""
          }
          `}
      >
        <div
          className={`
            ${styles["header-container"]} 
            ${isOpen ? styles.open : ""}
            ${
              scrollDirection === "up"
                ? styles["header-container-scroll"]
                : scrollDirection === "down"
                  ? styles["header-container-scroll"]
                  : ""
            }
            `}
        >
          <div className={styles["logo-container"]}>
            <img
              src={logo}
              className={`
                ${styles.logo} 
                ${isOpen ? styles["logo-open"] : ""}
                ${scrollDirection === "top" ? styles["logo-animation"] : ""}
                `}
            />

            <span
              data-text={headerTitle}
              className={`
              ${styles["header-title"]} 
              ${isOpen ? styles["header-title-open"] : ""}
              ${
                scrollDirection === "up"
                  ? styles["header-title-scroll-up"]
                  : scrollDirection === "down"
                    ? styles["header-title-scroll-up"]
                    : ""
              }
              `}
            >
              {headerTitle}
            </span>
          </div>

          <div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={handleToggle}
            className={`
            ${styles["hamburger-toggle"]} 
            ${isOpen ? styles["hamburger-toggle-open"] : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
