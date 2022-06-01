import Link from "next/link";
import styles from "./clientes.module.css";
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
          <div className={styles.header_ti}>
            <Title size="big" color="white" align="left">
              Clientes
            </Title>
          </div>
          {/* ESTE ES TU FLEX */}
          <div className={styles.box_flex}>
            <div className={styles.box_flex_left}>
              {/* ESTE ES TU GRID */}
              <div className={styles.box_grid}>
                <div className={styles.box_grid_item_left}>
                  <div className={styles.box_image_background}>
                    <div className={styles.box_image}>
                      <Image
                        alt="im1"
                        src="/img/bmw.png"
                        width={150}
                        height={79}
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
                        src="/img/vw.png"
                        width={182}
                        height={162}
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
                        src="/img/audi.png"
                        width={178}
                        height={142}
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
                        src="/img/nissan.png"
                        width={136}
                        height={109}
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
                        src="/img/veo.png"
                        width={216}
                        height={128}
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
              <div className={styles.box_contacto}>
                <Subtitle color="black">Estamos para ayudarte.</Subtitle>
                <Paragraph color="black">
                  Servicios acordes con los requerimientos de nuestros clientes
                  de talla internacional.
                </Paragraph>
                <Link href="#">
                  <Button>CONTÁCTANOS</Button>
                </Link>
              </div>
              <div className={styles.divider} />
            </div>
          </div>
          {/* AQUI TERMINA */}
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
