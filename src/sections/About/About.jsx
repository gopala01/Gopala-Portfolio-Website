import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">About</h1>

      <p>
        My name is Gopala Bhamidipati. I am a passionate computer scientist
        based in London, UK. I have achieved First Class Honours in my Computer
        Science BSc Degree, which I have achieved from Queen Mary, University of
        London. Currently, I am studying a MSc in Artificial Intelligence and
        Data Engineering at UCL. This is my portfolio website, made using React,
        JavaScript and CSS.
      </p>
    </section>
  );
}

export default About;
