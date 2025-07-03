import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateProduct } from "~/api/products/useCreateProduct";
import { useUpdateProduct } from "~/api/products/useUpdateProduct";
import { getUpdateProperties } from "~/utils/getUpdatedProps";
import type { Product } from "../../../../../../server/src/db/models/schema";

const productFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" }),
  price: z.coerce.number({ required_error: "Price is required" }).min(0),
  offerQuantity: z.coerce.number().min(0).int().step(1).optional(),
  offerPrice: z.coerce.number().min(0).optional(),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;

type UseProductFormOptions = {
  product: Product | null;
  onAfterSubmit: () => void;
};

export const useProductForm = (options: UseProductFormOptions) => {
  const { product, onAfterSubmit } = options;

  const { updateProduct } = useUpdateProduct();
  const { createProduct } = useCreateProduct();
  const productForm = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: product?.name ?? "",
      ...(product?.price && { price: product?.price }),
      ...(product?.offerQuantity && { offerQuantity: product?.offerQuantity }),
      ...(product?.offerPrice && { offerPrice: product?.offerPrice }),
    },
  });

  const onSubmit = async (values: ProductFormSchema) => {
    if (Object.keys(productForm.formState.errors).length === 0) {
      if (product) {
        const updatedProperties = getUpdateProperties(product, values);
        await updateProduct({
          id: product.id,
          ...updatedProperties,
        });
      } else {
        await createProduct(values);
      }

      onAfterSubmit();
    }
  };

  return {
    productForm,
    onFormSubmit: productForm.handleSubmit(onSubmit),
  };
};
