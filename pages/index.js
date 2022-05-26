import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.head}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>
              Somos empresa lider <br />
              en limpieza, mantenimiento
              <br />y administracion de residuos.
            </h1>
            <p>
              Estamos comprometidos con el cumplimiento legal en materia
              ambiental, seguridad y calidad para la <br />
              proteccion del medio ambiente, de nuestros colaboradores y
              sociedad.
            </p>
            <Link href="#">
              <button>CONTÁCTANOS</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.section1}>
            <h4>LAS MEJORES SOLUCIONES</h4>
            <h2>Nuestros Servicios</h2>
          </div>
          <div className={styles.section_card}>
            <div className={styles.section_cards}>
              <h5>Servicios Especializados</h5>
              <div className={styles.separador}></div>
              <Image alt="im1" src="/img/im1.png" width={200} height={200} />
              <div className={styles.separador2}></div>
              <div className={styles.text_card}>
                <p>Gestion de Residuos</p>
                <p>Limpieza Industrial y Corporativa</p>
                <p>Conservacion de Edificios</p>
              </div>
            </div>
            <div className={styles.section_cards}>
              <h5>Servicios Especializados</h5>
              <div className={styles.separador}></div>
              <Image alt="im1" src="/img/im1.png" width={200} height={200} />
              <div className={styles.separador2}></div>
              <div className={styles.text_card}>
                <p>Gestion de Residuos</p>
                <p>Limpieza Industrial y Corporativa</p>
                <p>Conservacion de Edificios</p>
              </div>
            </div>
            <div className={styles.section_cards}>
              <h5>Servicios Especializados</h5>
              <div className={styles.separador}></div>
              <Image alt="im1" src="/img/im1.png" width={200} height={200} />
              <div className={styles.separador2}></div>
              <div className={styles.text_card}>
                <p>Gestion de Residuos</p>
                <p>Limpieza Industrial y Corporativa</p>
                <p>Conservacion de Edificios</p>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.separador3}></div>
          </div>

          <div className={styles.section3}>
            <div className={styles.somos}>
              <h2>
                Somos una empresa especializada <br /> en servicios integrales
              </h2>
              <h4>
                Estamos comprometidos con la mejora continua de los procesos y
                de <br /> nuestri Sistema de Gestion Integral
              </h4>
            </div>
            <Link href="#">
              <button>CONTÁCTANOS</button>
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
                <h4>Nosotros</h4>
                <h2>Nuestra Misión</h2>
                <p>
                  Ofrecer servicios integrales de administración de limpieza,
                  mantenimiento en general y administración de residuos de
                  manejo especial y peligrosos, conforme al marco regulatorio y
                  requerimientos del cliente.
                </p>
              </div>
              <div className={styles.content_right_text}>
                <h2>Nuestra Visión</h2>
                <p>
                  Ser la mejor opción en los servicios de limpieza,
                  mantenimiento en general y administración de residuos,
                  generando confianza a nuestros clientes.
                </p>
              </div>
              <div className={styles.content_right_text}>
                <h2>Valores</h2>
                <li>Integridad</li>
                <li>Calidad</li>
                <li>Respeto y equidad</li>
                <li>Enfoque al cliente y a las excelencia</li>
              </div>
              <div className={styles.content_right_boton}>
                <Link href="#">
                  <button>VER MÁS</button>
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
              <p>CLIENTES</p>
              <h1>Lo que dicen los clientes</h1>
            </div>
            <div className={styles.clients_card}>
              <div className={styles.clients_card1}>
                <p>
                  “Vestibulum sollicitudin nunc in eros a justo facilisis
                  rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet
                  nibh tortor mauris condimentum nibh ”
                </p>
                <h3>JONT KOOK</h3>
                <p>CEO lacinia faucibus risus</p>
              </div>
              <div className={styles.clients_card1}>
                <p>
                  “Vestibulum sollicitudin nunc in eros a justo facilisis
                  rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet
                  nibh tortor mauris condimentum nibh ”
                </p>
                <h3>JONT KOOK</h3>
                <p>CEO lacinia faucibus risus</p>
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
                <p>ESTAMOS A TU SERVICIO</p>
                <h1>Contáctanos</h1>
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
                  <button type="submit">ENVIAR</button>
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
                <h4>Contacto</h4>
                <p>
                  London Oxford Street, 012 United <br /> Kingdom.
                </p>
                <p>+032 3456 7890</p>
                <p>Business@moontheme.net</p>
              </div>
            </div>
            <div className={styles.footer_right}>
              <h4>Email Newsletters</h4>
              <p>Suscríbete al Newsleter</p>
              <div className={styles.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <button type="submit">SUSCRÍBETE</button>
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
              <a href="https://www.twitter.com/" target="_blank">
                <Image
                  alt="twitter"
                  src="/img/gorjeo.png"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  alt="instagram"
                  src="/img/instagram.png"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
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
