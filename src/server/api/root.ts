import { createTRPCRouter } from "~/server/api/trpc";
import { busRouter } from "./routers/bus";
import { favoriteRouter } from "./routers/favorite";
import { routesRouter } from "./routers/routes";
import { stopsRouter } from "./routers/stops";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  bus: busRouter,
  routes: routesRouter,
  stops: stopsRouter,
  favorite: favoriteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
