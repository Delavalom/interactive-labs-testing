import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { z } from "zod";


// With this context you can access the in memory database
export const createContext = async () => {
  return {};
};

// create the context type
type Context = inferAsyncReturnType<typeof createContext>;

// initialize trpc
const t = initTRPC.context<Context>().create();

// TODO: create tRPC router and procedures
const procedure = t.procedure;
const router = t.router;

export const appRouter = router({});

export type AppRouter = typeof appRouter;
