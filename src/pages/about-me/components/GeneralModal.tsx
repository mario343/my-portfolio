/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const Arrow = () => {
  return <Text color="red">►</Text>;
};

const GeneralModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);
  return (
    <>
      <Button
        style={{
          padding: 0,
          border: 0,
          color: "black",
          background: "none",
        }}
        onClick={onOpen}
        // _hover={{ textDecoration: "underline" }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Text fontSize="22px">
          {hover ? (
            <Flex>
              <Text color="#c43a1d">►</Text> GENERAL INFO
            </Flex>
          ) : (
            "GENERAL INFO"
          )}
        </Text>
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="#ffe8c6">
          <ModalHeader>About me</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign="justify" mx="5px">
            Hi! I'm Mario Wilk (actually Mariusz), and I'm future frontend
            developer. For daily basis I use React, Typescript, NextJS and many
            other popular technologies. Besides that, I enjoy numerical methods
            and data analysis, but for now my focus is on the web development.
            On daily basis I study at Jagiellonian University in Cracow. For
            more crucial info, check my{" "}
            <a
              href="https://www.linkedin.com/in/mariusz-wilk-934b58184/"
              style={{ color: "blue" }}
            >
              LinkedIn
            </a>{" "}
            page.
            <br />
            <br />
            This site was made as a project for web development course at my
            University. It's not a beauty, many corrections are up to be made.
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={onClose}
              bg="#48a810"
              color="white"
              _hover={{ bg: "#ffe8c6", color: "#48a810" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { GeneralModal };
