import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Transition from "../../components/utils/Transitions";
import { MenuBtnContext } from "../../contexts/MenuBtnContext";
import { AnimatedText } from "../../components/utils/CustomAnimatation";
import HeaderImage from "../../assets/projects/getaway-driver/gd01.png";
import CharacterImage from "../../assets/projects/getaway-driver/gd002.png";
import GalleryImage03 from "../../assets/projects/getaway-driver/gd003.png";
import GalleryImage04 from "../../assets/projects/getaway-driver/gd004.png";
import GalleryImage05 from "../../assets/projects/getaway-driver/gd005.png";
import GalleryImage06 from "../../assets/projects/getaway-driver/gd006.png";
import GalleryImage07 from "../../assets/projects/getaway-driver/gd007.png";
import GarageImage from "../../assets/projects/getaway-driver/gd008.png";
import GameSceneImage from "../../assets/projects/getaway-driver/gd009.png";
import WeaponModelsImage from "../../assets/projects/getaway-driver/gd010.png";
import CarModelsImage from "../../assets/projects/getaway-driver/gd011.png";
import styles from "./project.module.css";

const systems = [
  "Unity + C#",
  "Blender",
  "Vehicle physics",
  "Enemy AI",
  "Scriptable Objects",
  "Object pooling",
];
const visualSlots = [
  [GarageImage, "01", "Unity garage scene", "Garage and vehicle selection"],
  [GameSceneImage, "02", "Unity game scene", "Gameplay in the chase"],
  [
    WeaponModelsImage,
    "03",
    "Blender weapon models",
    "Mounted weapon modelling",
  ],
  [CarModelsImage, "04", "Blender car models", "Vehicle modelling process"],
];
const galleryImages = [
  [GalleryImage03, "Gameplay / 01"],
  [GalleryImage04, "Gameplay / 02"],
  [GalleryImage05, "Gameplay / 03"],
  [GalleryImage06, "Gameplay / 04"],
  [GalleryImage07, "Gameplay / 05"],
];
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.gameframestudios.getawaydriver";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const GetawayDriver = () => {
  const { isOpen } = useContext(MenuBtnContext);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [activeVisualSlot, setActiveVisualSlot] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const galleryTimer = window.setInterval(() => {
      setActiveGalleryImage((current) => (current + 1) % galleryImages.length);
    }, 4000);
    return () => window.clearInterval(galleryTimer);
  }, []);
  const intro =
    "A high-speed vehicle combat game about getting the job done, staying one turn ahead, and making it home with the money.";

  return (
    <main className={`${isOpen ? styles.shrink : ""} ${styles.projectPage}`}>
      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <motion.p
            className={styles.kicker}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            First complete game experience
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={reveal}>
            Getaway Driver
            <br />
            <em>Car Chase</em>
          </motion.h1>
          <AnimatedText text={intro} className={styles.heroIntro} />
          <a
            className={styles.playStoreLink}
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className={styles.playStoreIcon}
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                fill="#00a5df"
                d="M4.5 3.8 18.2 16 4.5 28.2c-.6-.7-1-1.7-1-2.8V6.6c0-1.1.4-2.1 1-2.8Z"
              />
              <path
                fill="#8bc53f"
                d="m20.3 17.8 4.5 4-15.5 8.7c-.9.5-1.9.5-2.7.1l13.7-12.8Z"
              />
              <path
                fill="#ffca28"
                d="m20.3 14.2-13.7-12c.8-.4 1.8-.4 2.7.1l15.5 8.7-4.5 3.2Z"
              />
              <path
                fill="#f04b4f"
                d="m27.2 11.9 1.8 1c1.7 1 1.7 3.3 0 4.3l-1.8 1-4.7-4.1 4.7-2.2Z"
              />
            </svg>
            <span>Available on Google Play</span>
            <b>↗</b>
          </a>
        </div>
        <motion.div
          className={styles.heroImageWrap}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <img
            src={HeaderImage}
            alt="Getaway Driver game scene with police cars in pursuit"
          />
        </motion.div>
        <div className={styles.heroMeta}>
          <span>Role — Solo developer</span>
          <span>Focus — Gameplay · 3D · Systems</span>
          <span>Year — 2024</span>
        </div>
      </div>

      <section className={styles.statementSection}>
        <div className={styles.statementContent}>
          <p className={styles.eyebrow}>The brief</p>
          <h2>
            Make the chase the <span>main character.</span>
          </h2>
          <p className={styles.statementText}>
            Getaway Driver started as an experiment in vehicle movement and grew
            into my first end-to-end game. The goal was simple: build a driving
            experience where every corner creates a decision — disappear into
            the environment, ram through the pressure, or turn around and fight.
          </p>
        </div>
        <figure className={styles.characterFrame}>
          <img
            src={CharacterImage}
            alt="Getaway Driver character holding a pistol"
          />
        </figure>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Core loop</p>
          <p className={styles.sectionNote}>
            A closer look at the chase in motion.
          </p>
        </div>
        <div className={styles.galleryViewport}>
          <motion.div
            className={styles.galleryTrack}
            animate={{ x: `${activeGalleryImage * -100}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {galleryImages.map(([image, label]) => (
              <figure className={styles.gallerySlide} key={label}>
                <img src={image} alt={`Getaway Driver ${label}`} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
        <div className={styles.galleryControls}>
          {galleryImages.map(([, label], index) => (
            <button
              className={
                index === activeGalleryImage
                  ? styles.galleryDotActive
                  : styles.galleryDot
              }
              onClick={() => setActiveGalleryImage(index)}
              key={label}
              aria-label={`Show ${label}`}
            ></button>
          ))}
        </div>
      </section>

      <section className={styles.splitSection}>
        <div>
          <p className={styles.eyebrow}>From concept to creation</p>
          <h2>
            Handmade assets.
            <br />
            <span>Real-time pressure.</span>
          </h2>
        </div>
        <div className={styles.splitCopy}>
          <p>
            I created the vehicles, environment, props and visual elements by
            hand in Blender, then brought them into Unity to become part of a
            playable world.
          </p>
          <p>
            Because Blender was new to me, the art process was as much research
            as production: modelling, UVs, materials, lighting, optimization and
            scene composition all had to work together at game speed.
          </p>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.visualHeader}>
          <div>
            <p className={styles.eyebrow}>The making of it</p>
            <h2>
              From wireframe
              <br />
              <span>to getaway.</span>
            </h2>
          </div>
          <p>
            From Unity scenes to Blender models, these snapshots show how the
            game came together across both sides of the process.
          </p>
        </div>
        <div className={styles.visualGrid}>
          {visualSlots.map(([image, number, title, hint], index) => (
            <figure
              className={`${styles.imageSlot} ${index === activeVisualSlot ? styles.imageSlotActive : ""}`}
              key={number}
              onClick={() => setActiveVisualSlot(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ")
                  setActiveVisualSlot(index);
              }}
              tabIndex="0"
              role="button"
              aria-label={`Expand ${title}`}
            >
              <img src={image} alt={title} />
              <div>
                <span>{number}</span>
                <p>{title}</p>
                <small>{hint}</small>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.systemsSection}>
        <div className={styles.systemsIntro}>
          <p className={styles.eyebrow}>Under the hood</p>
          <p>
            Modular systems made the project easier to balance, extend and learn
            from.
          </p>
        </div>
        <div className={styles.systemList}>
          {systems.map((system, index) => (
            <span key={system}>
              <small>0{index + 1}</small>
              {system}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.reflectionSection}>
        <p className={styles.eyebrow}>What I learned</p>
        <div className={styles.reflectionGrid}>
          <h2>A first game, built all the way through.</h2>
          <div>
            <p>
              Getaway Driver taught me to think across the whole production line
              — from a rough 3D model to a responsive vehicle controller, from a
              pursuit prototype to a saved progression loop.
            </p>
            <p>
              It is a project about speed, experimentation and learning by
              building. More than a driving game, it is the first time my visual
              work and technical systems became one playable experience.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.projectFooter}>
        <span>End of case study</span>
        <Link to="/mywork">
          Back to all work <b>↗</b>
        </Link>
      </footer>
    </main>
  );
};

export default Transition(GetawayDriver);
