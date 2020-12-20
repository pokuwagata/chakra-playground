import { Box, chakra } from "@chakra-ui/react";
import * as React from "react";
import Button from "./Button";

const ArrowButton: React.FC = (props) => (
  <Button
    pos="relative"
    pr="2em"
    pl="1.38em"
    _after={{
      content: "'>'",
      color: "#fff",
      pos: "absolute",
      top: "50%",
      right: "0.83em",
      transform: "translateY(-50%)",
    }}
  >
    {props.children}
  </Button>
);

export default ArrowButton;
