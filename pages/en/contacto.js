import Link from "next/link";
import styles from "../contacto.module.css";
import Image from "next/image";
import Button from "../../components/UI/Button";
import Paragraph from "../../components/UI/Paragraph";
import Subtitle from "../../components/UI/Subtitle";
import Title from "../../components/UI/Title";
import { Fragment, useEffect, useRef, useState } from "react";
import MenuEn from "../../components/Layout/Menu-en";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_95y2ufq",
        "template_qwgm1fo",
        form.current,
        "1Dg3aFKjyBpMhLfFG"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <MenuEn />
      <div className={styles.head}>
        <div className={styles.container}>
          <div className={styles.header_ti}>
            <Title size="big" color="white" align="left">
              Contact
            </Title>
          </div>
          {/* ESTE ES TU FLEX */}
          <div className={styles.box_flex}>
            <div className={styles.box_flex_left}>
              <Paragraph color="white">Information</Paragraph>
              <Title size="small" color="white" align="left">
                Address
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
              <Paragraph color="white">Contact</Paragraph>
              <Title size="small" color="white" align="left">
                Contact us
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
                    <Button type="submit">Send</Button>
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
