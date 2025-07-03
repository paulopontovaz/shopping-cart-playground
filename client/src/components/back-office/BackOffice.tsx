import { useState } from "react";
import { ProductTable } from "~/components/back-office/ProductTable";
import { ProductDialog } from "~/components/back-office/product-dialog/ProductDialog";
import type { Product } from "../../../../server/src/db/models/schema";

export const BackOffice = () => {
  const [dialogProduct, setDialogProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEditClick = (product: Product) => {
    setDialogProduct(product);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogProduct(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex justify-around">
        <h2 className="text-2xl">Manage Products</h2>
      </div>

      <ProductTable onEditClick={handleEditClick} />

      <ProductDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        product={dialogProduct}
      />
    </div>
  );
};
