import styles from "./IntroSection.module.css";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SphereShape from "../../utils/Sphere";

const paragraph = [
  "I'm Thilina, a dedicated software",
  "engineering undergraduate with a passion",
  "for creating innovative solutions.",
];

const fadeInBottom = {
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

const fadeInRight = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.3,
    },
  },
};

function IntroSection() {
  return (
    <>
      <div className={styles["intro-section"]}>
        <ul className={styles["hero-paragraph"]}>
          {paragraph.map((paragraphLine, index) => {
            return (
              <motion.li
                key={index}
                variants={fadeInBottom}
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
        <motion.div
          className={styles["canvas-container"]}
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Canvas
            className="canvas"
            camera={{
              position: [0, 0, -10],
            }}
          >
            <OrbitControls enableZoom={false} />
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <SphereShape />
          </Canvas>
        </motion.div>
      </div>
    </>
  );
}

export default IntroSection;
