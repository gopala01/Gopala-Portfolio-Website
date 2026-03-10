import styles from "./HomeStyles.module.css";
function Home() {
  // const { theme, toggleTheme } = useTheme();
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <h2 className={styles.name}>Hi, I'm Gopala!</h2>
      </div>
    </section>
  );
}
export default Home;
