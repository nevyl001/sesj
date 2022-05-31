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
              <Image
                alt="logo"
                src="/img/SESJ_Logo_Pres_V5.png"
                width={157}
                height={90}
              />
            </div>
          </div>
          <div className={styles.menu_desktop_right}>
            <Link href="#">
              <a className={styles.link}>HOME</a>
            </Link>
            <Link href="/nosotros">
              <a className={styles.link}>NOSOTROS</a>
            </Link>
            <Link href="#">
              <a className={styles.link}>CLIENTES</a>
            </Link>
            <Link href="#">
              <a className={styles.link}>SERVICIOS</a>
            </Link>
            <Link href="#">
              <a className={styles.link}>CONTACTO</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
