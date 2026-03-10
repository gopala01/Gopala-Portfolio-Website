import styles from "./ProjectStyles.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import SectionTitle from "../../SectionTitle/SectionTitle";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <SectionTitle title="Projects" />
      <div className={styles.projectsContainer}>
        <ProjectCard
          h3={"Resource Management Platform (Incomplete)"}
          link={"https://github.com/gopala01/Resource_Management_System"}
          description="Built a full-stack application using Go (REST API with CRUD, validation, and layered architecture), PostgreSQL (indexed schema with migrations), and TypeScript + React (typed API integration and state management)."
          p={"Go, TypeScript, PostgreSQL"}
        />
        <ProjectCard
          h3={"Task Orchestration Platform (Incomplete)"}
          link={"https://github.com/gopala01/Task-Orchestration-Platform"}
          description="A task orchestration platform  that allows users to define, schedule, and monitor complex workflows and tasks in a distributed environment."
          p={"Python, FastAPI, Celery, RabbitMQ, Redis, Docker"}
        />
        <ProjectCard
          h3={"Distributed Data Processing System"}
          link={"https://github.com/gopala01/Distributed-Data-Automation"}
          description="A distributed data automation platform that automates the deployment and management of distributed data systems across multiple nodes."
          p={"Python, Terraform, Ansible, Spark, BeeGFS"}
        />
        <ProjectCard
          h3={"Reddit Sentiment Summariser"}
          link={"https://github.com/gopala01/Reddit-Sentiment-Summariser"}
          description="A sentiment analysis tool for Reddit posts that summarizes posts in a user-friendly interface."
          p={"Python, Django, HTML, CSS, JavaScript"}
        />
        <ProjectCard
          h3={"Interview Simulator"}
          link={"https://github.com/gopala01/interview-simulator"}
          description="An interview simulator that allows users to practice their interview skills by simulating real interview scenarios."
          p={"Python, Flask, HTML, CSS, JavaScript"}
        />
      </div>
    </section>
  );
}

export default Projects;
