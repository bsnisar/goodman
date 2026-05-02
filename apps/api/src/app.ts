import { Hono } from "hono";
import { cors } from "hono/cors";

export const app = new Hono()
  .use(cors())
  .get("/health", (c) => c.json({ status: "ok" }));
