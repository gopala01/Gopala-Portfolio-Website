import styles from "./SkillsStyles.module.css";
import SkillCard from "./SkillCard/SkillCard";
import SectionTitle from "../../SectionTitle/SectionTitle";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <SectionTitle title="Skills" />
      <div className={styles.categoriesContainer}>
        <SkillCard
          title="Programming Languages"
          skills={["Python", "Java", "Go", "C#", "SQL", "PHP"]}
        />
        <SkillCard
          title="DevOps Tools"
          skills={[
            "Azure",
            "Linux",
            "Docker",
            "RabbitMQ",
            "Redis",
            "Terraform",
            "Ansible",
            "Git",
            "BeeGFS",
          ]}
        />
        <SkillCard
          title="AI & Data"
          skills={[
            "Apache Spark",
            "Pandas",
            "NumPy",
            "PyTorch",
            "TensorFlow",
            "Matplotlib",
            "Hadoop",
          ]}
        />
        <SkillCard
          title="APIs & Frameworks"
          skills={["FastAPI", "React", "Django", "JavaScript", "HTML", "CSS"]}
        />
      </div>
    </section>
  );
}

export default Skills;
