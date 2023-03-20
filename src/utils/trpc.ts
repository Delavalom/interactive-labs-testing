import { AppRouter } from "../server/root";
import { getBaseUrl } from "../utils/getBaseUrl";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

// TODO Create the server mirror instance for the client here

export const api = createTRPCNext<AppRouter>({
    config(info) {
        return {
            links: [
                loggerLink(),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`
                })
            ]
        }
    },
    ssr: false
})

{/*
    TODO:

    create the tRPC instance for Next.js, remember to type it

    httpBatchLink should be a terminating link

    set server side rendering to false
*/}