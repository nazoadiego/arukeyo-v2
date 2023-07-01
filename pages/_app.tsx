import "@/styles/globals.css";
import Head from "next/head";
import Meta from "../components/Meta";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arukeyo - Nzoa's Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <Meta />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
