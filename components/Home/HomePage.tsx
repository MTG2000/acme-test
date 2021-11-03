import React, { useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Article } from "../../helpers/interfaces";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import { InView } from "react-intersection-observer";
import { server } from "../../helpers/config";
import axios from "axios";
import Loader from "react-loader-spinner";

interface Props {
  articles: Article[];
}

const Root = styled.section`
  .articles {
    max-width: 550px;
    margin: auto;
    padding: 50px 15px;
    position: relative;

    .loadmore-trigger {
      position: absolute;
      bottom: 2000px;
      left: 0;
      width: 100%;
      height: 100px;
      visibility: hidden;
      /* background: red; */
    }
  }
  .loader {
    padding: 50px 0;
    text-align: center;
    color: var(--textLight);
  }
`;

export default function HomePage({ articles: initArticles }: Props) {
  const [articles, setArticles] = useState(initArticles);
  const [curPage, setCurPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const loadMore = async (inView: boolean) => {
    if (inView && !loading && !reachedEnd) {
      setLoading(true);
      const res = await axios.get(`${server}/api/articles/${curPage + 1}`);
      const data = res.data.articles;
      if (data.length === 0) setReachedEnd(true);
      setCurPage(curPage + 1);
      setArticles([...articles, ...data]);
      setLoading(false);
    }
  };

  return (
    <div>
      <Root>
        <div className="articles">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
          <InView
            as="div"
            className="loadmore-trigger"
            onChange={loadMore}
          ></InView>
          {loading && (
            <div className="loader">
              <Loader
                type="Bars"
                color="var(--primary)"
                height={100}
                width={100}
              />
              <h3>Loading More Articles</h3>
            </div>
          )}
        </div>
      </Root>
    </div>
  );
}
