import { AppRouter } from "../server/root";
import { getBaseUrl } from "../utils/getBaseUrl";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

// TODO Create the server mirror instance for the client here
export const api = {}