import { createTRPCMsw } from "msw-trpc";
import type { AppRouter } from "@/server/root";
import { setupServer } from "msw/node";
import { database } from "./db";

export const trpcMsw = createTRPCMsw<AppRouter>();

export const server = setupServer(
  trpcMsw.getUsers.query((req, res, ctx) => {
    return res(ctx.status(200), ctx.data(database));
  })
);
