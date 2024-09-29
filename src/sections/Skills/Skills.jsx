import styles from "./SkillsStyles.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Python"} />
        <SkillList src={checkMarkIcon} skill={"Java"} />
        <SkillList src={checkMarkIcon} skill={"C#"} />
        <SkillList src={checkMarkIcon} skill={"SQL"} />
        <SkillList src={checkMarkIcon} skill={"PHP"} />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"} />
        <SkillList src={checkMarkIcon} skill={"CSS"} />
        <SkillList src={checkMarkIcon} skill={"JavaScript"} />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"React"} />
        <SkillList src={checkMarkIcon} skill={"Django"} />
        <SkillList src={checkMarkIcon} skill={"Bootstrap"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Git"} />
        <SkillList src={checkMarkIcon} skill={"VS Code"} />
        <SkillList src={checkMarkIcon} skill={"IntelliJ"} />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
