import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import { AuthOptions } from "next-auth";

const clientId = process.env.GITHUB_ID!;
const clientSecret = process.env.GITHUB_SECRET!;

export const authOptions = {
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
