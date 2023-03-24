import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import { AuthOptions } from "next-auth";

const clientId = process.env.GITHUB_ID!;
const clientSecret = process.env.GITHUB_SECRET!;

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [GithubProvider({
        clientId, 
        clientSecret
    })],
    callbacks: {
        async jwt({token}) {
            return token
        }
    }
}  satisfies AuthOptions;
