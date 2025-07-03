import { Hono } from "hono";
import {
  createProductView,
  deleteProductView,
  getAllProductsView,
  updateProductView,
} from "~/api/product/views";

const productsRouter = new Hono();

productsRouter.get("/", getAllProductsView);
productsRouter.patch("/:id", updateProductView);
productsRouter.post("/", createProductView);
productsRouter.delete("/:id", deleteProductView);

export { productsRouter };
