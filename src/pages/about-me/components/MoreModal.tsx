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

const MoreModal = () => {
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
              <Text color="#c43a1d">►</Text> MORE
            </Flex>
          ) : (
            "MORE"
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
          <ModalHeader>More</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign="justify" mx="5px">
            In the free time I enjoy playing hockey <span> 🏒 </span>
            <br />
            and running
            <span> 🏃. </span>
            <br />
            <br />
            You can find me on Mini Metro leaderboards <br /> but also on Super
            Mario Bros. Any%{" "}
            <a
              href="https://www.speedrun.com/smb1?h=Any-NTSC&x=w20p0zkn-onvvdymn.013zwgxq"
              style={{ color: "red" }}
            >
              speedrun{" "}
            </a>
            ranking.{" "}
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

export { MoreModal };
