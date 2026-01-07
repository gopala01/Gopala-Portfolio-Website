import styles from "./SkillsStyles.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillCategory from "../../common/SkillCategory";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "Go", "C#", "SQL", "PHP"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Azure", "Linux", "Docker", "RabbitMQ", "Redis", "Terraform", "Ansible", "Git", "BeeGFS"],
    },
    {
      title: "AI & Data",
      skills: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Hadoop", "Spark"],
    },
    {
      title: "Web & APIs",
      skills: ["FastAPI", "React", "Django", "JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.categoriesContainer}>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            checkMarkIcon={checkMarkIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
