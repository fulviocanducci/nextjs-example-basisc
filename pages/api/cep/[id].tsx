import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const result = await fetch(`http://viacep.com.br/ws/${id}/json/`);
    const zip = await result.json();
    const body = { ...zip };
    res.status(200).json(body);
  } catch (error) {
    throw error;
  }
};
