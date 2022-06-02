import Link from "next/link";
import styles from "./servicios-especializados.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Fragment } from "react";

export default function ServiciosEspecializados() {
  const tabClickHandler = (event) => {
    // elemento clickeado
    const tabItem = document.getElementById(event.target.id);

    // caja de contenido de elemento clickeado
    const tabContent = document.getElementById(
      `tab_content_${event.target.id}`
    );

    // clase de elementos activos
    const activeClass = `${styles.active}`;

    // escondiendo TODOS los elementos primero
    Array.from(document.querySelectorAll(`.${styles.tab_content}`)).forEach(
      (el) => (el.style.display = "none")
    );

    // si el elemento clickeado no esta activo, ponerlo activo
    if (!tabItem.classList.contains(activeClass)) {
      // quitarle la clase a todos los activos
      Array.from(document.querySelectorAll(`.${styles.tabs_item}`)).forEach(
        (el) => el.classList.remove(activeClass)
      );
      tabItem.classList.add(activeClass);
    }

    tabContent.style.display = "block";
  };

  return (
    <Fragment>
      <section className={styles.section_1}>
        <div className="container">
          <div className={styles.title}>
            <Title size="big" color="black" align="left">
              Servicios Especializados
            </Title>
          </div>
          <div className={styles.box_tabs}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tabs_item} ${styles.active}`}
                onClick={tabClickHandler}
                id="tab_1"
              >
                TAB 1
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_2"
              >
                TAB 2
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_3"
              >
                TAB 3
              </div>
            </div>
            <div className={styles.content}>
              <div
                className={`${styles.tab_content} ${styles.active}`}
                id="tab_content_tab_1"
              >
                <Paragraph>Contenido 1</Paragraph>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_2">
                <Paragraph>Contenido 2</Paragraph>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_3">
                <Paragraph>Contenido 3</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
