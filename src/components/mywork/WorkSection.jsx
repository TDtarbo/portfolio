import styles from "./workSection.module.css";
import proj01 from "../../assets/projects/thumbnails/proj01.png";
import proj02 from "../../assets/projects/thumbnails/proj02.png";
import proj03 from "../../assets/projects/thumbnails/proj03.png";
import proj04 from "../../assets/projects/thumbnails/proj04.png";
import proj05 from "../../assets/projects/thumbnails/proj05.png";
import alertThumb from "../../assets/projects/react_alert/ra001.png";
import { Link } from "react-router-dom";

const projects = [
  {
    image: proj04,
    title: "Getaway Driver: Car Chase",
    link: "/mywork/Getaway-Driver",
  },
  {
    image: proj05,
    title: "Ayurra Herbal - E-Commerce Storefront",
    link: "/mywork/Ayurra-Herbal",
  },
  {
    image: alertThumb,
    title: "React Alert - NPM Package",
    link: "/mywork/React-Alert",
  },
  { image: proj01, title: "LearnUP - The Study Planner App" },
  { image: proj02, title: "VidCatch - Youtube video downloader" },
  { image: proj03, title: "Node File Organizer" },
];

const WorkSection = () => (
  <div className={styles.container}>
    <div className={styles.header}>My Work</div>
    <div className={styles.headerParagraph}>
      Discover my latest projects, where creativity meets innovation. Each piece
      reflects a unique blend of design and technical skill, crafted to push
      boundaries and deliver meaningful results.
    </div>

    <div className={styles.parent}>
      {projects.map((project) => (
        <article className={styles.projectCard} key={project.title}>
          <div className={styles.project}>
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                className={styles.projectImage}
                alt={project.title}
              />
              {project.link ? (
                <Link to={project.link} className={styles.overlayText}>
                  View
                </Link>
              ) : (
                <span className={styles.overlayText}>Available soon</span>
              )}
            </div>
            <p className={styles.projectTitle}>{project.title}</p>
          </div>
        </article>
      ))}
    </div>

    <div className={styles.sectionFooter}>
      <div className={styles.line}></div>
    </div>
  </div>
);

export default WorkSection;
