import Link from "next/link";
import styles from "../nosotros.module.css";
import Image from "next/image";
import Button from "../../components/UI/Button";
import Paragraph from "../../components/UI/Paragraph";
import Subtitle from "../../components/UI/Subtitle";
import Title from "../../components/UI/Title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useRef, useState } from "react";
import MenuEn from "../../components/Layout/Menu-en";

export default function Home() {
  const showHandler = (item) => {
    const itemDiv = document.getElementById(`item${item}`);
    const symbolOpen = document.getElementById(`symbolopen${item}`);
    const symbolClose = document.getElementById(`symbolclose${item}`);
    const activeClass = `${styles.active}`;
    if (itemDiv.classList.contains(`${styles.active}`)) {
      itemDiv.classList.remove(activeClass);
      symbolOpen.style.display = "block";
      symbolClose.style.display = "none";
    } else {
      itemDiv.classList.add(activeClass);
      symbolOpen.style.display = "none";
      symbolClose.style.display = "block";
    }
  };

  return (
    <main>
      <MenuEn />
      <div className={styles.head}>
        <div className="container">
          <div className={styles.header}>
            <Title size="big" color="black" align="left">
              Nosotros
            </Title>
            <Paragraph color="black">
              Founded in 1985, Servicios Especializados Silviano Julio S.A. of
              C.V. began recycling solvents from automotive plants in the state
              of Puebla. Over time, new eco-focused processes and specialized
              services were developed and implemented, such as the Integral
              Management of Industrial Waste, and other industrial, janitorial,
              and logistical services.
            </Paragraph>
            <Paragraph color="black">
              We are committed to complying with and exceeding all
              environmental, safety, and quality legislations for the protection
              of the environment, our employees, and society. SESJ is also proud
              to promote the ongoing transformation of our company and work
              environment, with a reputable and highly-competitive team that is
              committed to promoting employee development and exceptional
              growth.
            </Paragraph>
          </div>
          <div className={styles.header_down}>
            <div className={styles.header_item1}>
              <div className={styles.header_ima}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/grupo913.png"
                  width={90}
                  height={134}
                />
              </div>
              <div className={styles.header_text}>
                <Subtitle color="black">
                  SESJ has more than 30 years of experience.
                </Subtitle>
                <Paragraph color="black">
                  Thanks to that experience, we are able to provide highly
                  effective value-added solutions that are tailored to the
                  unique needs of our customers.
                </Paragraph>
              </div>
            </div>
            <div className={styles.header_item1}>
              <div className={styles.header_ima}>
                <Image
                  alt="Servicios Especializados"
                  src="/img/grupo914.png"
                  width={154}
                  height={134}
                />
              </div>
              <div className={styles.header_text}>
                <Subtitle color="black">
                  SESJ philosophy is based on continuous improvement of our
                  operations.
                </Subtitle>
                <Paragraph color="black">
                  SESJ focuses on the quality and safety of our processes in
                  order to guarantee exceptional services and customer
                  satisfaction.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#39B54A"
              fillOpacity="1"
              d="M0,64L120,101.3C240,139,480,213,720,229.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.section}>
        <div className="container">
          <div className={styles.nuestro}>
            <div className={styles.section1_title}>
              <Title size="medium" color="white" align="left">
                Our Team
              </Title>
            </div>

            <div className={styles.carousel}>
              <Carousel
                showStatus={false}
                autoPlay={true}
                showArrows={true}
                showThumbs={false}
                showIndicators={true}
                infiniteLoop={true}
              >
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/ANGELES.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        Angeles Sánchez
                      </Title>
                      <Subtitle color="black">Cleaning Coordinator</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “My goal is to achieve optimal results for both the
                        customer and the company. SESJ is a very important part
                        of my life; I have obtained great achievements and
                        satisfaction thanks to the trust that SESJ has given me.
                        Belonging to the SESJ team, a well-established company
                        with well-defined values and goals, makes me feel very
                        proud”
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/GERMAN.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        German Flores
                      </Title>
                      <Subtitle color="black">Cleaning Manager</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “SESJ has always represented a challenge in all areas of
                        my life, since the demands of everyday life always bring
                        out the best in me. At SESJ, I continue to learn and
                        grow as a person, and I have realized that teamwork is
                        the path to success”
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/HAYDEE.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        Haydee Vazquez
                      </Title>
                      <Subtitle color="black">Sales Specialist</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “I am proud to belong to the SESJ team, since it has
                        allowed me to develop as a professional without
                        neglecting my role as a mother. My goal is to provide
                        the best solution to suit the needs of our customers.”
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/marosa.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        Maria del Rosario Sánchez Allende
                      </Title>
                      <Subtitle color="black">Operations Manager</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “SESJ for me is a company that has helped me discover
                        skills and aptitudes that I did not have before, in
                        addition to encouraging my professional and personal
                        growth. My role as manager is to provide excellent
                        services.”
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section1_item_1}>
                    <Image
                      alt="Servicios Especializados"
                      src="/img/Empleados/OSWALDO.jpg"
                      width={3840}
                      height={2160}
                    />
                  </div>
                  <div className={styles.section1_item_2}>
                    <div className={styles.section1_item_2_text}>
                      <Title size="small" color="green1" align="left">
                        Oswaldo Sarmiento
                      </Title>
                      <Subtitle color="black">Purchasing Specialist</Subtitle>
                      <div className={styles.line}>
                        <div className={styles.separador}></div>
                      </div>
                      <Paragraph color="black">
                        “In SESJ, I have evolved in all aspects, and I have
                        found a place where my work makes a difference. In my
                        ten years working in the company, I have been able to
                        provide solutions to customer problems.”
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className="container">
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
                <Subtitle color="black">About Us</Subtitle>
                <Title size="small" color="black" align="left">
                  Our mission
                </Title>
                <Paragraph color="black">
                  Offer the highest quality of comprehensive cleaning management
                  services, general maintenance, and the management and special
                  handling of hazardous waste, in accordance with the regulatory
                  framework and customer requirements.
                </Paragraph>
              </div>
              <div className={styles.content_right_text}>
                <Title size="small" color="black" align="left">
                  Our vision
                </Title>
                <Paragraph color="black">
                  To always be the best option for cleaning services, general
                  maintenance, and waste management for the peace of mind of our
                  clients, by providing robust, tailored, and efficient
                  solutions.
                </Paragraph>
              </div>
              <div className={styles.content_right_text}>
                <Title size="small" color="black" align="left">
                  Values
                </Title>
                <li>Integrity</li>
                <li>Quality</li>
                <li>Respect and equity</li>
                <li>Focus on the customer, and excellence</li>
                <li>Efficiency</li>
              </div>
            </div>
          </div>
          <div className={styles.content4_down}>
            <div className={styles.content4_down_title}>
              <Title size="small" color="black" align="left">
                Policies
              </Title>
            </div>
            <div className={styles.content4_down_text}>
              <Paragraph color="black">
                We have a highly competitive team that is committed to quality,
                environmental protection, pollution prevention, and the
                sustainable use of resources to improve environmental
                performance.
              </Paragraph>
              <Paragraph color="black">
                We are committed to the continuous improvement of our operations
                and our Integral Management System. We are proud to be in full
                compliance with legislative and all other applicable
                requirements.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <div className="container">
          <div className={styles.calidad}>
            <div className={styles.clients_text}>
              <Title size="small" color="white" align="left">
                Quality and Environmental Objectives
              </Title>
              <Subtitle color="white">
                The Board of SESJ has established the following objectives of
                the Integral Management System:
              </Subtitle>
              <Paragraph color="white">
                ✓ Ensure the financial and environmental sustainability of the
                projects.
                <br />
                ✓ Improve the quality, safety, and environmental impact of
                services.
                <br />✓ Develop and train employees to provide the best customer
                service.
              </Paragraph>
            </div>
            <div className={styles.clients_img}>
              <video controls style={{ width: "100%" }}>
                <source src="/img/video2.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section6}>
        <div className="container">
          <div className={styles.certificacion}>
            <div className={styles.cert_title}>
              <Title size="medium" color="black" align="left">
                Certifications
              </Title>
            </div>
            <div className={styles.cert_sub}>
              <Subtitle color="black">
                Quality / Environmental / Safety
              </Subtitle>
            </div>
            <div className={styles.cert_text}>
              <Paragraph color="black">
                SESJ is proud to be certified in the following standards:
              </Paragraph>
            </div>
            <div className={styles.box_acordion}>
              <div className={styles.box_acordion_item} id="item1">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 1)}
                >
                  <div className={styles.title}>ISO 9001:2015</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">Quality Management System</Paragraph>
                </div>
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen1">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose1">
                    -
                  </div>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item2">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 2)}
                >
                  <div className={styles.title}>ISO 14001:2015</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    Environmental Management System.
                  </Paragraph>
                </div>
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen2">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose2">
                    -
                  </div>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item3">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 3)}
                >
                  <div className={styles.title}>REPSE</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    We are registered in the REPSE (Registry of Providers of
                    Specialized Services and Specialized Works) of the STPS
                    (Secretariat of Labor and Social Welfare).
                  </Paragraph>
                </div>
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen3">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose3">
                    -
                  </div>
                </div>
              </div>
              <div className={styles.box_acordion_item} id="item4">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 4)}
                >
                  <div className={styles.title}>ISO 45001:2018 </div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    Occupational Health and Safety Management System.
                  </Paragraph>
                </div>
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen4">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose4">
                    -
                  </div>
                </div>
              </div>
              {/* <div className={styles.box_acordion_item} id="item5">
                <div
                  className={styles.box_acordion_item_trigger}
                  onClick={showHandler.bind({}, 5)}
                >
                  <div className={styles.title}>PASST</div>
                </div>
                <div className={styles.box_acordion_item_content}>
                  <Paragraph color="gray">
                    Reconocimiento de “Empresa Segura” por parte de la STPS
                    (Secretaría del Trabajo y Previsión Social) al implementar
                    el PASST (Programa de Autogestión en Seguridad y Salud en el
                    Trabajo) en nuestra empresa.
                  </Paragraph>
                </div>
                <div className={styles.symbols}>
                  <div className={styles.symbol_1} id="symbolopen5">
                    +
                  </div>
                  <div className={styles.symbol_2} id="symbolclose5">
                    -
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
