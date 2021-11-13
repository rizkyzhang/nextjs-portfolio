import ReactMarkdown from "react-markdown";

import { Heading } from "@chakra-ui/react";

import Comments from "../../components/Comments";
import SEO from "../../components/SEO";

import markdownComponents from "../../utils/markdownComponents";
import { fetchAPI } from "../../utils/api";
import style from "../../styles/markdown-styles.module.css";

export default function Article({ article }) {
  const { title, body, slug, published_at, updated_at } = article;

  return (
    <>
      <SEO
        title={title}
        description={body.slice(0, 150) + "..."}
        path={`blog/${slug}`}
        publishedAt={published_at}
        updatedAt={updated_at}
        isArticle
      />
      <Heading as="h1">{title}</Heading>
      <ReactMarkdown
        className={style.reactMarkdown}
        components={markdownComponents}
      >
        {body}
      </ReactMarkdown>
      <Comments issueTerm={slug} />
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
