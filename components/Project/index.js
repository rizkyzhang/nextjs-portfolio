import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ViewIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

export const Project = ({
  title,
  description,
  image,
  projectLink,
  githubLink,
  isScrapingProject,
  i,
}) => {
  return (
    <Flex key={i} direction="column" p={5} borderRadius="lg" shadow="dark-lg">
      <Stack spacing={5} mb={5}>
        <Image src={image} alt="Project image"></Image>
        <Heading as="h3" fontSize="2xl">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Stack>

      <Spacer></Spacer>

      {isScrapingProject ? (
        <Button
          as="a"
          href={projectLink}
          w="full"
          leftIcon={<ViewIcon />}
          bgColor="blue.500"
          color="white"
          _hover={{
            bg: "transparent",
            border: "1px solid",
            borderColor: "blue.500",
          }}
        >
          View
        </Button>
      ) : (
        <ButtonGroup spacing={5} w="full">
          <Button
            as="a"
            href={projectLink}
            w="full"
            leftIcon={<ViewIcon />}
            bgColor="blue.500"
            color="white"
            _hover={{
              bg: "transparent",
              border: "1px solid",
              borderColor: "blue.500",
            }}
          >
            View
          </Button>
          <Button
            as="a"
            href={githubLink}
            w="full"
            leftIcon={<FaGithub />}
            bgColor="blue.500"
            color="white"
            _hover={{
              bg: "transparent",
              border: "1px solid",
              borderColor: "blue.500",
            }}
          >
            Github
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
};
