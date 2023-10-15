import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import "./styles/modules/App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        style: "background-color: orange" 
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
