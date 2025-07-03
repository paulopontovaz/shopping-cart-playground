import { Button } from "~/components/_common/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "~/components/_common/ui/dialog";

type ConfirmDialogProps = {
  title: string;
  text: string;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export const ConfirmDialog = (props: ConfirmDialogProps) => {
  const { isOpen, onClose, onConfirm, title, text } = props;

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogOverlay />
      <DialogContent data-testid="confirm-Dialog-content">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription hidden>{title}</DialogDescription>
        </DialogHeader>

        <p>{text}</p>

        <DialogFooter className="flex justify-end gap-3 w-full">
          <Button onClick={onClose} variant="ghost">
            Close
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
