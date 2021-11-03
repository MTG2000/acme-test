import HomePage from "../components/Home/HomePage";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Article } from "../helpers/interfaces";
import { server } from "../helpers/config";
import Head from "next/head";

export default function Home({ articles }: { articles: Article[] }) {
  return (
    <>
      <Head>
        <title>Acme Blog</title>
        <meta name="description" content="A blog for ACME website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage articles={articles} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(`${server}/api/articles/0`);

  return { props: { articles: res.data.articles } };
};
