import { relations, sql } from "drizzle-orm";
import {
  check,
  integer,
  pgTable,
  real,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// To be used in when we implement logic to update an entity.
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
  },
  (table) => [check("positive_price", sql`${table.price} > 0`)],
);

export type Product = typeof product.$inferSelect;

export const productRelations = relations(product, ({ many }) => ({
  specialOffers: many(specialOffer),
}));

export const specialOffer = pgTable(
  "special_offer",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    quantity: integer("quantity").notNull(),
    price: real("price").notNull(),
    productId: uuid("product_id")
      .notNull()
      .references(() => product.id, { onDelete: "cascade" }),
  },
  (table) => [
    check("positive_price", sql`${table.price} > 0`),
    check("positive_quantity", sql`${table.quantity} > 0`),
    check("limit_quantity", sql`${table.quantity} < 10`),
  ],
);

export const specialOfferRelations = relations(specialOffer, ({ one }) => ({
  product: one(product, {
    fields: [specialOffer.productId],
    references: [product.id],
    relationName: "special_offer_product_fkey",
  }),
}));

export type SpecialOffer = typeof specialOffer.$inferSelect;
