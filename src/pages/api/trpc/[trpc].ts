import { appRouter, createContext } from '@/server/root'
import {createNextApiHandler} from '@trpc/server/adapters/next'

export default createNextApiHandler({
    router: appRouter,
    createContext,
})