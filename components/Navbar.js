import React from "react";
import { Box, Flex, Spacer, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const navLinks = [
  ["Home", "/"],
  ["Blog", "/blog"],
  ["Projects", "/projects"],
];

const Navbar = () => (
  <Flex
    as="nav"
    position="sticky"
    top={0}
    left={0}
    zIndex="sticky"
    justifyContent="center"
    p={5}
    bg="#22252C"
  >
    <Flex
      w="5xl"
      alignItems="center"
      justifyContent={["space-around", "flex-end"]}
    >
      <NextLink href="/" passHref>
        <ChakraLink
          display={["none", "block"]}
          mr="auto"
          fontSize="2xl"
          _hover={{ color: "blue.500" }}
        >
          {"{pH}"}
        </ChakraLink>
      </NextLink>

      {navLinks.map((navLink, index) => {
        return (
          <NextLink key={index} href={navLink[1]} passHref>
            <ChakraLink mr={5} _hover={{ color: "blue.500" }}>
              {navLink[0]}
            </ChakraLink>
          </NextLink>
        );
      })}
    </Flex>
  </Flex>
);

export default Navbar;
