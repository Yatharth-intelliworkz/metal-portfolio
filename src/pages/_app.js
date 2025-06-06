/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/preloader.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Metal ERP Software | DataNote MetalERP for Steel & Coil Processing</title>
        <link rel="icon" href="https://www.metalerp.com/public/front/images/Favicon.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="pace" strategy="beforeInteractive" src="/js/pace.min.js"></Script>
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" id="splitting" src="/js/splitting.min.js"></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script id="isotope" strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
      <Script id="wowInit" strategy="lazyOnload" src="/js/wowInit.js"></Script>
    </>
  );
}

export default MyApp;
