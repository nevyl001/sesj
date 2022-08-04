import Link from "next/link";
import styles from "./contacto.module.css";
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
              <div className={styles.form}>
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
                  <textarea name="text" placeholder="Your message"></textarea>
                </div>
              </div>
              <div className={styles.btnform}>
                <Link href="#">
                  <Button>CONTÁCTANOS</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
