import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ArrowDownUp } from "lucide-react";
import React from "react";
import { DataTable } from "@/app/_components/ui/data-table";
import { transactionsColumns } from "./_columns";

const TransactionsPage = async () => {
  const transactions = await db.transactions.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Nova transação
          <ArrowDownUp className="h-4 w-4" />
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
