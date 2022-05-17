import Link from "next/link";
import styles from "./index.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
             <div className={styles.header}>
                <h1>
                  Somos empresa lider <br />
                    en limpieza, mantenimiento
                <br />y administracion de residuos.
                </h1>
                <p>
                Estamos comprometidos con el cumplimiento legal en materia ambiental,
                seguridad y calidad para la <br />
                proteccion del medio ambiente, de nuestros colaboradores y sociedad.
                </p>
                <Link href="#">
                <button>CONTACTANOS</button>
                </Link>
                </div>
       </div>

       <div className={styles.section1}>
            <h4>LAS MEJORES SOLUCIONES</h4>
            <h2>Nuestros Servicios</h2>
         </div>
          <div className={styles.section_card}>
            <div className={styles.section_cards}>
            <h5>Servicios Especializados</h5>
                  <div className={styles.separador}></div>
                  <Image
                    alt="im1"
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
              <h5>Servicios Especializados</h5>
                  <div className={styles.separador}></div>
                  <Image
                    alt="im1"
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
                  <h5>Servicios Especializados</h5>
                  <div className={styles.separador}></div>
                  <Image
                    alt="im1"
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
             </div>

             <div className={styles.section2}>

             <div className={styles.somos}>
                <h2>Somos una empresa especializada <br/> en servicios integrales</h2>
                <h4>Estamos comprometidos con la mejora continua de los procesos y de <br/> nuestri Sistema de Gestion Integral</h4>
             </div>
             <Link href="#">
                <button>CONTACTANOS</button>
                </Link>


             </div>
      


    </main>
    
  );
}
