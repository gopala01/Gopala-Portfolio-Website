import style from "./HeaderStyles.module.css";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import resumeIcon from "../../assets/resume-icon.png";
import emailIcon from "../../assets/email-icon.png";
import CV from "../../assets/Gopala Bhamidipati CV.pdf";

function Header() {
  return (
    <nav className={style.header}>
      <div className={style.headerLeft}>
        <h4>Gopala Bhamidipati</h4>
        <a href="#about">
          <h4>About Me</h4>
        </a>
        <a href="#experience">
          <h4>Experience</h4>
        </a>
        <a href="#projects">
          <h4>Projects</h4>
        </a>
        <a href="#skills">
          <h4>Skills</h4>
        </a>
      </div>

      <div className={style.headerRight}>
        <a href="https://github.com/gopala01">
          <img src={githubIcon}></img>
        </a>
        <a href="https://www.linkedin.com/in/gopalabhamidipati/">
          <img src={linkedinIcon}></img>
        </a>
        <a href={CV} download>
          <img src={resumeIcon} alt="Resume Icon"></img>
        </a>
        <a href="mailto:bhamidipatig@gmail.com">
          <img src={emailIcon} alt="Email Icon"></img>
        </a>
      </div>
    </nav>
  );
}

export default Header;
