import ReactMarkdown from "react-markdown";

import { Heading } from "@chakra-ui/react";

import Comments from "../../components/Comments";
import SEO from "../../components/SEO";

import markdownComponents from "../../utils/markdownComponents";
import { fetchAPI } from "../../utils/api";
import style from "../../styles/markdown-styles.module.css";

export default function Article({ article }) {
  const { title, content, slug, publishedAt, updatedAt } = article;

  return (
    <>
      <SEO
        title={title}
        description={content.slice(0, 150) + "..."}
        path={`blog/${slug}`}
        publishedAt={publishedAt}
        updatedAt={updatedAt}
        isArticle
      />
      <Heading as="h1">{title}</Heading>
      <ReactMarkdown
        className={style.reactMarkdown}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
      <Comments issueTerm={slug} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = await fetchAPI(`slugify/slugs/article/${slug}`);
  const article = data?.data?.attributes;

  return {
    props: { article },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("articles");
  const articles = articlesRes?.data;

  const paths = articles.map((article) => ({
    params: { slug: article?.attributes?.slug },
  }));

  return { paths, fallback: false };
}
