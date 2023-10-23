import { useContext, useEffect } from "react";
import styles from "../styles/modules/Home.module.css";
import logo from "../assets/logo-background.svg";
import Transition from "../utils/transitions";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import  HeroSection  from "../components/HeroSection";
import IntroSection from "../components/IntroSection";

const Home = () => {
  
  const { isOpen } = useContext(MenuBtnContext);
  
  console.log("Home page rendered");

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  return (
    <main  className={isOpen? styles["shrink"] : ""}>

      <HeroSection/>
      <IntroSection/>
      
    </main>
  );
};


const HomeWithTransition = Transition(Home);

export default HomeWithTransition;
