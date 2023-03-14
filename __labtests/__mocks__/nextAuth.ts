import { render } from "@testing-library/react";
import { rest } from "msw";
import { ReactElement, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createTRPCReact, httpBatchLink, loggerLink } from "@trpc/react-query";
import { AppRouter } from "@/server/root";
export const trpc = createTRPCReact<AppRouter>();

export const handlers = [
  rest.get("*/api/trpc", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "mocked-react-query",
      })
    );
  }),
];

export function renderWithClient(ui: ReactElement) {}

const TRPCClientProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
        logger: {
          log: console.log,
          warn: console.warn,
          error: () => {},
        },
      })
  );
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );
  return {}
};

// https://tkdodo.eu/blog/testing-react-query
