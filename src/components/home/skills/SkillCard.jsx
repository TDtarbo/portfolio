/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import styles from "./skillCard.module.css";

const SkillCard = ({ card }) => {
  return (
        <div 
            key={card.id} 
            className={styles["card"]}>
            <img 
                className={styles["card-image"]} 
                src={card.url}
                alt={card.placeholder} />
            <h3 className={styles["card-title"]}>
                {card.title}
            </h3>
            <p className={styles["card-description"]}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, quia!
            </p>
        </div>
  );
};

export default SkillCard;
