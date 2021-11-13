import { NextSeo, ArticleJsonLd } from "next-seo";

const SEO = (meta) => {
  const { title, description, path, publishedAt, updatedAt, isArticle } = meta;

  return isArticle ? (
    <>
      <NextSeo
        title={`${title} | programmerHood`}
        description={description}
        openGraph={{
          url: `https://programmerhood.com/${path}`,
          title: `${title} | programmerHood`,
          description,
        }}
      />
      <ArticleJsonLd
        url={`https://programmerhood.com/${path}`}
        title={title}
        description={description}
        datePublished={publishedAt}
        dateModified={updatedAt}
        authorName="Rizky"
        publisherName="programmerHood"
      />
    </>
  ) : (
    <NextSeo
      title={`${title} | programmerHood`}
      description="Web developer and data science enthusiast. This is my personal portfolio and blog."
      openGraph={{
        url: `https://programmerhood.com/${path}`,
        title: `${title} | programmerHood`,
        description:
          "Web developer and data science enthusiast. This is my personal portfolio and blog.",
      }}
    />
  );
};

export default SEO;
