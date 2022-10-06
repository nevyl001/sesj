import Link from "next/link";
import styles from "../clientes.module.css";
import Image from "next/image";
import Button from "../../components/UI/Button";
import Paragraph from "../../components/UI/Paragraph";
import Subtitle from "../../components/UI/Subtitle";
import Title from "../../components/UI/Title";
import { Fragment, useEffect, useState } from "react";
import MenuEn from "../../components/Layout/Menu-en";

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
      <MenuEn />
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
                      SESJ has provided comprehensive waste management services
                      to this prestigious factory since the start of operations
                      in 2018.
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
                    <Subtitle color="white">Volkswagen of Mexico:</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      We have established and maintained a successful commercial
                      relationship with Volkswagen Mexico for over 20 years. We
                      provide this important plant with a variety of
                      environmental and industrial services.
                    </Paragraph>
                  </div>
                  <div className={styles.header_title}>
                    <Subtitle color="white">
                      Silao Volkswagen Engine Plant:
                    </Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      For over five years, SESJ has provided a variety of
                      services to this important plant in the Bajio.
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
                      SESJ provides this important financial institution with
                      maintenance services in their corporate building.
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
                      We provide various hazardous and non-hazardous waste
                      transport services for Audi in San Jose Chiapa, Puebla.
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
                    <Subtitle color="white">Mexican Nissan:</Subtitle>
                  </div>
                  <div className={styles.header_p}>
                    <Paragraph color="white">
                      SESJ has also provided more than five years of exceptional
                      transportation service to Nissan Mexico.
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
                      <Subtitle color="black">
                        We are here to help you.
                      </Subtitle>
                      <Paragraph color="black">
                        Services in accordance with the requirements of our
                        international clients.
                      </Paragraph>
                      <Link href="/contacto">
                        <Button type="green">CONTACT US</Button>
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
