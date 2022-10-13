import Head from "next/head";
import { ReactNode } from "react";
import { NextSeo } from "next-seo";

type PageProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

export default function Page({
  title,
  description,
  children,
  path,
}: PageProps) {
  const url = `https://nettracker.com.br/${path}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="Content-type" content="text/html" charSet="utf-8" />
      </Head>

      {children}
    </>
  );
}
