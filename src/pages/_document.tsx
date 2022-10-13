import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/miniatura.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta property="og:image" content="/thumb.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nettracker.com.br/" />
        <meta
          property="twitter:title"
          content="Nettracker - Soluções em tecnologia"
        />
        <meta
          property="twitter:description"
          content="Empresa qualificadada em instalação de rastreadores, vendas e remanufatura"
        />
        <meta property="twitter:image" content="/thumb.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
