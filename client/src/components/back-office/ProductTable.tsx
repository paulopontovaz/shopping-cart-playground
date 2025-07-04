import { PencilIcon, TrashIcon } from "lucide-react";
import { useGetAllProducts } from "~/api/products/useGetAllProducts";
import { Button } from "~/components/_common/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/_common/ui/table";
import { getFormattedPrice } from "~/utils/getFormattedPrice";
import type { Product } from "../../../../server/src/db/models/schema";

type ProductTableProps = {
  onEditClick: (product: Product) => void;
  onConfirmDeleteClick: (product: Product) => void;
};

export const ProductTable = (props: ProductTableProps) => {
  const { onEditClick, onConfirmDeleteClick } = props;

  const { productList } = useGetAllProducts();

  return (
    <Table data-testid="product-table">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="w-[5rem]">Price</TableHead>
          <TableHead>Offer Quantity</TableHead>
          <TableHead>Offer Price with Discount</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productList.map((product) => {
          const { id, name, price, offerPrice, offerQuantity } = product;

          return (
            <TableRow key={id}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{getFormattedPrice(price)}</TableCell>
              <TableCell>{offerQuantity ?? "-"}</TableCell>
              <TableCell>{getFormattedPrice(offerPrice)}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  className="text-red-500 hover:bg-red-100 hover:text-red-500"
                  data-testid="delete-product-button"
                  onClick={() => onConfirmDeleteClick(product)}
                  variant="outline"
                >
                  <TrashIcon />
                </Button>
                <Button
                  className=" text-green-500 hover:bg-green-100 hover:text-green-500"
                  data-testid="edit-product-button"
                  onClick={() => onEditClick(product)}
                  variant="outline"
                >
                  <PencilIcon />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
