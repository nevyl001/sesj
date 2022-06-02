import styles from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  return (
    <div className={styles.menu_desktop}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.menu_desktop_left}>
            <div className={styles.img}>
              <Link href="/">
                <a>
                  <Image
                    alt="logo"
                    src="/img/SESJ_Logo_Pres_V5.png"
                    width={157}
                    height={90}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.menu_desktop_right}>
            <ul>
              <li>
                <Link href="/">
                  <a className={styles.link}>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/nosotros">
                  <a className={styles.link}>NOSOTROS</a>
                </Link>
              </li>
              <li className={styles.submenu_trigger}>
                <Link href="#">
                  <a className={styles.link}>SERVICIOS</a>
                </Link>
                <ul className={styles.submenu}>
                  <li>
                    <Link href="/servicios-especializados">
                      <a className={styles.link}>SERVICIOS ESPECIALIZADOS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicios-especializados">
                      <a className={styles.link}>SERVICIOS ESPECIALIZADOS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicios-especializados">
                      <a className={styles.link}>SERVICIOS ESPECIALIZADOS</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/clientes">
                  <a className={styles.link}>CLIENTES</a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a className={styles.link}>CONTACTO</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
