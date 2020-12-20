import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Button from "./Button";
import ArrowButton from "./ArrowButton";
// import Cards from "./Cards";

const App = () => {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Button>標準ボタン</Button>
      <ArrowButton>矢印ボタン</ArrowButton>
      {/* <Cards /> */}
    </ChakraProvider>
  );
};

export default App;
