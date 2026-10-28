import { useRef } from "react";
import SkillCard from "./SkillCard";
import { motion, useScroll, useTransform } from "framer-motion"; 

import styles from "./horizontalScrollCarousel.module.css";


import react from "../../../assets/react-logo.png";
import html from "../../../assets/css-logo.png";
import node from "../../../assets/node-logo.png";
import android from "../../../assets/android-logo.png";
import mysql from "../../../assets/mysql-logo.png";
import javascript from "../../../assets/javascript-logo.png";
import php from "../../../assets/php-logo.png";

const cards = [
    {
      url: react,
      title: "React",
      description: "Title 1",
      id: 1,
    },
    {
      url: html,
      title: "HTML & CSS",
      description: "Title 1",
      id: 2,
    },
    {
      url: node,
      title: "Node.Js",
      description: "Title 1",
      id: 3,
    },
    {
      url: android,
      title: "Android",
      description: "Title 1",
      id: 4,
    },
    {
      url: mysql,
      title: "MySQL",
      description: "Title 1",
      id: 5,
    },
    {
      url: javascript,
      title: "JavaScript",
      description: "Title 1",
      id: 6,
    },
    {
      url: php,
      title: "PHP",
      description: "Title 1",
      id: 7,
    },
  ];

  const fadeInBottom = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 2,
        delay: 0.3,
      },
    }),
  };

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
      <>
        <section
          ref={targetRef}
          className={`${styles["card-container-section"]} ${styles["desktop-section"]}`}
        >
        <div className={styles["card-container-outer"]}>
        <motion.h2
          className={styles["title"]}
          variants={fadeInBottom}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          Skills
        </motion.h2>
        <motion.p
          className={styles["paragraph"]}
          variants={fadeInBottom}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          The Palette of Possibilities
        </motion.p>
          <motion.div
            style={{ x }}
            className={styles["card-container-inner"]}
          >
            {cards.map((card) => {
              return <SkillCard card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
        </section>
        <section className={styles["mobile-section"]}>
          <h2 className={styles["mobile-title"]}>Skills</h2>
          <p className={styles["mobile-paragraph"]}>The Palette of Possibilities</p>
          <div className={styles["mobile-card-grid"]}>
            {cards.map((card) => (
              <SkillCard card={card} key={card.id} />
            ))}
          </div>
        </section>
      </>
    );
  };

  export default HorizontalScrollCarousel;
