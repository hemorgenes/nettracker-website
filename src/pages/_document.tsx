import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/miniatura.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta property="og:image" content="/thumb.png" />

        <meta name="title" content="Nettracker - Soluções em Tecnologia" />
        <meta
          name="description"
          content="Fundada em 2016, a Nettracker surgiu através da visão de compreender as reais necessidades do mercado de segurança veicular com o uso dos rastreadores e eletrônicos."
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
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
