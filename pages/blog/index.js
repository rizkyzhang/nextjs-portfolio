import Head from "next/head";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { fetchAPI } from "../../utils/api";

export default function Blog({ articles }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <ul>
        {articles.map(({ id, title, slug, cover, published_at }) => (
          <li key={id}>
            <NextLink href={`/blog/${slug}`} passHref>
              <ChakraLink>{title}</ChakraLink>
            </NextLink>
          </li>
        ))}
      </ul>
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
