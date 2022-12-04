/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  color,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import QuestionBlock from "../assets/question.gif";
import Image from "next/image";
import Mario from "../assets/mario.gif";
import Canada from "../assets/canada.png";
import Poland from "../assets/poland.png";
import { useEffect, useState } from "react";
import Grass from "../assets/grass.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [timeState, setTimeState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTimeState(new Date()), 30000);
  }, []);
  const [hoverGitHub, setHoverGithub] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverInbox, setHoverInbox] = useState(false);
  return (
    <Stack
      bg="#0063bd"
      w="100%"
      h="100vh"
      justify="flex-end"
      //  flexDir={["column", "column", "column", "column", "column", "column"]}
    >
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
      <Flex
        pt={[150, 150, 100, 150, 0, 0]}
        w={[300, 300, 500, 500, 500, 500]}
        justify="space-between"
        alignSelf="center"
        flexDir={["column", "column", "row", "row", "row", "row"]}
        align="center"
      >
        <Tooltip label="about me">
          <Link href="/about-me">
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
          </Link>
        </Tooltip>
        <Tooltip label="?">
          <Link href="/mystery">
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
          </Link>
        </Tooltip>
        <Tooltip label="?">
          <Link href="/mystery">
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
          </Link>
        </Tooltip>
      </Flex>

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
            <Flex
              fontSize="32px"
              justify="space-between"
              w="100%"
              alignSelf="center"
            >
              <Link
                href="https://github.com/mario343"
                isExternal
                onMouseOver={() => setHoverGithub(true)}
                onMouseLeave={() => setHoverGithub(false)}
              >
                <Tooltip
                  label="Check out my Github profile"
                  bg="white"
                  color="black"
                  openDelay={250}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={hoverGitHub ? { color: "#f8d820" } : {}}
                  />
                </Tooltip>
              </Link>

              <Link
                href="mailto:mariowilk999@gmail.com"
                isExternal
                onMouseOver={() => setHoverInbox(true)}
                onMouseLeave={() => setHoverInbox(false)}
              >
                <Tooltip
                  label="Send me an email"
                  bg="white"
                  color="black"
                  openDelay={250}
                >
                  <FontAwesomeIcon
                    icon={faInbox}
                    style={hoverInbox ? { color: "#f8d820" } : {}}
                  />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mariusz-wilk-934b58184/"
                isExternal
                onMouseOver={() => setHoverLinkedin(true)}
                onMouseLeave={() => setHoverLinkedin(false)}
              >
                <Tooltip
                  label="Add me on Linkedin"
                  bg="white"
                  color="black"
                  openDelay={250}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={hoverLinkedin ? { color: "#f8d820" } : {}}
                  />
                </Tooltip>
              </Link>
            </Flex>
          </Stack>
          <Flex
            display={["none", "none", "none", "none", "none", "flex"]}
            bg="blue"
          >
            <Image src={Grass} alt="grass" />
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}
