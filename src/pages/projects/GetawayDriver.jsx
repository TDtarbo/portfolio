import { useContext, useEffect } from "react";
import styles from "./project.module.css";
import Transition from "../../components/utils/Transitions";
import { MenuBtnContext } from "../../contexts/MenuBtnContext";
import { AnimatedText } from "../../components/utils/CustomAnimatation";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

/*Images */
import HeaderImage from "../../assets/gd01.png";

const MyWork = () => {
  const { isOpen } = useContext(MenuBtnContext);

  console.log("Home page rendered");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paragraph =
    "An adrenaline-pumping police chase game where players navigate a dense forest as skilled getaway drivers, evading relentless police pursuit. The game combines high-speed action with strategic vehicle upgrades and increasingly challenging missions.";

  const mainAnimation = {
    hidden: { x: -300, opacity: 0 },
    paragraphHidden: { opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },

    imgVisible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },

    paragraphVisible: {
      opacity: 1,
      transition: {
        delay: 1,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },

    headerVisible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["101%", "-100%"]);

  return (
    <main className={isOpen ? styles["shrink"] : ""}>
      <div className={styles["header-section"]}>
        <motion.div
          variants={mainAnimation}
          initial={mainAnimation.hidden}
          animate="visible"
          className={styles["title"]}
        >
          Gateway Driver: Car Chase
        </motion.div>

        <AnimatedText text={paragraph} className={styles["paragraph"]} />

        <section ref={targetRef} className={styles["card-container-section"]}>
          <div className={styles["card-container-outer"]}>
            <motion.dev
              className={styles["card-container-inner"]}
              style={{ x }}
            >
              <img
               className={styles["header-image"]}
                src={HeaderImage}
                alt="Getaway Driver Main"
              />
              <img
              className={styles["header-image"]}
               src={HeaderImage}
               alt="Getaway Driver Main"
             />

              <img
               className={styles["header-image"]}
                src={HeaderImage}
                alt="Getaway Driver Main"
              />
            </motion.dev>
          </div>
        </section>

        <AnimatedText text={paragraph} className={styles["paragraph"]} />

        <motion.div
          initial={mainAnimation.hidden}
          whileInView={mainAnimation.headerVisible}
          viewport={{
            once: true,
          }}
          className={styles["sub-title"]}
        >
          Over View
        </motion.div>
      </div>
    </main>
  );
};

const MyWorkWithTransition = Transition(MyWork);

export default MyWorkWithTransition;
