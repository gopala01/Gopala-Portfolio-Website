import styles from "./AboutStyles.module.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.content}>
        <p>
          My name is Gopala Bhamidipati. I am a passionate computer scientist
          based in London, UK. I have achieved First Class Honours in my
          Computer Science BSc Degree, which I have achieved from Queen Mary,
          University of London. Currently, I am studying an MSc in Artificial
          Intelligence and Data Engineering at UCL. This is my portfolio
          website, made using React, JavaScript, and Vanilla CSS.
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
