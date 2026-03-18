import styles from "./AboutStyles.module.css";
import SectionTitle from "../../SectionTitle/SectionTitle";
function About() {
  return (
    <section id="about" className={styles.container}>
      <SectionTitle title="About Me" />
      <div className={styles.content}>
        <div>
          <p style={{ marginBottom: "1.2rem" }}>
            Hi, I'm <strong>Gopala</strong>! I'm a Data Consultant at{" "}
            <strong>CGI</strong> where I’m diving deep into the world of
            distributed systems, data platforms, and cloud architecture. I’m
            fascinated by large-scale, complex systems and how massive amounts
            of data move, transform, and ultimately power the tools we use every
            day, especially in AI.
          </p>

          <p style={{ marginBottom: "1.2rem" }}>
            I’m a <strong>UCL</strong> and <strong>Queen Mary</strong> alum.
            Most recently, I worked on building LLM-based summarization
            pipelines for the <strong>International Red Cross (IFRC)</strong>,
            helping turn complex humanitarian data into something faster and
            more usable.
          </p>

          <h3
            style={{
              marginTop: "2.5rem",
              marginBottom: "1rem",
              fontSize: "1.5rem",
              color: "var(--accent-color, #0070f3)",
            }}
          >
            Beyond the terminal...
          </h3>
          <p style={{ marginBottom: "1.2rem" }}>
            I’m a firm believer that technical skills are most interesting when
            applied to the things we love. This site is my{" "}
            <strong>digital garden</strong>—a space where I document my journey
            in data, share my thoughts on the things that catch my interest, and
            write about the puzzles I'm solving in tech and life.
          </p>
          <p>Welcome to my corner of the internet!</p>
        </div>
      </div>
    </section>
  );
}

export default About;
