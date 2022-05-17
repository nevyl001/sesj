import Head from "next/head";
import Menu from "./Menu";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/img/#" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>SESJ</title>
        <meta
        //   name="description"
        //   content="Ubicado en el corazón del Pedregal, Sud 777 es un restaurante que
        //         honra la tradición de una zona diseñada por destacados urbanistas
        //         y arquitectos"
        />
        <meta property="og:image" content="/img/#"></meta>
        <meta property="og:title" content="SESJ"></meta>
        <meta
          property="og:description"
          //   content="Ubicado en el corazón del Pedregal, Sud 777 es un restaurante que
          //         honra la tradición de una zona diseñada por destacados urbanistas
          //         y arquitectos"
        ></meta>
        {/* <meta property="og:url" content="https://sud777.com.mx/"></meta>
        <meta property="og:type" content="website" /> */}
      </Head>
      <Menu />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
