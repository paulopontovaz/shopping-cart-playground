import { sql } from "drizzle-orm";
import {
  check,
  integer,
  pgTable,
  real,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

type EntityUpdate<E extends { id: string }> = Omit<
  Partial<E> & Pick<E, "id">,
  ""
>;

export const product = pgTable(
  "product",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    price: real("price").notNull(),
    offerQuantity: integer("offer_quantity"),
    offerPrice: real("offer_price"),
  },
  (table) => [
    check("positive_price", sql`${table.price} > 0`),
    check("positive_offer_price", sql`${table.offerPrice} > 0`),
    check("positive_offer_quantity", sql`${table.offerQuantity} > 0`),
  ],
);

export type Product = typeof product.$inferSelect;
export type ProductInsert = typeof product.$inferInsert;
export type ProductUpdate = EntityUpdate<Product>;
