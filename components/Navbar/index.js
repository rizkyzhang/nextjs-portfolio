import React from "react";
import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => (
  <Flex
    as="nav"
    alignItems="center"
    justifyContent={{ base: "space-around", md: "flex-end" }}
    p={5}
    bg="blackAlpha.300"
  >
    <NextLink href="/" passHref>
      <ChakraLink mr={{ md: 5 }} _hover={{ color: "blue.500" }}>
        {"{pH}"}
      </ChakraLink>
    </NextLink>
    <NextLink href="/" passHref>
      <ChakraLink mr={{ md: 5 }} _hover={{ color: "blue.500" }}>
        Home
      </ChakraLink>
    </NextLink>
    <NextLink href="/blog" passHref>
      <ChakraLink mr={{ md: 5 }} _hover={{ color: "blue.500" }}>
        Blog
      </ChakraLink>
    </NextLink>
    <NextLink href="/projects" passHref>
      <ChakraLink mr={{ md: 5 }} _hover={{ color: "blue.500" }}>
        Projects
      </ChakraLink>
    </NextLink>
  </Flex>
);

export default Navbar;
