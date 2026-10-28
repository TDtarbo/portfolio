import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./contactSection.module.css";

const ContactSection = () => {
  const handleContactClick = (event) => {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleTopClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Have a project in mind?</p>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let&apos;s make something memorable.
      </motion.h2>
      <div className={styles.footerRow}>
        <p className={styles.copy}>
          I&apos;m always open to new ideas, collaborations, and conversations.
        </p>
        <a
          className={styles.contactLink}
          href="#contact"
          onClick={handleContactClick}
        >
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>
      <footer className={styles.siteFooter}>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>&lt; DevThilina /&gt;</span>
          <p>Software engineering undergraduate<br />building for the web.</p>
        </div>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <span className={styles.footerLabel}>Explore</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/mywork">My work</Link>
        </nav>
        <div className={styles.footerNav}>
          <span className={styles.footerLabel}>Connect</span>
          <a href="https://github.com/tdtarbo" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#top" onClick={handleTopClick}>Back to top ↑</a>
        </div>
        <div className={styles.footerBottom}>
          © {new Date().getFullYear()} Thilina
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
