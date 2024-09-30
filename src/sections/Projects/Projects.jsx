import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import portfolio from "../../assets/portfolio.webp";
import ProjectCard from "../../common/ProjectCard";
import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://github.com/gopala01/Reddit_Sentiment_Summariser"}
          h3={"Reddit Sentiment Summariser"}
          p={"Python, Django, HTML, CSS, JavaScript"}
        />
        <ProjectCard
          src={portfolio}
          link={"https://github.com/gopala01/Gopala-Portfolio-Website"}
          h3={"Portfolio Website"}
          p={"React, JavaScript, Vanilla CSS"}
        />
        <ProjectCard
          src={fitLift}
          link={"https://github.com/gopala01/C-Sharp-Fitness-Project"}
          h3={"Fitness App"}
          p={"C#, Windows Form"}
        />
      </div>
    </section>
  );
}

export default Projects;
