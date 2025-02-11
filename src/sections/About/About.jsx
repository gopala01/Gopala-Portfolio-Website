import styles from "./AboutStyles.module.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.content}>
        <p>
          Hi, I'm Gopala Bhamidipati! I'm a passionate computer scientist based
          in London, UK. I graduated with First Class Honours in Computer
          Science from Queen Mary University of London and am currently pursuing
          an MSc in Artificial Intelligence and Data Engineering at UCL. This
          portfolio showcases my work, skills, and projects. Built with React,
          JavaScript, and Vanilla CSS, it reflects my commitment to creating
          clean, responsive, and user-friendly applications. Feel free to
          explore! 🚀
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
