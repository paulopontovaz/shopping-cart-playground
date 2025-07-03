import type { Context } from "hono";
import { getAllProductsService } from "~/api/product/services";

export const getAllProductsView = async (c: Context) => {
  try {
    const productList = await getAllProductsService();
    return c.json({ productList }, 200);
  } catch (error) {
    console.error("##### Error while getting products #####\n\n", error);
    c.json({ error: "Error while getting products." }, 500);
  }
};
