import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import SectionTitle from "../../SectionTitle/SectionTitle";
function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <SectionTitle title="Experience" />
      <div className={styles.timeline}>
        <ExperienceCard
          title="Data Consultant"
          company="CGI Group Inc"
          date="March 2026 - Present"
          location="London, UK"
          responsibilities={[]}
        />
        <ExperienceCard
          title="Software Engineer"
          company="International Federation of Red Cross and Red Crescent Societies"
          date="Jun 2025 – Sep 2025"
          location="London, UK"
          responsibilities={[
            "Engineered and deployed LLM-based summarisation pipelines for the IFRC GO platform using Python and Azure OpenAI, processing unstructured emergency reports at a global scale as part of a UCL IXN project",
            "Reduced emergency report processing time from hours to minutes, accelerating decision-making and enabling real-time operational learning across international response teams",
            "Evaluated summarisation quality using G-Eval metrics and multiple rounds of structured human user testing",
            "Built scalable data ingestion workflows to modernise legacy systems, improving response efficiency and reducing information redundancy",
          ]}
        />
      </div>
    </section>
  );
}

export default Experience;
