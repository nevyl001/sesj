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
              Servicios Industriales
            </Title>
          </div>
          <div className={styles.box_tabs}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tabs_item} ${styles.active}`}
                onClick={tabClickHandler}
                id="tab_1"
              >
                SERVICIOS INDUSTRIALES
              </div>
              <div
                className={styles.tabs_item}
                onClick={tabClickHandler}
                id="tab_2"
              >
                RESIDUOS INDUSTRIALES
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
                    1) Limpieza industrial, corporativa, residencial: Limpieza
                    especializada del más alto nivel cumpliendo estándares de
                    higiene en naves productivas, equipo e instalaciones
                    industriales, hospitales, centros comerciales, unidades
                    deportivas, residencias, edificios corporativos,
                    universidades, oficinas y aeropuertos.
                  </Paragraph>
                  <Paragraph>
                    2) Limpieza de altura y espacios confinados: limpieza segura
                    y efectiva de alturas y espacios confinados en estructuras
                    al interior de naves industriales y edificios corporativos.
                    Además, de la limpieza de cubiertas, techos y fachadas, sin
                    afectar las actividades productivas.
                  </Paragraph>
                  <Paragraph>
                    3) Mantenimiento y conservación integral de naves
                    industriales, edificios corporativo y residencias: nuestro
                    propósito es conservar en inmejorables condiciones las
                    instalaciones de edificios corporativos y naves
                    industriales, ya que es un factor clave para lograr un
                    ambiente ideal para las actividades de gestión corporativa e
                    industrial. Somos especialistas en conservar todas las
                    instalaciones en los rubros de: Limpieza, Jardinería
                    interior y exterior, mantenimiento eléctrico, climas e
                    hidrosanitario, cancelería, persianas, pintura y acabados.
                    Además de la reubicación o distribución de áreas de trabajo,
                    sistemas de control de acceso, seguridad patrimonial y
                    contra incendio. Como resultado las instalaciones cumplirán
                    los más altos estándares de Imagen, Funcionalidad e Higiene.
                  </Paragraph>
                  <Paragraph>
                    4) Jardinería :Servicio de mantenimiento y conservación de
                    áreas verdes industriales y residenciales donde se realizan
                    trabajos preventivos para diagnosticar y prevenir
                    enfermedades y plagas usando materiales amigables al medio
                    ambiente.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.tab_content} id="tab_content_tab_2">
                {/* <div className={styles.sub}>
                  <Subtitle color="black">Reciclado de solventes.</Subtitle>
                </div> */}
                <div className={styles.text}>
                  <Paragraph>
                    1) Compra venta y tratamiento de residuos:
                    <br />
                    SESJ ofrece la disposición de todos y cada uno de los
                    residuos que genera la industria. Ofrecemos los mejores
                    costos para reciclaje de residuos como cartón, madera,
                    metales ferrosos y no ferrosos, y plásticos. Encontramos el
                    destino más conveniente ambiental y económico para residuos
                    como: lodos, aguas y líquidos contaminados, químicos,
                    etc.Garantizamos reducir hasta CERO el envió a relleno
                    sanitario o confinamiento. Presentamos un plan de
                    disposición con por lo menos dos alternativas, recomendando
                    las opciones con mayores ventajas ambientales y económicas.
                    Tenemos convenio con las mejores empresas destino de
                    residuos.
                    <br />
                    Servicios Especializados Silviano Julio S.A. de C.V. es una
                    empresa aliada apoyando a las industrias en los esfuerzos
                    por el cuidado del medio ambiente.
                  </Paragraph>
                  <Paragraph>
                    2) Reciclaje de solvente:
                    <br />
                    Los solventes son sustancias líquidas en las que otras
                    sustancias pueden disolverse para adquirir propiedades
                    físicas que se adecuen a un uso particular. Sin embargo,
                    casi toda la producción mundial de solventes termina
                    destruida o dispersada en la biosfera.Servicios
                    Especializados Silviano Julio hace reciclado de solventes
                    como una solución para este problema. Un solvente gastado,
                    es aquel que se ha usado al menos una vez y que no puede
                    usarse nuevamente para el propósito para el cual fue
                    producido, debido a la contaminación durante el uso. Tal
                    material se considera un residuo peligroso. Servicios
                    Especializados Silviano Julio recupera y recicla pintura de
                    diversas industrias, pero tiene un enfoque con la pintura de
                    la industria automotriz reciclando este residuo por más de
                    30 años. Recuperamos y reciclamos solventes a través de
                    destiladores de última generación, donde en muchos casos se
                    puede conseguir la recuperación de más del 90% de los
                    residuos de solventes, reduciendo los gastos de nuevos
                    solventes, y cuidando al medio ambiente.
                  </Paragraph>
                  <Paragraph>
                    3) Desmantelamiento de autos, Detonación de elementos
                    pirotécnicos y desmantelamiento de naves productivas:
                    <br />
                    SESJ ofrece el servicio de desmantelamiento de autos. Esto
                    incluye: destrucción de motor, desmantelamiento de partes
                    electrónicas, inhabilitación de rines y destrucción de
                    transmisiones. En este proceso cumplimos con los
                    lineamientos de destrucción fiscal del SAT. Adicionalmente,
                    deshabilitamos bolsas de aire y cinturones de seguridad de
                    autos usando tecnología de punta.
                    <br /> SESJ ofrece el servicio de desmontaje y saneamiento
                    de equipos e infraestructura que ya son obsoletos en naves
                    industriales. Estos son ejemplos de la infraestructura que
                    se ha retirado: Equipos Productivos, tableros eléctricos,
                    tuberías de energía, bandas transportadoras, polipastos,
                    plataformas, soportes, barandales y escaleras eléctricas
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
    </Fragment>
  );
}
