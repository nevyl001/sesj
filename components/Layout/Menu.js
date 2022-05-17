import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu_desktop}>
      <div className={styles.container}>
        <div className={styles.menu_desktop_left}>
          <h1>SESJ</h1>
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
  );
}

export default Menu;
