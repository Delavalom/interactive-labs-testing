import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import { describe, expect, test, vi } from "vitest";
import prisma from "./__mocks__/prisma";
// import prisma from '../src/server/db'
import { AuthOptions } from "next-auth";
import { authOptions } from "../src/server/auth";

const clientId = process.env.GITHUB_ID!;
const clientSecret = process.env.GITHUB_SECRET!;

describe("Test authOptions", () => {
  test("it's has a provider", () => {
    expect("providers" in authOptions).toBe(true);
  });
  test("it's has an adapter", () => {
    expect("adapter" in authOptions).toBe(true);
  });
  test("it's has a callback", () => {
    expect("callbacks" in authOptions).toBe(true);
  });
});

export const testAuthOptions = {
  providers: [
    GithubProvider({
      clientId,
      clientSecret,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },
} satisfies AuthOptions;
