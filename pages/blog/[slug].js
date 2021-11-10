import Head from "next/head";
import ReactMarkdown from "react-markdown";
import style from "../../styles/markdown-styles.module.css";
import { fetchAPI } from "../../utils/api";

export default function Article({ article }) {
  return (
    <div>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </div>
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
  // Call an external API endpoint to get posts
  const articles = await fetchAPI(`/articles`);

  // Get the paths we want to pre-render based on posts
  const paths = articles.map(({ slug }) => ({
    params: { slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
