import { TRANSACTION_PAYMENT_METHOD_ICON_MAP } from "@/app/_constants/transaction";
import { cn } from "@/app/_lib/utils";
import formatCurrency from "@/app/_utils/currency";
import type { Transactions } from "@prisma/client";
import Image from "next/image";

interface TransactionCardProps {
  transaction: Transactions;
}

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const getAmountColor = ({ transaction }: { transaction: Transactions }) => {
    if (transaction.type === "EXPENSE") {
      return "text-danger";
    }
    if (transaction.type === "DEPOSIT") {
      return "text-primary";
    }
    return "text-white";
  };

  const getAmountPrefix = ({ transaction }: { transaction: Transactions }) => {
    if (transaction.type === "EXPENSE") {
      return "-";
    }
    return "+";
  };

  return (
    <div className="flex w-full items-center justify-between gap-4">
      {/* Lado esquerdo - Ícone e informações */}
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-white bg-opacity-[3%] p-2">
          <Image
            src={TRANSACTION_PAYMENT_METHOD_ICON_MAP[transaction.paymentMethod]}
            alt={transaction.paymentMethod}
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col">
          <p className="max-w-[100px] truncate text-sm font-bold">
            {transaction.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {new Date(transaction.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Lado direito - Valor */}
      <p
        className={cn(
          "ml-auto text-sm font-bold",
          getAmountColor({ transaction }),
        )}
      >
        {getAmountPrefix({ transaction })}
        {formatCurrency(Number(transaction.amount))}
      </p>
    </div>
  );
};

export default TransactionCard;
