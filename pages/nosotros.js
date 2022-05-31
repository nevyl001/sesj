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
        </div>
        <div className={styles.line}>
          <Image alt="Divider" src="/img/linea.png" width={2444} height={335} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
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
            <Link href="#">
              <Button>CONTÁCTANOS</Button>
            </Link>
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
        <div className={styles.container}>
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

      <div className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contact1}>
            <div className={styles.contact_left}>
              <div className={styles.contact_left_text}>
                <Subtitle color="black">ESTAMOS A TU SERVICIO</Subtitle>
                <Title size="medium" color="black" align="left">
                  Contáctanos
                </Title>
              </div>
              <form action="/send-data-here" method="post">
                <div className={styles.empresa}>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    placeholder="Empresa"
                  />
                </div>
                <div className={styles.nombre}>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                  />
                </div>
                <div className={styles.inps}>
                  <div className={styles.tel}>
                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      placeholder="Telefono"
                    />
                  </div>
                  <div className={styles.email}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className={styles.contact_boton}>
                  <Link type="submit" href="#">
                    <Button> ENVIAR</Button>
                  </Link>
                </div>
              </form>
            </div>
            <div className={styles.contact_right}>
              <div className={styles.contact_img}>
                <Image
                  alt="im1"
                  src="/img/artboard506.png"
                  width={1548}
                  height={955}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_space1}></div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.flex_footer}>
            <div className={styles.footer_left}>
              <div className={styles.footer_img}>
                <Image
                  alt="footer"
                  src="/img/footer.png"
                  width={80}
                  height={83}
                />
              </div>
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
              <li>Privacy Policy </li>
              <li>Terms and Conditions </li>
              <li>Help </li>
              <li>Partners </li>
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
