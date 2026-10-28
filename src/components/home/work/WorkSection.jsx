import styles from "./workSection.module.css";

import proj01 from "../../../assets/projects/thumbnails/proj01.png";
import proj04 from "../../../assets/projects/thumbnails/proj04.png";
import proj05 from "../../../assets/projects/thumbnails/proj05.png";
import alertThumb from "../../../assets/projects/react_alert/ra001.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const WorkSection = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    const updateLayout = () => setIsMobile(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [150, -500] : [900, -2000],
  );

  return (
    <div className={styles["container"]} ref={ref}>
      <motion.h1
        className={styles["title"]}
        style={{ x: x }}
        transition={{
          ease: "linear",
          duration: 0.01,
          stiffness: 0,
          damping: 0,
        }}
      >
        My work
      </motion.h1>
      <div className={styles["parent"]}>
        <div className={styles["div1"]}>
          <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj04} className={styles["project-image"]} />
              <Link
                to="/mywork/Getaway-Driver"
                className={styles["overlay-text"]}
              >
                View
              </Link>
            </div>
            <p className={styles["project-title"]}>Getaway Driver: Car Chase</p>
            <p className={styles["project-meta"]}>
              Game development · Interactive experience
            </p>
          </div>
        </div>
        <div className={styles["div2"]}>
          <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img
                src={proj05}
                className={styles["project-image"]}
                alt="Ayurra Herbal storefront"
              />
              <Link
                to="/mywork/Ayurra-Herbal"
                className={styles["overlay-text"]}
              >
                View
              </Link>
            </div>
            <p className={styles["project-title"]}>
              Ayurra Herbal - E-Commerce Storefront
            </p>
            <p className={styles["project-meta"]}>
              Web development · E-commerce
            </p>
          </div>
        </div>
        <div className={styles["div3"]}>
          <h2 className={styles["container-header"]}>Latest Projects</h2>
          <p className={styles["container-paragraph"]}>
            A collection of ideas brought to life through code, creativity, and
            a little curiosity. Each project reflects my journey as a developer,
            the things I love building, and the new challenges that push me to
            grow. 🌟
          </p>
        </div>
        <div className={styles["div4"]}>
          <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img
                src={alertThumb}
                className={styles["project-image"]}
                alt="React Alert npm package"
              />
              <Link to="/mywork/React-Alert" className={styles["overlay-text"]}>
                View
              </Link>
            </div>
            <p className={styles["project-title"]}>React Alert - NPM Package</p>
            <p className={styles["project-meta"]}>
              React package · Open source
            </p>
          </div>
        </div>
        <div className={styles["div5"]}>
          <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img
                src={proj01}
                className={styles["project-image"]}
                alt="LearnUP study planner app"
              />
              <div className={styles["overlay-text"]}>Available soon</div>
            </div>
            <p className={styles["project-title"]}>
              LearnUP - The Study Planner App
            </p>
            <p className={styles["project-meta"]}>
              Product design · Android application
            </p>
          </div>
        </div>
      </div>
      <div className={styles["section-footer"]}>
        <div className={styles["line"]}></div>
        <Link to="/mywork" className={styles["see-all-btn"]}>
          See all work
        </Link>
      </div>
    </div>
  );
};

export default WorkSection;
