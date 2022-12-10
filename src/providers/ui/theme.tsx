import { type ThemeConfig, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Mukta', sans-serif`,
    body: `'Mukta', sans-serif`,
  },
});

export default theme;
