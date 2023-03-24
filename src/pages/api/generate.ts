import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: "OK" | "Internal Server Error" | "Bad Request";
  greetings?: `Hello ${string}`;
};



{
  /* 
  TODO: Create a handler function that recieve GET and POST requests
    
    Validate methods

    if GET is true than you should return a { message: "OK", greetings: "Hello world" } 
    
    if POST is true than you should return a { message: "OK", greetings: `Hello ${name}` } 

*/
}
