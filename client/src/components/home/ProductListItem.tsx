import { TrashIcon } from "lucide-react";
import { Button } from "~/components/_common/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/_common/ui/card";
import { useShoppingCartStore } from "~/store/useShoppingCartStore";
import { getFormattedPrice } from "~/utils/getFormattedPrice";
import type { Product } from "../../../../server/src/db/models/schema";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = (props: ProductListItemProps) => {
  const { product } = props;

  const shoppingCart = useShoppingCartStore((state) => state.shoppingCart);
  const addProductToCart = useShoppingCartStore(
    (state) => state.addProductToCart,
  );
  const removeProductFromCart = useShoppingCartStore(
    (state) => state.removeProductFromCart,
  );

  const handleIncrement = () => {
    addProductToCart(product);
  };

  const handleDecrement = (removeAll: boolean = false) => {
    removeProductFromCart(product, removeAll);
  };

  return (
    <Card className="w-fit min-w-56" data-testid="product-card">
      <CardHeader>
        <CardTitle className="text-2xl" data-testid="product-name">
          {product.name}
        </CardTitle>
        <CardDescription className="text-lg" data-testid="product-price">
          {getFormattedPrice(product.price)}
        </CardDescription>
        <CardAction data-testid="product-quantity">
          ({shoppingCart[product.id]?.quantity ?? 0})
        </CardAction>
      </CardHeader>
      <CardFooter className="flex justify-end gap-4">
        <Button
          className="justify-self-start"
          data-testid="product-clear-button"
          onClick={() => handleDecrement(true)}
          variant="outline"
        >
          <TrashIcon />
        </Button>
        <Button
          className="bg-[#31BFCD]"
          data-testid="product-remove-button"
          onClick={() => handleDecrement()}
        >
          -
        </Button>
        <Button
          className="bg-[#31BFCD]"
          data-testid="product-add-button"
          onClick={handleIncrement}
        >
          +
        </Button>
      </CardFooter>
    </Card>
  );
};
