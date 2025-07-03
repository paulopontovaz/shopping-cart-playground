import { eq } from "drizzle-orm";
import { db } from "~/db";
import { type ProductUpdate, product } from "~/db/models/schema";

export const updateProductService = async (updatedProduct: ProductUpdate) => {
  try {
    return await db
      .update(product)
      .set(updatedProduct)
      .where(eq(product.id, updatedProduct.id))
      .returning({
        id: product.id,
        name: product.name,
        price: product.price,
        offerQuantity: product.offerQuantity,
        offerPrice: product.offerPrice,
      });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`An unknown error occurred: ${error}`);
  }
};
