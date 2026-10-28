import { useContext, useEffect } from "react";
import styles from "../components/home/Home.module.css";
import Transition from "../components/utils/Transitions";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import HeroSection from "../components/home/hero/HeroSection";
import IntroSection from "../components/home/intro/IntroSection";
import WorkSection from "../components/home/work/WorkSection";
import SkillsSection from "../components/home/skills/SkillsSection";
import ContactSection from "../components/home/contact/ContactSection";

const Home = () => {
  const { isOpen } = useContext(MenuBtnContext);

  console.log("Home page rendered");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      id="top"
      className={`${styles.homePage} ${isOpen ? styles["shrink"] : ""}`}
    >
      <HeroSection />
      <IntroSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      {/* <img className={styles.logo} src={logo} /> */}
    </main>
  );
};

const HomeWithTransition = Transition(Home);

export default HomeWithTransition;
