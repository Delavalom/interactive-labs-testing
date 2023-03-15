import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { createWrapper, renderWithClient } from "./setupTest";
import "whatwg-fetch";
import { useSession } from "next-auth/react";
import Home from "../src/pages";

vi.mock("next/head");

describe("Auth.js client api", () => {
  test("useQuery return correct data", async () => {
    const { result } = renderHook(() => useSession(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.status).toBe("authenticated"));

    expect(result.current.data?.user).toBeDefined();
  });

  test("Render Home with authenticated user's name", async () => {
    const { result } = renderHook(() => useSession(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.status).toBe("authenticated"));

    const home = renderWithClient(<Home />);

    const p = await home.findAllByRole("heading", { level: 3 });

    expect(p[0].textContent).toEqual(result.current.data?.user?.name);
  });
});
