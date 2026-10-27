import { useContext, useEffect } from "react";
import styles from "../components/home/Home.module.css";
import logo from "../assets/logo-background.svg";
import Transition from "../components/utils/Transitions";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import  HeroSection  from "../components/home/hero/HeroSection";
import IntroSection from "../components/home/intro/IntroSection";
import WorkSection from "../components/home/work/WorkSection";
import SkillsSection from "../components/home/skills/SkillsSection";

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
      <WorkSection/>
      <SkillsSection/>
      {/* <img className={styles.logo} src={logo} /> */}
      
    </main>
  );
};


const HomeWithTransition = Transition(Home);

export default HomeWithTransition;
