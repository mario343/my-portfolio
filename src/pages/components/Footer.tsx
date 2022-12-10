import { Flex, Stack } from "@chakra-ui/react";

import Image from "next/image";
import Mario from "../../assets/mario.gif";
import Grass from "../../assets/grass.png";
import { SocialsLinks } from "./SocialsLinks";

const Footer = () => {
  return (
    <Flex w="100%" h="575px" align="flex-end">
      <Flex display={["none", "none", "none", "none", "none", "flex"]}>
        <Image src={Mario} alt="mario" />
      </Flex>
      <Stack
        align="flex-end"
        color="white"
        justify="center"
        w={["100%", "100%", "100%", "100%", "100%", "auto"]}
      >
        <Stack
          mr="25px"
          w="130px"
          justifySelf="center"
          alignSelf={[
            "center",
            "center",
            "center",
            "center",
            "center",
            "flex-end",
          ]}
        >
          <SocialsLinks />
        </Stack>
        <Flex
          display={["none", "none", "none", "none", "none", "flex"]}
          bg="blue"
        >
          <Image src={Grass} alt="grass" />
        </Flex>
      </Stack>
    </Flex>
  );
};

export { Footer };
