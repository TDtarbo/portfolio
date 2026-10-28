import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Transition from "../components/utils/Transitions";
import { MenuBtnContext } from "../contexts/MenuBtnContext";
import profilePhoto from "../assets/profile/prof_v2.png";
import styles from "./about.module.css";

const strengths = [
  [
    "Curious",
    "I like understanding how things work and finding better ways to build them.",
  ],
  [
    "Thoughtful",
    "I care about the small details that make an experience feel clear and natural.",
  ],
  [
    "Always learning",
    "Every project is a chance to improve my skills and try something new.",
  ],
];

const technologies = [
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "MySQL",
  "Android",
  "HTML & CSS",
];

const About = () => {
  const { isOpen } = useContext(MenuBtnContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={`${styles.page} ${isOpen ? styles.shrink : ""}`}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About me</p>
        <h1>
          More than code.
          <br />I build with purpose.
        </h1>
        <p className={styles.intro}>
          I&apos;m Thilina, a software engineering undergraduate and full-stack
          developer who enjoys turning ideas into useful digital experiences.
        </p>
      </section>

      <section className={styles.profileSection}>
        <div className={styles.photoFrame}>
          <img src={profilePhoto} alt="Thilina" />
        </div>
        <div className={styles.profileCopy}>
          <p className={styles.eyebrow}>A little context</p>
          <h2>Technology is my tool. Curiosity is my approach.</h2>
          <p>
            I enjoy working across the full journey of a digital product—from
            understanding the problem and shaping the experience to writing the
            code that brings it to life.
          </p>
          <p>
            My goal is simple: make things that are useful, considered, and
            enjoyable to use.
          </p>
        </div>
      </section>

      <section className={styles.strengthsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>What matters to me</p>
          <p className={styles.caption}>
            The qualities I bring to every project.
          </p>
        </div>
        <div className={styles.strengths}>
          {strengths.map(([title, description], index) => (
            <motion.article
              className={styles.strength}
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.toolsSection}>
        <p className={styles.eyebrow}>Tools I use</p>
        <div className={styles.technologyList}>
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>

      <section className={styles.nextSection}>
        <p className={styles.eyebrow}>Want to see what I make?</p>
        <Link to="/mywork" className={styles.nextLink}>
          Explore my work <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
};

const AboutWithTransition = Transition(About);
export default AboutWithTransition;
