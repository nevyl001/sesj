import styles from "./servicios-especializados.module.css";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../components/Layout/Menu";
import Footer from "../components/Layout/Footer";

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
      <Menu />
      <section className={styles.section_1}>
        <div className="container">
          <div className={styles.title}>
            <Title size="big" color="black" align="left">
              Servicios Ambientales
            </Title>
          </div>
          <div className={styles.box_tabs}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tabs_item} ${styles.active}`}
                onClick={tabClickHandler}
                id="tab_1"
              >
                GESTIÓN INTEGRAL DE RESIDUOS PELIGROSOS, DE MANEJO ESPECIAL Y
                SCRAP
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_2"
              >
                CONSULTORIA AMBIENTAL
              </div>
              {/* <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_3"
              >
                CONSERVACIÓN DE EDIFICIOS
              </div> */}
            </div>
            <div className={styles.content}>
              <div
                className={`${styles.tab_content} ${styles.active}`}
                id="tab_content_tab_1"
              >
                <div className={styles.sub}>
                  {/* <Subtitle color="black">
                    Residuos Peligrosos / Residuos de Manejo Especial / Scrap:
                  </Subtitle> */}
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    El servicio integral de residuos en sitio incluye
                    administración, transporte y destino final. Administramos
                    residuos de manejo especial (RME), peligrosos (RP) y scrap.
                    Realizamos la recolección, segregación, desarmado, triturado
                    y compactado de los diferentes materiales; embarcándolos en
                    transporte especializado y autorizado hacia destinos de
                    acopio o finales con permisos y autorizaciones Federales y/o
                    Estatales, según corresponda .SESJ cuenta con la flotilla
                    adecuada, así como la capacitación necesaria para los
                    transportistas, además de contar con las autorizaciones
                    requeridas para este proceso. Recolectamos los residuos
                    desde su punto de generación y los llevamos con seguridad a
                    su destino final. Contamos con más de 20 años de experiencia
                    en el transporte de residuos peligrosos a diversos destinos
                    finales en toda la República Mexicana.
                  </Paragraph>
                  <Paragraph>
                    En paralelo a la gestión física de materiales documentamos:
                    tipo de materiales, cantidad, elaboración de los manifiestos
                    y documentación necesaria para cumplir con las leyes y
                    reglamentos en la materia. Aportamos nuestra experiencia
                    para cumplir las metas ambientales en materia de residuos de
                    nuestros clientes, participamos en auditorías de autoridades
                    y/o certificadoras. Somos especialistas en Gestión de
                    residuos y en los procesos SCRAP; cumpliendo el calendario
                    fiscal de destrucciones y las necesidades propias del
                    cliente para que los productos dañados se destruyan
                    inhabilitándolos para su comercialización y se pueda
                    disponer como residuos: RME, RP, según sus propiedades.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_2">
                <div className={styles.sub}>
                  {/* <Subtitle color="black">
                    Oficinas, Baños, Vestidores, Pasillos, Estructuras:
                  </Subtitle> */}
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    Nuestros servicios incluyen: Planes de Manejo, Información
                    para el Alta como Generador, información para la Cédula de
                    Operación Anual COA para presentar a las autoridades.
                    Análisis de Riesgos, análisis CRETIB. Elaboramos estrategias
                    y planes para lograr Cero relleno sanitario, cero
                    confinamiento, incremento de reciclaje y reuso de residuos.
                    Asistimos y asesoramos al cliente en auditorías ambientales,
                    de certificación así como gubernamentales.
                  </Paragraph>
                </div>
              </div>
              {/* <div className={styles.tab_content} id="tab_content_tab_3">
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
              </div> */}
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
      <Footer />
    </Fragment>
  );
}
