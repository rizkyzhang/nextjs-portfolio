import Head from "next/head";
import NextLink from "next/link";
import {
  Link as ChakraLink,
  Box,
  Stack,
  Spacer,
  Text,
  Flex,
} from "@chakra-ui/react";
import { fetchAPI } from "../../utils/api";

export default function Blog({ articles }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Stack>
        {articles.map(({ id, title, slug, published_at }) => {
          const publishedAt = new Date(published_at).toLocaleDateString(
            "en-US",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          );

          return (
            <Flex key={id} bg="blackAlpha.300" p={3} align="center">
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
    </>
  );
}
export const getStaticProps = async () => {
  const articles = await fetchAPI(`/articles`);

  return {
    props: { articles },
    revalidate: 1,
  };
};
