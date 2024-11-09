import { db } from "@/app/_lib/prisma";
import React from "react";
import { DataTable } from "@/app/_components/ui/data-table";
import { transactionsColumns } from "./_columns";
import AddTransactionButton from "@/app/_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transactions.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
