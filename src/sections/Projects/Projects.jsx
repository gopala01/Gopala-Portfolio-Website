import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
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
          h3={"Project 1"}
          p={"XXXX App"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/gopala01/Reddit_Sentiment_Summariser"}
          h3={"Project 2"}
          p={"XXXX App"}
        />
        <ProjectCard
          src={fitLift}
          link={"https://github.com/gopala01/Reddit_Sentiment_Summariser"}
          h3={"Project 3"}
          p={"Fitness App"}
        />
      </div>
    </section>
  );
}

export default Projects;
