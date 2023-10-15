import styles from "../styles/modules/Home.module.css";
import logo from '../assets/logo-small.svg';


const Home = () => {


  return (
    <main>
      <div className={styles["hero-title-para-one"]}>Hello!</div>
      <div className={styles["hero-title-para-two"]}>I am Thilina &</div>
      <div className={styles['hero-title-para-three-container']}>
            <span className={styles['hero-title-para-three']}>I love </span>
            <span className={styles['hero-title-para-three-typing']} >
             &lt;Coding/&gt;
            </span>
          </div>
          <img className={styles.logo}  src={logo}/>
    </main>
  );
};

export default Home;
