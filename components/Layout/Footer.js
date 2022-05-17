import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.izquierda}>
        <p>© 2022 Todos los derechos reservados</p>
      </div>
      <div className={styles.derecha}>
        <Link href="#">
          <a rel="noreferrer">Aviso De Privacidad</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
