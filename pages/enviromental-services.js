import styles from "./servicios-especializados.module.css";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MenuEn from "../components/Layout/Menu-en";
import Footeren from "../components/Layout/Footeren";

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
      <MenuEn />
      <section className={styles.section_1}>
        <div className="container">
          <div className={styles.title}>
            <Title size="big" color="black" align="left">
              Environmental Services
            </Title>
          </div>
          <div className={styles.box_tabs}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tabs_item} ${styles.active}`}
                onClick={tabClickHandler}
                id="tab_1"
              >
                INTEGRAL MANAGEMENT OF HAZARDOUS WASTE, SPECIAL MANAGEMENT, AND
                SCRAP
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_2"
              >
                ENVIRONMENTAL CONSULTING
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
                    The integral on-site waste service includes administration,
                    transportation and disposal. SESJ manages special handling
                    waste (SHW), hazardous waste (HW), and scrap. We carry out
                    the collection, segregation, disassembly, crushing, and
                    compacting of the different materials. As required, SESJ
                    also ships these in specialized and authorized
                    transportation to storage and/or final destinations with
                    Federal and/or State permits and authorizations, as
                    appropriate. SESJ has the appropriate fleet, the necessary
                    training for drivers, and the authorizations required for
                    this process. We collect waste from its point of generation
                    and take it safely to its final destination. SESJ has more
                    than 20 years of experience in the transportation of
                    hazardous waste to various final destinations throughout the
                    Mexican Republic.
                  </Paragraph>
                  <Paragraph>
                    Along with the physical handling of materials, SESJ also
                    manages the administrative aspect: documentation of the type
                    and quantity of materials, preparation of manifests, and any
                    other documentation necessary to comply with the applicable
                    laws and regulations. We contribute our experience to
                    meeting the environmental goals with regards to our
                    customers’ waste, as well as participating in audits of
                    authorities and/or certifiers. At SESJ, we are specialists
                    in waste management and SCRAP processes. We are experienced
                    in complying with the fiscal calendar for destruction, and
                    the customer&apos;'&apos;s own needs so that damaged
                    products are destroyed, rendered unable to be resold, and
                    disposed of as waste (SWH or HW, according to their
                    properties).
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
                    Our services include: Management Plans, Information for
                    Registration as a Generator, Information for the Annual
                    Operation Certificate (COA) to present to the authorities,
                    Risk Analysis, and CRETIB analysis. We develop strategies
                    and plans to increase the reuse and recycling of waste with
                    a zero-landfill, zero-confinement approach. We assist and
                    advise the client in environmental, certification, and
                    government audits.
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
      <Footeren />
    </Fragment>
  );
}
