import React, { useState, useEffect, useCallback } from "react";
import { Comment } from "../../../helpers/interfaces";
import CommentCard from "./CommentCard";
import axios from "axios";
import { server } from "../../../helpers/config";
import styled from "styled-components";
import { GoCommentDiscussion } from "react-icons/go";
import Loader from "react-loader-spinner";

const Root = styled.div`
  padding: 30px 0;
  .title {
    svg {
      vertical-align: middle;
    }

    hr {
      margin-bottom: 35px;
    }
  }

  .loader {
    padding: 50px 0;
    text-align: center;
  }

  .no-comments {
    text-align: center;
    margin: 50px 0;
  }

  button {
  }
`;

export default function Comments({ articleId }: { articleId: number }) {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await axios.get(
        `${server}/api/comments?articleId=${articleId}&pageNo=0`
      );
      const data = res.data;
      setComments((c) => [...c, ...data]);
      setLoading(false);
    })();
  }, [articleId]);

  return (
    <Root>
      <h2 className="title">
        <GoCommentDiscussion /> Comments{" "}
        {comments.length > 0 && `( ${comments.length} )`}
        <br />
        <hr />
      </h2>

      {comments.map((c) => (
        <CommentCard comment={c} key={c.id} />
      ))}
      {loading && (
        <div className="loader">
          <Loader type="Bars" color="var(--primary)" height={100} width={100} />
          <h3>Loading Comments</h3>
        </div>
      )}
      {!loading && comments.length === 0 && (
        <h2 className="no-comments">No Comments Yet Here...</h2>
      )}
    </Root>
  );
}
