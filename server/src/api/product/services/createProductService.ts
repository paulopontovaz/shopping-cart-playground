import { db } from "~/db";
import { type ProductInsert, product } from "~/db/models/schema";

export const createProductService = async (newProduct: ProductInsert) => {
  try {
    return await db
      .insert(product)
      .values(newProduct)
      .returning({ id: product.id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(`An unknown error occurred: ${error}`);
  }
};
