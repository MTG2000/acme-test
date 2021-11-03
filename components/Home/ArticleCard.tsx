import { Article } from "../../helpers/interfaces";
import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import Link from "next/link";
import Image from "../Shared/Image";

const Root = styled.div`
  width: 100%;
  background: var(--greyDark);
  color: var(--textLight);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 3px 8px 20px #131314;

  .card-body {
    padding-top: 15px;

    .title {
      font-size: var(--fontBig);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: capitalize;
      padding: 0 15px;
    }

    .excerpt {
      font-size: var(--fontMedium);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      padding: 0 15px;
    }
    .reactions {
      display: flex;
      justify-content: space-around;
      padding: 15px 0 10px;

      & > div {
        text-align: center;

        .icon {
          font-size: 25px;
          color: #03a9f4;
          margin-bottom: -6 px;
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
    .title {
      text-decoration: underline;
    }
  }
`;

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/article/${article.id}`}>
      <Root>
        <Image src={article.image} alt="" />
        <div className="card-body">
          <h2 className="title">{article.title}</h2>
          <p className="excerpt">{article.excerpt} </p>
          <div className="reactions">
            <div>
              <AiOutlineLike className="icon" />
              <p>{article.claps_count}</p>
            </div>
            <div>
              <FiEye className="icon" />
              <p>{article.views}</p>
            </div>
            <div>
              <BiCommentDetail className="icon" />
              <p>{Math.abs(article.comments_count)}</p>
            </div>
          </div>
        </div>
      </Root>
    </Link>
  );
}
