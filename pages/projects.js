/* eslint-disable react/jsx-key */
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import projects from "../public/data/projects";
import { frontEnd, backEnd, tools } from "../public/data/skills";
import { Skill } from "../components/Skill";
import { Project } from "../components/Project";

const Projects = () => (
  <>
    <Box mb={20}>
      <Heading mb={7} fontSize="3xl">
        Skills
      </Heading>

      <Stack spacing={5}>
        <Skill title="# Front-End" skills={frontEnd} />
        <Skill title="# Back-End" skills={backEnd} />
        <Skill title="# Tools & Other Languages" skills={tools} />
      </Stack>
    </Box>

    <Box>
      <Heading mb={7} fontSize="3xl">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        {projects.map((project, i) => (
          <Project {...project} i={i} />
        ))}
      </SimpleGrid>
    </Box>
  </>
);

export default Projects;
