import React from "react";
import styles from "./SkillCardStyles.module.css";
import checkMarkIcon from "../../../assets/checkmark-icon.svg";
function SkillCard({ title, skills }) {
  return (
    <a className={styles.category}>
      <h3 className={styles.categoryTitle}>{title}</h3>

      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillItem}>
            <img src={checkMarkIcon} alt="Checkmark icon"></img>
            <p>{skill}</p>
          </span>
        ))}
      </div>
    </a>
  );
}

export default SkillCard;
