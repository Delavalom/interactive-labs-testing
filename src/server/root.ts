import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { database } from "./db";
import { z } from "zod";
import path from "path";
import { readFileSync } from "fs";

// With this context you can access the in memory database
export const createContext = async () => {
  return {
    database,
  };
};

// the context type
type Context = inferAsyncReturnType<typeof createContext>;

// TODO: initialize trpc

// TODO: create tRPC router and procedures

// TODO: create an app router

{/*
  TODO: 
    create a getUsers procedure, it should return an array of users
  
    create a getUser procedure, it should return an user object.
    validate the input from the user, it should be of type number.

*/}

export type AppRouter = typeof appRouter;

