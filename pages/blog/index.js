import NextLink from "next/link";

import {
  Divider,
  Flex,
  Heading,
  Link as ChakraLink,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import SEO from "../../components/SEO";
import { fetchAPI } from "../../utils/api";

const Blog = ({ articles }) => {
  return (
    <>
      <SEO title="Blog" path="blog" />
      <Stack>
        <Heading as="h2" color="blue.500">
          2022
        </Heading>
        <Divider border="1px solid gray"></Divider>
        <Stack pt={3}>
          {articles.map((article) => {
            const { id, attributes } = article;
            const { title, slug, updatedAt } = attributes;

            return (
              <Flex
                direction={{ base: "column", sm: "row" }}
                key={id}
                align={{ base: "flex-start", sm: "center" }}
                p={3}
                bg="blackAlpha.300"
              >
                <NextLink href={`/blog/${slug}`} passHref>
                  <ChakraLink>{title}</ChakraLink>
                </NextLink>
                <Spacer></Spacer>
                <Text fontSize="sm" color="gray.500">
                  {new Date(updatedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}
                </Text>
              </Flex>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export const getStaticProps = async () => {
  const articlesRes = await fetchAPI(`articles`);
  const articles = articlesRes?.data;

  return {
    props: {
      articles: articles?.sort(
        (a, b) =>
          new Date(b?.attributes?.updatedAt) -
          new Date(a?.attributes?.updatedAt)
      ),
    },
    revalidate: 60,
  };
};

export default Blog;
