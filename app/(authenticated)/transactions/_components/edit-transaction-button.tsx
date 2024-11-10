"use client";

import { Button } from "@/app/_components/ui/button";
import { EditIcon } from "lucide-react";
import { useState } from "react";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import type { Transactions } from "@prisma/client";

interface EditTransactionButtonProps {
  transaction: Transactions;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setDialogOpen(true)}>
        <EditIcon size={16} />
      </Button>
      <UpsertTransactionDialog
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
