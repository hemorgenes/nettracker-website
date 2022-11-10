const title = "Nettracker - Soluções em Tecnologia";
const description =
  "Fundada em 2016, a Nettracker surgiu através da visão de compreender as reais necessidades do mercado de segurança veicular com o uso dos rastreadores e eletrônicos.";

export const SEO = {
  title,
  description,
  canonical: "https://nettracker.com.br",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nettracker.com.br",
    title,
    description,
    images: [
      {
        url: "/thumb.png",
        alt: title,
        width: 1000,
        height: 1000,
      },
    ],
  },
};
