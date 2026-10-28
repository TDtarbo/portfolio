import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import MyWork from "../../pages/MyWork";
import GetawayDriver from "../../pages/projects/GetawayDriver";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/mywork/Getaway-Driver" element={<GetawayDriver />} />
        </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
