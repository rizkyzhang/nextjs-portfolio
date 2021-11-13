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
          2021
        </Heading>
        <Divider border="2px solid gray"></Divider>
        <Stack pt={3}>
          {articles.map(({ id, title, slug, published_at }) => {
            const publishedAt = new Date(published_at).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
              }
            );

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
                  {publishedAt}
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
  const articles = await fetchAPI(`/articles`);

  return {
    props: {
      articles: articles.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      ),
    },
    revalidate: 1,
  };
};

export default Blog;
