import styles from "./SectionTitle.module.css";

function SectionTitle({ title }) {
  return <h1 className={styles.sectionTitle}> {title}</h1>;
}

export default SectionTitle;
