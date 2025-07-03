import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "~/api/apiClient";
import { getAllProductsQueryKey } from "~/api/products/useGetAllProducts";
import type {
  Product,
  ProductInsert,
} from "../../../../server/src/db/models/schema";

type CreateProductResponse = { product: Product };

export const createProductRequest = async (
  product: ProductInsert,
): Promise<CreateProductResponse> =>
  (await apiClient
    .post("products", { json: product })
    .json()) as CreateProductResponse;

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createProduct } = useMutation({
    mutationFn: createProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getAllProductsQueryKey(),
        refetchType: "active",
      });
    },
  });

  return { createProduct };
};
