import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps, ...appProps }) {
  if ([`/contacto`].includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

export default MyApp;
