import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: ["id_ID", "en_US"],
            site_name: "programmerHood",
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
