/* eslint-disable react/no-unescaped-entities */
import {
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
    <Stack bg="#0063bd" w="100%" h="100vh" justify="space-between">
      <Flex
        color="white"
        fontSize="32px"
        justify="space-around"
        h="200px"
        mt="50px"
        fontWeight="800"
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
      <Flex w="500px" justify="space-between" alignSelf="center">
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

      <Flex w="100%" h="525px" align="flex-end">
        <Image src={Mario} alt="mario" />
        <Stack align="flex-end" color="white">
          <Stack mr="25px" w="130px">
            <Text fontSize="25px"></Text>
            <Flex fontSize="32px" justify="space-between">
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
          <Flex h="75px">
            <Image src={Grass} alt="grass" />
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}
