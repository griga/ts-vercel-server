import { VercelRequest, VercelResponse } from "@vercel/node";

type QueryParams = {
  id: string;
};

export default function handler(req: VercelRequest, res: VercelResponse){
  const { query } = req;
  if (!_isValidVercelRequest(query)) {
    res.json({ error: "error" });
    return;
  }
  const { id } = query;
  res.json({ id });
};

const _isValidVercelRequest = (query: any): query is QueryParams => {
  if (typeof query.id !== "string") {
    console.error("invalid id type.");
    return false;
  }
  return true;
};
