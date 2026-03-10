import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        {" "}
        Designed and built by Gopala Bhamidipati. <br />
        All Rights Reserved. &copy;
      </p>
    </section>
  );
}

export default Footer;
