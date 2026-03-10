import React from "react";
import gitHubIcon from "../../../assets/github-icon.svg";
import styles from "./ProjectCardStyles.module.css";
function ProjectCard({ h3, link, description, p }) {
  return (
    <a className={styles.projectBox}>
      <div className={styles.topLayer}>
        <h3>{h3}</h3>
        <a href={link}>
          <img src={gitHubIcon} alt="GitHub Icon" />
        </a>
      </div>

      <br></br>

      <div className={styles.middleLayer}>
        <p>{description}</p>
      </div>
      <br></br>
      <div className={styles.bottomLayer}>
        <p>Tech Stack: {p}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
