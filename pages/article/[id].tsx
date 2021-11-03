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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { id } = ctx.params as { id: string };
    const res = await axios.get(`${server}/api/article/${id}`);
    return { props: res.data.data };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ArticlePageBase;
