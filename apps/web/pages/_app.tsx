import "../globals.css";
import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";

/* eslint-disable global-require */
require("../mocks");
/* eslint-enable global-require */

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

    return (
      <>
        <GlobalStyles />
          <Component {...pageProps} />
      </>
    );
}
