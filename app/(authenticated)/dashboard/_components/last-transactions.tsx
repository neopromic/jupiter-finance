import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import Link from "next/link";
import { Transactions } from "@prisma/client";
import TransactionCard from "./transaction-card";

interface LastTransactionsProps {
  lastTransactions: Transactions[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  return (
    <div className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas transações</CardTitle>
        <Link href="/transactions">
          <Button variant="outline" className="rounded-full font-bold">
            Ver mais
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </CardContent>
    </div>
  );
};

export default LastTransactions;
