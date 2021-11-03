import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ArticleFull } from "../../../helpers/interfaces";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ArticleFull>
) {
  const { id } = req.query;

  const r = await axios.get(
    `https://androidworld.newsifier.com/api/v1/article-as-visitor/${id}?include=clapsCount,commentsCount`,
    {
      headers: {
        "X-Tenant": "androidworld.newsifier.com",
        Authorization:
          "Bearer m8tiFyxZrZD1NGWNAjSu7dpPV8hlJOMLOqS2sWCGXXFllxFsHmGwrD3oT2Son1kXaEM6iRL22nLsgBPp",
      },
    }
  );
  res.status(200).json(r.data);
}
