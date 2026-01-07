import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";

function Experience() {
  const experiences = [
    {
      title: "AI Software Engineer",
      company: "International Federation of Red Cross and Red Crescent Societies",
      date: "Jun 2025 – Sep 2025",
      location: "London, UK",
      responsibilities: [
        "Engineered and deployed LLM-based summarisation pipelines for the IFRC GO platform using Python and Azure OpenAI, processing unstructured emergency reports at a global scale as part of a UCL IXN project",
        "Reduced emergency report processing time from hours to minutes, accelerating decision-making and enabling real-time operational learning across international response teams",
        "Evaluated summarisation quality using G-Eval metrics and multiple rounds of structured human user testing",
        "Built scalable data ingestion workflows to modernise legacy systems, improving response efficiency and reducing information redundancy"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Queen Mary, University of London",
      date: "Sep 2022 – Dec 2022",
      location: "London, UK",
      responsibilities: [
        "Improved 50+ students' performance by simplifying complex computing concepts such as binary representation and assembly language, ensuring accessibility for learners from diverse backgrounds"
      ]
    }
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            location={exp.location}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
