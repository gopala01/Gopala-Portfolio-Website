import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import sentimentLogo from "../../assets/reddit-sentiment-logo.webp";
import distributedLogo from "../../assets/distributedlogo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          h3={"Task Orchestration Platform"}
          link={"https://github.com/gopala01/Task-Orchestration-Platform"}
          p={"Python, FastAPI, Celery, RabbitMQ, Redis, Docker"}
        />
        <ProjectCard
          src={distributedLogo}
          link={"https://github.com/gopala01/Distributed-Data-Automation"}
          h3={"Distributed Data Automation"}
          p={"Python, Terraform, Ansible, Spark, BeeGFS"}
        />
        <ProjectCard
          src={sentimentLogo}
          link={"https://github.com/gopala01/Reddit-Sentiment-Summariser"}
          h3={"Reddit Sentiment Summariser"}
          p={"Python, Django, HTML, CSS, JavaScript"}
        />
      </div>
    </section>
  );
}

export default Projects;
