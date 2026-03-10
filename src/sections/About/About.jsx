import styles from "./AboutStyles.module.css";
import profile from "../../assets/profile.jpeg";
import SectionTitle from "../../SectionTitle/SectionTitle";
function About() {
  return (
    <section id="about" className={styles.container}>
      <SectionTitle title="About Me" />
      <div className={styles.content}>
        <div>
          <p style={{ marginBottom: "1.2rem" }}>
            Hi, I'm <strong>Gopala</strong>! I'm a graduate specializing in{" "}
            <strong>Data Engineering</strong>,{" "}
            <strong>Artificial Intelligence</strong>, and{" "}
            <strong>Software Development</strong>.
          </p>
          <p style={{ marginBottom: "1.2rem" }}>
            I hold an{" "}
            <strong>
              MSc (Merit) in Artificial Intelligence and Data Engineering
            </strong>{" "}
            from University College London and a{" "}
            <strong>BSc (First Class Honours) in Computer Science</strong> from
            Queen Mary University of London.
          </p>
          <p style={{ marginBottom: "1.2rem" }}>
            Most recently, I worked as an <strong>AI Software Engineer</strong>{" "}
            at the{" "}
            <strong>
              International Federation of Red Cross and Red Crescent Societies
            </strong>
            , in a <strong>UCL IXN</strong> Project where I deployed LLM
            summarization pipelines that reduced analysis time.
          </p>
          <p>Welcome to my website!</p>
        </div>
        <div className={styles.colorModeContainer}>
          <img
            className={styles.about}
            src={profile}
            alt="About Picture of Gopala Bhamidipati"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
