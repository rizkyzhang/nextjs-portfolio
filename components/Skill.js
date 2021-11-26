import { Box, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";

const Skill = ({ skills, title }) => {
  return (
    <Box>
      <Heading
        as="h3"
        w="max-content"
        mb={3}
        bgGradient="linear(to right, #36d1dc, #5b86e5)"
        bgRepeat="no-repeat"
        bgSize="100% 0.2em"
        bgPos="0 88%"
        transition="background-size 0.25s ease-in"
        _hover={{ bgSize: "100% 88%" }}
        fontSize="2xl"
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

export default Skill;
