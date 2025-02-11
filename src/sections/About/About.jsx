import styles from "./AboutStyles.module.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.content}>
        <p>
          Hi, I'm <strong>Gopala Bhamidipati</strong>! I'm a computer science
          student passionate about software and AI based in London, UK.
        </p>
        <p>
          I graduated with <strong>First Class Honours</strong> in Computer
          Science from Queen Mary University of London and am currently pursuing
          an{" "}
          <strong>
            MSc in Software, Artificial Intelligence and Data Engineering at
            UCL.
          </strong>
        </p>
        <p>
          This portfolio showcases my{" "}
          <strong>work, skills, and projects</strong>. Built with{" "}
          <strong>React, JavaScript, and Vanilla CSS</strong>, my portfolio
          reflects my commitment to writing clean, efficient and maintaibable
          code, while ensuring my applications are responsive, and
          user-friendly.
        </p>
        <p>Feel free to explore! 🚀</p>
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
