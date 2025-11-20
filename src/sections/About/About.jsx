import styles from "./AboutStyles.module.css";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.content}>
        <p>
          Hi, I'm <strong>Gopala Bhamidipati</strong>! I'm a computer science
          graduate based in London, UK, passionate about{" "}
          <strong>Data Engineering</strong>,{" "}
          <strong>Artificial Intelligence</strong> and{" "}
          <strong> Software Development</strong>. I have graduated with an
          <strong>
            {" "}
            MSc (Merit) in Artificial Intelligence and Data Engineering
          </strong>{" "}
          from University College London (UCL) and a{" "}
          <strong> BSc (First Class Honours) in Computer Science</strong> from
          Queen Mary University of London.
          <br />
          <br />
          I’ve worked with the{" "}
          <strong>
            International Federation of Red Cross and Red Crescent Societies
            (IFRC)
          </strong>
          as an <strong>AI Software Engineer Intern</strong>, where I deployed
          Azure OpenAI–powered summarisation modules that transformed emergency
          data into concise insights — cutting report analysis time from hours
          to minutes.
          <br />
          <br />
          This portfolio showcases my{" "}
          <strong>
            projects, technical skills, and creative problem-solving
          </strong>
          — from distributed data automation pipelines to interactive web
          applications. Built with{" "}
          <strong>React, JavaScript, and Vanilla CSS</strong>, this portfolio
          reflects my commitment to writing{" "}
          <strong>clean, efficient, and maintainable code</strong>, while
          ensuring my applications are{" "}
          <strong>scalable, responsive, and user-friendly</strong>.
          <br />
          <br />
          Feel free to explore!
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
