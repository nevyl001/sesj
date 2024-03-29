import styles from "./nosotros.module.css";
import Image from "next/image";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../components/Layout/Menu";
import Footer from "../components/Layout/Footer";

export default function Home() {
  const showHandler = (item) => {
    const itemDiv = document.getElementById(`item${item}`);
    const symbolOpen = document.getElementById(`symbolopen${item}`);
    const symbolClose = document.getElementById(`symbolclose${item}`);
    const activeClass = `${styles.active}`;
    if (itemDiv.classList.contains(`${styles.active}`)) {
      itemDiv.classList.remove(activeClass);
      symbolOpen.style.display = "block";
      symbolClose.style.display = "none";
    } else {
      itemDiv.classList.add(activeClass);
      symbolOpen.style.display = "none";
      symbolClose.style.display = "block";
    }
  };

  return (
    <main>
      <Menu />
      <div className={styles.head}>
        <div className="container">
          <div className={styles.header}>
            <Title size="big" color="black" align="left">
              Nosotros
            </Title>
            <Paragraph color="black">
              Servicios Especializados Silviano Julio S.A. de C.V. fue fundada
              en 1985 con el reciclaje de solvente proveniente de plantas
              automotrices del estado de Puebla. Con el tiempo fue desarrollando
              e implementado nuevos procesos y servicios especializados como la
              Gestión Integral de Residuos Industriales, servicios industriales
              y logísticos.
            </Paragraph>
            <Paragraph color="black">
              Estamos comprometidos con el cumplimiento legal en materia
              ambiental, seguridad y calidad para la protección del medio
              ambiente, de nuestros colaboradores y sociedad. Impulsamos la
              transformación de nuestra empresa y entorno con un equipo
              altamente competitivo e íntegro que propicia su desarrollo,
              alienta su compromiso y crecimiento excepcional.
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
                  SESJ tiene mas de 30 años de experiencia.
                </Subtitle>
                <Paragraph color="black">
                  Gracias a nuestra experiencia proporcionamos soluciones
                  efectivas y de valor agregado a las necesidades únicas de
                  nuestros clientes.
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
                  SESJ cuenta con una filosofía institucional basada en la
                  mejora continua de los procesos.
                </Subtitle>
                <Paragraph color="black">
                  SESJ se enfoca en la calidad y seguridad de los procesos, lo
                  que garantiza servicios de excelencia y satisfacción del
                  cliente.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#39B54A"
              fillOpacity="1"
              d="M0,64L120,101.3C240,139,480,213,720,229.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
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

            <div className={styles.carousel}>
              <Carousel
                showStatus={false}
                autoPlay={true}
                showArrows={true}
                showThumbs={false}
                showIndicators={true}
                infiniteLoop={true}
              >
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/ANGELES.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        Angeles Sánchez
                      </Title>
                      <Subtitle color="black">Coordinadora Limpieza</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “Mi meta es lograr óptimos resultados tanto para el
                        cliente como para la empresa. SESJ para mí es una parte
                        muy importante en mi vida, he obtenido grandes logros y
                        satisfacciones gracias a la confianza que SESJ me ha
                        brindado. Pertenecer a SESJ que es una empresa bien
                        consolidada, con valores y metas bien definidas me hace
                        sentir muy orgullosa”
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/GERMAN.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        German Flores
                      </Title>
                      <Subtitle color="black">Gerente Limpieza</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “SESJ para mí siempre ha representado un reto en todos
                        los ámbitos de mi vida ya que las exigencias del día a
                        día siempre sacan lo mejor de mí, aquí sigo aprendiendo
                        y creciendo como persona, algo muy relevante es que me
                        doy cuenta que el trabajo en equipo es el camino al
                        éxito.
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/HAYDEE.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        Haydee Vazquez
                      </Title>
                      <Subtitle color="black">Especialista de Ventas </Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “Estoy orgullosa de pertenecer a SESJ ya que me ha
                        permitido desarrollarme como profesional sin descuidar
                        mi rol como madre de familia. Mi meta es brindarle la
                        mejor solución a las necesidades de nuestros clientes.”
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
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
                        “SESJ para mí es una empresa que me ha ayudado a
                        descubrir capacidades y aptitudes que antes no tenía,
                        además de que me ha hecho crecer profesionalmente y
                        personalmente. Mi rol como gerente es brindar un
                        servicio de excelencia.”
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/OSWALDO.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        Oswaldo Sarmiento
                      </Title>
                      <Subtitle color="black">Especialista de Compras</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “En SESJ he evolucionado en todos los aspectos y he
                        encontrado un lugar donde mi granito de arena hace la
                        diferencia. En estos diez años en la empresa he podido
                        darle soluciones a los problemas de los clientes.”
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </Carousel>
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
                  requerimientos de nuestras partes interesadas.
                </Paragraph>
              </div>
              <div className={styles.content_right_text}>
                <Title size="small" color="black" align="left">
                  Nuestra Visión
                </Title>
                <Paragraph color="black">
                  Ser la mejor opción en los servicios de limpieza,
                  mantenimiento en general y administración de residuos,
                  generando confianza y seguridad a nuestras partes interesadas.
                </Paragraph>
              </div>
              <div className={styles.content_right_text}>
                <Title size="small" color="black" align="left">
                  Valores
                </Title>
                <li>Integridad</li>
                <li>Calidad</li>
                <li>Respeto y equidad</li>
                <li>Enfoque al cliente y a la excelencia.</li>
              </div>
            </div>
          </div>
          <div className={styles.content4_down}>
            <div className={styles.content4_down_title}>
              <Title size="small" color="black" align="left">
                POLÍTICA DE CALIDAD,MEDIO AMBIENTE, SEGURIDAD Y SALUD EN EL
                TRABAJO
              </Title>
            </div>
            <div className={styles.content4_down_text}>
              <Paragraph color="black">
                Somos una empresa especializada en servicios integrales, con un
                equipo altamente competitivo; comprometida con la calidad, la
                protección del medio ambiente, la prevención de la contaminación
                y el uso sostenible de los recursos, para mejorar el desempeño
                ambiental. Promoviendo una cultura de seguridad y salud laboral,
                para proporcionar condiciones de trabajo seguras y saludables,
                para la prevención de lesiones y deterioro de la salud en el
                trabajo; así como, para eliminar los peligros y reducir los
                riesgos en el trabajo. Estamos comprometidos con la mejora
                continua de los procesos y de nuestro Sistema de Gestión
                Integral; a través de la consulta y participación de los
                trabajadores. Cumpliendo siempre con los requisitos legales y
                otros requisitos aplicables.
              </Paragraph>
            </div>
          </div>
          <div className={styles.space_sec4}></div>

          <div className={styles.content4_down}>
            <div className={styles.content4_down_title}>
              <Title size="small" color="black" align="left">
                OBJETIVOS DE CALIDAD,MEDIO AMBIENTE,SEGURIDAD Y SALUD EN EL
                TRABAJO
              </Title>
            </div>
            <div className={styles.content4_down_text}>
              <Paragraph color="black">
                La dirección de SESJ establece los objetivos del Sistema de
                Gestión Integral de Calidad, Medio Ambiente, Seguridad y Salud
                en el Trabajo:
              </Paragraph>
              <Paragraph color="black">
                1. Asegurar la sustentabilidad financiera.
              </Paragraph>
              <Paragraph color="black">
                2. Mejorar la calidad e impacto ambiental de los servicios.
              </Paragraph>
              <Paragraph color="black">
                3. Desarrollar y capacitar a los colaboradores.
              </Paragraph>
              <Paragraph color="black">
                4. Promover, mantener y mejorar las condiciones de seguridad y
                salud en el trabajo.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <div className="container">
          <div className={styles.calidad}>
            <div className={styles.clients_text}>
              <Title size="small" color="white" align="left">
                Objetivos de Calidad y Medio Ambiente
              </Title>
              <Subtitle color="white">
                La dirección de SESJ establece los objetivos del Sistema de
                Gestión Integral, los cuales son:
              </Subtitle>
              <Paragraph color="white">
                ✓ Asegurar la sustentabilidad financiera y ambiental de los
                proyectos.
                <br />
                ✓ Mejorar la calidad, seguridad e impacto ambiental de los
                servicios.
                <br />✓ Desarrollar y Capacitar a los colaboradores para dar el
                mejor servicio al cliente.
              </Paragraph>
            </div>
            <div className={styles.clients_img}>
              <video controls style={{ width: "100%" }}>
                <source src="/img/video2.mp4" />
              </video>
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
                SESJ se encuentra certificada en las siguientes normas:
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
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen1">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose1">
                    -
                  </div>
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
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen2">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose2">
                    -
                  </div>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item3">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 3)}
                >
                  <div className={styles.title}>REPSE</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    Estamos dados de alta en el REPSE (Registro de Prestadoras
                    de Servicios Especializados y Obras Especializadas) de la
                    STPS (Secretaría del Trabajo y Previsión Social).
                  </Paragraph>
                </div>
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen3">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose3">
                    -
                  </div>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item4">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 4)}
                >
                  <div className={styles.title}>ISO 45001:2018 </div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    Sistemas de gestión de la seguridad y salud en el trabajo.
                  </Paragraph>
                </div>
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen4">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose4">
                    -
                  </div>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item5">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 5)}
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
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen5">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose5">
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
