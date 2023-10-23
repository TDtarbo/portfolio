import styles from "../styles/modules/Home.module.css";
import { motion } from "framer-motion";

const paragraph = [
  "I'm Thilina, a dedicated software",
  "engineering undergraduate with a passion",
  "for creating innovative solutions.",
];

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: index * 0.1,
    },
  }),
};

function IntroSection() {
  return (
    <>
      <ul className={styles["hero-paragraph"]}>
        {paragraph.map((paragraphLine, index) => {
          return (
            <motion.li
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {paragraphLine}
            </motion.li>
          );
        })}
      </ul>
    </>
  );
}

export default IntroSection;
