import { type ThemeConfig, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { Button } from "./components/button";
import { Input } from "./components/input";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// const fonts = {
//   body: `'Geomanist', sans-serif`,
//   heading: `'Geomanist', sans-serif`,
// };

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Mukta', sans-serif`,
    body: `'Mukta', sans-serif`,
  },

  components: {
    Button,
    Input,
  },
});

export default theme;
