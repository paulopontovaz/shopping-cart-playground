import type { Context } from "hono";
import { createProductService } from "~/api/product/services";

export const createProductView = async (c: Context) => {
  try {
    const newProductProperties = await c.req.json();
    const newProduct = await createProductService(newProductProperties);
    return c.json({ newProduct }, 200);
  } catch (error) {
    console.error("##### Error while creating product #####\n\n", error);
    c.json({ error: "Error while creating product." }, 500);
  }
};
