import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.izquierda}>
        <p></p>
      </div>
      <div className={styles.derecha}>
        <Link href="#">
          <a rel="noreferrer"></a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
