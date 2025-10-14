import styles from "./AboutStyles.module.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.content}>
        <p>
          Hi, I'm <strong>Gopala Bhamidipati</strong>! I'm a computer science
          student passionate about software development and AI based in London,
          UK. I graduated with <strong>First Class Honours</strong> in Computer
          Science from Queen Mary University of London and have completed an{" "}
          <strong>
            MSc in Artificial Intelligence and Data Engineering at UCL.
          </strong>
          This portfolio showcases my{" "}
          <strong>work, skills, and projects</strong>. Built with{" "}
          <strong>React, JavaScript, and Vanilla CSS</strong>, it reflects my
          commitment to writing{" "}
          <strong>clean, efficient and maintainable code</strong>, while
          ensuring my applications are{" "}
          <strong>scalable, responsive and user-friendly</strong>. Feel free to
          explore!
        </p>
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
