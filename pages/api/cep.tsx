import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await fetch(`http://viacep.com.br/ws/01001000/json/`);
    const zip = await result.json();
    const body = {
      date: new Date(),
      status: 200,
      zip,
      query: req.query,
    };
    res.status(200).json(body);
  } catch (error) {
    throw error;
  }
};
