import HorizontalScrollCarousel from "./HorizontalScrollContainer";

import styles from "./skillSection.module.css";

const SkillsSection = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["inner-container"]}>
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

export default SkillsSection;
