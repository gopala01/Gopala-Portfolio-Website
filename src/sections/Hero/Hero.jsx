import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Gopala-Bhamidipati-CV.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
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
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon}></img>
          </a> */}
          <a href="https://github.com/gopala01" target="_blank">
            <img src={githubIcon}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/gopalabhamidipati/"
            target="_blank"
          >
            <img src={linkedinIcon}></img>
          </a>
        </span>
        <p className={styles.description}>Passion for technology</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
