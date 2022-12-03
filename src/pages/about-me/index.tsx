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
import Background from "../../assets/smb3choose.png";
import { GeneralModal } from "./components/GeneralModal";
import { MoreModal } from "./components/MoreModal";

export default function AboutMe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);

  return (
    <Stack
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      fontSize="22px"
      style={{
        backgroundImage: `url("https://images7.alphacoders.com/333/333223.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack mt="300px" align="center" spacing={7} fontWeight="800">
        <GeneralModal />
        <MoreModal />

        <Link
          href="/"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          {hover ? (
            <Flex>
              <Text color="#c43a1d">►</Text>HOME
            </Flex>
          ) : (
            "HOME"
          )}
        </Link>
      </Stack>
    </Stack>
  );
}
