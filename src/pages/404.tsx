import { Box, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Mario from "../assets/mariodying.gif";
import Image from "next/image";
import { useState } from "react";

export default function FourOhFour() {
  const [hover, setHover] = useState(false);
  return (
    <Stack w="100%" h="100vh" align="center" justify="center" fontSize="22px">
      <Box w="300px" h="300px">
        <Image src={Mario} alt="mariodyin'" />
      </Box>
      <Text>Sorry but this site does not exist.</Text>
      <Text>
        Take me{" "}
        <Link
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          href="/"
          style={
            hover
              ? {
                  color: "#887000",
                  fontWeight: "800",
                }
              : {}
          }
        >
          home
        </Link>{" "}
        🏠.
      </Text>
    </Stack>
  );
}
