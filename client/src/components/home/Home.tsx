import { ProductList } from "./ProductList";
import { ShoppingCart } from "./ShoppingCart";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <ProductList />
      <ShoppingCart />
    </div>
  );
};
