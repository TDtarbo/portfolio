import styles from "./workSection.module.css";

import proj01 from "../../assets/proj01.png";
import proj02 from "../../assets/proj02.png";
import proj03 from "../../assets/proj03.png";
import proj04 from "../../assets/proj04.png";
import { Link } from "react-router-dom";

const WorkSection = () => {


  return (


    <div className={styles["container"]}>


    <div className={styles["header"]}>My Work</div>
    <div className={styles["header-paragraph"]}>
      Discover my latest projects, where creativity meets innovation. 
      Each piece reflects a unique blend of design and technical skill, 
      crafted to push boundaries and deliver meaningful results.</div>
    

      <div className={styles["parent"]}>



        <div className={styles["div1"]}>
          <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj04} className={styles["project-image"]} />
              <div className={styles["overlay-text"]}>View</div>
            </div>
            <p className={styles["project-title"]}>
              Getaway Driver - Police Chase Game
            </p>
          </div>
        </div>

        <div className={styles["div2"]}>
        <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj01} className={styles["project-image"]} />
              <div className={styles["overlay-text"]}>View</div>
            </div>
            <p className={styles["project-title"]}>
              LearnUP - The Study Planner App
            </p>
          </div>
        </div>

        <div className={styles["div3"]}>
        <div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj02} className={styles["project-image"]} />
              <div className={styles["overlay-text"]}>View</div>
            </div>
            <p className={styles["project-title"]}>
              VidCatch - Youtube video downloader
            </p>
          </div> 
        </div>


        <div className={styles["div4"]}><div className={styles["project"]}>
            <div className={styles["image-container"]}>
              <img src={proj03} className={styles["project-image"]} />
              <div className={styles["overlay-text"]}>View</div>
            </div>
            <p className={styles["project-title"]}>
              Node File Organizer
            </p>
          </div> 
        </div>
      </div>


      <div className={styles["section-footer"]}>
        <div className={styles["line"]}></div>
      </div>


    </div>
  );
};

export default WorkSection;
