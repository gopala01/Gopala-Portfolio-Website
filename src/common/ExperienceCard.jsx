import React, { useState } from "react";
import styles from "./ExperienceCardStyles.module.css";

function ExperienceCard({ title, company, date, location, responsibilities }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineDot}></div>
      <div className={styles.timelineContent}>
        <div className={styles.experienceCard} onClick={toggleExpand}>
          <div className={styles.experienceHeader}>
            <div className={styles.titleSection}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.companyInfo}>{company}</div>
              <span className={styles.date}>{date}</span>
            </div>
          </div>
          <div className={styles.expandIcon}>
            {isExpanded ? "↑" : "↓"}
          </div>
        </div>
        {isExpanded && (
          <div className={styles.details}>
            <div className={styles.location}>{location}</div>
            <ul className={styles.responsibilities}>
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
