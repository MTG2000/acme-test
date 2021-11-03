import React from "react";
import { Comment } from "../../../helpers/interfaces";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  background: #494c5c;
  padding: 15px;
  border-radius: 20px;
  max-width: 600px;
  margin-bottom: 24px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: inset 0 0 3px #141418;
    margin-inline-end: 20px;
  }

  .author {
    font-size: var(--fontSmall);
    color: #f8f8f8;
  }

  .comment-date {
    font-size: var(--fontSmaller);
    color: var(--textGrey);
  }
`;

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Root>
      <img src={comment.user_avatar} alt="" />
      <div className="content">
        <p className="author">{comment.username}</p>
        <p className="comment-date">{comment.date_and_time}</p>

        <p>{comment.content}</p>
      </div>
    </Root>
  );
}
