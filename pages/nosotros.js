import Link from "next/link";
import styles from "./nosotros.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HEADER_IMAGES = [
  {
    id: 1,
    image: "sl.png",
  },
  {
    id: 2,
    image: "sl1.png",
  },
];

export default function Home() {
  const showHandler = (item) => {
    const itemDiv = document.getElementById(`item${item}`);
    const activeClass = `${styles.active}`;
    if (itemDiv.classList.contains(`${styles.active}`)) {
      itemDiv.classList.remove(activeClass);
    } else {
      itemDiv.classList.add(activeClass);
    }
  };

  return (
    <main>
      <div className={styles.head}>
        <div className="container">
          <div className={styles.header}>
            <Title size="big" color="black" align="left">
              Nosotros
            </Title>
            <Paragraph color="black">
              Somos empresa líder de servicios que ofrecer servicios integrales
              de administración de limpieza, mantenimiento en general y
              administración de residuos de manejo especial y peligrosos,
              conforme al marco regulatorio, que satisface las necesidades de
              nuestros clientes en diferentes sectores de la industria y que
              pertenecen primordialmente al Sector Automotriz.
            </Paragraph>
            <Paragraph color="black">
              Estamos comprometidos con el cumplimiento legal en materia
              ambiental, seguridad y calidad para la protección del medio
              ambiente, de nuestros colaboradores y sociedad. Impulsamos la
              transformación de nuestra empresa y entorno con un equipo
              altamente competitivo e íntegro que propicia su desarrollo,
              alienta su compromiso y crecimiento excepcional.
            </Paragraph>
            <Paragraph color="black">
              Servicios Especializados Silviano Julio S.A. de C.V. fue fundada
              en 1985 con el reciclaje de solvente proveniente de plantas
              automotrices del estado de Puebla. Con el tiempo fue desarrollando
              e implementado nuevos procesos y servicios especializados como la
              Gestión Integral de Residuos Industriales, Limpieza Industrial y
              Conservación de Edificios.
            </Paragraph>
          </div>
          <div className={styles.header_down}>
            <div className={styles.header_item1}>
              <div className={styles.header_ima}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/grupo913.png"
                  width={90}
                  height={134}
                />
              </div>
              <div className={styles.header_text}>
                <Subtitle color="black">
                  SESJ cuenta con una Filosofía Institucional
                </Subtitle>
                <Paragraph color="black">
                  Política de Calidad y Medio Ambiente, Misión, Visión,
                  Objetivos de Calidad y Medio Ambiente, y valores; aprobada por
                  la Dirección.
                </Paragraph>
              </div>
            </div>
            <div className={styles.header_item1}>
              <div className={styles.header_ima}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/grupo914.png"
                  width={154}
                  height={134}
                />
              </div>
              <div className={styles.header_text}>
                <Subtitle color="black">
                  SESJ cuenta con una Filosofía Institucional
                </Subtitle>
                <Paragraph color="black">
                  Política de Calidad y Medio Ambiente, Misión, Visión,
                  Objetivos de Calidad y Medio Ambiente, y valores; aprobada por
                  la Dirección.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#39B54A"
              fill-opacity="1"
              d="M0,32L120,69.3C240,107,480,181,720,202.7C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className={styles.section}>
        <div className="container">
          <div className={styles.nuestro}>
            <div className={styles.section1_title}>
              <Title size="medium" color="white" align="left">
                Nuestro Equipo
              </Title>
            </div>

            {/* <div className={styles.carousel}>
                <Carousel
                showStatus={false}
                autoPlay={true}
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
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
            </div> */}

            <div className={styles.section1}>
              <div className={styles.section1_item_1}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/Empleados/maricelaramirez.jpg"
                  width={3840}
                  height={2160}
                />
              </div>
              <div className={styles.section1_item_2}>
                <div className={styles.section1_item_2_text}>
                  <Title size="small" color="green1" align="left">
                    Mariela Ramírez
                  </Title>
                  <Subtitle color="black">Recursos Humanos</Subtitle>
                  <div className={styles.line}>
                    <div className={styles.separador}></div>
                  </div>
                  <Paragraph color="black">
                    “Nuestro mayo reto es que la gente se sienta contenta en el
                    área de trabajo. SESJ es una empresa sustentable preocupada
                    por el medio ambiente.”
                  </Paragraph>
                </div>
              </div>
              <div className={styles.section1_item_1}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/Empleados/rijuarez.jpg"
                  width={3840}
                  height={2160}
                />
              </div>
              <div className={styles.section1_item_2}>
                <div className={styles.section1_item_2_text}>
                  <Title size="small" color="green1" align="left">
                    Ricardo Juárez Correa
                  </Title>
                  <Subtitle color="black">Coordinador de Operaciones</Subtitle>
                  <div className={styles.line}>
                    <div className={styles.separador}></div>
                  </div>
                  <Paragraph color="black">
                    “Un año trabajando en SESJ, es algo que me ha ayudado
                    bastante, coordinamos y le damos la disposición adecuada al
                    nuestros residuos de manejo especial y residuos peligrosos.
                    Muy contento de trabajar en una empresa de manejo de
                    residuos.”
                  </Paragraph>
                </div>
              </div>

              <div className={styles.section1_item_1}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/Empleados/jogua.jpg"
                  width={3840}
                  height={2160}
                />
              </div>
              <div className={styles.section1_item_2}>
                <div className={styles.section1_item_2_text}>
                  <Title size="small" color="green1" align="left">
                    Jose Guadalupe Rodríguez Martínez
                  </Title>
                  <Subtitle color="black">Mantenimiento</Subtitle>
                  <div className={styles.line}>
                    <div className={styles.separador}></div>
                  </div>
                  <Paragraph color="black">
                    “Un día de trabajo es estar al pendiente del mantenimiento
                    de los equipos, que estén limpios, que no tengan ninguna
                    fuga. Siempre sale todo bien.”
                  </Paragraph>
                </div>
              </div>

              <div className={styles.section1_item_1}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/Empleados/javial.jpg"
                  width={3840}
                  height={2160}
                />
              </div>
              <div className={styles.section1_item_2}>
                <div className={styles.section1_item_2_text}>
                  <Title size="small" color="green1" align="left">
                    Javier Alejandro Torres Carrillo
                  </Title>
                  <Subtitle color="black">Supervisor</Subtitle>
                  <div className={styles.line}>
                    <div className={styles.separador}></div>
                  </div>
                  <Paragraph color="black">
                    “Todas las empresas generan cierto tipo de residuos,
                    principalmente nos encargamos de recepcionar, almacenar y
                    disponer el material que recibimos y mandarlo a las
                    distintas áreas donde es procesado”
                  </Paragraph>
                </div>
              </div>

              <div className={styles.section1_item_1}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/Empleados/marosa.jpg"
                  width={3840}
                  height={2160}
                />
              </div>
              <div className={styles.section1_item_2}>
                <div className={styles.section1_item_2_text}>
                  <Title size="small" color="green1" align="left">
                    Maria del Rosario Sánchez Allende
                  </Title>
                  <Subtitle color="black">Gerente de Operaciones</Subtitle>
                  <div className={styles.line}>
                    <div className={styles.separador}></div>
                  </div>
                  <Paragraph color="black">
                    “SESJ para mí es una empresa que me ha ayudado a descubrir
                    capacidades y aptitudes que antes no tenía, además de que me
                    ha hecho crecer profesionalmente y personalmente. Mi rol
                    como gerente es brindar un servicio de excelencia.”{" "}
                  </Paragraph>
                </div>
              </div>

              <div className={styles.section1_item_1}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/Empleados/jovita.jpg"
                  width={3840}
                  height={2160}
                />
              </div>
              <div className={styles.section1_item_2}>
                <div className={styles.section1_item_2_text}>
                  <Title size="small" color="green1" align="left">
                    Jovita Espinoza Palestina
                  </Title>
                  <Subtitle color="black">Operador General</Subtitle>
                  <div className={styles.line}>
                    <div className={styles.separador}></div>
                  </div>
                  <Paragraph color="black">
                    “Yo considero que esta empresa es muy importante porque
                    contribuimos al medio ambiente, aquí le llevamos
                    segregación, es la separación de los productos que se pueden
                    separar y los que no.”
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section4}>
        <div className="container">
          <div className={styles.content4}>
            <div className={styles.content_left}>
              <div className={styles.img}>
                <Image
                  alt="imGrupo"
                  src="/img/grupo918.jpg"
                  width={1758}
                  height={1860}
                />
              </div>
            </div>
            <div className={styles.content_right}>
              <div className={styles.content_right_text}>
                <Subtitle color="black">Nosotros</Subtitle>
                <Title size="small" color="black" align="left">
                  Nuestra Misión
                </Title>
                <Paragraph color="black">
                  Ofrecer servicios integrales de administración de limpieza,
                  mantenimiento en general y administración de residuos de
                  manejo especial y peligrosos, conforme al marco regulatorio y
                  requerimientos del cliente.
                </Paragraph>
              </div>
              <div className={styles.content_right_text}>
                <Title size="small" color="black" align="left">
                  Nuestra Visión
                </Title>
                <Paragraph color="black">
                  Ser la mejor opción en los servicios de limpieza,
                  mantenimiento en general y administración de residuos,
                  generando confianza a nuestros clientes., conforme al marco
                  regulatorio y requerimientos del cliente.
                </Paragraph>
              </div>
              <div className={styles.content_right_text}>
                <Title size="small" color="black" align="left">
                  Valores
                </Title>
                <li>Integridad</li>
                <li>Calidad</li>
                <li>Respeto y equidad</li>
                <li>Enfoque al cliente y a las excelencia</li>
              </div>
            </div>
          </div>
          <div className={styles.content4_down}>
            <div className={styles.content4_down_title}>
              <Title size="small" color="black" align="left">
                Política
              </Title>
            </div>
            <div className={styles.content4_down_text}>
              <Paragraph color="black">
                Somos una empresa especializada en servicios integrales, con un
                equipo altamente competitivo; comprometida con la calidad, la
                protección del medio ambiente, la prevención de la contaminación
                y el uso sostenible de los recursos, para mejorar el desempeño
                ambiental. Estamos comprometidos con la mejora continua de los
                procesos y de nuestro Sistema de Gestión Integral. Cumpliendo
                siempre con los requisitos legales y otros requisitos
                aplicables.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.clients}>
        <div className="container">
          <div className={styles.calidad}>
            <div className={styles.clients_text}>
              <Subtitle color="white">NOSOTROS</Subtitle>
              <Title size="small" color="white" align="left">
                Objetivos de Calidad y Medio Ambiente
              </Title>
              <Subtitle color="white">
                La dirección de SESJ establece los objetivos del Sistema de
                Gestión Integral, los cuales son:
              </Subtitle>
              <Paragraph color="white">
                ✓ Asegurar la sustentabilidad financiera.
                <br />
                ✓ Mejorar la calidad, seguridad e impacto ambiental de los
                servicios
                <br />✓ Desarrollar y Capacitar a los colaboradores.
              </Paragraph>
            </div>
            <div className={styles.clients_img}>
              <Image alt="im1" src="/img/imacli.png" width={606} height={458} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section6}>
        <div className="container">
          <div className={styles.certificacion}>
            <div className={styles.cert_title}>
              <Title size="medium" color="black" align="left">
                Certificaciones
              </Title>
            </div>
            <div className={styles.cert_sub}>
              <Subtitle color="black">Calidad / Ambiental / Seguridad</Subtitle>
            </div>
            <div className={styles.cert_text}>
              <Paragraph color="black">
                Servicios Especializados Silviano Julio S. A. de C.V. (SESJ),
                actualmente cuenta con un Sistema de Gestión Integral
                certificado en:
              </Paragraph>
            </div>
            <div className={styles.box_acordion}>
              <div className={styles.box_acordion_item} id="item1">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 1)}
                >
                  <div className={styles.title}>ISO 9001:2015</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    “Sistema de Gestión de Calidad”.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item2">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 2)}
                >
                  <div className={styles.title}>ISO 14001:2015</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    “Sistema de Gestión Ambiental”.
                  </Paragraph>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item3">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 3)}
                >
                  <div className={styles.title}>ISO 9001:2015</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    Estamos dados de alta en el REPSE (Registro de Prestadoras
                    de Servicios Especializados y Obras Especializadas) de la
                    STPS (Secretaría del Trabajo y Previsión Social).{" "}
                  </Paragraph>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item4">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 4)}
                >
                  <div className={styles.title}>PASST</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    Reconocimiento de “Empresa Segura” por parte de la STPS
                    (Secretaría del Trabajo y Previsión Social) al implementar
                    el PASST (Programa de Autogestión en Seguridad y Salud en el
                    Trabajo) en nuestra empresa.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
