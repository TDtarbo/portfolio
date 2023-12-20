import styles from "./workSection.module.css";

import proj01 from "../../../assets/proj01.png";
import proj02 from "../../../assets/proj02.png";
import proj03 from "../../../assets/proj03.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WorkSection = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [200, -400]);

  return (
    <div className={styles["container"]} ref={ref}>
      <motion.h1
        className={styles["title"]}
        style={{ x: x }}
        transition={{ ease: "linear", duration: 0.01, stiffness: 0, damping: 0 }}
      >
        My work
      </motion.h1>
      <div className={styles["parent"]}>
        <div className={styles["div1"]}>
          <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj01} className={styles["project-image"]} />
              <div className={styles["overlay-text"]}>View</div>
            </div>
            <p className={styles["project-title"]}>
              LearnUP - The Study Planner App
            </p>
          </div>
        </div>
        <div className={styles["div2"]}><div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj02} className={styles["project-image"]} />
              <div className={styles["overlay-text"]}>View</div>
            </div>
            <p className={styles["project-title"]}>
              VidCatch - Youtube video downloader
            </p>
          </div> </div>
        <div className={styles["div3"]}>
          <h2 className={styles["container-header"]}>Latest Projects</h2>
          <p className={styles["container-paragraph"]}>
            Embark on a journey through my most recent ventures—a symphony of
            creativity, innovation, and passion. In the realm of pixels and
            code, each project is a unique story waiting to be explored. 🌟
          </p>
        </div>
        <div className={styles["div4"]}><div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj03} className={styles["project-image"]} />
              <div className={styles["overlay-text"]}>View</div>
            </div>
            <p className={styles["project-title"]}>
              Node File Organizer
            </p>
          </div> </div>
      </div>
      <div className={styles["section-footer"]}>
        <div className={styles["line"]}></div>
        <a className={styles["see-all-btn"]} href="#">See all work</a>
      </div>
    </div>
  );
};

export default WorkSection;
