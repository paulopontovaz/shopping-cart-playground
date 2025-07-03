import type { Context } from "hono";
import { updateProductService } from "~/api/product/services";

export const updateProductView = async (c: Context) => {
  try {
    const updatedProductId = c.req.param("id");
    const updatedFields = await c.req.json();
    const updatedProduct = await updateProductService({
      id: updatedProductId,
      ...updatedFields,
    });
    return c.json({ updatedProduct }, 200);
  } catch (error) {
    console.error("##### Error while updating product #####\n\n", error);
    c.json({ error: `Error while updating product.` }, 500);
  }
};
