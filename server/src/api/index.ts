import { Hono } from "hono";
import { cors } from "hono/cors";
import { productsRouter } from "~/api/product/router";

const server = new Hono().basePath("/api");

if (process.env.NODE_ENV === "dev") {
  server.use(cors());
}

server.route("/products", productsRouter);

export { server };
