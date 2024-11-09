import { Badge } from "@/app/_components/ui/badge";
import type { Transactions } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transactions;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === "DEPOSIT") {
    return (
      <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
        <CircleIcon size={10} className="mr-2 fill-primary" />
        Ganho
      </Badge>
    );
  }
  if (transaction.type === "EXPENSE") {
    return (
      <Badge className="bg-danger/10 text-danger hover:bg-danger/10">
        <CircleIcon size={10} className="mr-2 fill-danger" />
        Gasto
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted hover:bg-muted">
      <CircleIcon size={10} className="mr-2 fill-white" />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
