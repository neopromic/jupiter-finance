"use client";

import { Button } from "./ui/button";
import { ArrowDownUp } from "lucide-react";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

interface AddTransactionButtonProps {
  transactionId?: string;
}

const AddTransactionButton = ({ transactionId }: AddTransactionButtonProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button className="rounded-full" onClick={() => setDialogOpen(true)}>
        Adicionar transação
        <ArrowDownUp className="h-4 w-4" />
      </Button>
      <UpsertTransactionDialog
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        transactionId={transactionId}
      />
    </>
  );
};

export default AddTransactionButton;
