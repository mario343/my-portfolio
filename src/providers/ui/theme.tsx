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

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Heading Font Name', sans-serif`,
    body: `'Body Font Name', sans-serif`,
  },

  components: {
    Button,
    Input,
  },
});
