/* eslint-disable react/jsx-key */
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

const Home = ({ cv, home }) => (
  <>
    <SEO title="Home" path="" />
    <Stack spacing={8} alignItems="flex-start">
      <Heading as="h1" fontSize="5xl">
        Hi there! I&apos;m {home.name}
      </Heading>
      <Heading fontSize="3xl" color="blue.500">
        {home.role}
      </Heading>

      <Text fontSize="lg">
        {home.about.split("\n\n").map((p) => {
          return <Text>{p}</Text>;
        })}
      </Text>

      <Button
        leftIcon={<DownloadIcon />}
        as="a"
        href={cv}
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
        Download CV
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
  const { cv } = await fetchAPI(`/portfolio-data`);
  const home = await fetchAPI(`/home`);

  return {
    props: {
      cv,
      home,
    },
    revalidate: 1,
  };
};

export default Home;
