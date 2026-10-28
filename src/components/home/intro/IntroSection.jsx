import { motion } from "framer-motion";
import styles from "./IntroSection.module.css";
import Profile_Photo from "../../../assets/profile/prof_v2.png";

const services = [
  [
    "Web development",
    "Responsive, accessible websites and applications built with clean, maintainable code.",
  ],
  [
    "UI implementation",
    "Thoughtful interfaces that turn ideas and designs into clear, engaging digital experiences.",
  ],
  [
    "Problem solving",
    "Practical technical solutions that make products easier to use, scale, and improve.",
  ],
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.12 },
  }),
};

function IntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.introHeader}>
        <p className={styles.eyebrow}>About me</p>
        <h2>Turning ideas into digital experiences.</h2>
        <div className={styles.photoFrame}>
          <img
            className={styles.photo}
            src={Profile_Photo}
            alt="Portrait placeholder"
          />
        </div>
        <div className={styles.introCopy}>
          <p>
            I&apos;m Thilina, a software engineering undergraduate who enjoys
            creating useful things for the web.
          </p>
          <p>
            I combine technology, curiosity, and attention to detail to make
            products that feel clear and enjoyable to use.
          </p>
        </div>
      </div>

      <div id="contact" className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <span>GitHub</span>
          <a href="https://github.com/tdtarbo" target="_blank" rel="noreferrer">
            github.com/tdtarbo ↗
          </a>
        </div>
        <div className={styles.contactItem}>
          <span>LinkedIn</span>

          <a
            href="https://www.linkedin.com/in/thilina-dilhan/"
            target="_blank"
            rel="noreferrer"
          >
            Thilina Dilhan ↗
          </a>
        </div>
        <div className={styles.contactItem}>
          <span>Email</span>
          <p>thilinadilhanw@gmail.com</p>
        </div>
        <div className={styles.contactItem}>
          <span>Phone</span>
          <p>(+94) 76 620 3335</p>
        </div>
        <div className={styles.contactItem}>
          <span>Location</span>
          <p>Badulla, Sri Lanka</p>
        </div>
      </div>

      <div className={styles.servicesHeader}>
        <p className={styles.eyebrow}>What I do</p>
        <p className={styles.caption}>
          A few ways I can help bring an idea to life.
        </p>
      </div>

      <div className={styles.services}>
        {services.map(([title, description], index) => (
          <motion.article
            className={styles.service}
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className={styles.serviceContent}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default IntroSection;
