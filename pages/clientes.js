import Link from "next/link";
import styles from "./clientes.module.css";
import Image from "next/image";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
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
                    <Subtitle color="white">BMW Group San Luis Potosí</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      BMW Group Planta San Luis Potosí inició producción en 2019
                      con una capacidad de 150,000 vehículos anuales.
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
                    <Subtitle color="white">
                      Volkswagen de México Planta Puebla
                    </Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      La Planta de Componentes Puebla de Volkswagen de México
                      obtuvo el primer lugar entre las 23 fábricas del Grupo
                      Volkswagen en la competencia “Speed+ 2019” con los mejores
                      resultados en eficiencia de ensamble.
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
                        width={500}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.box_grid_item_right}>
                  <div className={styles.header_title}>
                    <Subtitle color="white">Audi de México</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      En Audi México avanzamos hacia el futuro.
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
                    <Subtitle color="white">NISSAN Mexicana Planta</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      Nissan es tecnología emocionante y segura que nos conecta
                      con todo y con todos. Nissan ofrece energía limpia y
                      silenciosa para llegar más lejos.
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
              </div>
            </div>
            <div className={styles.box_flex_right}>
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
