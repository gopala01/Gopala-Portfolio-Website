import styles from "./HomeStyles.module.css";
import profile from "../../assets/profile.jpeg";

function Home() {
  // const { theme, toggleTheme } = useTheme();
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <h2 className={styles.name}>Hi, I'm Gopala!</h2>
      </div>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.about}
          src={profile}
          alt="About Picture of Gopala Bhamidipati"
        />
      </div>
    </section>
  );
}
export default Home;
