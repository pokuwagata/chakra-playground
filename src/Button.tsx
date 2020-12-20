import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";

const Button: React.FC<BoxProps> = (props) => {
  return (
    <Box
      as="a"
      href="#"
      display="inline-block"
      w="300px"
      maxW="full"
      padding="20px 10px"
      bg="#e25c00"
      border="2px solid transparent"
      boxShadow="0 3px 6px rgba(0, 0, 0, 0.16)"
      color="#fff"
      fontSize="1.125rem"
      textAlign="center"
      textDecoration="none"
      transition="0.25s"
      _focus={{ bg: "#fff", borderColor: "currentcolor", color: "#e25c00" }}
      _hover={{ bg: "#fff", borderColor: "currentcolor", color: "#e25c00" }}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Button;
