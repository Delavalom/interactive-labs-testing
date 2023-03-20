/* eslint-disable react/display-name */
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import {
  describe,
  expect,
  test,
  vi,
  beforeEach,
  afterAll,
  afterEach,
} from "vitest";
import Notes from "../src/components/Notes";
import { database } from "./db";
import { ReactElement, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/server/root";
import { server } from "./setupTest";
import { api } from "@/utils/trpc";

beforeEach(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("tRPC Client", () => {
  test("Render Notes with data", async () => {
    const { result } = renderHook(() => api.getUsers.useQuery(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const notes = renderWithClient(<Notes />);

    const p = await notes.findAllByText(/hey/i);

    expect(p).toBeDefined();
  });
});

// --------------------------------------------------------------------------------

export function renderWithClient(ui: ReactElement) {
  const { rerender, ...result } = render(
    <TRPCClientProvider>{ui}</TRPCClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(<TRPCClientProvider>{rerenderUi}</TRPCClientProvider>),
  };
}

export function createWrapper() {
  return ({ children }: { children: ReactNode }) => (
    <TRPCClientProvider>{children}</TRPCClientProvider>
  );
}

export const trpc = createTRPCReact<AppRouter>();

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
      links: [],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
