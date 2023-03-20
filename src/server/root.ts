import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { z } from "zod";


// TODO: add prisma to the context of your routers
export const createContext = async () => {
  return {
    prisma,
  };
};

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const procedure = t.procedure;
const router = t.router;

{/* 
  TODO: create 3 procedures:
    getUsers procedure, it should return an array of users from prisma

    getUser procedure, takes an object with the id (number) property as input, it should return the object of the user.

    createUser procedure, takes an object with the name (string) and email (string) property as input,
      it should return the object of the new user.
*/}

export const appRouter = router({});

export type AppRouter = typeof appRouter;
