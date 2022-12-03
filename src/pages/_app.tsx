import type { AppProps } from "next/app";

import * as React from "react";
import { theme } from "../providers/ui/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../providers/ui/components/fonts";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
