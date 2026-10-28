import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Transition from "../../components/utils/Transitions";
import { MenuBtnContext } from "../../contexts/MenuBtnContext";
import PackageImage from "../../assets/projects/react_alert/ra003.png";
import AlertImage from "../../assets/projects/react_alert/ra002.png";
import styles from "./reactAlert.module.css";

const animations = ["scale", "slide", "drop"];
const apiRows = [
  ["AlertProvider", "Wrap the app once and make alerts available everywhere."],
  [
    "useAlert",
    "Trigger an alert from any component with a small, reusable hook.",
  ],
  [
    "alertData",
    "Choose the type, copy, animation, duration, and optional action.",
  ],
];
const screenSlots = ["Success alert", "Error with action", "Animation states"];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ReactAlert = () => {
  const { isOpen } = useContext(MenuBtnContext);
  const [activeAnimation, setActiveAnimation] = useState("scale");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={`${isOpen ? styles.shrink : ""} ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Open-source React package</p>
          <motion.h1 initial="hidden" animate="visible" variants={reveal}>
            React <em>Alert</em>
          </motion.h1>
          <p className={styles.heroIntro}>
            A customizable alert system for React applications, built to make
            feedback simple to trigger, easy to style, and pleasant to use.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://www.npmjs.com/package/@tdtarbo/react-alert"
              target="_blank"
              rel="noreferrer"
            >
              View on npm <b>↗</b>
            </a>
            <a
              href="https://tdtarbo.github.io/react-alert-demo/"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              Live demo <b>↗</b>
            </a>
          </div>
        </div>
        <motion.figure
          className={styles.packageVisual}
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <img
            src={PackageImage}
            alt="React Alert package visual showing success and error alerts"
          />
        </motion.figure>
        <div className={styles.heroMeta}>
          <span>Role — Developer</span>
          <span>Focus — React · UX · npm</span>
          <span>Type — Open source</span>
        </div>
      </section>

      <section className={styles.statementSection}>
        <div className={styles.statementLabel}>
          <span>01</span>
          <p>The idea</p>
        </div>
        <div className={styles.statementCopy}>
          <h2>
            Small feedback should not need <em>a big system.</em>
          </h2>
          <p>
            I built React Alert to make common success and error messages
            reusable across an application. Instead of rebuilding the same
            notification UI in every screen, one provider handles the state and
            one hook makes the interaction available where it is needed.
          </p>
          <p>
            The result is a small package with sensible defaults, custom
            animations, optional buttons, and enough flexibility to fit
            different interfaces.
          </p>
        </div>
      </section>

      <section className={styles.demoSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>See it in motion</p>
          <p>Try the three entry animations supported by the package.</p>
        </div>
        <div className={styles.demoLayout}>
          <div className={styles.demoControls}>
            {animations.map((animation, index) => (
              <button
                type="button"
                className={
                  activeAnimation === animation ? styles.controlActive : ""
                }
                onClick={() => setActiveAnimation(animation)}
                key={animation}
              >
                <span>0{index + 1}</span>
                {animation} animation
              </button>
            ))}
            <p>
              Alerts without buttons dismiss automatically after three seconds.
            </p>
          </div>
          <div
            className={`${styles.alertStage} ${styles[`stage-${activeAnimation}`]}`}
          >
            <div className={styles.alertCard} key={activeAnimation}>
              <img
                className={styles.alertImage}
                src={AlertImage}
                alt="Operation successful alert from React Alert"
              />
            </div>
            <code>animation: {activeAnimation}</code>
          </div>
        </div>
      </section>

      <section className={styles.apiSection}>
        <div className={styles.apiIntro}>
          <p className={styles.kicker}>The API</p>
          <h2>
            Three pieces.
            <br />
            <em>One clear flow.</em>
          </h2>
          <p>
            The package keeps the setup small so the developer can focus on the
            message, not the notification plumbing.
          </p>
        </div>
        <div className={styles.apiList}>
          {apiRows.map(([name, description], index) => (
            <article key={name}>
              <span>0{index + 1}</span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.usageSection}>
        <div>
          <p className={styles.kicker}>Usage</p>
          <h2>
            Write the alert once.
            <br />
            <em>Use it anywhere.</em>
          </h2>
        </div>
        <div className={styles.codeCard}>
          <div className={styles.codeTop}>
            <span></span>
            <span></span>
            <span></span>
            <small>Checkout.jsx</small>
          </div>
          <pre>
            <code>{`const { sendAlert, alert } = useAlert();

sendAlert({
  type: alert.success,
  title: alert.text.success.operationSuccessful,
  description: "Your action was completed successfully!",
  animation: {
    type: alert.animation.scale,
    duration: 0.3,
  },
});`}</code>
          </pre>
        </div>
      </section>

      <section className={styles.screensSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Project screens</p>
          <p>
            Replace these placeholders with package screenshots, README images,
            or demo captures.
          </p>
        </div>
        <div className={styles.screenGrid}>
          {screenSlots.map((label, index) => (
            <figure className={styles.screenSlot} key={label}>
              <div>
                <span>0{index + 1}</span>
                <p>{label}</p>
                <small>Add image here</small>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.reflectionSection}>
        <p className={styles.kicker}>What I learned</p>
        <div className={styles.reflectionGrid}>
          <h2>Useful tools are built around the developer.</h2>
          <div>
            <p>
              This project helped me understand how to turn a repeated UI
              pattern into a reusable package. I worked through context state,
              hooks, animation timing, optional callbacks, defaults, and package
              documentation.
            </p>
            <p>
              The biggest lesson was that a good component is not only about
              making it work. Installation, naming, examples, feedback, and the
              small details of the API all shape whether someone wants to use
              it.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>End of case study</span>
        <Link to="/mywork">
          Back to all work <b>↗</b>
        </Link>
      </footer>
    </main>
  );
};

export default Transition(ReactAlert);
