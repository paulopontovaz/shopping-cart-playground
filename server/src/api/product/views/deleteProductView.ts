import type { Context } from "hono";
import { deleteProductService } from "../services/deleteProductService";

export const deleteProductView = async (c: Context) => {
  try {
    const deletedProductId = c.req.param("id");
    const deletedProduct = await deleteProductService(deletedProductId);
    return c.json({ deletedProduct }, 200);
  } catch (error) {
    console.error("##### Error while deleting product #####\n\n", error);
    c.json({ error: "Error while deleting product." }, 500);
  }
};
