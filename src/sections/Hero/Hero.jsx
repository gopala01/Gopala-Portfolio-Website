import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Gopala Bhamidipati"
        ></img>

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          Gopala <br /> Bhamidipati
        </h1>
        <h2>Masters Student @ UCL</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon}></img>
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon}></img>
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon}></img>
          </a>
        </span>
        <p>Passion for technology</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
