import Link from "next/link";
import styles from "./contacto.module.css";
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
              Contacto
            </Title>
          </div>
          {/* ESTE ES TU FLEX */}
          <div className={styles.box_flex}>
            <div className={styles.box_flex_left}>
              <Paragraph color="white">INFORMACIÓN</Paragraph>
              <Title size="small" color="white" align="left">
                Dirección
              </Title>
              <div className={styles.box_flex_left_text}>
                <Subtitle color="white">México</Subtitle>
                <Paragraph color="white">
                  1010 Avenue of the Moon New York, NY 10018 US.
                </Paragraph>
                <Paragraph color="white">+032 3456 7890</Paragraph>
                <Paragraph color="white"> Business@moontheme.net</Paragraph>
              </div>
              <div className={styles.box_flex_left_text}>
                <Subtitle color="white">Guadalajara</Subtitle>
                <Paragraph color="white">
                  1010 Avenue of the Moon New York, NY 10018 US.
                </Paragraph>
                <Paragraph color="white">+032 3456 7890</Paragraph>
                <Paragraph color="white"> Business@moontheme.net</Paragraph>
              </div>
            </div>
            <div className={styles.box_flex_right}>
              <Paragraph color="white">CONTACTO</Paragraph>
              <Title size="small" color="white" align="left">
                Contáctanos
              </Title>
              <div className={styles.box_flex_inputs}>
                <form action="/send-data-here" method="post">
                  <div className={styles.nombre}>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className={styles.nombreytel}>
                    <div className={styles.email}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className={styles.tel}>
                      <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        placeholder="Telefono"
                      />
                    </div>
                  </div>
                  <div className={styles.area}>
                    <input
                      type="textarea"
                      name="textValue"
                      rows={20}
                      cols={20}
                    />
                  </div>
                </form>
              </div>

              <Link href="#">
                <Button>CONTÁCTANOS</Button>
              </Link>
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
