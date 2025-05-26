import { initTRPC } from '@trpc/server'

const trpc = initTRPC.create()

const ideas = [
  { nick: 'cool-idea-nick-1', name: 'Idea 1', description: 'Description for Idea 1' },
  { nick: 'cool-idea-nick-2', name: 'Idea 2', description: 'Description for Idea 2' },
  { nick: 'cool-idea-nick-3', name: 'Idea 3', description: 'Description for Idea 3' },
]

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter