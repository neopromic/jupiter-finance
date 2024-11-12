import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Link from "next/link";
import { Transactions } from "@prisma/client";
import TransactionCard from "./transaction-card";
interface LastTransactionsProps {
  lastTransactions: Transactions[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  return (
    <ScrollArea className="max-h-[calc(100vh)] rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas transações</CardTitle>
        <Link href="/transactions">
          <Button variant="outline" className="rounded-full font-bold">
            Ver mais
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="w-full space-y-6">
        {lastTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default LastTransactions;
