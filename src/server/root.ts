import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { database } from "./db";
import { z } from "zod";

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

// TODO: create a router called appRouter with required procedures

{
  /*
  TODO: 
    create a getUsers procedure, it should return an array of users from the database
  
    create a getUser procedure, it should return an user object from the database.
    validate the input from the user, it should be an object that holds a property called "id" of type number.

*/
}

export type AppRouter = typeof appRouter;
