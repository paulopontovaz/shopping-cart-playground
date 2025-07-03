import { eq } from "drizzle-orm";
import { db } from "~/db";
import { product } from "~/db/models";

export const deleteProductService = async (id: string) => {
  try {
    return await db
      .delete(product)
      .where(eq(product.id, id))
      .returning({ id: product.id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(`An unknown error occurred: ${error}`);
  }
};
