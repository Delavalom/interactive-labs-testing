import { expectTypeOf, test } from "vitest";
import { appRouter } from "../../src/server/root";
import { describe } from "node:test";

describe("check trpc server types", () => {
  test("app router types", () => {
    expectTypeOf(appRouter).toMatchTypeOf<TestRouter>();
  });
});

import { initTRPC, inferAsyncReturnType, TRPCError } from "@trpc/server";
import { database } from "./db";
import { z } from "zod";

export const createContext = async () => {
  return {
    database,
  };
};

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const procedure = t.procedure;
const router = t.router;

export const testRouter = router({
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
      const user = ctx.database.find((record) => record.id === input.id);
      return user;
    }),
});

export type TestRouter = typeof testRouter;
