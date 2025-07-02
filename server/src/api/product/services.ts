import { asc } from "drizzle-orm";
import { db } from "../../db";
import { product } from "../../db/models";

export const getAllProductsService = async () => {
  try {
    const productList = await db.query.product.findMany({
      orderBy: asc(product.name),
    });

    return productList;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(`An unknown error occurred: ${error}`);
  }
};
