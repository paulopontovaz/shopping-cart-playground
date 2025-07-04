import { Button } from "~/components/_common/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/_common/ui/form";
import { Input } from "~/components/_common/ui/input";
import type { Product } from "../../../../../../server/src/db/models/schema";
import { useProductForm } from "./useProductForm";

type ProductFormProps = {
  product: Product | null;
  onAfterSubmit: () => void;
};

export const ProductForm = (props: ProductFormProps) => {
  const { product, onAfterSubmit } = props;
  const { onFormSubmit, productForm } = useProductForm({
    product,
    onAfterSubmit,
  });

  return (
    <Form {...productForm}>
      <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
        <FormField
          control={productForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name/Description *</FormLabel>
              <FormControl>
                <Input placeholder="Butter" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={productForm.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Price *</FormLabel>
              <FormControl>
                <Input placeholder="9,99" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={productForm.control}
          name="offerQuantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Offer Quantity</FormLabel>
              <FormControl>
                <Input placeholder="3" step="1" type="number" {...field} />
              </FormControl>
              <FormDescription>
                If the user buys this quantity, they pay [Offer Price] instead
                of [Base Price].
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={productForm.control}
          name="offerPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Offer Price</FormLabel>
              <FormControl>
                <Input placeholder="4,99" type="number" {...field} />
              </FormControl>
              <FormDescription>
                If the user buys [Offer Quantity] of this product, they pay this
                price instead of [Base Price].
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            className="bg-blue-600 hover:bg-blue-800 active:bg-blue-800 focus:bg-blue-800"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
