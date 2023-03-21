import type { AppRouter } from "../server/root";
import { getBaseUrl } from "../utils/getBaseUrl";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

// TODO Create the server mirror instance for the client here
export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        loggerLink(),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});