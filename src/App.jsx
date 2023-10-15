import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import logo from './assets/logo-small.svg';
import "./styles/modules/App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedRoutes from "./utils/AnimatedRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        style: "background-color: orange",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("load", handleLoad);
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
    },
  };

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

  return (
    <>
      {loading ? (
        <div className="preloader">
          <img className="preloader-logo" src={logo} />
        </div>
      ) : (
        <>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />
          <BrowserRouter>
            <Header
              mouseEnter={mouseEnter}
              mouseLeave={mouseLeave}
              mouseClick={mouseClick}
            />
            <AnimatedRoutes />
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
