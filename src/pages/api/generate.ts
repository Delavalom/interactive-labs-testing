// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: "OK" | "Internal Server Error" | "Bad Request";
  greetings?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      res.status(200).json({ message: "OK", greetings: "Hello world" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { name } = req.body;
      res.status(200).json({ message: "OK", greetings: `Hello ${name}`, });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
}
