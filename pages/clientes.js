import Link from "next/link";
import styles from "./clientes.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Fragment, useEffect, useState } from "react";
import Menu from "../components/Layout/Menu";

export default function Clientes() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSticky, setShowSticky] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(scrollPosition);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 1000) {
      setShowSticky(false);
    } else {
      setShowSticky(true);
    }
  }, [scrollPosition]);

  return (
    <Fragment>
      <Menu />
      <div className={styles.head}>
        <div className="container">
          <div className={styles.header_ti}>
            <Title size="big" color="white" align="left">
              Clientes
            </Title>
          </div>
          <div className={styles.box_flex}>
            <div className={styles.box_flex_left}>
              <div className={styles.box_grid}>
                <div className={styles.box_grid_item_left}>
                  <div className={styles.box_image_background}>
                    <div className={styles.box_image}>
                      <Image
                        alt="im1"
                        src="/img/clientes/bmw.jpg"
                        width={500}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_grid_item_right}>
                  <div className={styles.header_title}>
                    <Subtitle color="white">
                      BMW GROUP SAN LUIS POTOSI:
                    </Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      Desde el inicio de operaciones de esta prestigiosa planta
                      en 2018 prestamos el servicio integral de administración
                      de residuos.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <div className={styles.box_grid}>
                <div className={styles.box_grid_item_left}>
                  <div className={styles.box_image_background}>
                    <div className={styles.box_image}>
                      <Image
                        alt="im1"
                        src="/img/clientes/vw.jpg"
                        width={500}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_grid_item_right}>
                  <div className={styles.header_title}>
                    <Subtitle color="white">Volkswagen de México:</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      Tenemos relación comercial de más de 20 años con esta
                      importante planta, donde les brindamos servicios
                      ambientales e industriales.
                    </Paragraph>
                  </div>
                  <div className={styles.header_title}>
                    <Subtitle color="white">
                      Planta Motores Silao Volkswagen:
                    </Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      Con más de 5 años de presencia en esta importante planta
                      en el bajío, prestamos diversos tipos de servicios.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <div className={styles.box_grid}>
                <div className={styles.box_grid_item_left}>
                  <div className={styles.box_image_background}>
                    <div className={styles.box_image}>
                      <Image
                        alt="im1"
                        src="/img/clientes/vw.jpg"
                        width={500}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_grid_item_right}>
                  <div className={styles.header_title}>
                    <Subtitle color="white">Volkswagen Bank:</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      En esta importante institución financiera se presta el
                      servicio de mantenimiento a edificio corporativo.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <div className={styles.box_grid}>
                <div className={styles.box_grid_item_left}>
                  <div className={styles.box_image_background}>
                    <div className={styles.box_image}>
                      <Image
                        alt="im1"
                        src="/img/clientes/audi.jpg"
                        width={600}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_grid_item_right}>
                  <div className={styles.header_title}>
                    <Subtitle color="white">Audi de México:</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      Prestamos diversos servicios de transporte de residuos
                      peligros y no peligrosos.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <div className={styles.box_grid}>
                <div className={styles.box_grid_item_left}>
                  <div className={styles.box_image_background}>
                    <div className={styles.box_image}>
                      <Image
                        alt="im1"
                        src="/img/clientes/nissan.jpg"
                        width={500}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_grid_item_right}>
                  <div className={styles.header_title}>
                    <Subtitle color="white">Nissan Mexicana:</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      Más de un lustro otorgando diversos servicios a esta
                      planta.
                    </Paragraph>
                  </div>
                </div>
              </div>
              {/* <div className={styles.box_grid}>
                <div className={styles.box_grid_item_left}>
                  <div className={styles.box_image_background}>
                    <div className={styles.box_image}>
                      <Image
                        alt="im1"
                        src="/img/clientes/veoli.jpg"
                        width={500}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_grid_item_right}>
                  <div className={styles.header_title}>
                    <Subtitle color="white">Veolia</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      Suez es ahora Veolia. Nuestra nueva unión es un
                      acontecimiento trascendental en la transformación
                      ecológica.
                    </Paragraph>
                  </div>
                </div>
              </div> */}
            </div>
            <div className={styles.box_flex_right}>
              {showSticky && (
                <div className={styles.padre}>
                  <div className={styles.hijo}>
                    <div className={styles.box_contacto}>
                      <Subtitle color="black">Estamos para ayudarte.</Subtitle>
                      <Paragraph color="black">
                        Servicios acordes con los requerimientos de nuestros
                        clientes de talla internacional.
                      </Paragraph>
                      <Link href="/contacto">
                        <Button type="green">CONTÁCTANOS</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
