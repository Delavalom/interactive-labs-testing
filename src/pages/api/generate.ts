import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: "OK" | "Internal Server Error" | "Bad Request";
  greetings?: string;
};


// Create a handler function that recieve GET and POST requests