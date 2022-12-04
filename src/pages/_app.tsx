import "@fontsource/mukta/400.css";
import "@fontsource/mukta/800.css";
import "@fontsource/open-sans/700.css";
import type { AppProps } from "next/app";

import * as React from "react";
import theme from "../providers/ui/theme";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
