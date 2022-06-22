import Link from "next/link";
import styles from "./servicios-especializados.module.css";
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
];

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
                GESTIÓN DE RESIDUOS
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_2"
              >
                LIMPIEZA INDUSTRIAL Y COOPERATIVA
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_3"
              >
                CONSERVACIÓN DE EDIFICIOS
              </div>
            </div>
            <div className={styles.content}>
              <div
                className={`${styles.tab_content} ${styles.active}`}
                id="tab_content_tab_1"
              >
                <div className={styles.sub}>
                  <Subtitle color="black">
                    Residuos Peligrosos / Residuos de Manejo Especial / Scrap:
                  </Subtitle>
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    Administramos residuos de manejo especial (RME), peligrosos
                    (RP) y sólidos urbanos (SU). Realizamos la recolección,
                    segregación, desarmado, triturado y compactado de los
                    diferentes materiales; embarcándolos en transportes hacia
                    destinos (centro de acopio o destino final) con permisos y
                    autorizaciones Federales y/o Estatales según corresponda.
                  </Paragraph>
                  <Paragraph>
                    En paralelo a la gestión física de materiales documentamos:
                    tipo de materiales, cantidad, estado para elaborar los
                    manifiestos y documentación necesaria para cumplir con las
                    leyes y reglamentos en la materia. Nuestros servicios
                    incluyen (si el cliente lo requiere), Planes de Manejo,
                    Información para el Alta como Generador, información para la
                    Cédula de Operación Anual COA, para presentar a las
                    autoridades. Análisis de Riesgos, análisis CRETIB,
                    estrategias y planes para lograr Cero relleno sanitario,
                    cero confinamiento, incremento de reciclaje y/o reuso.
                  </Paragraph>
                  <Paragraph>
                    Aportamos nuestra experiencia para cumplir las metas
                    ambientales en materia de residuos de nuestros clientes,
                    participamos en auditorías de autoridades y/o
                    certificadoras. Somos especialistas en Gestión de residuos y
                    en los Ppocesos SCRAP; cumpliendo el calendario fiscal de
                    destrucciones y las necesidades propias del cliente para que
                    los productos dañados se destruyan inhabilitándolos para su
                    comercialización y se pueda disponer como residuos: RME, RP,
                    según sus propiedades.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_2">
                <div className={styles.sub}>
                  <Subtitle color="black">
                    Oficinas, Baños, Vestidores, Pasillos, Estructuras:
                  </Subtitle>
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    Limpieza Industrial, en el área industrial se destaca la
                    limpieza especializada de equipos e instalaciones: áreas de
                    desarrollo y prueba de vehículos y sus componentes
                    (dinamómetros, bancos de prueba y simulación, etc)
                    Principales procesos de producción: Prensas, Fabricación de
                    carrocerías, todos los procesos de pintura (lavadoras,
                    fosfato, primer, esmalte, acabado) Montaje, Componentes,
                    Motores, Fundición. <br />
                    Además la limpieza de altura en estructura interior de
                    naves, Cubiertas, techos y fachadas, sin afectar las
                    actividades productivas y por supuesto, todas las áreas
                    auxiliares: oficinas, casetas, talleres, baños y vestidores.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_3">
                <div className={styles.sub}>
                  <Subtitle color="black">
                    Instalaciones eléctricas, mtto. hidrosanitario, mtto. aire
                    acondicionado, plomería, jardinería, fachadas y cubiertas,
                    inmobiliario, desinfección y sanitización.
                  </Subtitle>
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    En la conservación integral de edificios y oficinas
                    corporativas, nuestro propósito es conservar en inmejorables
                    condiciones las instalaciones y oficinas corporativas, ya
                    que es un factor clave para lograr un ambiente ideal para
                    las actividades de gestión corporativa. Los ejecutivos de su
                    compañía, así como los visitantes nacionales y del
                    extranjero disfrutarán de instalaciones que cumplen los más
                    altos estándares de: Imagen, Funcionalidad e Higiene. <br />
                    Somos especialistas en conservar todas las instalaciones en
                    los rubros de: Limpieza, Jardinería interior (muros verdes)
                    y exterior, mantenimientos eléctrico, climas e
                    hidrosanitario, cancelería, persianas, pintura y acabados.
                    Reubicación o distribución de áreas de trabajo, redes,
                    sistemas de control de acceso y, seguridad patrimonial y
                    contra incendio.
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
