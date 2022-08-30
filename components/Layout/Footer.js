import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hola");

    emailjs
      .sendForm(
        "vannelo",
        "template_k0c39kb",
        form.current,
        "GWoEfazLvcexVN1vn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
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
                <form onSubmit={sendEmail} ref={form}>
                  <div className={styles.nombre}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className={styles.inps}>
                    <div className={styles.tel}>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
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
                    <button type="submit">Enviar</button>
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
            <div className={styles.footer_img}>
              <Image
                alt="footer"
                src="/img/footer.png"
                width={80}
                height={83}
              />
            </div>
            <div className={styles.flex_footer}>
              <div className={styles.footer_left}>
                <div className={styles.footer_text}>
                  <Subtitle color="black">Contacto</Subtitle>
                  <Paragraph color="black">
                    7 oriente 1002, Amozoc, Puebla, México.
                  </Paragraph>
                  <Paragraph color="black">+52 (222) 271 4712</Paragraph>
                  <Paragraph color="black">
                    ventas@serviciossesj.com.mx
                  </Paragraph>
                </div>
              </div>
              {/* <div className={styles.footer_right}>
                <Subtitle color="black">Email Newsletters</Subtitle>
                <Paragraph color="black">Suscríbete al Newsleter</Paragraph>
                <div className={styles.newsletter_input}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <button>SUSCRÍBETE</button>
                </div>
                <div className={styles.email}></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
