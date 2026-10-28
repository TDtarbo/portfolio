import styles from "../../styles/modules/Navigation.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SphereShape from "../utils/Sphere";

const Navigation = ({ mouseClick, mouseLeave, isOpen }) => {
  const handleClick = () => {
    setTimeout(() => {
      mouseClick();
      mouseLeave();
    }, 500);
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
      },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const listVariants = {
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
  };

  return (
    <nav className={styles["navigation-container"]}>
      <motion.div
        className={styles["canvas-container"]}
        variants={fadeInRight}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
      >
        <Canvas
          className="canvas"
          dpr={[1, 1.5]}
          style={{ width: "100%", height: "100%", display: "block" }}
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
      <div className={styles["links-container"]}>
      <motion.ul variants={listVariants} initial="hidden" whileInView="visible">
      <motion.li variants={variants}>
        <Link onClick={handleClick} to="/">
          Home
        </Link>
      </motion.li>
      <motion.li variants={variants}>
        <Link onClick={handleClick} to="/about">
          About
        </Link>
      </motion.li>
      <motion.li variants={variants}>
        <Link onClick={handleClick} to="/mywork">
          My Work
        </Link>
      </motion.li>
    </motion.ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  mouseClick: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Navigation;
