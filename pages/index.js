/* eslint-disable react/jsx-key */
import Head from "next/head";

import {
  Button,
  chakra,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const links = [
  ["https://www.linkedin.com/in/rizkyzhang/", <FaLinkedin />],
  ["https://t.me/rizkyzhang", <FaTelegram />],
  ["https://wa.me/+6281250555676", <FaWhatsapp />],
  ["https://github.com/rizkyzhang", <FaGithub />],
  ["https://www.codewars.com/users/rizkyzhang", <SiCodewars />],
  ["https://www.hackerrank.com/rizkyzhangdev", <FaHackerrank />],
];

const Home = () => (
  <>
    <Stack spacing={8} alignItems="flex-start">
      <Heading as="h1" fontSize="4xl">
        Hi, I am Rizky.
      </Heading>
      <Heading as="h2" fontSize="3xl">
        A{" "}
        <chakra.span
          bgGradient="linear(
            to right,
            #f7b733,
            #fc4a1a
          )"
          bgRepeat="no-repeat"
          bgSize="100% 0.2em"
          bgPos="0 88%"
          transition="background-size 0.25s ease-in"
          _hover={{ bgSize: "100% 88%" }}
        >
          data science enthusiast
        </chakra.span>{" "}
        &{" "}
        <chakra.span
          bgGradient="linear(to right, #36d1dc, #5b86e5)"
          bgRepeat="no-repeat"
          bgSize="100% 0.2em"
          bgPos="0 88%"
          transition="background-size 0.25s ease-in"
          _hover={{ bgSize: "100% 88%" }}
        >
          web developer
        </chakra.span>
        .
      </Heading>
      <Text fontSize="lg">
        I love solving problems and learning new things everyday. In my spare
        time, I write on my blog, reading tech articles, solving algorithm
        problems, helping peoples solving programming problems in{" "}
        <Link href="#" color="blue.500" textDecoration="underline">
          Kotakode{" "}
        </Link>
        (Indonesia equivalent of stackoverflow) or hang out with my friends. My
        mission is to help make the world a better place by solving real world
        problems with programming.
      </Text>
      <Button
        leftIcon={<DownloadIcon />}
        as="a"
        href="#"
        size="lg"
        bgColor="blue.500"
        color="white"
        _hover={{
          bg: "transparent",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      >
        Download CV
      </Button>
      <Stack direction="row" spacing={1}>
        {links.map((link, i) => (
          <IconButton
            key={i}
            as="a"
            href={link[0]}
            icon={link[1]}
            fontSize="2xl"
            variant="unstyled"
            _hover={{
              color: "blue.500",
            }}
          ></IconButton>
        ))}
      </Stack>
    </Stack>
  </>
);

export default Home;
