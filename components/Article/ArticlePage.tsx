import React, { useEffect } from "react";
import { Article, ArticleFull } from "../../helpers/interfaces";
import styled from "styled-components";
import Image from "../Shared/Image";
import ArticleContent from "./ArticleContent";
import Comments from "./Comments";
import Author from "./Author";
import Tag from "./Tag";

interface Props {
  article: ArticleFull;
}

const Root = styled.main`
  width: 90%;
  padding-top: 80px;
  font-size: var(--fontMedium);

  max-width: 70ch;
  margin: auto;
  color: var(--textLight);

  .title {
    font-size: var(--fontBigger);
  }

  .date {
    font-size: var(--fontSmall);
    color: var(--textGrey);
    margin-bottom: 30px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default function ArticlePage({ article }: Props) {
  useEffect(() => {}, []);

  return (
    <Root>
      <h1 className="title">{article.title}</h1>
      <p className="date">
        Published at {new Date(article.updated_at).toLocaleDateString()}
      </p>
      <Image src={article.image} alt={article.title} />
      <ArticleContent content={article.content} />
      <div className="tags">
        {article.tags.map((t) => (
          <Tag tag={t} key={t.id} />
        ))}
      </div>
      <Author author={article.author} />
      <Comments articleId={article.id} />
    </Root>
  );
}
