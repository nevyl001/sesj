import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const showVideoHandler = () => {
    setShowVideo(true);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowVideo(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <main>
      {showVideo && (
        <div className={styles.hidden_overlay}>
          <div ref={wrapperRef} className={styles.video_box}>
            <video ref={videoRef} style={{ width: "100%" }} autoPlay controls>
              <source src="/img/final.mp4" />
            </video>
          </div>
        </div>
      )}
      <div className={styles.head_video}>
        <div className={styles.video}>
          <video loop muted autoPlay>
            <source src="/img/back.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.content}>
          <div className="container">
            <div className={styles.header}>
              <div className={styles.video_btn} onClick={showVideoHandler}>
                <button>
                  Ver video
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                </button>
              </div>
              <Title size="big" color="white" align="left">
                Somos una empresa líder en servicios logísticos, industriales y
                de
                <br />
                administracion de residuos.
              </Title>
              <Paragraph color="white">
                Ofrecemos a nuestros clientes estrategias eficientes e
                innovadoras, estando comprometidos con el cumplimiento legal en
                materia ambiental, seguridad y calidad para beneficio de
                nuestros clientes y la sociedad.
              </Paragraph>
            </div>
          </div>
          <div className={styles.line}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#39B54A"
                fillOpacity="1"
                d="M0,256L120,229.3C240,203,480,149,720,117.3C960,85,1200,75,1320,69.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
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
            <div className={styles.section_card_item}>
              <div className={styles.visible_content}>
                <div
                  className={styles.item_image}
                  style={{ backgroundImage: "url(/img/new-service-1.jpg)" }}
                >
                  <h3>Servicios Ambientales</h3>
                </div>
              </div>
              <div className={styles.hidden_content}>
                <div className={styles.separador}></div>
                <div className={styles.item_text}>
                  Gestión integral de residuos peligrosos, de manejo especial y
                  scrap.<br></br>
                  Consultoría Ambiental.<br></br>
                </div>
              </div>
            </div>
            <div className={styles.section_card_item}>
              <div className={styles.visible_content}>
                <div
                  className={styles.item_image}
                  style={{ backgroundImage: "url(/img/new-service-2.jpg)" }}
                >
                  <h3>Servicios industriales</h3>
                </div>
              </div>
              <div className={styles.hidden_content}>
                <div className={styles.separador}></div>
                <div className={styles.item_text}>
                  Limpieza industrial, corporativa, residencial.<br></br>
                  Limpieza de altura y espacios confinados.<br></br>
                  Mantenimiento y conservación integral de naves industriales,
                  edificios corporativo y residencias.<br></br>
                  Jardinería.
                </div>
              </div>
            </div>
            <div className={styles.section_card_item}>
              <div className={styles.visible_content}>
                <div
                  className={styles.item_image}
                  style={{ backgroundImage: "url(/img/new-service-3.jpg)" }}
                >
                  <h3>Residuos Industriales</h3>
                </div>
              </div>
              <div className={styles.hidden_content}>
                <div className={styles.separador}></div>
                <div className={styles.item_text}>
                  Tratamiento y reciclado de residuos.
                  <br />
                  Compra venta de residuos ferrosos y de manejo especial.
                  <br />
                  Desmantelamiento de autos.
                  <br />
                  Detonación de elementos pirotécnicos.
                  <br />
                  Reciclaje y aprovechamiento de residuos ferrosos.
                  <br />
                  Reciclaje de solvente.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.separador3}></div>
          </div>

          <div className={styles.section3}>
            <div className={styles.somos}>
              <Title size="medium" color="white" align="center">
                SESJ ofrece servicios integrales que brindan soluciones
                especificas a sus clientes
              </Title>
              <Paragraph color="white">
                Nuestros servicios son robustos, eficientes y seguros enfocados
                en la
                <br /> mejora continua para beneficio de nuestros clientes
              </Paragraph>
            </div>
            <Link href="/contacto">
              <Button>CONTÁCTANOS</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className={styles.section4}>
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
      </div> */}
      <div className={styles.clients}>
        <div className="container">
          <div className={styles.clients_inner}>
            <div className={styles.clients_text}>
              <Subtitle color="black">CLIENTES</Subtitle>
              <Title size="small" color="black" align="left">
                Lo que dicen los clientes
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
                <div className={styles.clients_card}>
                  <div className={styles.clients_card1}>
                    <Paragraph color="black">
                      “Hemos trabajado con SESJ por muchos años y nos han dado
                      soluciones efectivas, en tiempo y con la mejor actitud. La
                      calidad de sus servicios es excelente y hemos estado
                      satisfechos con la calidad del servicio. ”
                    </Paragraph>
                    <Subtitle color="black">COORDINADOR WV PUEBLA</Subtitle>
                  </div>
                  <div className={styles.clients_card1}>
                    <Paragraph color="black">
                      “Los procesos que maneja SESJ son muy delicados y en estos
                      años que he trabajado con ellos estoy tranquilo ya que sus
                      procesos son realizados de una manera profesional y
                      segura. SESJ tiene una buena reputación y se refleja en la
                      gran calidad de los servicios que tienen con nosotros.”
                    </Paragraph>
                    <Subtitle color="black">COORDINADOR VW SILAO</Subtitle>
                  </div>
                </div>
                {/* <div className={styles.clients_card}>
                  <div className={styles.clients_card1}>
                    <Paragraph color="black">
                      “Sollicitudin nunc in eros a justo facilisis rutrum.
                      Aenean id ullamcorper libero. Vestibulum imperdiet nibh
                      tortor mauris condimentum ”
                    </Paragraph>
                    <Subtitle color="black">JONT KOOK</Subtitle>
                    <h4>CEO lacinia faucibus risus</h4>
                  </div>
                  <div className={styles.clients_card1}>
                    <Paragraph color="black">
                      “Sollicitudin nunc in eros a justo facilisis rutrum.
                      Aenean id ullamcorper libero. Vestibulum imperdiet nibh
                      tortor mauris condimentum”
                    </Paragraph>
                    <Subtitle color="black"> DAVID JAME</Subtitle>
                    <h4>CEO lacinia faucibus risus</h4>
                  </div>
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
                      “Sollicitudin nunc in eros a justo facilisis rutrum.
                      Aenean id ullamcorper libero. Vestibulum imperdiet nibh
                      tortor mauris condimentum”
                    </Paragraph>
                    <Subtitle color="black"> DAVID JAME</Subtitle>
                    <h4>CEO lacinia faucibus risus</h4>
                  </div>
                </div> */}
              </Carousel>
            </div>

            <div className={styles.clients_img}>
              <Image
                alt="im1"
                src="/img/Content.png"
                width={1940}
                height={280}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
