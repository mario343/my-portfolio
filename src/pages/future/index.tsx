import { Box, Link, Stack, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import Mario from "../../assets/smb3mario.gif";

export default function Future() {
  return (
    <Stack
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      bg="white"
      fontSize="22px"
      spacing={10}
    >
      <Text> Nothing to be found here</Text>
      <Tooltip label="Click here to get back to home page">
        <Box w="83px" h="83px">
          <Link href="/">
            <Image src={Mario} alt="mariowalkin'" />
          </Link>
        </Box>
      </Tooltip>
      <Text> Check soon for more!</Text>
    </Stack>
  );
}
