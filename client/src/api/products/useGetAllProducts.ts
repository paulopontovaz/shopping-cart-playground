import { useQuery } from "@tanstack/react-query";
import { apiClient } from "~/api/apiClient";
import type { Product } from "../../../../server/src/db/models/schema";

export type FetchAllProductsResponse = {
  productList: Product[];
};

export const fetchAllProductsRequest = async () => {
  const response = (await apiClient
    .get("products")
    .json()) as FetchAllProductsResponse;

  return response.productList ?? [];
};

export const getAllProductsQueryKey = () => ["products"];

export const useGetAllProducts = () => {
  const { data } = useQuery({
    queryKey: getAllProductsQueryKey(),
    queryFn: fetchAllProductsRequest,
    retry: 0,
  });

  return { productList: data ?? [] };
};
