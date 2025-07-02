import { TrashIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/_common/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/_common/components/ui/card";
import type { Product } from "../../../../server/src/db/models/schema";

type ProductListItemProps = Product;

export const ProductListItem = (props: ProductListItemProps) => {
  const { name, price } = props;

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((previous) => previous + 1);
  };

  const handleDecrement = () => {
    setQuantity((previous) => previous - 1);
  };

  const handleRemove = () => {
    setQuantity(0);
  };

  return (
    <Card className="w-fit min-w-56">
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-lg">{price}</CardDescription>
        <CardAction>{quantity}</CardAction>
      </CardHeader>
      <CardFooter className="flex justify-end gap-4">
        <Button
          className="justify-self-start"
          onClick={handleRemove}
          variant="outline"
        >
          <TrashIcon />
        </Button>
        <Button className="bg-[#31BFCD]" onClick={handleDecrement}>
          -
        </Button>
        <Button className="bg-[#31BFCD]" onClick={handleIncrement}>
          +
        </Button>
      </CardFooter>
    </Card>
  );
};
