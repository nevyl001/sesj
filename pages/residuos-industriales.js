import Link from "next/link";
import styles from "./residuos-industriales.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Fragment } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HEADER_IMAGES = [
  {
    id: 1,
    image: "fa1.JPG",
  },
  {
    id: 2,
    image: "fa2.JPG",
  },
  {
    id: 3,
    image: "fa3.JPG",
  },
  {
    id: 4,
    image: "fa4.JPG",
  },
  {
    id: 5,
    image: "fa5.JPG",
  },
  {
    id: 6,
    image: "fa6.JPG",
  },
  {
    id: 7,
    image: "fa7.jpg",
  },
  {
    id: 8,
    image: "fa8.jpg",
  },
  {
    id: 9,
    image: "fa9.jpg",
  },
  {
    id: 10,
    image: "fa10.jpg",
  },
  {
    id: 11,
    image: "fa11.jpg",
  },
  {
    id: 12,
    image: "fa12.jpg",
  },
  {
    id: 13,
    image: "fa13.jpg",
  },
  {
    id: 14,
    image: "fa14.jpg",
  },
];

export default function ResiduosIndustriales() {
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
              Residuos industriales
            </Title>
          </div>
          <div className={styles.box_tabs}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tabs_item} ${styles.active}`}
                onClick={tabClickHandler}
                id="tab_1"
              >
                COMPRA-VENTA DE RESIDUOS
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_2"
              >
                RECICLAJE
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_3"
              >
                DISPOSICI??N FINAL
              </div>
            </div>
            <div className={styles.content}>
              <div
                className={`${styles.tab_content} ${styles.active}`}
                id="tab_content_tab_1"
              >
                <div className={styles.sub}>
                  <Subtitle color="black">
                    Madera, cart??n, chatarra estructural, metales ferrosos y no
                    ferrosos.
                  </Subtitle>
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    Para complementar la Gesti??n integral de los residuos
                    industriales nuestra compa????a ofrece la disposici??n de todos
                    y cada uno de los residuos que genera una industria.
                    Ofrecemos los mejores costos para reciclaje de residuos como
                    cart??n, madera, metales, pl??sticos; y encontramos el destino
                    m??s conveniente ambiental y econ??mico para residuos como:
                    lodos, aguas y l??quidos contaminados, qu??micos, etc.
                    <br />
                    Garantizamos reducir hasta CERO el envi?? a relleno sanitario
                    o confinamiento. Presentamos un plan de disposici??n con por
                    lo menos dos alternativas, recomendando las opciones con
                    mayores ventajas ambientales y econ??micas. Tenemos convenio
                    con las mejores empresas destino de residuos.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_2">
                <div className={styles.sub}>
                  <Subtitle color="black">Reciclado de solventes.</Subtitle>
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    Los solventes son sustancias l??quidas en las que otras
                    sustancias pueden disolverse para adquirir propiedades
                    f??sicas que se adecuen a un uso particular. Sin embargo,
                    casi toda la producci??n mundial de solventes termina
                    destruida o dispersada en la biosfera. <br /> Servicios
                    Especializados Silviano Julio hace reciclado de solventes
                    como una soluci??n para este problema. Un solvente gastado,
                    es aquel que se ha usado al menos una vez y que no puede
                    usarse nuevamente para el prop??sito para el cual fue
                    producido, debido a la contaminaci??n durante el uso. Tal
                    material se considera un residuo peligroso. Servicios
                    Especializados Silviano Julio recupera y recicla pintura de
                    diversas industrias, pero tiene un enfoque con la pintura de
                    la industria automotriz reciclando este residuo por m??s de
                    30 a??os. Recuperamos y reciclamos solventes a trav??s de
                    destiladores de ??ltima generaci??n, donde en muchos casos se
                    puede conseguir la recuperaci??n de m??s del 90% de los
                    residuos de solventes, reduciendo los gastos de nuevos
                    solventes, y cuidando al medio ambiente.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_3">
                <div className={styles.sub}>
                  <Subtitle color="black">Lodos.</Subtitle>
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    Como ??ltima etapa del Manejo Integral de los Residuos,
                    transportamos los residuos industriales a Destinos Finales
                    autorizados y que cumplen con toda la legislaci??n vigente
                    aplicable en el pa??s; adem??s, aseguramos que ning??n residuo
                    industrial se vaya a relleno sanitario, ya que nuestro
                    compromiso con el medio ambiente es ???0% relleno sanitario???.
                  </Paragraph>
                  <Paragraph>
                    Servicios Especializados Silviano Julio S.A. de C.V. es una
                    empresa aliada apoyando a las industrias en los esfuerzos
                    por el cuidado del medio ambiente.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.carousel}>
        <Carousel
          showStatus={false}
          autoPlay={true}
          showArrows={true}
          showThumbs={false}
          showIndicators={true}
          infiniteLoop={true}
        >
          {HEADER_IMAGES.map((item) => {
            return (
              <div
                key={item.id}
                className={styles.item}
                style={{
                  backgroundImage: `url(/img/slider/${item.image})`,
                }}
              ></div>
            );
          })}
        </Carousel>
      </div>
    </Fragment>
  );
}
