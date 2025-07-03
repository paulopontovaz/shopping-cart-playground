import { PencilIcon } from "lucide-react";
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
};

export const ProductTable = (props: ProductTableProps) => {
  const { onEditClick } = props;
  const { productList } = useGetAllProducts();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="w-[5rem]">Price</TableHead>
          <TableHead>Offer Quantity</TableHead>
          <TableHead>Offer Price with Discount</TableHead>
          <TableHead>Edit</TableHead>
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
              <TableCell>
                <Button onClick={() => onEditClick(product)}>
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
