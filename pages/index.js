import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";

export default function Home() {
  return (
    <main>
      <div className={styles.head}>
        <div className="container">
          <div className={styles.header}>
            <Title size="big" color="white" align="left">
              Somos empresa lider <br />
              en limpieza, mantenimiento
              <br />y administracion de residuos.
            </Title>
            <Paragraph color="white">
              Estamos comprometidos con el cumplimiento legal en materia
              ambiental, seguridad y calidad para la <br />
              proteccion del medio ambiente, de nuestros colaboradores y
              sociedad.
            </Paragraph>
            <Link href="/contacto">
              <Button>CONTÁCTANOS</Button>
            </Link>
          </div>
        </div>
        <div className={styles.line}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#39B44A"
              fill-opacity="1"
              d="M0,256L120,234.7C240,213,480,171,720,154.7C960,139,1200,149,1320,154.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className={styles.section}>
        <div className="container">
          <div className={styles.section1}>
            <Subtitle color="white">LAS MEJORES SOLUCIONES</Subtitle>
            <Title size="medium" color="white" align="left">
              Nuestros Servicios
            </Title>
          </div>
          <div className={styles.section_card}>
            <div className={styles.section_cards}>
              <h5>Servicios Especializados</h5>
              <div className={styles.separador}></div>
              <Image
                alt="Servicios Especializados"
                src="/img/im1.png"
                width={200}
                height={200}
              />
              <div className={styles.separador2}></div>
              <div className={styles.text_card}>
                <p>Gestion de Residuos</p>
                <p>Limpieza Industrial y Corporativa</p>
                <p>Conservacion de Edificios</p>
              </div>
            </div>
            <div className={styles.section_cards}>
              <h5>Residuos Industriales</h5>
              <div className={styles.separador}></div>
              <Image alt="im1" src="/img/im2.png" width={200} height={200} />
              <div className={styles.separador2}></div>
              <div className={styles.text_card}>
                <p>Compra-venta de residuos</p>
                <p>Reciclaje</p>
                <p>Disposicion final</p>
              </div>
            </div>
            <div className={styles.section_cards}>
              <h5>Transportes Especializados de Residuos</h5>
              <div className={styles.separador}></div>
              <Image alt="im1" src="/img/im3.png" width={200} height={200} />
              <div className={styles.separador2}></div>
              <div className={styles.text_card}>
                <p>
                  Caja seca, plataforma, roll-off
                  <br />
                  tolvas, etc.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.separador3}></div>
          </div>

          <div className={styles.section3}>
            <div className={styles.somos}>
              <Title size="medium" color="white" align="center">
                Somos una empresa especializada <br /> en servicios integrales
              </Title>
              <Paragraph color="white">
                Estamos comprometidos con la mejora continua de los procesos y
                de <br /> nuestri Sistema de Gestion Integral
              </Paragraph>
            </div>
            <Link href="/contacto">
              <Button>CONTÁCTANOS</Button>
            </Link>
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
              <div className={styles.content_right_boton}>
                <Link href="#">
                  <Button>VER MÁS</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <div className="container">
          <div className={styles.clients_inner}>
            <div className={styles.clients_text}>
              <Subtitle color="black">CLIENTES</Subtitle>
              <Title size="small" color="black" align="left">
                Lo que dicen los clientes
              </Title>
            </div>
            <div className={styles.clients_card}>
              <div className={styles.clients_card1}>
                <Paragraph color="black">
                  “Vestibulum sollicitudin nunc in eros a justo facilisis
                  rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet
                  nibh tortor mauris condimentum nibh”
                </Paragraph>
                <Subtitle color="black">JONT KOOK</Subtitle>
                <h4>CEO lacinia faucibus risus</h4>
              </div>
              <div className={styles.clients_card1}>
                <Paragraph color="black">
                  “Sollicitudin nunc in eros a justo facilisis rutrum. Aenean id
                  ullamcorper libero. Vestibulum imperdiet nibh tortor mauris
                  condimentum”
                </Paragraph>
                <Subtitle color="black"> DAVID JAME</Subtitle>
                <h4>CEO lacinia faucibus risus</h4>
              </div>
            </div>
            <div className={styles.clients_img}>
              <Image
                alt="im1"
                src="/img/Content.png"
                width={1180}
                height={140}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
