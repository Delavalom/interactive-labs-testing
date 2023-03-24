import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: "OK" | "Internal Server Error" | "Bad Request";
  greetings?: `Hello ${string}`;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "OK", greetings: "Hello world" });
  } else if (req.method === "POST") {
    const { name } = req.body;
    return res.status(200).json({ message: "OK", greetings: `Hello ${name}` });
  }
  return;
}

{
  /* 
  TODO: Create a handler function that recieve GET and POST requests
    
    Validate methods

    if GET is true than you should return a { message: "OK", greetings: "Hello world" } 
    
    if POST is true than you should return a { message: "OK", greetings: `Hello ${name}` } 

*/
}
