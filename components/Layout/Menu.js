import styles from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Menu() {
  const [submenuIsActive, setSubmenuIsActive] = useState(false);
  const submenuActiveHandler = () => {
    setSubmenuIsActive(true);
  };
  const submenuInactiveHandler = () => {
    setSubmenuIsActive(false);
  };

  return (
    <div className={styles.menu_desktop}>
      <div className={styles.container}>
        <div className={styles.menu_master}>
          <div className={styles.menu_top}>
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
              <Link href="/">
                <a className={styles.link}>HOME</a>
              </Link>
              <Link href="/nosotros">
                <a className={styles.link}>NOSOTROS</a>
              </Link>
              <a className={styles.link} onClick={submenuActiveHandler}>
                SERVICIOS
              </a>
              <Link href="/clientes">
                <a className={styles.link}>CLIENTES</a>
              </Link>
              <Link href="/contacto">
                <a className={styles.link}>CONTACTO</a>
              </Link>
            </div>
          </div>
          {submenuIsActive && (
            <div className={styles.menu_bottom}>
              <div
                className={styles.menu_bottom_item}
                onClick={submenuInactiveHandler}
              >
                <Link href="/servicios-especializados">
                  <a className={styles.link}>
                    <div className={styles.link_title}>
                      SERVICIOS ESPECIALIZADOS
                    </div>
                    <div className={styles.link_text}>
                      GESTIÓN DE RESIDUOS<br></br>
                      LIMPIEZA INDUSTRIAL Y COOPERATIVA<br></br>
                      CONSERVACIÓN DE EDIFICIOS<br></br>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                className={styles.menu_bottom_item}
                onClick={submenuInactiveHandler}
              >
                <Link href="/residuos-industriales">
                  <a className={styles.link}>
                    <div className={styles.link_title}>
                      RESIDUOS INDUSTRIALES
                    </div>
                    <div className={styles.link_text}>
                      COMPRA-VENTA DE RESIDUOS<br></br>
                      RECICLAJE<br></br>
                      DISPOSICIÓN FINAL<br></br>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                className={styles.menu_bottom_item}
                onClick={submenuInactiveHandler}
              >
                <Link href="/transportes-especializados">
                  <a className={styles.link}>
                    <div className={styles.link_title}>
                      TRANSPORTES ESPECIALIZADOS
                    </div>
                    <div className={styles.link_text}>
                      DIFERENTES TIPOS DE TRANSPORTE
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
