import "../globals.css";
import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import { ChakraProvider } from "ui";

/* eslint-disable global-require */
require("../mocks");
/* eslint-enable global-require */

// This default export is required in a new `pages/_app.js` file.
export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

    return (
      <>
        <GlobalStyles />
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
}
