import { Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import QBlock from "../../assets/question.gif";
import { QuestionBlock } from "./QuestionBlock";
import Image from "next/image";

const QuestionBlocksStack = () => {
  return (
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
            <Image src={QBlock} alt="question-block" />
          </Button>
        </Link>
      </Tooltip>

      <QuestionBlock />
      <QuestionBlock />
    </Flex>
  );
};

export { QuestionBlocksStack };
