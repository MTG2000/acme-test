import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Article } from "../../../helpers/interfaces";
type Data = {
  articles: Article[];
};
export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { page } = req.query;
  const r = await axios.get(
    `https://microservice.newsifier.com/api/v2/article/scopes/lat/get/${page}`,
    {
      headers: {
        "X-Tenant": "androidworld.newsifier.com",
      },
    }
  );
  res.status(200).json({ articles: r.data.data });
}
