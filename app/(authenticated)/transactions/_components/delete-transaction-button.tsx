import { deleteTransaction } from "@/app/_actions/delete-transactions";
import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";

interface IDeleteTransactionsButtonProps {
  transactionId: string;
}

const DeleteTransactionButton = ({
  transactionId,
}: IDeleteTransactionsButtonProps) => {
  const handleClick = async () => {
    await deleteTransaction({ transactionId });
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <TrashIcon size={16} />
    </Button>
  );
};

export default DeleteTransactionButton;
