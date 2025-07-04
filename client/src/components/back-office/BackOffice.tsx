import { useState } from "react";
import { useDeleteProduct } from "~/api/products/useDeleteProduct";
import { ConfirmDialog } from "~/components/_common/custom/ConfirmDialog";
import { ProductTable } from "~/components/back-office/ProductTable";
import { ProductDialog } from "~/components/back-office/product-dialog/ProductDialog";
import type { Product } from "../../../../server/src/db/models/schema";
import { Button } from "../_common/ui/button";

export const BackOffice = () => {
  const { deleteProduct } = useDeleteProduct();

  const [dialogProduct, setDialogProduct] = useState<Product | null>(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const handleEditClick = (product: Product) => {
    setDialogProduct(product);
    setIsProductDialogOpen(true);
  };

  const handleProductDialogClose = () => {
    setDialogProduct(null);
    setIsProductDialogOpen(false);
  };

  const handleDeleteClick = (product: Product) => {
    setDialogProduct(product);
    setIsConfirmDialogOpen(true);
  };

  const handleConfirmDialogClose = () => {
    setDialogProduct(null);
    setIsConfirmDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl">Manage Products</h2>
        <Button
          className="bg-amber-500 hover:bg-amber-500/80 text-black hover:text-black/80"
          data-testid="add-new-product-button"
          onClick={() => setIsProductDialogOpen(true)}
        >
          Add New Product
        </Button>
      </div>

      <ProductTable
        onConfirmDeleteClick={handleDeleteClick}
        onEditClick={handleEditClick}
      />

      <ProductDialog
        isOpen={isProductDialogOpen}
        onClose={handleProductDialogClose}
        product={dialogProduct}
      />

      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onClose={handleConfirmDialogClose}
        onConfirm={async () => {
          dialogProduct && (await deleteProduct(dialogProduct?.id));
          handleConfirmDialogClose();
        }}
        text="Are you sure you want to delete this product?"
        title="Delete Product"
      />
    </div>
  );
};
