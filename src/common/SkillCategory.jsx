import styles from "./SkillCategoryStyles.module.css";
import SkillList from "./SkillList";

function SkillCategory({ title, skills, checkMarkIcon }) {
  return (
    <div className={styles.category}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <SkillList key={index} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
