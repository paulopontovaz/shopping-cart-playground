import { useGetAllProducts } from "~/api/products/useGetAllProducts";
import { ProductListItem } from "~/components/home/ProductListItem";

export const ProductList = () => {
  const { productList } = useGetAllProducts();

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center"
      data-testid="product-list"
    >
      <div className="w-full flex justify-around">
        <h2 className="text-2xl">Product List</h2>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {productList.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
