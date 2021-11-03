import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Comment } from "../../../helpers/interfaces";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Comment[]>
) {
  const { articleId, pageNo } = req.query;
  const r = await axios.get(
    `https://microservice.newsifier.com/api/v1/article/${articleId}/comments/${pageNo}`,
    {
      headers: {
        "X-Tenant": "androidworld.newsifier.com",
      },
    }
  );
  res.status(200).json(r.data.data);
}
