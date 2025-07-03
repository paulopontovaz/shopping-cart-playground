import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { calculateNewTotalPrice } from "~/utils/calculateNewTotalPrice";
import type { Product } from "../../../server/src/db/models/schema";

type CartItem = {
  quantity: number;
  totalPrice: number;
  product: Product;
};

type ShoppingCartState = {
  shoppingCart: Record<string, CartItem>;
};

type ShoppingCartAction = {
  getShoppingCart: () => CartItem[];
  getShoppingCartTotal: () => number;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product, removeAll?: boolean) => void;
};

export const useShoppingCartStore = create<
  ShoppingCartState & ShoppingCartAction
>()(
  devtools((set, get) => ({
    shoppingCart: {},
    getShoppingCart: () => Object.values(get().shoppingCart),
    getShoppingCartTotal: () =>
      Object.values(get().shoppingCart).reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      ),
    addProductToCart: (product) => {
      const currentQuantity = get().shoppingCart[product.id]?.quantity ?? 0;
      const newQuantity = currentQuantity + 1;

      const newTotalPrice = calculateNewTotalPrice(
        product.price,
        newQuantity,
        product.offerPrice,
        product.offerQuantity,
      );

      set((state) => ({
        shoppingCart: {
          ...state.shoppingCart,
          [product.id]: {
            ...(currentQuantity === 0
              ? { product }
              : state.shoppingCart[product.id]),
            quantity: newQuantity,
            totalPrice: newTotalPrice,
          },
        },
      }));
    },

    removeProductFromCart: (product, removeAll = false) => {
      const currentQuantity = get().shoppingCart[product.id]?.quantity || 1;
      const newQuantity = removeAll ? 0 : currentQuantity - 1;

      if (newQuantity !== currentQuantity) {
        const newShoppingCart = { ...get().shoppingCart };

        if (newQuantity === 0) {
          set(() => {
            delete newShoppingCart[product.id];
            return {
              shoppingCart: newShoppingCart,
            };
          });
        } else {
          const newTotalPrice = calculateNewTotalPrice(
            product.price,
            newQuantity,
            product.offerPrice,
            product.offerQuantity,
          );

          set((state) => ({
            shoppingCart: {
              ...state.shoppingCart,
              [product.id]: {
                ...state.shoppingCart[product.id],
                quantity: newQuantity,
                totalPrice: newTotalPrice,
              },
            },
          }));
        }
      }
    },
  })),
);
