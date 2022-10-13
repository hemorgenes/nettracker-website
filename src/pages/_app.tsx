import { DefaultSeo } from "next-seo";
import { SEO } from "../../next-seo-config";

import type { AppProps } from "next/app";
import "../styles/home.css";
import "../styles/globals.css";
import "../styles/contact.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
