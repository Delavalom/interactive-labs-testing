import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: "OK" | "Internal Server Error" | "Bad Request";
  greetings?: string;
};


