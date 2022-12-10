import { Button, Link, Tooltip } from "@chakra-ui/react";
import QBlock from "../../assets/question.gif";
import Image from "next/image";

const QuestionBlock = () => {
  return (
    <>
      <Tooltip label="?">
        <Link href="/future">
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
    </>
  );
};

export { QuestionBlock };
