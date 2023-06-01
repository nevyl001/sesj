import styles from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

function MenuEn() {
  const [submenuIsActive, setSubmenuIsActive] = useState(false);
  const [menuMovilEstaActivo, ponerMenuMovilEstaActivo] = useState(false);

  const submenuActiveHandler = () => {
    setSubmenuIsActive((state) => !state);
  };
  const submenuInactiveHandler = () => {
    setSubmenuIsActive(false);
  };

  const menuMovilManejadorDeClickAlternador = () => {
    ponerMenuMovilEstaActivo((state) => !state);
  };
  const menuMovilManejadorDeClickInactivo = () => {
    ponerMenuMovilEstaActivo(false);
  };

  return (
    <Fragment>
      <div className={styles.menu_back_box} />
      <div
        className={styles.menu_desktop}
        onMouseLeave={submenuInactiveHandler}
      >
        <div className={styles.container}>
          <div className={styles.menu_master}>
            <div className={styles.menu_top}>
              <div className={styles.menu_desktop_left}>
                <div
                  className={styles.img}
                  onMouseEnter={submenuInactiveHandler}
                >
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
                <Link href="/en">
                  <a
                    className={styles.link}
                    onMouseEnter={submenuInactiveHandler}
                  >
                    HOME
                  </a>
                </Link>
                <Link href="/en/aboutus">
                  <a
                    className={styles.link}
                    onMouseEnter={submenuInactiveHandler}
                  >
                    ABOUT US
                  </a>
                </Link>
                <a className={styles.link} onMouseEnter={submenuActiveHandler}>
                  SERVICES
                </a>
                <Link href="/en/clientes">
                  <a
                    className={styles.link}
                    onMouseEnter={submenuInactiveHandler}
                  >
                    CLIENTS
                  </a>
                </Link>
                <Link href="/en/contacto">
                  <a
                    className={styles.link}
                    onMouseEnter={submenuInactiveHandler}
                  >
                    CONTACT
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={styles.link}
                    onMouseEnter={submenuInactiveHandler}
                  >
                    ESPAÑOL
                  </a>
                </Link>
              </div>
            </div>
            {submenuIsActive && (
              <div className={styles.menu_bottom}>
                <div
                  className={styles.menu_bottom_item}
                  onClick={submenuInactiveHandler}
                >
                  <Link href="/enviromental-services">
                    <a className={styles.link}>
                      <div className={styles.link_title}>
                        ENVIRONMENTAL SERVICES
                      </div>
                      <div className={styles.link_text}>
                        INTEGRAL MANAGEMENT OF HAZARDOUS WASTE, NON-HAZARDOUS
                        WASTE, AND SCRAP
                        <br></br>
                        ENVIRONMENTAL CONSULTING
                        <br></br>
                      </div>
                    </a>
                  </Link>
                </div>
                <div
                  className={styles.menu_bottom_item}
                  onClick={submenuInactiveHandler}
                >
                  <Link href="/industrial-services">
                    <a className={styles.link}>
                      <div className={styles.link_title}>
                        INDUSTRIAL SERVICES
                      </div>
                      <div className={styles.link_text}>
                        INDUSTRIAL SERVICES
                        <br></br>
                        INDUSTRIAL WASTE
                        <br></br>
                      </div>
                    </a>
                  </Link>
                </div>
                <div
                  className={styles.menu_bottom_item}
                  onClick={submenuInactiveHandler}
                >
                  <Link href="/transport">
                    <a className={styles.link}>
                      <div className={styles.link_title}>
                        SPECIALIZED TRANSPORTATION
                      </div>
                      <div className={styles.link_text}>
                        DIFFERENT TYPES OF TRANSPORTATION
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.menu_mobile}>
        <div className={styles.menu_mobile_left}>
          <div className={styles.img} onClick={submenuInactiveHandler}>
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
        <div
          className={styles.menu_mobile_right}
          onClick={menuMovilManejadorDeClickAlternador}
        >
          <div className={styles.burger}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>
        {menuMovilEstaActivo && (
          <div className={styles.menu_mobile_content}>
            <Link href="/">
              <a
                className={styles.link}
                onClick={menuMovilManejadorDeClickInactivo}
              >
                HOME
              </a>
            </Link>
            <Link href="/en/aboutus">
              <a
                className={styles.link}
                onClick={menuMovilManejadorDeClickInactivo}
              >
                ABOUT US
              </a>
            </Link>
            <a
              className={styles.link}
              onClick={menuMovilManejadorDeClickInactivo}
            >
              SERVICES
            </a>
            <Link href="/enviromental-services">
              <a className={styles.link}>
                <li>ENVIRONMENTAL SERVICES</li>
              </a>
            </Link>
            <Link href="/industrial-services">
              <a className={styles.link}>
                <li>INDUSTRIAL SERVICES</li>
              </a>
            </Link>
            <Link href="/transport">
              <a className={styles.link}>
                <li>SPECIALIZED TRANSPORTATION</li>
              </a>
            </Link>
            <Link href="/en/clientes">
              <a
                className={styles.link}
                onClick={menuMovilManejadorDeClickInactivo}
              >
                CLIENTS
              </a>
            </Link>
            <Link href="/en/contacto">
              <a
                className={styles.link}
                onClick={menuMovilManejadorDeClickInactivo}
              >
                CONTACT
              </a>
            </Link>
            <Link href="/">
              <a className={styles.link} onMouseEnter={submenuInactiveHandler}>
                ESPAÑOL
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default MenuEn;
