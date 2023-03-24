/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { render } from "@testing-library/react";
import { rest } from "msw";
import { ReactElement, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { DefaultSession } from "next-auth";

export const handlers = [
  rest.get("*/api/auth/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "mocked-next-auth",
      })
    );
  }),
];

export function renderWithClient(ui: ReactElement) {
  const { rerender, ...result } = render(
    <TestSessionProvider>{ui}</TestSessionProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(<TestSessionProvider>{rerenderUi}</TestSessionProvider>),
  };
}

export function createWrapper() {
  return ({ children }: { children: ReactNode }) => (
    <TestSessionProvider>{children}</TestSessionProvider>
  );
}

function TestSessionProvider({ children }: { children: ReactNode }) {
  const session: DefaultSession = {
    user: { name: "Luis" },
    expires: "1313215464654",
  };
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
