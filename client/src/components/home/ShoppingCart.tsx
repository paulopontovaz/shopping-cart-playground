import { useShoppingCartStore } from "~/store/useShoppingCartStore";
import { getFormattedPrice } from "~/utils/getFormattedPrice";

export const ShoppingCart = () => {
  const shoppingCart = useShoppingCartStore((state) => state.shoppingCart);
  const getShoppingCart = useShoppingCartStore(
    (state) => state.getShoppingCart,
  );
  const getShoppingCartTotal = useShoppingCartStore(
    (state) => state.getShoppingCartTotal,
  );
  const shoppingCartItems = Object.values(shoppingCart);
  const shoppingCartTotal = getFormattedPrice(getShoppingCartTotal());

  return (
    <div className="p-4 w-full flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex justify-around">
        <h2 className="text-2xl">Shopping Cart ({shoppingCartTotal})</h2>
      </div>
      {shoppingCartItems.length > 0 ? (
        <div className="flex flex-col gap-2 w-2/3">
          {getShoppingCart().map(({ product, quantity, totalPrice }) => (
            <div className="flex justify-between border-b-2" key={product.id}>
              <span>
                {quantity} x {product.name}
              </span>
              <span>{getFormattedPrice(totalPrice)}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500">Empty</div>
      )}
    </div>
  );
};
