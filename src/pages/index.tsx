import { Box, Flex, Stack, Image } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Flex bg="#0060b7" w="100%" h="100vh" justifyContent="center">
      <Image
        alt="cloud"
        alignSelf="flex-end"
        justifySelf="flex-end"
        w="96px"
        h="120px"
        data-file-width="12px"
        data-file-height="15px"
        decoding="async"
      />
    </Flex>
  );
}
