import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "~/api/apiClient";
import { getAllProductsQueryKey } from "~/api/products/useGetAllProducts";

export const deleteProductRequest = async (
  productId: string,
): Promise<number> =>
  (await apiClient.delete(`products/${productId}`).json()) as number;

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteProduct } = useMutation({
    mutationFn: deleteProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getAllProductsQueryKey(),
        refetchType: "active",
      });
    },
  });

  return { deleteProduct };
};
