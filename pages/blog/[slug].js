import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { Heading } from "@chakra-ui/react";

import markdownComponents from "../../utils/markdownComponents";
import { fetchAPI } from "../../utils/api";
import style from "../../styles/markdown-styles.module.css";

export default function Article({ article }) {
  return (
    <>
      <Heading as="h1">{article.title}</Heading>
      <ReactMarkdown
        className={style.reactMarkdown}
        components={markdownComponents}
      >
        {article.body}
      </ReactMarkdown>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = await fetchAPI(`/articles?slug=${slug}`);
  const article = data[0];

  return {
    props: { article },
    revalidate: 1,
  };
};
export async function getStaticPaths() {
  const articles = await fetchAPI(`/articles`);

  const paths = articles.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}
