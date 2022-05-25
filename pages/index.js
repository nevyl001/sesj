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
       <div className={styles.section}> 
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
             <div className={styles.separador3}></div>
             </div>
              
             <div className={styles.section3}>
                  <div className={styles.somos}>
                      <h2>Somos una empresa especializada <br/> en servicios integrales</h2>
                      <h4>Estamos comprometidos con la mejora continua de los procesos y de <br/> nuestri Sistema de Gestion Integral</h4>
                  </div>
                <Link href="#">
                <button>CONTACTANOS</button>
                </Link>
             </div>

             </div>

             <div className={styles.section4}>
             <div className={styles.content_left}>
                <div className={styles.img}>
                  <Image
                    alt="im1"
                    src="/img/manwork.jpg"
                    width={600}
                    height={500}
                    />
                </div>
             </div>
             <div className={styles.content_right}>
                <div className={styles.content_right_text}>
               <h4>Nosotros</h4>
               <h2>Nuestra Mision</h2>
               <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen</p>
               </div>
               <div className={styles.content_right_text}>
               <h4>Nosotros</h4>
               <h2>Nuestra Mision</h2>
               <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen</p>
               </div>
               <div className={styles.content_right_text}>
               <h4>Nosotros</h4>
               <h2>Nuestra Mision</h2>
               <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen</p>
               </div>
             </div>

             



       </div>
      

 <div className={styles.clients}>
  <div className={styles.clients_inner}>
       <div className={styles.clients_text}> 
          <p>CLIENTES</p>
          <h1>Lo que dicen los clientes</h1>
       </div>
       <div className={styles.clients_card}>
          <div className={styles.clients_card1}>
            <p>“Vestibulum sollicitudin nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh tortor mauris condimentum nibh ”</p>
            <h3>JONT KOOK</h3> 
            <p>CEO lacinia faucibus risus</p> 
          </div>
          <div className={styles.clients_card1}>
            <p>“Vestibulum sollicitudin nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh tortor mauris condimentum nibh ”</p>
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
    </main>
    
  );
}
