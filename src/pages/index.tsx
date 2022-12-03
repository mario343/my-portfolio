import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import QuestionBlock from "../assets/clouds/question.gif";
import Image from "next/image";
import Mario from "../assets/clouds/marioend.gif";
import Grass from "../assets/clouds/grass.png";
import Canada from "../assets/clouds/canadasmall.png";
import Poland from "../assets/clouds/polandsmall.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeState, setTimeState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTimeState(new Date()), 30000);
  }, []);

  return (
    <Stack bg="#0063bd" w="100%" h="100vh" justify="space-between">
      <Flex
        color="white"
        fontSize="32px"
        justify="space-around"
        mb="150px"
        mt="50px"
        fontWeight="800"
      >
        <Stack spacing={-3}>
          <Text>MARIO</Text>
          <Text>000020</Text>
        </Stack>
        <Stack>
          <Text> </Text>
        </Stack>
        <Stack spacing={-3}>
          <Text>WORLD</Text>
          <Flex align="center" justify="center">
            <Image src={Poland} alt="polish-flag" />
            <Text>-</Text>
            <Image src={Canada} alt="canadian-flag" />
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
      <Flex
        w="500px"
        justify="space-between"
        // h="300px"

        alignSelf="center"
        //justifySelf="flex-end"
      >
        <Button
          w="100px"
          h="100px"
          bg="#0063bd"
          _hover={{ bg: "#59aae5" }}
          _active={{ bg: "#0063bd" }}
          borderRadius="2xl"
        >
          <Image src={QuestionBlock} alt="question" />
        </Button>
        <Button
          w="100px"
          h="100px"
          bg="#0063bd"
          _hover={{ bg: "#59aae5" }}
          _active={{ bg: "#0063bd" }}
          borderRadius="2xl"
        >
          <Image src={QuestionBlock} alt="question" />
        </Button>
        <Button
          w="100px"
          h="100px"
          bg="#0063bd"
          _hover={{ bg: "#59aae5" }}
          _active={{ bg: "#0063bd" }}
          borderRadius="2xl"
        >
          <Image src={QuestionBlock} alt="question" />
        </Button>
      </Flex>
      <Flex
        w="100%"
        h="525px"
        //alignSelf="flex-start"
        //justify="flex-start"
        //justifySelf="flex-end"
        //justifyItems="flex-end"
        align="flex-end"
      >
        <Image src={Mario} alt="mario" />
        <Flex h="75px">
          <Image src={Grass} alt="grass" />
        </Flex>
        <Flex h="75px">
          <Image src={Grass} alt="grass" />
        </Flex>
        <Flex h="75px">
          <Image src={Grass} alt="grass" />
        </Flex>
      </Flex>
    </Stack>
  );
}
