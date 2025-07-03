import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "~/api/apiClient";
import { getAllProductsQueryKey } from "~/api/products/useGetAllProducts";
import type {
  Product,
  ProductUpdate,
} from "../../../../server/src/db/models/schema";

type UpdateProductResponse = {
  product: Product;
};

export const updateProductRequest = async (
  product: ProductUpdate,
): Promise<UpdateProductResponse> =>
  (await apiClient
    .patch(`products/${product.id}`, {
      json: product,
    })
    .json()) as UpdateProductResponse;

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateProduct } = useMutation({
    mutationFn: updateProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getAllProductsQueryKey(),
        refetchType: "active",
      });
    },
  });

  return { updateProduct };
};
