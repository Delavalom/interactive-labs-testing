import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Notes from "../src/components/Notes";
import { database } from "./db";

vi.mock("../src/utils/trpc", () => ({
  api: {
    getUsers: {
      useQuery: () => ({
        data: database,
      }),
    },
  },
}));

describe("tRPC Client", () => {
  test("Render Notes with data", async () => {
    render(<Notes />);

    const paragraphs = await screen
      .queryAllByText(/hey/i)
      .map((el) => el.textContent);

    expect(paragraphs).toStrictEqual([
      "hey employees",
      "hey a bunch of notes",
      "hey some important notes",
    ]);
  });
});
