import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/_common/ui/dialog";
import { ProductForm } from "~/components/back-office/product-dialog/product-form/ProductForm";
import type { Product } from "../../../../../server/src/db/models/schema";

type ProductDialogProps = {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
};

export const ProductDialog = (props: ProductDialogProps) => {
  const { isOpen, product, onClose } = props;

  const dialogTitle = product
    ? `Edit Product: '${product.name}'`
    : "Add New Product";

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription hidden>{dialogTitle}</DialogDescription>
        </DialogHeader>

        <ProductForm onAfterSubmit={onClose} product={product} />
      </DialogContent>
    </Dialog>
  );
};
