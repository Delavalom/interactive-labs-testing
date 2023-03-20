
// TODO: import trpc/server config
// TODO: import Next api handler from trpc

import { appRouter, createContext } from "../../../server/root";
import { createNextApiHandler } from "@trpc/server/adapters/next";

// TODO: create the api handler for trpc

export default createNextApiHandler({
    router: appRouter,
    createContext,
})