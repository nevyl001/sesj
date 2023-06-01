import Head from "next/head";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/img/icon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>
          SESJ - Estamos comprometidos con el cumplimiento legal en materia
          ambiental, seguridad y calidad para la proteccion del medio ambiente,
          de nuestros colaboradores y sociedad.
        </title>
        <meta
          name="description"
          content="Estamos comprometidos con el cumplimiento legal en materia ambiental, seguridad y calidad para la proteccion del medio ambiente, de nuestros colaboradores y sociedad."
        />
        <meta property="og:image" content="/img/meta.png"></meta>
        <meta
          property="og:title"
          content="SESJ -  Estamos comprometidos con el cumplimiento legal en materia ambiental, seguridad y calidad para la proteccion del medio ambiente, de nuestros colaboradores y sociedad."
        ></meta>
        <meta
          property="og:description"
          content="Estamos comprometidos con el cumplimiento legal en materia ambiental, seguridad y calidad para la proteccion del medio ambiente, de nuestros colaboradores y sociedad."
        ></meta>
      </Head>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
