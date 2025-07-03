import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { Product } from "../../../../../../server/src/db/models/schema";

const productFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" }),
  price: z.number({ required_error: "Price is required" }).min(0),
  offerQuantity: z.number().min(0).int().step(1).optional(),
  offerPrice: z.number().min(0).optional(),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;

type UseProductFormOptions = {
  product: Product | null;
};

export const useProductForm = (options: UseProductFormOptions) => {
  const { product } = options;

  const productForm = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: product?.name ?? "",
      price: product?.price ?? undefined,
      offerQuantity: product?.offerQuantity ?? undefined,
      offerPrice: product?.offerPrice ?? undefined,
    },
  });

  const onSubmit = async (values: ProductFormSchema) => {
    console.log("##### values:", values);

    if (product) {
      console.log("##### product:", product);
    } else {
      console.log("##### No product");
    }
  };

  return {
    productForm,
    onFormSubmit: productForm.handleSubmit(onSubmit),
  };
};
