import styles from "../styles/modules/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {

  const {mouseClick, mouseLeave} = props


  const handleClick = () => {
    setTimeout(()=> {
      mouseClick()
      mouseLeave()
    }, 500)
  }

  return (
    <nav className={styles["navigation-container"]}>
      <div className={styles["links-container"]}>
        <Link onClick={handleClick} to="/">Home</Link>
        <Link onClick={handleClick} to="/about">About</Link>
        <Link onClick={handleClick} to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navigation;
