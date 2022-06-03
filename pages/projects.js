import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";

import Skill from "../components/Skill";
import Project from "../components/Project";
import SEO from "../components/SEO";
import { fetchAPI } from "../utils/api";

const Projects = ({ projects, skill }) => (
  <>
    <SEO title="Projects" path="projects" />
    <Box mb={20}>
      <Heading mb={7} fontSize="3xl">
        Skills
      </Heading>

      <Stack spacing={5}>
        <Skill title="# Front-End" skills={skill.frontEnd} />
        <Skill title="# Back-End" skills={skill.backEnd} />
        <Skill title="# Tools & Other Languages" skills={skill.tools} />
      </Stack>
    </Box>

    <Box>
      <Heading mb={7} fontSize="3xl">
        Projects
      </Heading>
      {/* <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}> */}
      <Stack spacing={5}>
        {projects.map((project, id) => (
          <React.Fragment key={id}>
            <Project {...project} i={id} />
          </React.Fragment>
        ))}
      </Stack>
      {/* </SimpleGrid> */}
    </Box>
  </>
);

export const getStaticProps = async () => {
  const portfolioRes = await fetchAPI("portfolio");
  const { projects, skill } = portfolioRes?.data?.attributes;

  return {
    props: {
      projects,
      skill,
    },
  };
};

export default Projects;
