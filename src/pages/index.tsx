/* eslint-disable react/no-unescaped-entities */
import { Stack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { QuestionBlocksStack } from "./components/QuestionBlocksStack";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Stack bg="#0063bd" w="100%" h="100vh" justify="flex-end">
      <Header />
      <QuestionBlocksStack />
      <Footer />
    </Stack>
  );
}
