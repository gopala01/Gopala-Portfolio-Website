import styles from "./AboutStyles.module.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.content}>
        <div>
          <p style={{ marginBottom: '1.2rem' }}>
            Hi, I'm <strong>Gopala Bhamidipati</strong> — a computer science
            graduate based in London, UK, specializing in{" "}
            <strong>Data Engineering</strong>,{" "}
            <strong>Artificial Intelligence</strong>, and{" "}
            <strong>Software Development</strong>.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            I hold an{" "}
            <strong>
              MSc (Merit) in Artificial Intelligence and Data Engineering
            </strong>{" "}
            from University College London and a{" "}
            <strong>BSc (First Class Honours) in Computer Science</strong> from
            Queen Mary University of London.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Most recently, I worked as an{" "}
            <strong>AI Software Engineer Intern</strong> at the{" "}
            <strong>
              International Federation of Red Cross and Red Crescent Societies
            </strong>
            , where I deployed Azure OpenAI-powered summarization modules that
            reduced emergency report analysis time from hours to minutes.
          </p>
          <p>
            This portfolio showcases my projects and technical skills — from
            distributed data pipelines to interactive web applications. Built
            with <strong>React</strong> and <strong>modern web technologies</strong>,
            it reflects my focus on writing clean, maintainable code and
            building scalable, user-friendly applications.
          </p>
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
