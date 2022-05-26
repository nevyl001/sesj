import styles from "./Menu.module.css";
import Image from "next/image";

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
            <li>HOME </li>
            <li>NOSOTROS </li>
            <li>SERVICIOS </li>
            <li>CLIENTES </li>
            <li>CONTACTO </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
