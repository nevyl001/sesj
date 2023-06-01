import styles from "./residuos-industriales.module.css";
import Paragraph from "../components/UI/Paragraph";
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
      <MenuEn />
      <section className={styles.section_1}>
        <div className="container">
          <div className={styles.title}>
            <Title size="big" color="black" align="left">
              Industrial Services
            </Title>
          </div>
          <div className={styles.box_tabs}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tabs_item} ${styles.active}`}
                onClick={tabClickHandler}
                id="tab_1"
              >
                INDUSTRIAL SERVICES
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_2"
              >
                INDUSTRIAL WASTE
              </div>
              {/* <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_3"
              >
                DISPOSICIÓN FINAL
              </div> */}
            </div>
            <div className={styles.content}>
              <div
                className={`${styles.tab_content} ${styles.active}`}
                id="tab_content_tab_1"
              >
                {/* <div className={styles.sub}>
                  <Subtitle color="black">
                    Madera, cartón, chatarra estructural, metales ferrosos y no
                    ferrosos.
                  </Subtitle>
                </div> */}
                <div className={styles.text}>
                  <Paragraph>
                    1)<b> Industrial, corporate, and residential cleaning:</b>
                    <br></br>
                    Specialized cleaning meeting the highest level of hygiene
                    standards in factories and industrial facilities, hospitals,
                    shopping centers, sports units, residences, corporate
                    buildings, universities, offices, and airports.
                  </Paragraph>
                  <Paragraph>
                    2) <b>Cleaning of high, and of confined spaces: </b>
                    <br></br>
                    Safe and effective cleaning of high-altitude and confined
                    spaces in industrial warehouses and corporate buildings, as
                    well as the cleaning of roofs, ceilings, and facades without
                    affecting your production activities.
                  </Paragraph>
                  <Paragraph>
                    3)
                    <b>
                      {" "}
                      Comprehensive maintenance and upkeep of industrial
                      warehouses, corporate buildings, and residences:{" "}
                    </b>
                    <br></br>
                    Maintaining the facilities of corporate building and
                    industrial warehouses in excellent condition, to assist our
                    customers achieve their ideal work environments. SESJ
                    specializes in interior and exterior cleaning, gardening,
                    electrical maintenance, climate control, blinds, paints, and
                    other finishes. We also offer services to set up or
                    redistribute work areas, including access control systems,
                    property security, and fire protection. These services
                    combine to maintain our customers’ highest standards of
                    functionality, presentation, and hygiene.
                  </Paragraph>
                  <Paragraph>
                    4) <b>Gardening:</b> <br></br>Maintenance and conservation
                    services for industrial and residential green spaces,
                    including preventative diagnostics and treatments to prevent
                    pests and plant diseases. SESJ offers a wide variety of
                    environmentally-friendly solutions and materials to keep
                    your gardens and landscaping in prime condition.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_2">
                {/* <div className={styles.sub}>
                  <Subtitle color="black">Reciclado de solventes.</Subtitle>
                </div> */}
                <div className={styles.text}>
                  <Paragraph>
                    1) <b>PURCHASE, SALE AND WASTE TREATMENT:</b>
                    <br />
                    SESJ offers the secure disposal of all types of waste
                    generated by industrial manufacturing processes. We offer
                    highly competitive rates for recycling waste products such
                    as cardboard, wood, plastics, ferrous metals, and
                    non-ferrous metals. SESJ also provides eco-friendly and
                    economic disposal of waste such as: sludge, water,
                    contaminated liquids, chemicals, and more. We offer
                    guaranteed zero-waste disposal, offering an environmentally
                    friendly alternative to landfills or waste confinement. Each
                    disposal plan is tailored to the specific needs of the
                    customer, and is presented with at least two alternatives,
                    with recommendations regarding the greatest environmental
                    and economic advantages. SESJ is able to offer exceptional
                    prices, due to our long-standing agreements with the best
                    waste destination companies. Servicos Especializados
                    Silviano Julio S.A. of C.V. is an allied company supporting
                    industries in their efforts to care for the environment.
                    <br />
                  </Paragraph>
                  <Paragraph>
                    2) <b>SOLVENT RECYCLING:</b>
                    <br />
                    As used solvents are considered to be hazardous waste and
                    cannot be reused in for their initial purpose, they require
                    appropriate disposal most often destruction, or dispersal
                    into the biosphere. At SESJ, we have been recovering and
                    recycling these solvents primarily paint from the automotive
                    industry for over 30 years. Through our use of
                    state-of-the-art distillers, SESJ is routinely able to
                    recover over 90% of solvent residues, resulting in better
                    environmental outcomes, and reducing the costs of new
                    solvents.
                  </Paragraph>
                  <Paragraph>
                    3){" "}
                    <b>
                      DISMANTLING OF CARS, DETONATION OF PYROTECHNIC ELEMENTS,
                      AND DISMANTLING OF PRODUCTION BUILDINGS:
                    </b>
                    <br />
                    At SESJ, we also offer a car dismantling and secure disposal
                    service, including engine destruction, dismantling of
                    electronic parts, disabling of wheels, and destruction of
                    transmissions. Throughout this process, SESJ is in full
                    compliance with the tax destruction guidelines of the SAT.
                    Additionally, we disable airbags and car seat belts using
                    state-of-the-art technology. SESJ also offers dismantling
                    and sanitation services of obsolete equipment and
                    infrastructure in industrial buildings; including production
                    equipment, electrical panels, power lines, conveyor belts,
                    hoists, platforms, supports, railings and escalators.
                  </Paragraph>
                </div>
              </div>
              {/* <div className={styles.tab_content} id="tab_content_tab_3">
                <div className={styles.sub}>
                  <Subtitle color="black">Lodos.</Subtitle>
                </div>
                <div className={styles.text}>
                  <Paragraph>
                    Como última etapa del Manejo Integral de los Residuos,
                    transportamos los residuos industriales a Destinos Finales
                    autorizados y que cumplen con toda la legislación vigente
                    aplicable en el país; además, aseguramos que ningún residuo
                    industrial se vaya a relleno sanitario, ya que nuestro
                    compromiso con el medio ambiente es “0% relleno sanitario”.
                  </Paragraph>
                  <Paragraph>
                    Servicios Especializados Silviano Julio S.A. de C.V. es una
                    empresa aliada apoyando a las industrias en los esfuerzos
                    por el cuidado del medio ambiente.
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
