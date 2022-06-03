/* eslint-disable react/jsx-key */
import {
  Button,
  Box,
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

import parse from "html-react-parser";

import SEO from "../components/SEO";
import { fetchAPI } from "../utils/api";

const links = [
  ["https://www.linkedin.com/in/rizkyzhang/", <FaLinkedin />],
  ["https://t.me/rizkyzhang", <FaTelegram />],
  ["https://wa.me/+6281250555676", <FaWhatsapp />],
  ["https://github.com/rizkyzhang", <FaGithub />],
  ["https://www.codewars.com/users/rizkyzhang", <SiCodewars />],
  ["https://www.hackerrank.com/rizkyzhangdev", <FaHackerrank />],
];

const Home = ({ resume, about }) => (
  <>
    <SEO title="Home" path="" />
    <Stack spacing={6} alignItems="flex-start">
      <Heading as="h1" fontSize="5xl">
        Hi, I&apos;m Rizky Zhang
      </Heading>

      {about.split("\n\n").map((p, index) => {
        return (
          <Text key={index} fontSize="lg">
            {parse(p)}
          </Text>
        );
      })}

      <Button
        leftIcon={<DownloadIcon />}
        as="a"
        href={resume}
        target="_blank"
        size="lg"
        bgColor="blue.500"
        color="white"
        _hover={{
          bg: "transparent",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      >
        Download Resume
      </Button>
      <Stack direction="row" spacing={1}>
        {links.map((link, i) => (
          <IconButton
            key={i}
            as="a"
            target="_blank"
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

export const getStaticProps = async () => {
  const portfolioRes = await fetchAPI("portfolio");
  const { about, resume } = portfolioRes?.data?.attributes;

  return {
    props: {
      about,
      resume,
    },
    revalidate: 60,
  };
};

export default Home;
