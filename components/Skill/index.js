import { Box, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";

export const Skill = ({ skills, title }) => {
  return (
    <Box>
      <Heading
        as="h3"
        w="max-content"
        mb={3}
        bgGradient="linear(to right, #f7b733, #fc4a1a)"
        bgRepeat="no-repeat"
        bgSize="100% 0.2em"
        bgPos="0 88%"
        transition="background-size 0.25s ease-in"
        fontSize="2xl"
        _hover={{ bgSize: "100% 88%" }}
      >
        {title}
      </Heading>
      <Wrap spacing={2}>
        {skills.map((skill, i) => (
          <WrapItem key={i}>
            <Image src={skill} alt="Skill logo"></Image>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
