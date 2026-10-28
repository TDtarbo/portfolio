import { motion } from "framer-motion";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "..//Home.module.css";
import SphereShape from "../../utils/Sphere";

const text = "Digital Marvels.";
const letters = Array.from(text);

const ResponsiveOrbitControls = () => {
  const { size } = useThree();
  const isTouchLayout = size.width <= 900;

  if (isTouchLayout) {
    return null;
  }

  return <OrbitControls enableZoom={false} enablePan enableRotate />;
};

const HeroAnimation = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },

    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const mainAnimation = {
    hidden: { y: -300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-content"]}>
          <motion.div
            variants={mainAnimation}
            initial="hidden"
            animate="visible"
            className={styles["hero-title-para-one"]}
          >
            Crafting
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={styles["hero-title-para-two-container"]}
          >
            {letters.map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  variants={child}
                  className={styles["hero-title-para-two"]}
                  style={
                    index === 0 || index === 8 || index === 15
                      ? {
                          color: "var(--primary)",
                          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)",
                        }
                      : {}
                  }
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </motion.div>
          <p className={styles["hero-role"]}>
            Software engineering undergraduate · Full-stack developer
          </p>
        </div>
        <div className={styles["hero-canvas-container"]}>
          <Canvas camera={{ position: [0, 0, -10] }}>
            <ResponsiveOrbitControls />
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <SphereShape />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default HeroAnimation;
