import { describe, expect, test, vi } from "vitest";
import prisma from "./__mocks__/prisma";
import { AppRouter, appRouter } from "@/server/root";
import { inferProcedureInput } from "@trpc/server";

vi.mock("../libs/prisma");

describe("Testing Prisma Client", () => {
  test("createUser procedure should return the new user", async () => {
    const newUser = {
      name: "Joe",
      email: "example@example.com",
    };
    prisma.user.create.mockResolvedValue({ ...newUser, id: 1 });

    const ctx = { prisma };
    const caller = appRouter.createCaller(ctx);

    type Input = inferProcedureInput<AppRouter["createUser"]>;
    const input: Input = {
      name: "Joe",
      email: "example@example.com",
    };

    const user = await caller.createUser(input);

    expect(user).toStrictEqual({ ...newUser, id: 1 });
  });

  test("getUser procedure should return the user requested", async () => {
    const newUser = {
      name: "Joe",
      email: "joe@example.com"
    };
    prisma.user.findUnique.mockResolvedValue({ ...newUser, id: 2 });

    const ctx = { prisma };
    const caller = appRouter.createCaller(ctx);

    type Input = inferProcedureInput<AppRouter["getUser"]>;
    const input: Input = {
      id: 2,
    };

    const user = await caller.getUser(input);

    expect(user).toStrictEqual({ ...newUser, id: 2 });
  });

  test("getUsers should return array of users", async () => {
    const firstUser = {
      name: "Luis",
      email: "luis@example.com"
    };
    const secondUser = {
      name: "Joe",
      email: "joe@example.com"
    };
    prisma.user.findMany.mockResolvedValue([{ ...firstUser, id: 1 }, { ...secondUser, id: 2 }]);

    const ctx = { prisma };
    const caller = appRouter.createCaller(ctx);

    const users = await caller.getUsers();

    expect(users).toStrictEqual([{ ...firstUser, id: 1 }, { ...secondUser, id: 2 }]);
  });
});
