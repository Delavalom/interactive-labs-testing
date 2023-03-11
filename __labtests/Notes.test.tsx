import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { api } from "@/utils/trpc";
import Notes from "../src/components/Notes";
import { createWrapper, renderWithClient } from "./setupTest";
import "whatwg-fetch";
import { database } from "./db";

vi.mock("next/head");

describe("tRPC Client", () => {
  test("useQuery return correct data", async () => {
    const { result } = renderHook(() => api.getUsers.useQuery(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(database);
  });

  test("Render Notes with data", async () => {
    const result = renderWithClient(<Notes />);

    const p = await result.findAllByText(/hey/i);

    expect(p.map(val => val.textContent)).toEqual(database.map(record => record.body.text));
  });
});
