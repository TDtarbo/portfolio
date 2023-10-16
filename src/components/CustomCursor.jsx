import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {CursorContext} from "../contexts/CursorContext";

const CustomCursor = () => {

    const {cursorVariant} = useContext(CursorContext)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 40,
      width: 40,
      top: -20,
      left: -20,
      mixBlendMode: "color-dodge",
    },
    menu: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 100,
      width: 100,
      top: -50,
      left: -50,
      mixBlendMode: "darken",
    },
    close: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 100,
      width: 100,
      top: -50,
      left: -50,
      mixBlendMode: "lighten",
    },
    open: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 40,
      width: 40,
      top: -20,
      left: -20,
      mixBlendMode: "lighten",
    }
  };

  return (
    <motion.div className="cursor" variants={variants} animate={cursorVariant} />
  );
};

export default CustomCursor;
