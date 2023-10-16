import { useContext, useEffect } from "react";
import styles from "../styles/modules/Home.module.css";
import logo from "../assets/logo-small.svg";
import Transition from "../utils/transitions";
import { MenuBtnContext } from "../contexts/MenuBtnContext";

const Home = () => {
  
  const { isOpen } = useContext(MenuBtnContext);
  
  console.log("Home page rendered");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={isOpen? styles["shrink"] : ""}>
      <div className={styles["hero-title-para-one"]}>Hello!</div>
      <div className={styles["hero-title-para-two"]}>I am Thilina &</div>
      <div className={styles["hero-title-para-three-container"]}>
        <span className={styles["hero-title-para-three"]}>I love </span>
        <span className={styles["hero-title-para-three-typing"]}>
          &lt;Coding/&gt;
        </span>
      </div>
      <img className={styles.logo} src={logo} />
    </main>
  );
};


const HomeWithTransition = Transition(Home);

export default HomeWithTransition;
