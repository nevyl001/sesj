import Link from "next/link";
import styles from "./nosotros.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";

export default function Home() {
  return (
    <main>
      <div className={styles.head}>
        <div className={styles.container}>
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
        <div className={styles.line}></div>
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.nuestro}>
            <div className={styles.section1_title}>
              <Title size="small" color="white" align="left">
                Nuestro Equipo
              </Title>
            </div>
            <div className={styles.section1}>
              <div className={styles.section1_item_1}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/im918.png"
                  width={518}
                  height={468}
                />
              </div>
              <div className={styles.section1_item_2}>
                <div className={styles.section1_item_2_text}>
                  <Title size="small" color="green1" align="left">
                    Abraham Gonzalez
                  </Title>
                  <Subtitle color="black">
                    Administración Mantenimiento
                  </Subtitle>
                  <div className={styles.line}>
                    <div className={styles.separador}></div>
                  </div>
                  <Paragraph color="black">
                    “Llevo más de 15 años mejorando procesos que reflejan el
                    cuidado por el medio ambiente”
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section4}>
        <div className={styles.container}>
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
        <div className={styles.container}>
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
        <div className={styles.container}>
          <div className={styles.certificacion}>
            <div className={styles.cert_title}>
              <Title size="small" color="black" align="left">
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
            <div className={styles.acordion}>
              <ul>
                <li>ISO 9001:2015</li>
                <li>ISO 14001:2015</li>
                <li>REPSE y STPS</li>
                <li>PASST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_space1}></div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer_img}>
            <Image alt="footer" src="/img/footer.png" width={80} height={83} />
          </div>
          <div className={styles.flex_footer}>
            <div className={styles.footer_left}>
              <div className={styles.footer_text}>
                <Subtitle color="black">Contacto</Subtitle>
                <Paragraph color="black">
                  London Oxford Street, 012 United <br /> Kingdom.
                </Paragraph>
                <Paragraph color="black">+032 3456 7890</Paragraph>
                <Paragraph color="black">Business@moontheme.net</Paragraph>
              </div>
            </div>
            <div className={styles.footer_right}>
              <Subtitle color="black">Email Newsletters</Subtitle>
              <Paragraph color="black">Suscríbete al Newsleter</Paragraph>
              <div className={styles.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <Link type="submit" href="#">
                  <Button> SUSCRÍBETE</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.space}>
        <div className={styles.footer_space}></div>
      </div>
      <div className={styles.footer_down}>
        <div className={styles.container}>
          <div className={styles.flex_footer_down}>
            <div className={styles.foo_left}>
              <Link href="#">
                <a className={styles.link}>Privacy Policy</a>
              </Link>
              <Link href="#">
                <a className={styles.link}>Terms and Conditions</a>
              </Link>
              <Link href="#">
                <a className={styles.link}>Help </a>
              </Link>
              <Link href="#">
                <a className={styles.link}>Partners</a>
              </Link>
            </div>
            <div className={styles.foo_right}>
              <Link href="https://www.facebook.com">
                <a target="_blank" rel="noreferrer">
                  <Image
                    alt="facebook"
                    src="/img/facebook-svgrepo-com.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="twitter"
                  src="/img/gorjeo.png"
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="instagram"
                  src="/img/instagram.png"
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="youtube"
                  src="/img/youtube.png"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
