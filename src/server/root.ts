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

// create the context type
type Context = inferAsyncReturnType<typeof createContext>;

// initialize trpc
const t = initTRPC.context<Context>().create();

// TODO: create tRPC router and procedures
const procedure = t.procedure;
const router = t.router;

export const appRouter = router({
  getUsers: procedure.query(({ ctx }) => {
    return ctx.database;
  }),
  getUser: procedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      const user = ctx.database.filter((record) => record.id === input.id);
      return user[0];
    }),
});

export type AppRouter = typeof appRouter;

