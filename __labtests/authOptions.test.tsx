import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { api } from "@/utils/trpc";
import Notes from "../src/components/Notes";
import { createWrapper, renderWithClient } from "./setupTest";
import "whatwg-fetch";
import { useSession } from "next-auth/react";


vi.mock("next/head");

describe("tRPC Client", () => {
  test("useQuery return correct data", async () => {
    const { result } = renderHook(() => useSession(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.data).toBe(true));

    expect(result.current.data?.user).toBe(true);
  });

  test("Render Notes with data", async () => {
    const result = renderWithClient(<Notes />);

    const p = await result.findAllByText(/hey/i);

    // expect(p.map(val => val.textContent)).toEqual();
  });
});