import { expect, test } from "vitest";
import { appRouter } from "../src/server/root";
import { describe } from "vitest";
import { database } from "./db";
import { ZodError } from "zod";

const caller = appRouter.createCaller({ database });

describe("check trpc server app router", () => {
  test("procedure getUsers", async () => {
    const data = await caller.getUsers();
    expect(data).toStrictEqual(database);
  });

  test("procedure getUser", async () => {
    const data = await caller.getUser({ id: 1 });
    expect(data).toStrictEqual({
      id: 1,
      title: "whatever",
      body: {
        text: "hey a bunch of notes",
      },
    });
  });

  test("procedure getUser should throw on bad input", async () => {
    try {
      await caller.getUser({ id: "" as unknown as number });
    } catch (error) {
      if (error instanceof ZodError) {
        expect(error).toThrowError(/Expected number, received string/)
      }
    }
  });

});
