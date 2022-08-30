import Link from "next/link";
import styles from "./contacto.module.css";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import { Fragment, useRef } from "react";
import emailjs from "emailjs-com";

export default function Home() {
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
    <Fragment>
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
                  7 oriente 1002, Amozoc, Puebla, México.
                </Paragraph>
                <Paragraph color="white">+52 (222) 271 4712</Paragraph>
                <Paragraph color="white">ventas@serviciossesj.com.mx</Paragraph>
              </div>
            </div>
            <div className={styles.box_flex_right}>
              <Paragraph color="white">CONTACTO</Paragraph>
              <Title size="small" color="white" align="left">
                Contáctanos
              </Title>
              <div className={styles.form}>
                <form onSubmit={sendEmail} ref={form}>
                  <div className={styles.input_box_full}>
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className={styles.input_box_half}>
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className={styles.input_box_half}>
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <div className={styles.input_box_full}>
                    <textarea
                      name="message"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className={styles.btnform}>
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
