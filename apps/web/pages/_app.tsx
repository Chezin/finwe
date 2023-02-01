import "../globals.css";
import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import { ChakraProvider, extendTheme } from "ui";
import colors from "../customized_ui/colors";

/* eslint-disable global-require */
require("../mocks");
/* eslint-enable global-require */

const theme = extendTheme({ colors })

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

    return (
      <>
        <GlobalStyles />
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
}
