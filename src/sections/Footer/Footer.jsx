import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        {" "}
        &copy; 2024 Gopala Bhamidipati. <br />
        All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
