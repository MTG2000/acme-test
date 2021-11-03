import React from "react";

import Head from "next/head";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { server } from "../../helpers/config";
import { ArticleFull, Article } from "../../helpers/interfaces";
import ArticlePage from "../../components/Article/ArticlePage";

const ArticlePageBase = (article: ArticleFull) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <ArticlePage article={article} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { id } = ctx.params as { id: string };
    const res = await axios.get(`${server}/api/article/${id}`);
    return { props: res.data.data, revalidate: 600 };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await axios.get(`${server}/api/articles/0`);
  const articles = res.data.articles as Article[];
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};
export default ArticlePageBase;
