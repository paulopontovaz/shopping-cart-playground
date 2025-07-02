import { useGetAllProducts } from "~/api/products/useGetAllProducts";
import { ProductListItem } from "~/components/home/ProductListItem";
import { Button } from "../_common/components/ui/button";

export const ProductList = () => {
  const { productList } = useGetAllProducts();
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl">Product List</h2>
        <Button className="bg-amber-300 text-black">Buy Now</Button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {productList.map((product) => (
          <ProductListItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
