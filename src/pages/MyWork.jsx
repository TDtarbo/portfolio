import { useContext, useEffect } from "react";
import styles from "../components/home/Home.module.css";
import Transition from "../components/utils/Transitions";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import WorkSection from "../components/mywork/WorkSection";

const MyWork = () => {
  const { isOpen } = useContext(MenuBtnContext);

  console.log("Home page rendered");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={isOpen ? styles["shrink"] : ""}>
      <WorkSection />
    </main>
  );
};

const MyWorkWithTransition = Transition(MyWork);

export default MyWorkWithTransition;
