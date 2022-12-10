/* eslint-disable react/no-unescaped-entities */
import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Canada from "../../assets/canada.png";
import Poland from "../../assets/poland.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [timeState, setTimeState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTimeState(new Date()), 30000);
  }, []);
  return (
    <Flex
      color="white"
      fontSize="32px"
      justify="space-around"
      h="200px"
      mt="50px"
      fontWeight="800"
      display={["none", "none", "none", "flex", "flex", "flex"]}
    >
      <Stack spacing={-3} fontStyle="italic">
        <Text>Hello</Text>
        <Text>It's-a me, Mario!</Text>
        <Text>and I'm a fronted</Text>
        <Text>developer </Text>
      </Stack>

      <Stack spacing={-3}>
        <Text>WORLD</Text>
        <Flex align="center" justify="center">
          <Image src={Poland} alt="polish-flag" />
          <Text>-</Text>
          <Link
            href="https://en.wikipedia.org/wiki/Canuck_the_Crow#:~:text=Canuck%20the%20Crow%20(hatched%202015,and%20riding%20the%20Vancouver%20SkyTrain."
            isExternal
          >
            <Image src={Canada} alt="canadian-flag" />
          </Link>
        </Flex>
      </Stack>
      <Stack spacing={-3} align="center">
        <Text>TIME</Text>
        <Text>
          {timeState.toLocaleTimeString("pl-PL", {
            hour: "numeric",
            minute: "numeric",
          })}
        </Text>
      </Stack>
    </Flex>
  );
};

export { Header };
