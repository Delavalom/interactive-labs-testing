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
const t = initTRPC.context<Context>().create();

// TODO: create tRPC router and procedures
const router = t.router;
const procedure = t.procedure;

// TODO: create a router called appRouter with required procedures
export const appRouter = router({
  getUsers: procedure.query(({ ctx }) => {
    return ctx.database;
  }),
  getUser: procedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.database.find((user) => user.id === input.id);
    }),
});
{
  /*
  TODO: 
    create a getUsers procedure, it should return an array of users from the database
  
    create a getUser procedure, it should return an user object from the database.
    validate the input from the user, it should be an object that holds a property called "id" of type number.

*/
}

export type AppRouter = typeof appRouter;
